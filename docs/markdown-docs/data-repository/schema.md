# Data Schema Reference

Complete TypeScript interface documentation for the CppMemory quiz data structure.

## 📋 Core Interfaces

### Question Interface

The `Question` interface defines the structure for individual quiz questions.

```typescript
export interface Question {
  id: number;              // Unique identifier within the quiz
  question: string;        // The question text
  options: string[];       // Array of 4 multiple choice options
  correctAnswer: number;   // Index of correct option (0-3)
  explanation: string;     // Detailed explanation of the answer
  codeSnippet?: string;    // Optional code example
  codeLanguage?: string;   // Language for syntax highlighting
}
```

#### Field Specifications

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `number` | ✅ | Sequential unique ID within quiz (1, 2, 3...) |
| `question` | `string` | ✅ | Question text, should end with '?' |
| `options` | `string[]` | ✅ | Exactly 4 options, no HTML allowed |
| `correctAnswer` | `number` | ✅ | Index 0-3 pointing to correct option |
| `explanation` | `string` | ✅ | Educational explanation, can be multiple sentences |
| `codeSnippet` | `string` | ❌ | Code example using template literals |
| `codeLanguage` | `string` | ❌ | Language identifier (usually "cpp") |

#### Validation Rules

```typescript
// Question ID validation
id: number                    // Must be positive integer
id >= 1                      // Starts from 1, sequential within quiz

// Options validation  
options.length === 4         // Exactly 4 options required
options.every(opt => opt.length > 0)  // No empty options

// Answer validation
correctAnswer >= 0           // Valid array index
correctAnswer <= 3           // Within options bounds
typeof options[correctAnswer] === 'string'  // Points to valid option

// Code snippet validation (if present)
codeLanguage: 'cpp' | 'javascript' | 'typescript' | 'json' | 'bash'
```

### Quiz Interface

The `Quiz` interface defines both parent chapters and child quiz parts.

```typescript
export interface Quiz {
  id: string;              // Unique identifier across all quizzes
  title: string;           // Display title
  description: string;     // Brief description of content
  chapter: string;         // Chapter identifier (e.g., "Chapter 1")
  sections: string[];      // LearnCpp.com sections covered
  questions: Question[];   // Array of questions (empty for parents)
  isParent?: boolean;      // True for chapter overview pages
  children?: Quiz[];       // Child quizzes (only for parents)
}
```

#### Field Specifications

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | ✅ | Kebab-case unique identifier |
| `title` | `string` | ✅ | Human-readable title |
| `description` | `string` | ✅ | One-sentence description |
| `chapter` | `string` | ✅ | Chapter identifier for grouping |
| `sections` | `string[]` | ✅ | LearnCpp.com sections covered |
| `questions` | `Question[]` | ✅ | Questions array (empty for parents) |
| `isParent` | `boolean` | ❌ | Set to `true` for chapter parents |
| `children` | `Quiz[]` | ❌ | Child quizzes (only for parents) |

#### ID Naming Conventions

```typescript
// Parent chapter IDs
"chapter-1-basics"
"chapter-2-functions"  
"chapter-N-topic"

// Child quiz IDs
"chapter-1-part-1"
"chapter-1-part-2"
"chapter-1-bonus"
"chapter-N-part-X"
```

#### Hierarchy Rules

```typescript
// Parent Quiz Rules
isParent: true
questions: []                // Always empty
children: Quiz[]            // Contains 2-5 child quizzes
children.length >= 2        // Minimum 2 parts per chapter

// Child Quiz Rules  
isParent: undefined         // Not set for children
children: undefined         // Not set for children
questions: Question[]       // Contains actual questions
questions.length >= 1       // At least 1 question per part
```

## 🎯 Complete Example

### Parent Chapter Example

```typescript
export const chapter1Quiz: Quiz = {
  id: "chapter-1-basics",
  title: "Chapter 1 - C++ Basics", 
  description: "Master fundamental C++ concepts including statements, variables, and I/O",
  chapter: "Chapter 1",
  sections: ["1.1 through 1.11", "Complete chapter coverage"],
  questions: [],              // Empty for parent
  isParent: true,            // Marks as parent
  children: [
    // Child quizzes go here...
  ]
};
```

### Child Quiz Example

```typescript
{
  id: "chapter-1-part-1",
  title: "C++ Basics - Part 1",
  description: "Statements, program structure, comments, and variables",
  chapter: "Chapter 1",
  sections: [
    "1.1 Statements and the structure of a program",
    "1.2 Comments", 
    "1.3 Introduction to objects and variables"
  ],
  questions: [
    {
      id: 1,
      question: "What is a statement in C++?",
      options: [
        "A type of instruction that causes the program to perform some action",
        "Only variable declarations",
        "Only function calls", 
        "A comment in the code"
      ],
      correctAnswer: 0,
      explanation: "A statement is a type of instruction that causes the program to perform some action. Statements are the smallest independent unit of computation in C++."
    },
    {
      id: 2,
      question: "What is the name of the special function that every C++ program must have?",
      options: ["start", "begin", "main", "program"],
      correctAnswer: 2,
      explanation: "Every C++ program must have a special function named 'main' (all lower case letters). When the program is run, the statements inside main are executed in sequential order.",
      codeSnippet: `#include <iostream>

int main()
{
    std::cout << "Hello world!";
    return 0;
}`,
      codeLanguage: "cpp"
    }
  ]
}
```

## 🔍 Data Validation Schema

### Runtime Validation Functions

```typescript
// Validate Question structure
function validateQuestion(question: Question): boolean {
  return (
    typeof question.id === 'number' &&
    question.id >= 1 &&
    typeof question.question === 'string' &&
    question.question.length > 0 &&
    Array.isArray(question.options) &&
    question.options.length === 4 &&
    question.options.every(opt => typeof opt === 'string' && opt.length > 0) &&
    typeof question.correctAnswer === 'number' &&
    question.correctAnswer >= 0 &&
    question.correctAnswer <= 3 &&
    typeof question.explanation === 'string' &&
    question.explanation.length > 0
  );
}

// Validate Quiz structure  
function validateQuiz(quiz: Quiz): boolean {
  const hasValidId = typeof quiz.id === 'string' && quiz.id.length > 0;
  const hasValidTitle = typeof quiz.title === 'string' && quiz.title.length > 0;
  const hasValidQuestions = Array.isArray(quiz.questions);
  
  if (quiz.isParent) {
    return hasValidId && hasValidTitle && hasValidQuestions &&
           quiz.questions.length === 0 &&
           Array.isArray(quiz.children) &&
           quiz.children.length >= 2;
  } else {
    return hasValidId && hasValidTitle && hasValidQuestions &&
           quiz.questions.length >= 1 &&
           quiz.questions.every(validateQuestion);
  }
}
```

### Static Analysis Rules

```typescript
// TypeScript compiler checks
type QuizId = `chapter-${number}-${string}`;        // ID format
type PartId = `chapter-${number}-part-${number}`;   // Part ID format
type BonusId = `chapter-${number}-bonus`;           // Bonus ID format

// Ensure options array has exactly 4 elements
type Options = [string, string, string, string];

// Ensure correctAnswer is valid index
type CorrectAnswer = 0 | 1 | 2 | 3;

// Enhanced interfaces with stricter types
interface StrictQuestion extends Question {
  options: Options;
  correctAnswer: CorrectAnswer;
}
```

## 📈 Performance Considerations

### Memory Usage
- Each Question: ~500-2000 bytes (depending on explanation length)
- Each Quiz: ~5-50KB (depending on question count)  
- Each Chapter: ~20-200KB (depending on parts)
- Total Application: Scales linearly with content

### Bundle Optimization
- Tree-shaking: Unused chapters eliminated in production
- Code splitting: Each chapter can be loaded independently
- Static generation: All data pre-processed at build time
- Type erasure: TypeScript interfaces removed in production

---

*This schema ensures data consistency, type safety, and optimal performance across the CppMemory application.*