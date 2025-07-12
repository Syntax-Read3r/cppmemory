import Link from 'next/link';
import { quizzes } from '@/data/quizzes';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            🧠 CppMemory
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Master C++ fundamentals with interactive quiz cards based on LearnCpp.com content. 
            Test your knowledge with grouped sections and multiple choice questions.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="flex items-center mb-6 text-2xl font-semibold text-gray-800">
            📚 C++ Learning Quizzes
            <span className="px-2 py-1 ml-3 text-sm text-purple-800 bg-purple-100 rounded-full">
              Based on LearnCpp.com
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz) => (
              <Link
                key={quiz.id}
                href={quiz.isParent ? `/chapter/${quiz.id}` : `/quiz/${quiz.id}`}
                className="block p-6 transition-shadow duration-200 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {quiz.title}
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                    {quiz.isParent ? `${quiz.children?.length || 0} parts` : `${quiz.questions.length} questions`}
                  </span>
                </div>
                <p className="mb-4 text-sm text-gray-600">{quiz.description}</p>
                <div className="mb-3">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    Covers sections:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {quiz.sections.slice(0, 2).map((section, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                        {section}
                      </span>
                    ))}
                    {quiz.sections.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                        +{quiz.sections.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center text-sm font-medium text-purple-600">
                  {quiz.isParent ? 'Explore Chapter →' : 'Start Quiz →'}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-sm text-center text-gray-500">
          <p>Quiz content based on <a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">LearnCpp.com</a></p>
          <p className="mt-1">Built with Next.js 15 + React 19 + TypeScript + Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}