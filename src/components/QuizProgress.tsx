interface QuizProgressProps {
  correct: number;
  total: number;
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuizProgress({ correct, total, currentQuestion, totalQuestions }: QuizProgressProps) {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Progress</h3>
          <p className="text-sm text-gray-600">
            Question {currentQuestion} - {correct} correct out of {total} answered
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-600">{percentage}%</div>
          <div className="text-xs text-gray-500">Score</div>
        </div>
      </div>
      
      <div className="mt-3">
        <div className="flex space-x-1">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded ${
                i < total
                  ? i < correct
                    ? 'bg-green-400'
                    : 'bg-red-300'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}