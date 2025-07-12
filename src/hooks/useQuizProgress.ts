import { useState, useEffect } from 'react';

export interface QuizScore {
  correct: number;
  total: number;
  percentage: number;
  completed: boolean;
}

export interface ProgressStats {
  completedQuizzes: string[];
  quizScores: Record<string, QuizScore>;
}

export const useQuizProgress = () => {
  const [progressData, setProgressData] = useState<ProgressStats>({
    completedQuizzes: [],
    quizScores: {}
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes') || '[]');
      const quizScores = JSON.parse(localStorage.getItem('quizScores') || '{}');
      setProgressData({ completedQuizzes, quizScores });
    } catch (error) {
      console.warn('Failed to load quiz progress from localStorage:', error);
    }
  }, []);

  const saveQuizScore = (quizId: string, correct: number, total: number) => {
    const percentage = Math.round((correct / total) * 100);
    const completed = percentage === 100;
    
    const newScore: QuizScore = { correct, total, percentage, completed };
    
    try {
      // Update quiz scores
      const updatedScores = { ...progressData.quizScores, [quizId]: newScore };
      localStorage.setItem('quizScores', JSON.stringify(updatedScores));
      
      // Update completed quizzes list if 100%
      let updatedCompleted = [...progressData.completedQuizzes];
      if (completed && !updatedCompleted.includes(quizId)) {
        updatedCompleted.push(quizId);
        localStorage.setItem('completedQuizzes', JSON.stringify(updatedCompleted));
      }
      
      setProgressData({
        completedQuizzes: updatedCompleted,
        quizScores: updatedScores
      });
      
      return newScore;
    } catch (error) {
      console.warn('Failed to save quiz progress to localStorage:', error);
      return newScore;
    }
  };

  const getQuizScore = (quizId: string): QuizScore | null => {
    return progressData.quizScores[quizId] || null;
  };

  const isQuizCompleted = (quizId: string): boolean => {
    return progressData.completedQuizzes.includes(quizId);
  };

  const getChapterProgress = (childQuizIds: string[]): { completed: number; total: number; percentage: number } => {
    const total = childQuizIds.length;
    const completed = childQuizIds.filter(id => isQuizCompleted(id)).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    return { completed, total, percentage };
  };

  return {
    progressData,
    saveQuizScore,
    getQuizScore,
    isQuizCompleted,
    getChapterProgress
  };
};