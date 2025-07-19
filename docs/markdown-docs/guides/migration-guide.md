# Migration Guide

Complete guide for migrating quiz data from the legacy monolithic structure to the new modular chapter system.

## 📋 Migration Overview

### What Changed
- **Before**: Single `quizzes.ts` file with 8,500+ lines
- **After**: Individual chapter files with central index
- **Benefits**: Improved maintainability, faster builds, easier collaboration

### Migration Status
| Chapter | Status | Original Location | New Location | Notes |
|---------|--------|------------------|--------------|-------|
| Chapter 1 | ✅ Complete | `quizzes.ts:23-3568` | `chapter-1-quiz.ts` | Part 1 fully migrated |
| Chapter 2 | ⏳ Ready | `quizzes.ts:3569-3641` | `chapter-2-quiz.ts` | Structure ready |
| Chapters 3-28 | 📦 Backup | `quizzes-backup.ts` | Pending | Available for extraction |

## 🚀 Automated Migration Process

### Step 1: Backup Verification

Ensure the backup file exists and is complete:

```bash
# Verify backup file exists
ls -la src/data/quizzes-backup.ts

# Check file size (should be ~325KB)
du -h src/data/quizzes-backup.ts

# Verify it contains all 28 chapters
grep -c "chapter-" src/data/quizzes-backup.ts
```

### Step 2: Chapter Extraction Script

Create a script to extract individual chapters:

```bash
# Create extraction script
touch scripts/extract-chapter.js
```

```javascript
// scripts/extract-chapter.js
const fs = require('fs');
const path = require('path');

function extractChapter(chapterNumber) {
  const backupFile = 'src/data/quizzes-backup.ts';
  const outputFile = `src/data/chapter-${chapterNumber}-quiz.ts`;
  
  // Read backup file
  const content = fs.readFileSync(backupFile, 'utf8');
  
  // Find chapter boundaries
  const chapterStart = content.indexOf(`"chapter-${chapterNumber}-`);
  const nextChapterStart = content.indexOf(`"chapter-${chapterNumber + 1}-`);
  const chapterEnd = nextChapterStart === -1 ? content.length : nextChapterStart;
  
  // Extract chapter data
  const chapterData = content.substring(chapterStart, chapterEnd);
  
  // Create new file with proper structure
  const newFile = `import { Quiz } from './types';

export const chapter${chapterNumber}Quiz: Quiz = ${chapterData.trim()};
`;
  
  // Write to new file
  fs.writeFileSync(outputFile, newFile);
  console.log(`✅ Extracted Chapter ${chapterNumber} to ${outputFile}`);
}

// Usage: node scripts/extract-chapter.js 2
const chapterNum = process.argv[2];
if (chapterNum) {
  extractChapter(parseInt(chapterNum));
} else {
  console.log('Usage: node scripts/extract-chapter.js <chapter-number>');
}
```

### Step 3: Manual Chapter Migration

For precise control, manually extract each chapter:

#### Find Chapter Boundaries

```bash
# Find where Chapter 2 starts
grep -n "chapter-2-functions" src/data/quizzes-backup.ts

# Find where Chapter 3 starts (to know where Chapter 2 ends)
grep -n "chapter-3-debugging" src/data/quizzes-backup.ts
```

#### Extract Chapter Data

1. **Open backup file**: `src/data/quizzes-backup.ts`
2. **Locate chapter**: Search for `"chapter-2-functions"`
3. **Copy chapter object**: From `{` to matching `}`
4. **Create new file**: `src/data/chapter-2-quiz.ts`

#### Chapter 2 Example

```typescript
// src/data/chapter-2-quiz.ts
import { Quiz } from './types';

export const chapter2Quiz: Quiz = {
  id: "chapter-2-functions",
  title: "Chapter 2 - Functions",
  description: "Learn function fundamentals, parameters, and return values",
  chapter: "Chapter 2",
  sections: ["2.1 through 2.11", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-2-part-1",
      title: "Functions - Part 1",
      description: "Function basics and syntax",
      chapter: "Chapter 2", 
      sections: ["2.1 Introduction to functions", "2.2 Function return values"],
      questions: [
        // ... paste questions from backup
      ]
    },
    {
      id: "chapter-2-bonus",
      title: "Functions - Bonus", 
      description: "Advanced function concepts and best practices",
      chapter: "Chapter 2",
      sections: ["Function pointers", "Lambda basics", "Modern function features"],
      questions: [
        // ... paste bonus questions from backup
      ]
    }
  ]
};
```

### Step 4: Update Central Index

Add the new chapter to the main export:

```typescript
// src/data/index.ts
import { chapter1Quiz } from './chapter-1-quiz';
import { chapter2Quiz } from './chapter-2-quiz';  // ✏️ Add import

export const quizzes = [
  chapter1Quiz,
  chapter2Quiz,  // ✏️ Add to array
  // Add more chapters here...
];
```

### Step 5: Validation and Testing

Test each migrated chapter:

```bash
# TypeScript validation
npm run lint

# Build test
npm run build

# Check generated pages
# Should see new chapter in build output
```

## 🔍 Data Verification

### Chapter Completeness Check

Verify all parts of a chapter were migrated:

```typescript
// Verification script
function verifyChapter(chapter) {
  console.log(`Chapter: ${chapter.title}`);
  console.log(`ID: ${chapter.id}`);
  console.log(`Parts: ${chapter.children?.length || 0}`);
  
  let totalQuestions = 0;
  chapter.children?.forEach(part => {
    console.log(`  ${part.title}: ${part.questions.length} questions`);
    totalQuestions += part.questions.length;
  });
  
  console.log(`Total Questions: ${totalQuestions}`);
  return totalQuestions;
}

// Usage
import { chapter2Quiz } from './src/data/chapter-2-quiz';
verifyChapter(chapter2Quiz);
```

### Question ID Validation

Ensure question IDs are sequential within each part:

```typescript
function validateQuestionIDs(quiz) {
  quiz.children?.forEach(part => {
    const expectedIds = Array.from({length: part.questions.length}, (_, i) => i + 1);
    const actualIds = part.questions.map(q => q.id);
    
    const isValid = expectedIds.every((id, index) => id === actualIds[index]);
    console.log(`${part.title}: ${isValid ? '✅' : '❌'} Question IDs`);
    
    if (!isValid) {
      console.log(`  Expected: [${expectedIds.join(', ')}]`);
      console.log(`  Actual: [${actualIds.join(', ')}]`);
    }
  });
}
```

## 🔧 Common Migration Issues

### Issue 1: Question ID Conflicts

**Problem**: Question IDs not sequential within parts
```typescript
// ❌ Problem
questions: [
  { id: 1, ... },
  { id: 3, ... },  // Missing ID 2
  { id: 2, ... }   // Out of order
]
```

**Solution**: Renumber questions sequentially
```typescript
// ✅ Solution
questions: [
  { id: 1, ... },
  { id: 2, ... },  // Fixed sequence
  { id: 3, ... }
]
```

### Issue 2: Missing Import/Export

**Problem**: Chapter not showing in application
```bash
# Check if chapter is imported
grep "chapter2Quiz" src/data/index.ts

# Check if chapter is exported
grep "export.*chapter2Quiz" src/data/chapter-2-quiz.ts
```

**Solution**: Verify import chain
```typescript
// 1. Chapter file exports quiz
export const chapter2Quiz: Quiz = { ... };

// 2. Index file imports quiz  
import { chapter2Quiz } from './chapter-2-quiz';

// 3. Index file includes in array
export const quizzes = [chapter1Quiz, chapter2Quiz];
```

### Issue 3: Malformed Chapter Structure

**Problem**: Parent quiz has questions (should be empty)
```typescript
// ❌ Problem: Parent has questions
{
  id: "chapter-2-functions",
  isParent: true,
  questions: [{ id: 1, ... }],  // Should be empty
  children: [...]
}
```

**Solution**: Move questions to children
```typescript
// ✅ Solution: Questions in children only
{
  id: "chapter-2-functions", 
  isParent: true,
  questions: [],  // Empty for parent
  children: [
    {
      id: "chapter-2-part-1",
      questions: [{ id: 1, ... }]  // Questions here
    }
  ]
}
```

### Issue 4: Build Failures

**Problem**: TypeScript errors after migration
```bash
# Common errors
Type 'Quiz' is not assignable to type 'Quiz'
Property 'children' is missing in type
```

**Solution**: Check interface compliance
```typescript
// Ensure all required fields present
interface Quiz {
  id: string;           // ✅ Required
  title: string;        // ✅ Required  
  description: string;  // ✅ Required
  chapter: string;      // ✅ Required
  sections: string[];   // ✅ Required
  questions: Question[]; // ✅ Required (empty for parents)
  isParent?: boolean;   // ❌ Optional
  children?: Quiz[];    // ❌ Optional
}
```

## 📊 Migration Progress Tracking

### Create Migration Checklist

```markdown
## Chapter Migration Progress

- [x] Chapter 1 - C++ Basics (✅ Complete)
- [ ] Chapter 2 - Functions (⏳ In Progress)
- [ ] Chapter 3 - Debugging (📋 Planned)
- [ ] Chapter 4 - Data Types (📋 Planned)
- [ ] Chapter 5 - Constants (📋 Planned)
...
- [ ] Chapter 28 - Input/Output (📋 Planned)

### Current Statistics
- **Migrated**: 1/28 chapters (3.6%)
- **Questions**: 26+ / 390+ total
- **Build Status**: ✅ Passing
- **Pages Generated**: 9/111 total
```

### Track Migration Metrics

```bash
# Count total questions per chapter
grep -c '"id":.*[0-9]' src/data/chapter-*-quiz.ts

# Check build output for generated pages
npm run build | grep "Generating static pages"

# Verify all imports resolve
npm run lint
```

## 🎯 Post-Migration Tasks

### 1. Clean Up

After successful migration:

```bash
# Remove backup file (optional, keep for safety)
# rm src/data/quizzes-backup.ts

# Clean up any temporary files
rm -f scripts/extract-chapter.js
```

### 2. Update Documentation

Update project docs to reflect new structure:

```markdown
# Update README.md
- Change "Single quiz file" to "Modular chapter files"
- Update file structure diagram
- Add migration notes

# Update docs/
- Add new file organization explanation
- Update development workflow
```

### 3. Performance Validation

Verify performance improvements:

```bash
# Build time comparison
time npm run build

# Bundle size analysis
npm run build
du -h out/

# Development server start time
time npm run dev
```

## 🚨 Rollback Procedure

If migration issues occur:

### Emergency Rollback

```bash
# 1. Restore original structure
cp src/data/quizzes-backup.ts src/data/quizzes.ts

# 2. Revert imports
git checkout -- src/app/ src/components/

# 3. Remove new files
rm src/data/chapter-*-quiz.ts
rm src/data/types.ts
rm src/data/index.ts

# 4. Test build
npm run build
```

### Gradual Rollback

```typescript
// Temporarily include both old and new
import { quizzes as oldQuizzes } from './quizzes-backup';
import { chapter1Quiz } from './chapter-1-quiz';

// Hybrid approach during transition
export const quizzes = [
  chapter1Quiz,  // New modular format
  ...oldQuizzes.slice(1)  // Old format for chapters 2-28
];
```

---

*This migration guide ensures a smooth transition to the new modular data structure while maintaining data integrity and application functionality.*