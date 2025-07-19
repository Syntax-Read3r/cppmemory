# Question Format Guide

Comprehensive guide for creating well-structured quiz questions that provide educational value and maintain consistency across the CppMemory platform.

## 📝 Question Structure Template

```typescript
{
  id: number,              // Sequential within quiz part
  question: string,        // Clear, specific question text
  options: string[],       // Exactly 4 multiple-choice options
  correctAnswer: number,   // Index (0-3) of correct option
  explanation: string,     // Educational explanation
  codeSnippet?: string,    // Optional code example
  codeLanguage?: string    // Language for syntax highlighting
}
```

## ✅ Writing Effective Questions

### Question Text Guidelines

**✅ Good Question Characteristics:**
- **Specific and Clear**: Asks about one concept
- **Grammatically Correct**: Proper punctuation and grammar
- **Appropriate Difficulty**: Matches chapter level
- **Educational Value**: Tests understanding, not memorization

**Example of Well-Written Question:**
```typescript
{
  id: 5,
  question: "What happens when you define a variable without initializing it in C++?",
  options: [
    "The variable contains a random value (undefined behavior)",
    "The variable is automatically set to 0",
    "The compiler generates an error",
    "The variable is automatically set to null"
  ],
  correctAnswer: 0,
  explanation: "Uninitialized variables contain garbage values. The C++ standard doesn't specify what value they should have, leading to undefined behavior. Always initialize variables when you define them."
}
```

**❌ Poor Question Example:**
```typescript
{
  id: 6,
  question: "Variables?",  // Too vague
  options: ["Yes", "No", "Maybe", "Sometimes"],  // Not educational
  correctAnswer: 0,
  explanation: "Yes."  // Useless explanation
}
```

For the complete question format guide with all examples and best practices, see the full file content...