# CppMemory

An interactive C++ learning platform featuring quiz cards based on LearnCpp.com content. Master C++ fundamentals with comprehensive progress tracking and visual feedback.

## 🌐 Live Demo

**Try it now:** [https://syntax-read3r.github.io/cppmemory/](https://syntax-read3r.github.io/cppmemory/)

The application is deployed on GitHub Pages and fully functional. Start learning C++ immediately!

## Features

- 📚 **Complete LearnCpp.com Coverage**: All 28 chapters with 229 questions across 79 quiz sections
- 🎯 **Smart Progress Tracking**: Visual completion indicators with persistent localStorage
- 🧠 **Anti-Cheating System**: Shuffled options and 100% completion requirements
- 💻 **Professional Code Display**: VS Code-inspired syntax highlighting with C++ tokenizer
- ✨ **Smooth Animations**: Coordinated fade transitions (800ms out, 1100ms in)
- 🎨 **Visual Status System**: Color-coded cards (green=completed, orange=in-progress, gray=fresh)
- 📱 **Mobile-First Design**: Responsive layout optimized for all devices
- ⚡ **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS v3

## Getting Started

### Option 1: Use the Live Application
Visit [https://syntax-read3r.github.io/cppmemory/](https://syntax-read3r.github.io/cppmemory/) to start learning immediately.

### Option 2: Run Locally
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Progress Tracking System

CppMemory features a comprehensive progress tracking system that motivates mastery:

### Visual Status Indicators
- 🟢 **Green Cards**: 100% completion achieved (mastered)
- 🟠 **Orange Cards**: In progress (attempted but not perfected)
- ⚪ **Gray Cards**: Not started yet

### Completion Requirements
- **Perfect Score Required**: Only 100% correct answers mark a section as completed
- **Persistent Progress**: All data saved to localStorage across sessions
- **Chapter Progress**: Parent chapters show completion based on all children
- **Real-time Updates**: Visual feedback updates immediately after quiz completion

## Learning Structure

### Hierarchical Organization
- **Parent Chapters**: Overview pages containing child quiz sections
- **Child Quizzes**: Individual quiz sections with 3-10 questions each
- **Exactly 3 Sub-sections**: Each child quiz covers exactly 3 LearnCpp.com sections
- **Progressive Difficulty**: From basic syntax to advanced C++ concepts

### Complete Chapter Coverage
All 28 LearnCpp.com chapters are included:
- **Chapters 1-4**: Basics, Functions, Debugging, Data Types
- **Chapters 5-8**: Operators, Scope, Control Flow, Error Handling
- **Chapters 9-12**: Compound Types, Enums, Arrays, Functions Advanced
- **Chapters 13-16**: Basic OOP, Operator Overloading, More OOP, Bit Manipulation
- **Chapters 17-20**: Arrays, Iterators, Dynamic Allocation, Advanced Functions
- **Chapters 21-24**: Operator Overloading, Move Semantics, Relationships, Inheritance
- **Chapters 25-28**: Virtual Functions, Templates, Exceptions, Input/Output

## Technology Stack

- **Frontend**: Next.js 15 with App Router, React 19
- **Type Safety**: TypeScript with strict checking
- **Styling**: Tailwind CSS v3 with custom animations and color system
- **State Management**: Custom React hooks with localStorage persistence
- **Code Highlighting**: Custom C++ tokenizer with VS Code-inspired colors
- **Progress System**: useQuizProgress hook for completion tracking
- **Performance**: Optimized animations and responsive design

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run lint

# Export static files for deployment
npm run export

# Deploy to GitHub Pages (automated via GitHub Actions)
npm run deploy
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Troubleshooting

For common issues and solutions, see [docs/troubleshoot.md](docs/troubleshoot.md):
- Windows PowerShell compatibility
- Tailwind CSS configuration
- Progress tracking issues
- Syntax highlighting problems

## Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── page.tsx           # Homepage with parent cards
│   ├── chapter/[id]/      # Chapter overview pages
│   └── quiz/[id]/         # Individual quiz pages
├── components/            # Reusable React components
│   ├── QuizCard.tsx      # Quiz question display with animations
│   └── QuizProgress.tsx  # Progress indicators
├── data/
│   └── quizzes.ts        # All quiz data and questions
├── hooks/
│   └── useQuizProgress.ts # Progress tracking logic
└── styles/               # Global styles and Tailwind config
```

## Contributing

This project provides comprehensive C++ learning coverage based on LearnCpp.com. Contributions welcome for:
- Additional quiz questions
- UI/UX improvements
- New features for learning enhancement
- Documentation updates

## License

Educational project for C++ learning. Quiz content inspired by LearnCpp.com.