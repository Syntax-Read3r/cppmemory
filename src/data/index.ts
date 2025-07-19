// Export types
export * from './types';

// Import all chapter quizzes
import { chapter1Quiz } from './chapter-1-quiz';
import { chapter2Quiz } from './chapter-2-quiz';
import { chapter3Quiz } from './chapter-3-quiz';
import { chapter4Quiz } from './chapter-4-quiz';
import { chapter5Quiz } from './chapter-5-quiz';
import { chapter6Quiz } from './chapter-6-quiz';
import { chapter7Quiz } from './chapter-7-quiz';
import { chapter8Quiz } from './chapter-8-quiz';
import { chapter9Quiz } from './chapter-9-quiz';
import { chapter10Quiz } from './chapter-10-quiz';
import { chapter11Quiz } from './chapter-11-quiz';
import { chapter12Quiz } from './chapter-12-quiz';
import { chapter13Quiz } from './chapter-13-quiz';
import { chapter14Quiz } from './chapter-14-quiz';
import { chapter15Quiz } from './chapter-15-quiz';
import { chapter16Quiz } from './chapter-16-quiz';
import { chapter17Quiz } from './chapter-17-quiz';
import { chapter18Quiz } from './chapter-18-quiz';
import { chapter19Quiz } from './chapter-19-quiz';
import { chapter20Quiz } from './chapter-20-quiz';
import { chapter21Quiz } from './chapter-21-quiz';
import { chapter22Quiz } from './chapter-22-quiz';
import { chapter23Quiz } from './chapter-23-quiz';
import { chapter24Quiz } from './chapter-24-quiz';
import { chapter25Quiz } from './chapter-25-quiz';
import { chapter26Quiz } from './chapter-26-quiz';
import { chapter27Quiz } from './chapter-27-quiz';
import { chapter28Quiz } from './chapter-28-quiz';

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