import { quizzes, getAllQuizIds } from '@/data';
import { notFound } from 'next/navigation';
import QuizClient from './QuizClient';

export function generateStaticParams() {
  return getAllQuizIds();
}

interface QuizPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const resolvedParams = await params;
  const quizId = resolvedParams.id;
  
  // Find the quiz in the top-level quizzes array
  let foundQuiz = quizzes.find(q => q.id === quizId);
  let foundParent = null;
  
  // If not found, search in the children arrays of parent quizzes
  if (!foundQuiz) {
    for (const parentQuizItem of quizzes) {
      if (parentQuizItem.children) {
        foundQuiz = parentQuizItem.children.find(child => child.id === quizId);
        if (foundQuiz) {
          foundParent = parentQuizItem;
          break;
        }
      }
    }
  }
  
  if (!foundQuiz) {
    notFound();
  }

  return <QuizClient quiz={foundQuiz} parentQuiz={foundParent} />;
}