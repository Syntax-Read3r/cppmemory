'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { quizzes, Quiz, Question } from '@/data/quizzes';
import QuizCard from '@/components/QuizCard';
import QuizProgress from '@/components/QuizProgress';
import { useQuizProgress } from '@/hooks/useQuizProgress';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [parentQuiz, setParentQuiz] = useState<Quiz | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const { saveQuizScore, getQuizScore, isQuizCompleted } = useQuizProgress();

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
    // First, try to find the quiz in the top-level quizzes array
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
    
    if (foundQuiz) {
      setQuiz(foundQuiz);
      setParentQuiz(foundParent);
      // Shuffle questions when quiz is loaded
      setShuffledQuestions(shuffleArray(foundQuiz.questions));
    } else {
      router.push('/');
    }
  }, [quizId, router]);

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
      saveQuizScore(quizId, finalCorrect, totalQuestions);
      
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setAnsweredQuestions(0);
    setIsCompleted(false);
    // Reshuffle questions when quiz is reset
    if (quiz) {
      setShuffledQuestions(shuffleArray(quiz.questions));
    }
  };

  const getBackUrl = () => {
    return parentQuiz ? `/chapter/${parentQuiz.id}` : '/';
  };

  const getBackText = () => {
    return parentQuiz ? `← Back to ${parentQuiz.title}` : '← Back to Home';
  };

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Quiz not found</h1>
          <Link href={getBackUrl()} className="text-purple-600 hover:underline">
            {getBackText()}
          </Link>
        </div>
      </div>
    );
  }

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
                <p className="text-green-600 font-medium">Excellent work! You've mastered this topic.</p>
              )}
              {finalScore >= 60 && finalScore < 80 && (
                <p className="text-yellow-600 font-medium">Good job! Consider reviewing the concepts you missed.</p>
              )}
              {finalScore < 60 && (
                <p className="text-red-600 font-medium">Keep studying! Review the LearnCpp.com sections for this topic.</p>
              )}
            </div>

            {/* Study recommendations for Chapter 1 Part 1 when score < 50% */}
            {finalScore < 50 && quiz.id === 'chapter-1-part-1' && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">📖 Recommended Study Materials</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Since you scored below 50%, we recommend reviewing these LearnCpp.com sections before retaking the quiz:
                </p>
                <div className="space-y-2">
                  <a
                    href="https://www.learncpp.com/cpp-tutorial/statements-and-the-structure-of-a-program/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium mr-2">1.1</span>
                      <span className="text-gray-800">Statements and the structure of a program</span>
                      <span className="ml-auto text-blue-500">↗</span>
                    </div>
                  </a>
                  <a
                    href="https://www.learncpp.com/cpp-tutorial/comments/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium mr-2">1.2</span>
                      <span className="text-gray-800">Comments</span>
                      <span className="ml-auto text-blue-500">↗</span>
                    </div>
                  </a>
                  <a
                    href="https://www.learncpp.com/cpp-tutorial/introduction-to-objects-and-variables/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium mr-2">1.3</span>
                      <span className="text-gray-800">Introduction to objects and variables</span>
                      <span className="ml-auto text-blue-500">↗</span>
                    </div>
                  </a>
                </div>
                <p className="text-blue-700 text-xs mt-3">
                  💡 These links will open in a new tab so you can study and come back to retake the quiz.
                </p>
              </div>
            )}

            {/* Study recommendations for Chapter 1 Part 2 when score < 50% */}
            {finalScore < 50 && quiz.id === 'chapter-1-part-2' && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">📖 Recommended Study Materials</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Since you scored below 50%, we recommend reviewing these LearnCpp.com sections before retaking the quiz:
                </p>
                <div className="space-y-2">
                  <a
                    href="https://www.learncpp.com/cpp-tutorial/variable-assignment-and-initialization/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium mr-2">1.4</span>
                      <span className="text-gray-800">Variable assignment and initialization</span>
                      <span className="ml-auto text-blue-500">↗</span>
                    </div>
                  </a>
                  <a
                    href="https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium mr-2">1.5</span>
                      <span className="text-gray-800">Introduction to iostream: cout, cin, and endl</span>
                      <span className="ml-auto text-blue-500">↗</span>
                    </div>
                  </a>
                  <a
                    href="https://www.learncpp.com/cpp-tutorial/uninitialized-variables-and-undefined-behavior/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium mr-2">1.6</span>
                      <span className="text-gray-800">Uninitialized variables and undefined behavior</span>
                      <span className="ml-auto text-blue-500">↗</span>
                    </div>
                  </a>
                </div>
                <p className="text-blue-700 text-xs mt-3">
                  💡 These links will open in a new tab so you can study and come back to retake the quiz.
                </p>
              </div>
            )}

            {/* Study recommendations for Chapter 1 Part 3 when score < 50% */}
            {finalScore < 50 && quiz.id === 'chapter-1-part-3' && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">📖 Recommended Study Materials</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Since you scored below 50%, we recommend reviewing these LearnCpp.com sections before retaking the quiz:
                </p>
                <div className="space-y-2">
                  <a
                    href="https://www.learncpp.com/cpp-tutorial/keywords-and-naming-identifiers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium mr-2">1.7</span>
                      <span className="text-gray-800">Keywords and naming identifiers</span>
                      <span className="ml-auto text-blue-500">↗</span>
                    </div>
                  </a>
                  <a
                    href="https://www.learncpp.com/cpp-tutorial/whitespace-and-basic-formatting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium mr-2">1.8</span>
                      <span className="text-gray-800">Whitespace and basic formatting</span>
                      <span className="ml-auto text-blue-500">↗</span>
                    </div>
                  </a>
                  <a
                    href="https://www.learncpp.com/cpp-tutorial/introduction-to-literals-and-operators/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 font-medium mr-2">1.9</span>
                      <span className="text-gray-800">Introduction to literals and operators</span>
                      <span className="ml-auto text-blue-500">↗</span>
                    </div>
                  </a>
                </div>
                <p className="text-blue-700 text-xs mt-3">
                  💡 These links will open in a new tab so you can study and come back to retake the quiz.
                </p>
              </div>
            )}

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