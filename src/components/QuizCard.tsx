'use client';

import { useState, useEffect } from 'react';
import { Question } from '@/data/quizzes';

interface QuizCardProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
  currentQuestion: number;
  totalQuestions: number;
  isLastQuestion: boolean;
}

export default function QuizCard({ question, onAnswer, onNext, currentQuestion, totalQuestions, isLastQuestion }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<{text: string, isCorrect: boolean}[]>([]);
  const [isVisible, setIsVisible] = useState(true); // Start visible to ensure quiz shows up
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [previousQuestionId, setPreviousQuestionId] = useState<number | null>(null);

  // Initialize question data on mount and handle question changes
  useEffect(() => {
    const setupQuestion = () => {
      // Reset state
      setSelectedAnswer(null);
      setShowExplanation(false);
      
      // Create options with correct answer tracking
      const optionsWithCorrectFlag = question.options.map((option, index) => ({
        text: option,
        isCorrect: index === question.correctAnswer
      }));
      
      // Shuffle the options
      const shuffled = [...optionsWithCorrectFlag].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    };

    // First load - just setup, no animation needed since we start visible
    if (isInitialLoad) {
      setupQuestion();
      setPreviousQuestionId(question.id);
      setIsInitialLoad(false);
      return;
    }
    
    // Only animate if the question actually changed
    if (previousQuestionId !== question.id) {
      // Fade out current question
      setIsFadingOut(true);
      setIsVisible(false);
      
      const timer = setTimeout(() => {
        // Setup new question
        setupQuestion();
        setPreviousQuestionId(question.id);
        
        // Fade in new question
        setIsFadingOut(false);
        setIsVisible(true);
      }, 800); // 800ms fade out duration
      
      return () => clearTimeout(timer);
    }
  }, [question.id, question.options, question.correctAnswer, isInitialLoad, previousQuestionId]);

  const renderSyntaxHighlightedCode = (code: string) => {
    if (!code) return null;

    // Split code into lines to preserve formatting
    const lines = code.split('\n');
    let insideMultilineComment = false;
    
    return lines.map((line, lineIndex) => {
      // Tokenize the line with multiline comment state
      const result = tokenizeLine(line, insideMultilineComment);
      const tokens = result.tokens;
      insideMultilineComment = result.insideMultilineComment;
      
      return (
        <div key={lineIndex} className="text-white">
          {tokens.map((token, tokenIndex) => (
            <span key={tokenIndex} className={getTokenColor(token.type)}>
              {token.value}
            </span>
          ))}
        </div>
      );
    });
  };

  const tokenizeLine = (line: string, startInComment: boolean = false) => {
    const tokens: Array<{type: string, value: string}> = [];
    let i = 0;
    let insideMultilineComment = startInComment;
    
    // If we start inside a comment, treat the entire line as comment until we find */
    if (insideMultilineComment) {
      let comment = '';
      while (i < line.length) {
        comment += line[i];
        if (line[i] === '*' && i + 1 < line.length && line[i + 1] === '/') {
          comment += '/';
          i += 2;
          insideMultilineComment = false;
          tokens.push({type: 'comment', value: comment});
          break;
        }
        i++;
      }
      
      // If we didn't find the end, the whole line is a comment
      if (insideMultilineComment) {
        tokens.push({type: 'comment', value: comment});
        return { tokens, insideMultilineComment };
      }
    }
    
    while (i < line.length) {
      const char = line[i];
      
      // Skip whitespace (preserve it)
      if (/\s/.test(char)) {
        let whitespace = '';
        while (i < line.length && /\s/.test(line[i])) {
          whitespace += line[i];
          i++;
        }
        tokens.push({type: 'whitespace', value: whitespace});
        continue;
      }
      
      // Comments
      if (char === '/' && i + 1 < line.length) {
        if (line[i + 1] === '/') {
          tokens.push({type: 'comment', value: line.slice(i)});
          break;
        }
        if (line[i + 1] === '*') {
          let comment = '/*';
          i += 2;
          while (i < line.length - 1) {
            comment += line[i];
            if (line[i] === '*' && line[i + 1] === '/') {
              comment += '/';
              i += 2;
              tokens.push({type: 'comment', value: comment});
              break;
            }
            i++;
          }
          
          // If we didn't find the closing */, this comment continues to next line
          if (i >= line.length - 1 && !comment.endsWith('*/')) {
            comment += line[line.length - 1]; // Add the last character
            insideMultilineComment = true;
            tokens.push({type: 'comment', value: comment});
            break;
          }
          continue;
        }
      }
      
      // String literals
      if (char === '"') {
        let string = '"';
        i++;
        while (i < line.length && line[i] !== '"') {
          if (line[i] === '\\') {
            string += line[i] + (line[i + 1] || '');
            i += 2;
          } else {
            string += line[i];
            i++;
          }
        }
        if (i < line.length) {
          string += '"';
          i++;
        }
        tokens.push({type: 'string', value: string});
        continue;
      }
      
      // Character literals
      if (char === "'") {
        let charLit = "'";
        i++;
        while (i < line.length && line[i] !== "'") {
          charLit += line[i];
          i++;
        }
        if (i < line.length) {
          charLit += "'";
          i++;
        }
        tokens.push({type: 'string', value: charLit});
        continue;
      }
      
      // Numbers
      if (/\d/.test(char)) {
        let number = '';
        while (i < line.length && /[\d.]/.test(line[i])) {
          number += line[i];
          i++;
        }
        tokens.push({type: 'number', value: number});
        continue;
      }
      
      // Identifiers and keywords
      if (/[a-zA-Z_]/.test(char)) {
        let identifier = '';
        while (i < line.length && /[a-zA-Z0-9_]/.test(line[i])) {
          identifier += line[i];
          i++;
        }
        
        const keywords = ['#include', 'int', 'void', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'const', 'static', 'class', 'public', 'private', 'protected', 'namespace', 'using', 'std', 'char', 'float', 'double', 'bool', 'true', 'false', 'nullptr', 'new', 'delete', 'sizeof', 'main', 'cout', 'cin', 'endl'];
        
        if (keywords.includes(identifier)) {
          tokens.push({type: 'keyword', value: identifier});
        } else {
          tokens.push({type: 'identifier', value: identifier});
        }
        continue;
      }
      
      // Preprocessor
      if (char === '#') {
        let preprocessor = '#';
        i++;
        while (i < line.length && /[a-zA-Z_]/.test(line[i])) {
          preprocessor += line[i];
          i++;
        }
        tokens.push({type: 'preprocessor', value: preprocessor});
        continue;
      }
      
      // Operators and punctuation
      if (/[+\-*/%=<>!&|^~(){}[\];,.]/.test(char)) {
        if (char === ':' && i + 1 < line.length && line[i + 1] === ':') {
          tokens.push({type: 'operator', value: '::'});
          i += 2;
        } else if (char === '<' && i + 1 < line.length && line[i + 1] === '<') {
          tokens.push({type: 'operator', value: '<<'});
          i += 2;
        } else {
          tokens.push({type: 'operator', value: char});
          i++;
        }
        continue;
      }
      
      // Default: treat as text
      tokens.push({type: 'text', value: char});
      i++;
    }
    
    return { tokens, insideMultilineComment };
  };

  const getTokenColor = (type: string) => {
    switch (type) {
      case 'comment': return 'text-green-400';
      case 'keyword': return 'text-blue-400';
      case 'string': return 'text-yellow-300';
      case 'number': return 'text-orange-400';
      case 'identifier': return 'text-purple-400';
      case 'operator': return 'text-cyan-400';
      case 'preprocessor': return 'text-pink-400';
      case 'whitespace': return 'text-white';
      default: return 'text-white';
    }
  };

  const handleOptionClick = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    
    const isCorrect = shuffledOptions[optionIndex]?.isCorrect || false;
    onAnswer(isCorrect);
  };

  const getOptionClassName = (index: number) => {
    if (selectedAnswer === null) {
      return "p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-colors";
    }
    
    // Check if this option is the correct one
    if (shuffledOptions[index]?.isCorrect) {
      return "p-4 border-2 border-green-500 bg-green-50 rounded-lg cursor-not-allowed";
    }
    
    // Check if this was the selected wrong answer
    if (index === selectedAnswer && !shuffledOptions[index]?.isCorrect) {
      return "p-4 border-2 border-red-500 bg-red-50 rounded-lg cursor-not-allowed";
    }
    
    return "p-4 border-2 border-gray-200 bg-gray-50 rounded-lg cursor-not-allowed opacity-50";
  };

  return (
    <div className={`max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 transition-opacity ${
      isFadingOut ? 'duration-[800ms]' : 'duration-[1100ms]'
    } ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-purple-600">
            Question {currentQuestion} of {totalQuestions}
          </span>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        {question.question}
      </h2>

      {question.codeSnippet && (
        <div className="mb-6 border border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-gray-800 px-4 py-2 text-white text-sm font-medium flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            C++ Code Example
          </div>
          <div className="bg-gray-900 p-4">
            <pre className="text-sm overflow-x-auto leading-relaxed">
              <code className="font-mono">{renderSyntaxHighlightedCode(question.codeSnippet)}</code>
            </pre>
          </div>
        </div>
      )}

      <div className="space-y-3 mb-6">
        {shuffledOptions.map((option, index) => (
          <div
            key={index}
            className={getOptionClassName(index)}
            onClick={() => handleOptionClick(index)}
          >
            <div className="flex items-center">
              <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 text-sm font-medium">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-800">{option.text}</span>
            </div>
          </div>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <h3 className="font-medium text-blue-900 mb-2">Explanation:</h3>
          <p className="text-blue-800 text-sm">{question.explanation}</p>
        </div>
      )}

      {selectedAnswer !== null && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={onNext}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}