'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Quiz, Question } from '@/data';
import QuizCard from '@/components/QuizCard';
import QuizProgress from '@/components/QuizProgress';
import { useQuizProgress } from '@/hooks/useQuizProgress';

interface QuizClientProps {
  quiz: Quiz;
  parentQuiz: Quiz | null;
}

export default function QuizClient({ quiz, parentQuiz }: QuizClientProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const { saveQuizScore } = useQuizProgress();

  // Fisher-Yates shuffle algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (quiz) {
      // Shuffle questions when quiz is loaded
      setShuffledQuestions(shuffleArray(quiz.questions));
    }
  }, [quiz]);

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }
    
    setAnsweredQuestions(prev => prev + 1);
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz completed
      const finalCorrect = correctAnswers;
      const totalQuestions = shuffledQuestions.length;
      
      // Save the quiz score and completion status
      saveQuizScore(quiz.id, finalCorrect, totalQuestions);
      
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setAnsweredQuestions(0);
    setIsCompleted(false);
    // Reshuffle questions when quiz is reset
    setShuffledQuestions(shuffleArray(quiz.questions));
  };

  const getBackUrl = () => {
    return parentQuiz ? `/chapter/${parentQuiz.id}` : '/';
  };

  const getBackText = () => {
    return parentQuiz ? `← Back to ${parentQuiz.title}` : '← Back to Home';
  };

  if (isCompleted) {
    const finalScore = Math.round((correctAnswers / shuffledQuestions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="px-4 py-8 mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Link href={getBackUrl()} className="inline-flex items-center text-purple-600 hover:underline mb-4">
              {getBackText()}
            </Link>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              {finalScore >= 80 ? (
                <div className="text-6xl mb-4">🎉</div>
              ) : finalScore >= 60 ? (
                <div className="text-6xl mb-4">👍</div>
              ) : (
                <div className="text-6xl mb-4">📚</div>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Quiz Completed!
            </h1>
            
            <h2 className="text-xl text-gray-700 mb-6">
              {quiz.title}
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {finalScore}%
              </div>
              <div className="text-gray-600 mb-3">
                {correctAnswers} out of {shuffledQuestions.length} correct
              </div>
              {finalScore === 100 && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  ✅ Section Completed!
                </div>
              )}
            </div>

            <div className="mb-6">
              {finalScore >= 80 && (
                <p className="text-green-600 font-medium">Excellent work! You&apos;ve mastered this topic.</p>
              )}
              {finalScore >= 60 && finalScore < 80 && (
                <p className="text-yellow-600 font-medium">Good job! Consider reviewing the concepts you missed.</p>
              )}
              {finalScore < 60 && (
                <p className="text-red-600 font-medium">Keep studying! Review the LearnCpp.com sections for this topic.</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Retake Quiz
              </button>
              <Link
                href={getBackUrl()}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                {parentQuiz ? `Back to ${parentQuiz.title}` : 'Back to Home'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="px-4 py-8 mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Link href={getBackUrl()} className="inline-flex items-center text-purple-600 hover:underline mb-4">
            {getBackText()}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {quiz.title}
          </h1>
          <p className="text-gray-600">{quiz.description}</p>
        </div>

        <QuizProgress 
          correct={correctAnswers}
          total={answeredQuestions}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={shuffledQuestions.length}
        />

        {shuffledQuestions.length > 0 && (
          <QuizCard
            question={shuffledQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={shuffledQuestions.length}
            isLastQuestion={currentQuestionIndex === shuffledQuestions.length - 1}
          />
        )}
      </div>
    </div>
  );
}