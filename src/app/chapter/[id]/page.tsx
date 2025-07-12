'use client';

import Link from 'next/link';
import { quizzes } from '@/data/quizzes';
import { notFound } from 'next/navigation';
import { useQuizProgress } from '@/hooks/useQuizProgress';

interface ChapterPageProps {
  params: {
    id: string;
  };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  // Find the parent chapter by ID
  const parentChapter = quizzes.find(quiz => quiz.id === params.id && quiz.isParent);
  
  if (!parentChapter || !parentChapter.children) {
    notFound();
  }

  const { isQuizCompleted, getChapterProgress, getQuizScore, resetChapterProgress } = useQuizProgress();
  
  // Calculate chapter progress
  const childQuizIds = parentChapter.children.map(child => child.id);
  const chapterProgress = getChapterProgress(childQuizIds);

  const handleResetChapter = () => {
    if (confirm(`Are you sure you want to reset all progress for ${parentChapter.title}? This will clear all completed quizzes and scores for this chapter.`)) {
      const success = resetChapterProgress(childQuizIds);
      if (success) {
        alert('Chapter progress has been reset successfully!');
      } else {
        alert('Failed to reset chapter progress. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        {/* Back navigation */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
          >
            ← Back to All Chapters
          </Link>
        </div>

        {/* Chapter header */}
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {parentChapter.title}
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            {parentChapter.description}
          </p>
        </header>

        {/* Chapter sections */}
        <section className="mb-16">
          <h2 className="flex items-center mb-6 text-2xl font-semibold text-gray-800">
            📝 Quiz Sections
            <span className="px-2 py-1 ml-3 text-sm text-blue-800 bg-blue-100 rounded-full">
              Choose a section to start
            </span>
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {parentChapter.children.map((childQuiz, index) => {
              const isCompleted = isQuizCompleted(childQuiz.id);
              const quizScore = getQuizScore(childQuiz.id);
              const hasAttempted = quizScore && !isCompleted;
              
              let borderStyle = 'border-gray-200';
              let bgStyle = 'bg-white';
              
              if (isCompleted) {
                borderStyle = 'border-green-200';
                bgStyle = 'bg-green-50';
              } else if (hasAttempted) {
                borderStyle = 'border-orange-200';
                bgStyle = 'bg-orange-50';
              }
              
              return (
                <Link
                  key={childQuiz.id}
                  href={`/quiz/${childQuiz.id}`}
                  className={`block p-6 transition-shadow duration-200 border-2 rounded-lg shadow-md hover:shadow-lg ${borderStyle} ${bgStyle}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {childQuiz.title}
                    </h3>
                    <div className="flex flex-col items-end gap-1">
                      <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                        {childQuiz.questions.length} questions
                      </span>
                      {quizScore && !isCompleted && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full text-yellow-800 bg-yellow-100">
                          {quizScore.percentage}%
                        </span>
                      )}
                    </div>
                  </div>
                
                <p className="mb-4 text-sm text-gray-600">{childQuiz.description}</p>
                
                <div className="mb-3">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    Covers sections:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {childQuiz.sections.map((section, sectionIndex) => (
                      <span key={sectionIndex} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                        {section}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm font-medium text-green-600">
                    Start Quiz →
                  </div>
                  <div className="text-xs text-gray-500">
                    Part {index + 1} of {parentChapter.children.length}
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </section>

        {/* Progress overview */}
        <section className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Chapter Progress</h3>
            {chapterProgress.completed > 0 && (
              <button
                onClick={handleResetChapter}
                className="mt-2 sm:mt-0 px-4 py-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 transition-colors"
              >
                🔄 Reset Chapter Progress
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{parentChapter.children.length}</div>
              <div className="text-sm text-gray-600">Total Sections</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {parentChapter.children.reduce((total, child) => total + child.questions.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{chapterProgress.percentage}%</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-sm text-center text-gray-500">
          <p>Quiz content based on <a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">LearnCpp.com</a></p>
        </footer>
      </div>
    </div>
  );
}