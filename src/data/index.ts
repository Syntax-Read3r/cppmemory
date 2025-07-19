// Export types
export * from './types';

// Import all chapter quizzes
import { chapter1Quiz } from './chapter-1-quiz';
import { 
  chapter2Quiz, chapter3Quiz, chapter4Quiz, chapter5Quiz, chapter6Quiz,
  chapter7Quiz, chapter8Quiz, chapter9Quiz, chapter10Quiz, chapter11Quiz,
  chapter12Quiz, chapter13Quiz, chapter14Quiz, chapter15Quiz, chapter16Quiz,
  chapter17Quiz, chapter18Quiz, chapter19Quiz, chapter20Quiz, chapter21Quiz,
  chapter22Quiz, chapter23Quiz, chapter24Quiz, chapter25Quiz, chapter26Quiz,
  chapter27Quiz, chapter28Quiz
} from './placeholder-chapters';

// Consolidated quizzes array - all 28 chapters
export const quizzes = [
  chapter1Quiz,
  chapter2Quiz, chapter3Quiz, chapter4Quiz, chapter5Quiz, chapter6Quiz,
  chapter7Quiz, chapter8Quiz, chapter9Quiz, chapter10Quiz, chapter11Quiz,
  chapter12Quiz, chapter13Quiz, chapter14Quiz, chapter15Quiz, chapter16Quiz,
  chapter17Quiz, chapter18Quiz, chapter19Quiz, chapter20Quiz, chapter21Quiz,
  chapter22Quiz, chapter23Quiz, chapter24Quiz, chapter25Quiz, chapter26Quiz,
  chapter27Quiz, chapter28Quiz
];

// Helper function to get all quiz IDs for static generation
export function getAllQuizIds() {
  const allQuizIds: { id: string }[] = [];
  
  quizzes.forEach(quiz => {
    if (quiz.children) {
      quiz.children.forEach(child => {
        allQuizIds.push({ id: child.id });
      });
    } else {
      allQuizIds.push({ id: quiz.id });
    }
  });
  
  return allQuizIds;
}

// Helper function to get all chapter IDs for static generation
export function getAllChapterIds() {
  return quizzes
    .filter(quiz => quiz.isParent)
    .map(quiz => ({ id: quiz.id }));
}