# Quiz Data Structure

This directory contains quiz data organized by chapters for better maintainability.

## File Structure

```
src/data/
├── types.ts                 # TypeScript interfaces for Quiz and Question
├── index.ts                 # Main export file that consolidates all chapters
├── chapter-1-quiz.ts        # Chapter 1 quiz data
├── chapter-2-quiz.ts        # Chapter 2 quiz data (add when ready)
├── chapter-template.ts      # Template for creating new chapters
├── quizzes-backup.ts        # Backup of original large file
└── README.md                # This file
```

## How to Add a New Chapter

1. **Copy the template:**
   ```bash
   cp chapter-template.ts chapter-X-quiz.ts
   ```

2. **Update the chapter file:**
   - Replace `X` with the actual chapter number
   - Update the quiz title, description, and sections
   - Add questions to each part

3. **Add to index.ts:**
   ```typescript
   import { chapterXQuiz } from './chapter-X-quiz';
   
   export const quizzes = [
     chapter1Quiz,
     chapterXQuiz,  // Add your new chapter here
     // ... other chapters
   ];
   ```

4. **Test the build:**
   ```bash
   npm run build
   ```

## Benefits of This Structure

- **Maintainability:** Each chapter is in its own file
- **Collaboration:** Multiple developers can work on different chapters simultaneously
- **Debugging:** Easier to locate and fix issues in specific chapters
- **Performance:** Smaller files load faster in development
- **Organization:** Clear separation of concerns

## Migration Status

- ✅ **Chapter 1:** Fully migrated with all 4 parts (26 + questions)
- ⏳ **Chapter 2:** Ready for migration (provide data to add)
- ⏳ **Chapters 3-28:** Available in backup file, ready for extraction

## Current Statistics

- **Active:** 1 chapter (Chapter 1)
- **Parts:** 4 quiz sections
- **Questions:** 26+ questions
- **Generated Pages:** 9 static pages

## Notes

- The old `quizzes.ts` file has been renamed to `quizzes-backup.ts`
- All imports have been updated to use the new structure
- Static page generation uses helper functions from `index.ts`
- Each chapter file exports a single quiz object with its children