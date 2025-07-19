import { quizzes, getAllChapterIds } from '@/data';
import { notFound } from 'next/navigation';
import ChapterClient from './ChapterClient';

export function generateStaticParams() {
  return getAllChapterIds();
}

interface ChapterPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const resolvedParams = await params;
  const parentChapter = quizzes.find(quiz => quiz.id === resolvedParams.id && quiz.isParent);
  
  if (!parentChapter || !parentChapter.children) {
    notFound();
  }

  return <ChapterClient parentChapter={parentChapter} />;
}