# Data Validation Troubleshooting

Solutions for quiz data validation issues and content integrity problems.

## 🔍 Common Data Issues

### Issue 1: Duplicate Question IDs

**Error:**
```
Duplicate question ID found: 5 in chapter-2-part-1
Question IDs must be sequential within each quiz part
```

**Diagnosis:**
```typescript
// Check for duplicate IDs
function findDuplicateIds(questions: Question[]) {
  const ids = questions.map(q => q.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  return [...new Set(duplicates)];
}

// Usage
const duplicates = findDuplicateIds(quiz.questions);
console.log('Duplicates:', duplicates);
```

**Solution:**
```typescript
// ❌ Problem: Duplicate ID 5
questions: [
  { id: 1, question: "...", ... },
  { id: 2, question: "...", ... },
  { id: 3, question: "...", ... },
  { id: 5, question: "...", ... },  // Should be 4
  { id: 5, question: "...", ... },  // Duplicate!
]

// ✅ Solution: Sequential IDs
questions: [
  { id: 1, question: "...", ... },
  { id: 2, question: "...", ... },
  { id: 3, question: "...", ... },
  { id: 4, question: "...", ... },  // Fixed
  { id: 5, question: "...", ... },  // Now unique
]
```

### Issue 2: Missing Required Fields

**Error:**
```
TypeError: Cannot read property 'options' of undefined
Required field 'explanation' missing in question ID 3
```

**Validation Script:**
```typescript
function validateQuestion(question: any, partId: string): string[] {
  const errors: string[] = [];
  
  // Check required fields
  if (typeof question.id !== 'number' || question.id < 1) {
    errors.push(`Invalid or missing question ID in ${partId}`);
  }
  
  if (!question.question || typeof question.question !== 'string') {
    errors.push(`Missing or invalid question text for ID ${question.id} in ${partId}`);
  }
  
  if (!Array.isArray(question.options) || question.options.length !== 4) {
    errors.push(`Question ${question.id} in ${partId} must have exactly 4 options`);
  }
  
  if (typeof question.correctAnswer !== 'number' || 
      question.correctAnswer < 0 || question.correctAnswer > 3) {
    errors.push(`Invalid correctAnswer for question ${question.id} in ${partId}`);
  }
  
  if (!question.explanation || typeof question.explanation !== 'string') {
    errors.push(`Missing explanation for question ${question.id} in ${partId}`);
  }
  
  return errors;
}
```

**Solution:**
```typescript
// ❌ Problem: Missing fields
{
  id: 3,
  question: "What is a variable?",
  options: ["A name", "A value"],  // Only 2 options!
  correctAnswer: 0,
  // explanation missing!
}

// ✅ Solution: All required fields
{
  id: 3,
  question: "What is a variable?",
  options: [
    "A named memory location that can store a value",
    "A type of function in C++",
    "A preprocessor directive",
    "A comment in the code"
  ],
  correctAnswer: 0,
  explanation: "A variable is a named memory location that can store a value. Variables allow us to store and manipulate data in our programs."
}
```

### Issue 3: Invalid Answer Indices

**Error:**
```
correctAnswer index 4 is out of bounds for options array (length 4)
Valid indices are 0-3
```

**Validation:**
```typescript
function validateAnswerIndex(question: Question): boolean {
  return (
    question.correctAnswer >= 0 && 
    question.correctAnswer < question.options.length &&
    question.options[question.correctAnswer] !== undefined
  );
}
```

**Solution:**
```typescript
// ❌ Problem: Invalid answer index
{
  id: 7,
  question: "Which is correct?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 4,  // Invalid! Only indices 0-3 exist
  explanation: "..."
}

// ✅ Solution: Valid answer index
{
  id: 7,
  question: "Which is correct?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: 2,  // Valid index (points to "Option C")
  explanation: "..."
}
```

### Issue 4: Empty or Invalid Options

**Error:**
```
Question 5 has empty option at index 2
All options must be non-empty strings
```

**Validation:**
```typescript
function validateOptions(options: string[]): string[] {
  const errors: string[] = [];
  
  if (!Array.isArray(options)) {
    errors.push('Options must be an array');
    return errors;
  }
  
  if (options.length !== 4) {
    errors.push(`Expected 4 options, got ${options.length}`);
  }
  
  options.forEach((option, index) => {
    if (typeof option !== 'string') {
      errors.push(`Option ${index} is not a string`);
    } else if (option.trim().length === 0) {
      errors.push(`Option ${index} is empty`);
    } else if (option.length > 200) {
      errors.push(`Option ${index} is too long (${option.length} chars)`);
    }
  });
  
  return errors;
}
```

**Solution:**
```typescript
// ❌ Problem: Invalid options
{
  id: 5,
  question: "What is a function?",
  options: [
    "A collection of statements",
    "",  // Empty option!
    123, // Not a string!
    "A very long option that goes on and on and contains way too much text that makes it difficult to read and should be shortened significantly to be more manageable..."  // Too long!
  ],
  correctAnswer: 0,
  explanation: "..."
}

// ✅ Solution: Valid options
{
  id: 5,
  question: "What is a function?",
  options: [
    "A collection of statements that performs a task",
    "A type of variable",
    "A preprocessor directive",
    "A comment block"
  ],
  correctAnswer: 0,
  explanation: "A function is a collection of statements that performs a specific task."
}
```

## 🛠️ Automated Validation Tools

### Complete Data Validation Script

```typescript
// scripts/validate-quiz-data.ts
import { quizzes } from '../src/data';
import { Quiz, Question } from '../src/data/types';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    totalChapters: number;
    totalParts: number;
    totalQuestions: number;
  };
}

function validateAllQuizData(): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    stats: {
      totalChapters: 0,
      totalParts: 0,
      totalQuestions: 0
    }
  };
  
  quizzes.forEach(quiz => {
    result.stats.totalChapters++;
    
    // Validate parent quiz
    const parentErrors = validateQuiz(quiz);
    result.errors.push(...parentErrors);
    
    // Validate children
    if (quiz.children) {
      quiz.children.forEach(child => {
        result.stats.totalParts++;
        result.stats.totalQuestions += child.questions.length;
        
        const childErrors = validateQuiz(child);
        result.errors.push(...childErrors);
        
        // Validate questions
        child.questions.forEach(question => {
          const questionErrors = validateQuestion(question, child.id);
          result.errors.push(...questionErrors);
        });
        
        // Check question ID sequence
        const sequenceErrors = validateQuestionSequence(child.questions, child.id);
        result.errors.push(...sequenceErrors);
      });
    }
  });
  
  result.isValid = result.errors.length === 0;
  return result;
}

function validateQuiz(quiz: Quiz): string[] {
  const errors: string[] = [];
  
  if (!quiz.id || typeof quiz.id !== 'string') {
    errors.push(`Quiz missing or invalid ID`);
  }
  
  if (!quiz.title || typeof quiz.title !== 'string') {
    errors.push(`Quiz ${quiz.id} missing or invalid title`);
  }
  
  if (!quiz.description || typeof quiz.description !== 'string') {
    errors.push(`Quiz ${quiz.id} missing or invalid description`);
  }
  
  if (!Array.isArray(quiz.sections) || quiz.sections.length === 0) {
    errors.push(`Quiz ${quiz.id} missing or invalid sections`);
  }
  
  if (!Array.isArray(quiz.questions)) {
    errors.push(`Quiz ${quiz.id} missing questions array`);
  }
  
  // Parent-specific validation
  if (quiz.isParent) {
    if (quiz.questions.length > 0) {
      errors.push(`Parent quiz ${quiz.id} should have empty questions array`);
    }
    
    if (!quiz.children || quiz.children.length < 2) {
      errors.push(`Parent quiz ${quiz.id} should have at least 2 children`);
    }
  } else {
    // Child-specific validation
    if (quiz.questions.length === 0) {
      errors.push(`Child quiz ${quiz.id} must have questions`);
    }
    
    if (quiz.children && quiz.children.length > 0) {
      errors.push(`Child quiz ${quiz.id} should not have children`);
    }
  }
  
  return errors;
}

function validateQuestionSequence(questions: Question[], partId: string): string[] {
  const errors: string[] = [];
  const ids = questions.map(q => q.id);
  
  // Check for sequential IDs starting from 1
  const expectedIds = Array.from({length: questions.length}, (_, i) => i + 1);
  
  for (let i = 0; i < expectedIds.length; i++) {
    if (ids[i] !== expectedIds[i]) {
      errors.push(`Question ID sequence broken in ${partId}: expected ${expectedIds[i]}, got ${ids[i]}`);
      break;
    }
  }
  
  // Check for duplicates
  const uniqueIds = [...new Set(ids)];
  if (uniqueIds.length !== ids.length) {
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    errors.push(`Duplicate question IDs in ${partId}: ${[...new Set(duplicates)].join(', ')}`);
  }
  
  return errors;
}

// Run validation
const result = validateAllQuizData();

console.log('\n📊 Validation Results:');
console.log(`Chapters: ${result.stats.totalChapters}`);
console.log(`Quiz Parts: ${result.stats.totalParts}`);
console.log(`Questions: ${result.stats.totalQuestions}`);

if (result.isValid) {
  console.log('\n✅ All quiz data is valid!');
} else {
  console.log(`\n❌ Found ${result.errors.length} validation errors:`);
  result.errors.forEach(error => console.log(`  • ${error}`));
  process.exit(1);
}
```

### Quick Validation Commands

Add to package.json:
```json
{
  "scripts": {
    "validate": "npx ts-node scripts/validate-quiz-data.ts",
    "validate:watch": "npx nodemon --exec 'npm run validate' --ext ts",
    "fix:question-ids": "npx ts-node scripts/fix-question-ids.ts"
  }
}
```

## 🔧 Data Repair Tools

### Auto-fix Question ID Sequence

```typescript
// scripts/fix-question-ids.ts
import fs from 'fs';
import { quizzes } from '../src/data';

function fixQuestionIds() {
  let fixedCount = 0;
  
  quizzes.forEach(quiz => {
    if (quiz.children) {
      quiz.children.forEach(child => {
        // Sort questions by current ID first (in case they're out of order)
        child.questions.sort((a, b) => a.id - b.id);
        
        // Reassign sequential IDs
        child.questions.forEach((question, index) => {
          const expectedId = index + 1;
          if (question.id !== expectedId) {
            console.log(`Fixing ${child.id}: Question ID ${question.id} → ${expectedId}`);
            question.id = expectedId;
            fixedCount++;
          }
        });
      });
    }
  });
  
  if (fixedCount > 0) {
    console.log(`\n✅ Fixed ${fixedCount} question IDs`);
    console.log('⚠️  Remember to save the changes to your chapter files!');
  } else {
    console.log('\n✅ All question IDs are already correct');
  }
}

fixedCount();
```

### Remove Duplicate Questions

```typescript
function removeDuplicateQuestions(questions: Question[]): Question[] {
  const seen = new Set<string>();
  return questions.filter(question => {
    const key = `${question.question}|${question.options.join('|')}`;
    if (seen.has(key)) {
      console.log(`Removing duplicate question: "${question.question}"`);
      return false;
    }
    seen.add(key);
    return true;
  });
}
```

### Validate Code Snippets

```typescript
function validateCodeSnippets(question: Question): string[] {
  const errors: string[] = [];
  
  if (question.codeSnippet) {
    // Check if codeLanguage is specified
    if (!question.codeLanguage) {
      errors.push(`Question ${question.id} has codeSnippet but missing codeLanguage`);
    }
    
    // Check for valid language
    const validLanguages = ['cpp', 'c', 'javascript', 'typescript', 'json', 'bash'];
    if (question.codeLanguage && !validLanguages.includes(question.codeLanguage)) {
      errors.push(`Question ${question.id} has invalid codeLanguage: ${question.codeLanguage}`);
    }
    
    // Basic syntax checks for C++
    if (question.codeLanguage === 'cpp') {
      if (!question.codeSnippet.includes('#include') && question.codeSnippet.includes('main')) {
        errors.push(`Question ${question.id} C++ code with main() should include headers`);
      }
      
      // Check for missing semicolons (basic check)
      const lines = question.codeSnippet.split('\n');
      lines.forEach((line, index) => {
        const trimmed = line.trim();
        if (trimmed.length > 0 && 
            !trimmed.startsWith('//') && 
            !trimmed.startsWith('/*') && 
            !trimmed.endsWith(';') && 
            !trimmed.endsWith('{') && 
            !trimmed.endsWith('}') &&
            !trimmed.startsWith('#')) {
          errors.push(`Question ${question.id} line ${index + 1} may be missing semicolon: "${trimmed}"`);
        }
      });
    }
  } else if (question.codeLanguage) {
    errors.push(`Question ${question.id} has codeLanguage but no codeSnippet`);
  }
  
  return errors;
}
```

## 📋 Pre-commit Data Validation

### Git Hook Setup

```bash
# Create pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

echo "🔍 Validating quiz data..."

# Run data validation
npm run validate

if [ $? -ne 0 ]; then
  echo ""
  echo "❌ Quiz data validation failed!"
  echo "Please fix the errors above before committing."
  echo ""
  echo "Common fixes:"
  echo "  • Run 'npm run fix:question-ids' to fix ID sequences"
  echo "  • Check for missing required fields"
  echo "  • Verify all answer indices are 0-3"
  echo ""
  exit 1
fi

echo "✅ Quiz data validation passed!"
EOF

chmod +x .git/hooks/pre-commit
```

### VS Code Integration

```json
// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Validate Quiz Data",
      "type": "shell",
      "command": "npm run validate",
      "group": "test",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    }
  ]
}
```

## 🎯 Best Practices for Data Quality

### 1. Regular Validation
- Run validation before every commit
- Include validation in CI/CD pipeline
- Set up automated checks on pull requests

### 2. Consistent Formatting
- Use the chapter template for all new content
- Follow naming conventions strictly
- Maintain consistent code style in snippets

### 3. Content Review Process
- Peer review all new questions
- Test questions with target audience
- Validate educational value and accuracy

### 4. Version Control
- Keep backup of working data
- Use meaningful commit messages
- Tag stable versions for rollback capability

---

*Regular data validation ensures the CppMemory platform maintains high-quality educational content and provides a reliable learning experience.*