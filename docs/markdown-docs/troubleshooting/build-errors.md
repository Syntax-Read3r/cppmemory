# Build Errors Troubleshooting

Solutions for common build and compilation issues in the CppMemory project.

## 🚨 Common Build Errors

### Error 1: Missing generateStaticParams

**Error Message:**
```
Error: Page "/quiz/[id]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
```

**Cause:** Dynamic routes require `generateStaticParams()` for static export.

**Solution:**
```typescript
// src/app/quiz/[id]/page.tsx
import { getAllQuizIds } from '@/data';

export function generateStaticParams() {
  return getAllQuizIds();
}
```

**Verification:**
```bash
npm run build
# Should see: Generating static pages (X/X)
```

### Error 2: Client Components with generateStaticParams

**Error Message:**
```
Error: Page "/chapter/[id]/page" cannot use both "use client" and export function "generateStaticParams()".
```

**Cause:** Client components can't export `generateStaticParams()`.

**Solution:** Split into server and client components:
```typescript
// src/app/chapter/[id]/page.tsx (Server Component)
import ChapterClient from './ChapterClient';

export function generateStaticParams() {
  return getAllChapterIds();
}

export default async function ChapterPage({ params }) {
  const resolvedParams = await params;
  return <ChapterClient data={resolvedParams} />;
}
```

```typescript
// src/app/chapter/[id]/ChapterClient.tsx (Client Component)
'use client';

export default function ChapterClient({ data }) {
  // Client-side logic here
}
```

### Error 3: TypeScript Interface Errors

**Error Message:**
```
Type 'Quiz' is not assignable to type 'Quiz'
Property 'children' is missing in type
```

**Cause:** Inconsistent interface definitions or missing imports.

**Solution:**
```typescript
// Ensure correct import
import { Quiz, Question } from '@/data/types';

// Verify interface compliance
const quiz: Quiz = {
  id: "chapter-1-basics",     // ✅ Required string
  title: "Chapter 1",         // ✅ Required string
  description: "...",         // ✅ Required string  
  chapter: "Chapter 1",       // ✅ Required string
  sections: ["1.1", "1.2"],   // ✅ Required array
  questions: [],              // ✅ Required array
  isParent: true,             // ❌ Optional boolean
  children: [...]             // ❌ Optional array
};
```

### Error 4: Import Resolution Errors

**Error Message:**
```
Module not found: Can't resolve '@/data/quizzes'
Error: Cannot find module '@/data/quizzes'
```

**Cause:** Outdated imports after refactoring.

**Solution:** Update all imports to new structure:
```typescript
// ❌ Old imports
import { quizzes } from '@/data/quizzes';
import { Quiz } from '@/data/quizzes';

// ✅ New imports
import { quizzes } from '@/data';
import { Quiz } from '@/data';
```

**Find and replace all:**
```bash
# Find old imports
grep -r "from '@/data/quizzes'" src/

# Replace with new imports
sed -i "s|from '@/data/quizzes'|from '@/data'|g" src/**/*.tsx src/**/*.ts
```

### Error 5: Question ID Validation

**Error Message:**
```
TypeError: Cannot read property 'id' of undefined
Duplicate question ID found: 5
```

**Cause:** Missing or duplicate question IDs.

**Solution:** Validate question structure:
```typescript
// Validation function
function validateQuestions(questions: Question[]) {
  const ids = questions.map(q => q.id);
  const uniqueIds = [...new Set(ids)];
  
  if (ids.length !== uniqueIds.length) {
    throw new Error(`Duplicate question IDs: ${ids}`);
  }
  
  const expectedIds = Array.from({length: questions.length}, (_, i) => i + 1);
  const missingIds = expectedIds.filter(id => !ids.includes(id));
  
  if (missingIds.length > 0) {
    throw new Error(`Missing question IDs: ${missingIds}`);
  }
}

// Usage in chapter file
export const chapterXQuiz: Quiz = {
  // ... other properties
  children: [
    {
      // ... part properties
      questions: validateQuestions([
        { id: 1, ... },
        { id: 2, ... },
        { id: 3, ... }
      ])
    }
  ]
};
```

## 🔧 Build Process Issues

### Issue 1: Slow Build Times

**Symptoms:**
- Build takes longer than 30 seconds
- "Generating static pages" step is slow

**Diagnosis:**
```bash
# Check number of pages being generated
npm run build | grep "Generating static pages"

# Analyze bundle size
npm run build
du -h out/
```

**Solutions:**

1. **Reduce Question Data:**
```typescript
// Remove unnecessary fields in production
const question = {
  id: 1,
  question: "...",
  options: [...],
  correctAnswer: 0,
  explanation: "...",
  // Remove in production builds:
  ...(process.env.NODE_ENV !== 'production' && {
    debugInfo: "...",
    authorNotes: "..."
  })
};
```

2. **Optimize Images:**
```typescript
// next.config.ts
const nextConfig = {
  images: {
    unoptimized: true,  // Required for static export
    formats: ['image/webp'],
    minimumCacheTTL: 60
  }
};
```

3. **Enable Webpack Optimization:**
```typescript
// next.config.ts
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.chunks = 'all';
    }
    return config;
  }
};
```

### Issue 2: Memory Errors During Build

**Error Message:**
```
FATAL ERROR: Ineffective mark-compacts near heap limit
JavaScript heap out of memory
```

**Solution:** Increase Node.js memory limit:
```bash
# In package.json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
  }
}

# Or environment variable
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Issue 3: Static Export Failures

**Error Message:**
```
Error occurred prerendering page "/quiz/chapter-1-part-1"
TypeError: Cannot read properties of undefined
```

**Diagnosis:** Check for client-side only code in server components:
```typescript
// ❌ Problem: Using browser APIs in server component
export default function QuizPage() {
  const data = localStorage.getItem('quiz');  // Fails on server
  return <div>{data}</div>;
}

// ✅ Solution: Move to client component
'use client';
export default function QuizClient() {
  useEffect(() => {
    const data = localStorage.getItem('quiz');  // Safe in client
  }, []);
}
```

## 🐛 Runtime Errors

### Error 1: Hydration Mismatches

**Error Message:**
```
Warning: Text content did not match. Server: "0" Client: "5"
Hydration failed because the initial UI does not match what was rendered on the server
```

**Cause:** Server and client rendering different content.

**Solution:** Ensure consistent rendering:
```typescript
// ❌ Problem: Server/client mismatch
function ProgressDisplay() {
  const [score, setScore] = useState(localStorage.getItem('score') || '0');
  return <div>Score: {score}</div>;
}

// ✅ Solution: Use useEffect for client-only data
function ProgressDisplay() {
  const [score, setScore] = useState('0');
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    setScore(localStorage.getItem('score') || '0');
  }, []);
  
  if (!isClient) return <div>Score: 0</div>;  // Consistent server render
  return <div>Score: {score}</div>;
}
```

### Error 2: Quiz Data Loading Issues

**Error Message:**
```
TypeError: Cannot read properties of undefined (reading 'questions')
Quiz data not found for ID: chapter-2-part-1
```

**Diagnosis:** Check data availability:
```typescript
// Debug quiz data loading
function debugQuizData() {
  console.log('Available quizzes:', quizzes.length);
  quizzes.forEach(quiz => {
    console.log(`Chapter: ${quiz.id}`);
    if (quiz.children) {
      quiz.children.forEach(child => {
        console.log(`  Part: ${child.id} (${child.questions.length} questions)`);
      });
    }
  });
}
```

**Solution:** Add error boundaries:
```typescript
function QuizErrorBoundary({ children }) {
  if (!quiz) {
    return (
      <div className="error-state">
        <h2>Quiz Not Found</h2>
        <p>The requested quiz could not be loaded.</p>
        <Link href="/">← Back to Home</Link>
      </div>
    );
  }
  
  return children;
}
```

## 🔍 Debugging Tools

### Build Analysis

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Check generated files
ls -la out/
find out/ -name "*.html" | wc -l

# Verify static pages
curl -s http://localhost:3000/quiz/chapter-1-part-1 | grep "<title>"
```

### TypeScript Debugging

```bash
# Check TypeScript compilation
npx tsc --noEmit

# Verify imports resolve
npx tsc --listFiles | grep "data"

# Check for circular dependencies
npm install -g madge
madge --circular src/
```

### Performance Profiling

```typescript
// Add performance markers
export default function QuizPage() {
  useEffect(() => {
    performance.mark('quiz-render-start');
    
    return () => {
      performance.mark('quiz-render-end');
      performance.measure('quiz-render', 'quiz-render-start', 'quiz-render-end');
      
      const measure = performance.getEntriesByName('quiz-render')[0];
      console.log(`Quiz render time: ${measure.duration}ms`);
    };
  }, []);
}
```

## 🛡️ Prevention Strategies

### 1. Pre-commit Validation

```bash
# Create pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "Running build validation..."
npm run lint
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Commit aborted."
  exit 1
fi
echo "✅ Build successful."
EOF

chmod +x .git/hooks/pre-commit
```

### 2. Data Validation Scripts

```typescript
// scripts/validate-data.ts
import { quizzes } from '../src/data';

function validateAllData() {
  let totalQuestions = 0;
  let errors = [];
  
  quizzes.forEach(quiz => {
    if (!quiz.id || !quiz.title) {
      errors.push(`Invalid quiz: ${quiz.id}`);
    }
    
    if (quiz.isParent && quiz.questions.length > 0) {
      errors.push(`Parent quiz has questions: ${quiz.id}`);
    }
    
    quiz.children?.forEach(child => {
      if (child.questions.length === 0) {
        errors.push(`Child quiz has no questions: ${child.id}`);
      }
      totalQuestions += child.questions.length;
    });
  });
  
  console.log(`✅ Validated ${quizzes.length} chapters`);
  console.log(`✅ Total questions: ${totalQuestions}`);
  
  if (errors.length > 0) {
    console.error('❌ Validation errors:');
    errors.forEach(error => console.error(`  ${error}`));
    process.exit(1);
  }
}

validateAllData();
```

### 3. Automated Testing

```typescript
// tests/data-integrity.test.ts
import { quizzes } from '../src/data';

describe('Quiz Data Integrity', () => {
  test('all quizzes have required fields', () => {
    quizzes.forEach(quiz => {
      expect(quiz.id).toBeDefined();
      expect(quiz.title).toBeDefined();
      expect(quiz.description).toBeDefined();
      expect(Array.isArray(quiz.questions)).toBe(true);
    });
  });
  
  test('question IDs are sequential', () => {
    quizzes.forEach(quiz => {
      quiz.children?.forEach(child => {
        const ids = child.questions.map(q => q.id);
        const expected = Array.from({length: ids.length}, (_, i) => i + 1);
        expect(ids).toEqual(expected);
      });
    });
  });
});
```

---

*Regular use of these debugging tools and prevention strategies will help maintain a stable and error-free CppMemory application.*