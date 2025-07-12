# CppMemory

An interactive C++ learning platform featuring quiz cards based on LearnCpp.com content. Test your knowledge with grouped sections and multiple choice questions.

## Features

- 📚 Quiz content based on LearnCpp.com chapters with Doxygen-style documentation
- 🧠 Multiple choice questions with shuffled options to prevent memorization
- 💻 Professional code snippets with VS Code-inspired syntax highlighting
- ✨ Smooth fade animations between questions (800ms out, 1100ms in)
- 📊 Progress tracking with localStorage persistence
- 📱 Mobile-friendly responsive design
- ⚡ Built with Next.js 15, React 19, and TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Windows PowerShell Users

If you encounter "'next' is not recognized as an internal or external command" error on Windows PowerShell, the package.json scripts have been updated to use `npx` which should resolve this issue.

## Quiz Structure

Each quiz groups 2-4 sections from LearnCpp.com into a single quiz with 5-10 multiple choice questions. Questions include detailed explanations to help reinforce learning.

### Available Quizzes

- **Chapter 1 - C++ Basics**: Statements, variables, iostream
- **Chapter 2 - Functions**: Function basics, parameters, return values
- **Chapter 3 - Debugging**: Error types and debugging techniques
- **Chapter 4 - Data Types**: Fundamental types and type conversion

## Technology Stack

- Next.js 15 with App Router
- React 19 with custom hooks
- TypeScript with strict type checking
- Tailwind CSS 3 with custom animations
- Custom syntax highlighting tokenizer
- LocalStorage for progress tracking

## Contributing

This project is designed to help C++ beginners practice concepts from LearnCpp.com. Feel free to add more quizzes or improve existing questions.