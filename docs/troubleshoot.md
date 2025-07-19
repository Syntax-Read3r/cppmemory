# CppMemory - Troubleshooting Guide

This document contains common issues encountered during CppMemory development and their solutions. Use this as a reference for future development and deployment.

## 🔴 Common CI/Build Errors

### 1. TypeScript/ESLint Errors

#### **Error: `Unexpected any. Specify a different type. @typescript-eslint/no-explicit-any`**

**What it means:** Using `any` type defeats TypeScript's type safety.

**Common scenarios:**
- Dynamic data from API calls
- Complex state objects
- Generic utility functions

**❌ Wrong:**
```typescript
const [data, setData] = useState<any>(null);
```

**✅ Correct:**
```typescript
// Define specific interface
interface UserData {
  message: string;
  timestamp: string;
  id: string;
}

const [data, setData] = useState<UserData | null>(null);

// Or inline type
const [data, setData] = useState<{
  message: string;
  timestamp: string;
  id: string;
} | null>(null);
```

**Solution pattern:**
1. Identify the actual shape of your data
2. Create an interface or inline type
3. Use union types with `null` for optional data

---

#### **Error: `'variable' is defined but never used. @typescript-eslint/no-unused-vars`**

**What it means:** ESLint detected a variable that's declared but never used.

**Common scenarios:**
- Error variables in try/catch blocks
- Function parameters not used
- Imported modules not used

**❌ Wrong:**
```typescript
try {
  // some code
} catch (error) {
  setError('Something went wrong'); // 'error' is unused
}
```

**✅ Correct:**
```typescript
try {
  // some code
} catch (error) {
  setError(error instanceof Error ? error.message : 'Something went wrong');
}

// Or if you really don't need the error parameter
try {
  // some code
} catch {
  setError('Something went wrong');
}

// Or prefix with underscore if intentionally unused
catch (_error) {
  setError('Something went wrong');
}
```

**Solution pattern:**
1. Use the variable appropriately
2. Remove the parameter entirely if not needed
3. Prefix with underscore (`_error`) if intentionally unused

**CppMemory context:** Common in quiz components when handling localStorage errors or API calls that don't need the specific error details.

---

### 2. Build Process Issues

#### **Error: `Failed to compile` during `npm run build`**

**Common causes:**
- TypeScript errors
- ESLint errors
- Missing dependencies
- Circular imports

**Debugging steps:**
1. Run `npx tsc --noEmit` to check TypeScript issues
2. Run `npx eslint src/ --ext .ts,.tsx` to check linting
3. Check for missing imports/dependencies
4. Look for circular import dependencies

**Resolution order:**
1. Fix TypeScript errors first
2. Fix ESLint errors second
3. Test with `npm run build`

#### **Error: `Cannot find module '../lightningcss.linux-x64-gnu.node'`**

**What it means:** Missing or corrupted native dependencies, often related to Tailwind CSS or lightningcss.

**Common scenarios:**
- After switching between different operating systems
- After system updates
- Corrupted node_modules due to file system issues (especially in WSL)

**❌ Issue:**
```
Error: Cannot find module '../lightningcss.linux-x64-gnu.node'
```

**✅ Solution:**
```bash
# Force reinstall all dependencies
npm install --force

# Alternative: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Solution pattern:**
1. Try `npm install --force` first (faster)
2. If that fails, remove node_modules and reinstall
3. Check that build passes after reinstall

**CppMemory specific fix:** This issue occurred when developing on Windows with WSL2. The Tailwind CSS v4 with lightningcss had Windows compatibility issues. **Solution:** Downgraded to Tailwind CSS v3 which resolved the issue completely.

---

### 3. GitHub Pages Deployment Issues

#### **Issue: README.md showing instead of main page**

**Problem:** GitHub Pages displays the repository's README.md instead of the built Next.js application.

**Root cause:** Missing `.nojekyll` file causes GitHub Pages to use Jekyll processing, which interferes with Next.js routing.

**Symptoms:**
- Deployment succeeds but shows README.md content
- Site URL shows repository documentation instead of app
- Console may show 404 errors for assets
- This issue appears intermittently after deployments

**❌ Common mistakes:**
- Forgetting to create `.nojekyll` file
- Placing `.nojekyll` in wrong directory
- `.nojekyll` file getting deleted during build process

**✅ Solution:**
```bash
# Create .nojekyll file in public directory
touch public/.nojekyll

# Verify it exists
ls -la public/.nojekyll
```

**Why this works:**
- `.nojekyll` tells GitHub Pages to skip Jekyll processing
- Next.js static export requires raw file serving
- File must be in `public/` directory to be included in build output
- GitHub Pages looks for this file in the root of deployed content

**Prevention:**
1. Always include `.nojekyll` in `public/` directory
2. Add to version control: `git add public/.nojekyll`
3. Verify in build output: check `out/.nojekyll` exists after build
4. Include in deployment checklist

**Alternative solution (if above doesn't work):**
```bash
# Create .nojekyll in root directory as backup
touch .nojekyll
```

**Testing the fix:**
1. Create the `.nojekyll` file
2. Commit and push changes
3. Wait for GitHub Actions to complete
4. Check that site shows React app, not README.md
5. Verify in browser developer tools that assets load correctly

---

## 🖥️ Windows PowerShell Issues

### 8. Next.js Command Not Recognized in PowerShell

#### **Issue: `'next' is not recognized as an internal or external command`**

**Problem:** Windows PowerShell cannot find the Next.js executable, even after `npm install`.

**Common scenarios:**
- Running `npm run dev` in Windows PowerShell
- Node.js installed but npm scripts fail
- Works in Git Bash but not PowerShell

**❌ Issue:**
```bash
PS> npm run dev
> cppmemory@0.1.0 dev
> next dev --turbopack
'next' is not recognized as an internal or external command,
operable program or batch file.
```

**✅ Solution progression:**
```bash
# Try 1: Use npx (often works)
npx next dev --turbopack

# Try 2: Update package.json scripts to use Windows paths
{
  "scripts": {
    "dev": "node_modules\\.bin\\next dev --turbopack",
    "build": "node_modules\\.bin\\next build",
    "start": "node_modules\\.bin\\next start"
  }
}

# Try 3: Direct Windows path execution
.\\node_modules\\.bin\\next dev --turbopack
```

**Root cause:** Windows PowerShell uses different path resolution than Unix shells. The `next` command isn't automatically found in `node_modules/.bin/`.

**Permanent fix for CppMemory:**
Update `package.json` to use Windows-compatible paths:
```json
{
  "scripts": {
    "dev": "node_modules\\.bin\\next dev --turbopack",
    "build": "node_modules\\.bin\\next build", 
    "start": "node_modules\\.bin\\next start",
    "lint": "node_modules\\.bin\\next lint"
  }
}
```

**Why this works:**
- Windows uses backslashes (`\`) for paths
- PowerShell requires explicit path to executable
- `node_modules\.bin\next` provides full Windows path
- Works across different Windows environments

---

## 🎨 Tailwind CSS Issues

### 9. Tailwind CSS v4 Compatibility Issues

#### **Issue: `Cannot find module '../lightningcss.win32-x64-msvc.node'`**

**Problem:** Tailwind CSS v4 uses lightningcss which has Windows compatibility issues, especially in WSL2 environments.

**Common scenarios:**
- Fresh install with Tailwind CSS v4
- Windows development with WSL2
- Node.js version mismatches

**❌ Error:**
```
Error: Cannot find module '../lightningcss.win32-x64-msvc.node'
```

**✅ CppMemory Solution:**
Downgrade to Tailwind CSS v3 for better Windows compatibility:

```bash
# Remove problematic packages
npm uninstall @tailwindcss/postcss tailwindcss

# Install stable v3
npm install --save-dev tailwindcss@^3.4.16 postcss@^8.4.49 autoprefixer@^10.4.21
```

**Update configuration files:**

`postcss.config.mjs`:
```javascript
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;
```

`src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Why Tailwind v3 is better for CppMemory:**
- More stable on Windows platforms
- Proven compatibility with Next.js 15
- No lightningcss dependency issues
- Simpler configuration
- All features needed for quiz platform are available

---

## 🔤 JSX Encoding Issues

### 7. Arrow Function Encoding in JSX

#### **Issue: Arrow functions not rendering correctly in code examples**

**Problem:** JSX treats `>` as the end of a tag, breaking arrow functions in inline code examples.

**Common scenarios:**
- Inline code snippets with arrow functions
- Template literals with arrow functions
- Code examples within JSX strings

**❌ Wrong:**
```jsx
// This will break JSX parsing
<code>setCount(prev => prev + 1)</code>

// This will render incorrectly
<code>onClick={() => handleClick()}</code>
```

**✅ Correct:**
```jsx
// Method 1: HTML entity encoding (for inline code)
<code>setCount(prev =&gt; prev + 1)</code>

// Method 2: JSX expression (for template literals)
<span className="text-cyan-400">{"=>"}</span>

// Method 3: Direct in template literals (works in some contexts)
<span>() =&gt; {}</span>
```

**Solution patterns by context:**

1. **Inline `<code>` elements:**
```jsx
<code className="px-2 py-1 bg-gray-800 rounded">
  setCount(prev =&gt; prev + 1)
</code>
```

2. **Styled code blocks with spans:**
```jsx
<span className="text-white">() </span>
<span className="text-cyan-400">{"=>"}</span>
<span className="text-white"> {}</span>
```

3. **Template literals in code blocks:**
```jsx
<code>{`
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
`}</code>
```

**Best practice:** Use HTML entity encoding (`=&gt;`) for simple inline code, and JSX expressions (`{"=>"}`) for complex styled code blocks.

---

## 🎨 UI/UX Issues

### 3. Low Contrast Code Examples

#### **Issue: Code text is hard to read**

**Problem:** Light backgrounds with default text colors create poor contrast.

**Common scenarios:**
- Inline code snippets
- Error/success examples
- Code comparison blocks

**❌ Wrong:**
```jsx
<code className="px-2 py-1 text-gray-800 bg-gray-100 rounded">
  useEffect(() => {}, [])
</code>

<pre className="p-2 text-xs bg-red-100 rounded">
  <code>{`// Hard to read code`}</code>
</pre>
```

**✅ Correct:**
```jsx
<code className="px-2 py-1 text-white bg-gray-800 rounded">
  useEffect(() => {}, [])
</code>

<pre className="p-2 text-xs bg-gray-900 rounded">
  <code className="text-white">{`// Easy to read code`}</code>
</pre>
```

**Solution pattern:**
1. Use dark backgrounds (`bg-gray-800`, `bg-gray-900`)
2. Use light text (`text-white`)
3. Maintain consistency across all code examples

---

### 4. JSX Encoding Pattern Examples

#### **Real-world examples from Hook Lab codebase:**

**Pattern 1: Inline code with HTML entities**
```jsx
// useState page - inline code snippets
<code className="px-2 py-1 text-white bg-gray-800 rounded">
  setCount(prev =&gt; prev + 1)
</code>

<code className="px-2 py-1 text-white bg-gray-800 rounded">
  setIsToggled(prev =&gt; !prev)
</code>
```

**Pattern 2: Styled code blocks with JSX expressions**
```jsx
// useEffect page - complex styled code
<span className="text-white">() </span>
<span className="text-cyan-400">{"=>"}</span>
<span className="text-white"> {}</span>

// Multi-line example
<span className="text-white">(</span>
<span className="text-yellow-300">prev</span>
<span className="text-white">) </span>
<span className="text-cyan-400">{"=>"}</span>
<span className="text-white"> </span>
<span className="text-yellow-300">prev</span>
<span className="text-white"> + </span>
<span className="text-orange-400">1</span>
```

**Pattern 3: Template literals (works in some contexts)**
```jsx
// Direct template literal - works when not in JSX attribute
<code>{`
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
`}</code>
```

**Pattern 4: Mixed approaches**
```jsx
// Comparison examples - different encoding for different contexts
<code className="px-2 py-1 bg-green-700 rounded">
  setCount(prev =&gt; prev + 1)
</code>
<span className="text-blue-800">vs</span>
<code className="px-2 py-1 bg-red-700 rounded">
  setCount(count + 1)
</code>
```

**When to use each pattern:**
- **HTML entities (`=&gt;`)**: Simple inline code, consistent across all browsers
- **JSX expressions (`{"=>"}`**: Complex styled code blocks, syntax highlighting
- **Template literals**: Multi-line code examples, preserves formatting
- **Mixed approaches**: Comparison examples, different semantic meanings

---

### 5. TypeScript State Patterns

#### **useState Type Safety**

**Pattern analysis from codebase:**

**Simple types (auto-inferred):**
```typescript
const [count, setCount] = useState(0); // number
const [isToggled, setIsToggled] = useState(false); // boolean
const [name, setName] = useState(''); // string
```

**Complex types (explicit typing needed):**
```typescript
// Array types
const [items, setItems] = useState<string[]>(['Item 1', 'Item 2']);

// Object types
const [user, setUser] = useState({ name: 'John', age: 25 }); // auto-inferred

// Union types
const [user, setUser] = useState<User | null>(null);
const [error, setError] = useState<string | null>(null);

// Complex object types
const [data, setData] = useState<{
  message: string;
  timestamp: string;
  id: string;
} | null>(null);
```

**Best practices:**
1. Let TypeScript infer simple types
2. Explicitly type arrays and complex objects
3. Use union types with `null` for optional data
4. Create interfaces for reusable types

---

## 🔧 Development Workflow

### 5. Error Resolution Process

**Step-by-step debugging:**

1. **Identify the error type**
   - TypeScript compilation error
   - ESLint/linting error
   - Runtime error
   - Build process error

2. **Use appropriate tools**
   ```bash
   # TypeScript check
   npx tsc --noEmit
   
   # ESLint check
   npx eslint src/ --ext .ts,.tsx --fix
   
   # Build test
   npm run build
   ```

3. **Fix in order of priority**
   - TypeScript errors (blocking)
   - ESLint errors (blocking in CI)
   - Warnings (non-blocking)
   - UI/UX issues (non-blocking)

4. **Test thoroughly**
   - Run all checks after each fix
   - Test in development mode
   - Test build process

---

## 📝 Code Quality Patterns

### 6. Consistent Styling

**Dark theme code blocks:**
```jsx
<pre className="p-4 overflow-x-auto text-sm bg-gray-900 rounded">
  <code className="text-white">
    {/* Your code here */}
  </code>
</pre>
```

**Inline code snippets:**
```jsx
<code className="px-2 py-1 text-white bg-gray-800 rounded">
  functionName()
</code>
```

**Code comparison blocks:**
```jsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  <div>
    <p className="mb-2 text-xs font-medium text-red-800">❌ Wrong:</p>
    <pre className="p-2 text-xs bg-gray-900 rounded">
      <code className="text-white">{`// Wrong example`}</code>
    </pre>
  </div>
  <div>
    <p className="mb-2 text-xs font-medium text-green-800">✅ Correct:</p>
    <pre className="p-2 text-xs bg-gray-900 rounded">
      <code className="text-white">{`// Correct example`}</code>
    </pre>
  </div>
</div>
```

---

## 🚀 Quick Reference

### Common Fixes Checklist

**TypeScript Issues:**
- [ ] Replace `any` with specific types
- [ ] Use interfaces for complex objects
- [ ] Add union types for nullable values
- [ ] Check for unused variables

**JSX Encoding Issues:**
- [ ] Use `=&gt;` for arrow functions in inline code
- [ ] Use `{"=>"}` for arrow functions in styled spans
- [ ] Use template literals for complex code blocks
- [ ] Test arrow function rendering in browser

**Contrast Issues:**
- [ ] Dark backgrounds for code blocks
- [ ] White text on dark backgrounds
- [ ] Consistent styling across components

**Build Issues:**
- [ ] Run `npx tsc --noEmit`
- [ ] Run `npx eslint src/ --ext .ts,.tsx --fix`
- [ ] Test with `npm run build`

**Deployment Issues:**
- [ ] Verify `.nojekyll` exists in `public/` directory
- [ ] Check GitHub Pages source is set to "GitHub Actions"
- [ ] Confirm build output includes `.nojekyll` file
- [ ] Test deployed site shows React app, not README.md

**Testing Commands:**
```bash
# TypeScript check
npx tsc --noEmit

# ESLint check and fix
npx eslint src/ --ext .ts,.tsx --fix

# Build test
npm run build

# Development server
npm run dev

# Deployment checks
ls -la public/.nojekyll          # Verify .nojekyll exists
npm run build && ls -la out/     # Check build output
```

---

## 🔍 Future Prevention

### Pre-commit Checklist

1. **Before committing:**
   - Run TypeScript check
   - Run ESLint check
   - Test build process
   - Check UI contrast

2. **Code review focus:**
   - TypeScript type safety
   - ESLint compliance
   - UI accessibility
   - Consistent patterns

3. **CI/CD considerations:**
   - All builds must pass TypeScript compilation
   - All builds must pass ESLint checks
   - Contrast ratios should meet WCAG standards

---

## 🧠 CppMemory-Specific Issues

### 10. Progress Tracking System

#### **Issue: Progress not displaying correctly**

**Common scenarios:**
- Cards not showing correct completion status
- Chapter progress percentage incorrect
- Visual indicators not updating

**❌ Common mistakes:**
```typescript
// Wrong: Not checking for 100% completion
const isCompleted = quizScore && quizScore.percentage > 0;

// Wrong: Not calculating chapter progress correctly
const chapterProgress = completedQuizzes.length / totalQuizzes;
```

**✅ Correct implementation:**
```typescript
// Correct: Only 100% scores count as completed
const isCompleted = quizScore && quizScore.percentage === 100;

// Correct: Use the progress hook
const { getChapterProgress, isQuizCompleted } = useQuizProgress();
const chapterProgress = getChapterProgress(childQuizIds);
```

### 11. LocalStorage Progress Persistence

#### **Issue: Quiz progress not persisting between sessions**

**Common scenarios:**
- Users lose progress when refreshing page
- Scores not saving correctly
- Quiz completion status reset

**❌ Common mistakes:**
```typescript
// Wrong: Using session storage (clears on tab close)
sessionStorage.setItem('quizProgress', JSON.stringify(data));

// Wrong: Not handling JSON parse errors
const scores = JSON.parse(localStorage.getItem('quizScores'));

// Wrong: Saving partial scores as completed
localStorage.setItem('completedQuizzes', JSON.stringify([...completed, quizId]));
```

**✅ Correct implementation:**
```typescript
// Safe localStorage with error handling and 100% requirement
const saveQuizScore = (quizId: string, correct: number, total: number) => {
  const percentage = Math.round((correct / total) * 100);
  const completed = percentage === 100; // Only 100% counts as completed
  
  try {
    const newScore = { correct, total, percentage, completed };
    const updatedScores = { ...quizScores, [quizId]: newScore };
    localStorage.setItem('quizScores', JSON.stringify(updatedScores));
    
    // Only add to completed list if 100%
    if (completed && !completedQuizzes.includes(quizId)) {
      const updatedCompleted = [...completedQuizzes, quizId];
      localStorage.setItem('completedQuizzes', JSON.stringify(updatedCompleted));
    }
  } catch (error) {
    console.warn('LocalStorage not available:', error);
  }
};
```

#### **Issue: Quiz questions not displaying correctly**

**Problem:** Question data structure mismatches component expectations.

**✅ Type-safe quiz structure:**
```typescript
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  chapter: string;
  sections: string[];
  questions: Question[];
}
```

### 11. React State Management in Quiz Components

#### **Issue: Quiz state not updating correctly**

**Common scenarios:**
- Multiple rapid clicks on answer options
- Progress not updating immediately
- Score calculations incorrect

**❌ Wrong patterns:**
```typescript
// Wrong: Direct state mutation
const [answers, setAnswers] = useState([]);
answers.push(newAnswer); // Mutates state directly

// Wrong: Race conditions with rapid clicks
const handleAnswer = (answer) => {
  setScore(score + 1); // Uses stale state
};
```

**✅ Correct patterns:**
```typescript
// Correct: Immutable updates
const [answers, setAnswers] = useState([]);
setAnswers(prev => [...prev, newAnswer]);

// Correct: Functional updates to avoid race conditions
const handleAnswer = (correct) => {
  if (selectedAnswer !== null) return; // Prevent multiple clicks
  
  setSelectedAnswer(answerIndex);
  setCorrectAnswers(prev => correct ? prev + 1 : prev);
  setAnsweredQuestions(prev => prev + 1);
};
```

---

## 🚀 CppMemory Quick Reference

### Development Commands
```bash
# Start development (Windows PowerShell compatible)
npm run dev

# Build for production
npm run build

# Type checking
npx tsc --noEmit

# Linting
npx eslint src/ --ext .ts,.tsx --fix

# Dependency issues
npm install --force
```

### Common File Locations
- Quiz data: `src/data/quizzes.ts` (includes codeSnippet fields)
- Quiz components: `src/components/QuizCard.tsx` (syntax highlighting), `src/components/QuizProgress.tsx`
- Quiz pages: `src/app/quiz/[id]/page.tsx`
- Homepage: `src/app/page.tsx`
- Styles: `src/app/globals.css`
- Documentation: `docs/` directory with updated guides

### Deployment Checklist
- [ ] Verify `.nojekyll` exists in `public/` directory
- [ ] Test all quiz functionality locally with option shuffling
- [ ] Verify code snippets display with proper syntax highlighting
- [ ] Test fade animations between questions (800ms out, 1100ms in)
- [ ] Ensure TypeScript compilation passes
- [ ] Check responsive design on mobile
- [ ] Confirm localStorage functionality works
- [ ] Test quiz completion flow end-to-end
- [ ] Verify multiline comments display correctly in green

## 🎨 Code Snippet & Animation Issues

### 12. Syntax Highlighting Problems

#### **Issue: Code snippets not highlighting correctly**

**Common scenarios:**
- Multiline comments showing mixed colors
- Keywords not being highlighted as blue
- String literals not showing in yellow

**❌ Common mistakes:**
```typescript
// Wrong: Using regex replacements that conflict
.replace(/keyword/g, '<span class="blue">keyword</span>')
.replace(/"/g, '<span class="yellow">"</span>') // Conflicts with HTML!
```

**✅ Correct implementation:**
```typescript
// Correct: Token-based parsing
const tokenizeLine = (line: string, startInComment: boolean) => {
  // Process character by character to avoid conflicts
  // Track state between lines for multiline comments
  return { tokens, insideMultilineComment };
};
```

**Debugging steps:**
1. Check if `codeSnippet` field exists in question data
2. Verify tokenizer handles multiline comments with state persistence
3. Ensure CSS classes exist: `text-blue-400`, `text-green-400`, etc.

### 13. Animation Performance Issues

#### **Issue: Animations stuttering or not smooth**

**Common scenarios:**
- Fade transitions jerky on mobile devices
- Animation timing feels off
- Questions appearing before fade completes

**✅ Solutions:**
```typescript
// Correct timing coordination
const timer = setTimeout(() => {
  // Update content during fade out
  setShuffledOptions(shuffled);
  setIsVisible(true); // Start fade in
}, 800); // Match fade out duration

// Proper CSS classes
transition-opacity duration-[800ms]  // Fade out
transition-opacity duration-[1100ms] // Fade in
```

**Performance tips:**
- Use `transition-opacity` instead of complex animations
- Avoid animating `height`, `width`, or position
- Test on slower devices to ensure smoothness

### 14. Option Shuffling Issues

#### **Issue: Correct answer tracking broken after shuffling**

**Problem:** Using original `question.correctAnswer` index after shuffling options.

**❌ Wrong approach:**
```typescript
// Wrong: Still using original index
const isCorrect = optionIndex === question.correctAnswer; // Broken after shuffle
```

**✅ Correct approach:**
```typescript
// Correct: Track correctness with each option
const optionsWithCorrectFlag = question.options.map((option, index) => ({
  text: option,
  isCorrect: index === question.correctAnswer
}));

const shuffled = [...optionsWithCorrectFlag].sort(() => Math.random() - 0.5);
const isCorrect = shuffledOptions[optionIndex]?.isCorrect || false;
```

### 15. Visual Status System Issues

#### **Issue: Card colors not displaying correctly**

**Common scenarios:**
- Parent cards not showing correct completion status
- Child cards stuck in wrong visual state
- Progress colors inconsistent across pages

**❌ Wrong styling logic:**
```typescript
// Wrong: Not checking completion properly
const cardStyle = quizScore ? 'border-green-200' : 'border-gray-200';

// Wrong: Not handling attempted vs completed states
className={`${isCompleted ? 'border-green-200' : 'border-orange-200'}`}
```

**✅ Correct visual status logic:**
```typescript
// Correct: Proper state hierarchy
let borderStyle = 'border-gray-200';        // Default: not started
let bgStyle = 'bg-white';

if (isCompleted) {                          // 100% completion
  borderStyle = 'border-green-200';
  bgStyle = 'bg-green-50';
} else if (quizScore && !isCompleted) {     // Attempted but not 100%
  borderStyle = 'border-orange-200';
  bgStyle = 'bg-orange-50';
}

// For parent cards: check all children
if (quiz.isParent && quiz.children) {
  const chapterProgress = getChapterProgress(childQuizIds);
  if (chapterProgress.percentage === 100) {
    // All children completed
  } else if (chapterProgress.percentage > 0) {
    // Some children attempted/completed
  }
}
```

**Color System Reference:**
- 🟢 **Green** (`border-green-200`, `bg-green-50`): 100% mastery achieved
- 🟠 **Orange** (`border-orange-200`, `bg-orange-50`): In progress, not perfected
- ⚪ **Gray** (`border-gray-200`, `bg-white`): Fresh, not started

---

## 🔄 Recent Issues (July 2025)

### 16. Turbopack Development Server Errors

#### **Error: Cannot find module '../chunks/ssr/[turbopack]_runtime.js'**

**Problem:** Next.js 15 with Turbopack encountering stale build artifacts from static export builds.

**Common scenarios:**
- After running `npm run build` then trying `npm run dev`
- Switching between production and development modes
- Build artifacts conflicting with development server

**❌ Error context:**
```
Error: Cannot find module '../chunks/ssr/[turbopack]_runtime.js'
Require stack:
- C:\...\out\server\pages\_document.js
```

**✅ Complete solution:**
```bash
# Step 1: Clean all build artifacts
rm -rf .next out node_modules/.cache

# Step 2: Restart development server
npm run dev

# Step 3: If issues persist, force reinstall
npm install --force
```

**Prevention tips:**
- Don't run development server immediately after production builds
- Always clean artifacts when switching modes
- The `out` directory is only for static exports, not development

### 17. Build Manifest Missing in Development

#### **Error: ENOENT build manifest files missing**

**Error Message:**
```
Error: ENOENT: no such file or directory, open 'out/static/development/_buildManifest.js.tmp.xxx'
```

**Cause:** Development server trying to access files from static export output.

**Root cause:** The `out` directory from `npm run build` contains static export files that conflict with Turbopack's development server files.

**✅ Solution:**
```bash
# Remove static export output
rm -rf out

# Clean Next.js cache
rm -rf .next

# Restart development
npm run dev
```

**Why this works:**
- Static export (`out/`) is for production hosting
- Development server uses different file structure
- Turbopack expects clean environment

### 18. Placeholder Chapter Implementation

#### **Issue: Curriculum showing only Chapter 1**

**Problem:** After refactoring to modular data structure, only Chapter 1 appears on homepage.

**Symptoms:**
- Homepage shows single chapter instead of full curriculum
- Users can't see complete learning path
- Navigation incomplete

**✅ Solution process:**
```typescript
// 1. Create placeholder structure in placeholder-chapters.ts
export const chapter2Quiz: Quiz = {
  id: "chapter-2-functions",
  title: "Chapter 2 - Functions and Files",
  description: "Learn about functions, parameters, scope, and multi-file programs",
  chapter: "Chapter 2",
  sections: ["2.1 through 2.13", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    // Empty parts with proper structure
  ]
};

// 2. Update src/data/index.ts to import all chapters
import { 
  chapter2Quiz, chapter3Quiz, /* ... all chapters */
} from './placeholder-chapters';

// 3. Add to quizzes array
export const quizzes = [
  chapter1Quiz,
  chapter2Quiz, chapter3Quiz, /* ... all chapters */
];
```

**Implementation benefits:**
- Full curriculum visible to users
- Modular structure maintained
- Easy to add content chapter by chapter
- Build generates 102+ static pages

### 19. Console Ninja Warnings (Non-Critical)

#### **Warning: Next.js v15.3.5 not supported in Community edition**

**Message:**
```
✘ node v22.16.0, and next.js v15.3.5 are not yet supported in Community edition of Console Ninja
```

**Impact:** Cosmetic warning only - does not affect functionality

**Solutions:**
```bash
# Option 1: Ignore (recommended)
# This is just a VS Code extension warning

# Option 2: Disable Console Ninja extension
# In VS Code: Extensions → Console Ninja → Disable

# Option 3: Update when support available
# Wait for Console Ninja update
```

**Important:** This warning doesn't prevent development or deployment.

---

## 🚀 Updated Quick Reference (July 2025)

### Current Project Status
- **Total Chapters:** 28 complete curriculum structure
- **Active Content:** Chapter 1 COMPLETE (87+ questions across 4 parts)
  - Part 1: 26 questions (Statements, comments, variables)
  - Part 2: 87 questions (Assignment, initialization, iostream, undefined behavior)  
  - Part 3: 134 questions (Keywords, naming, formatting, operators)
  - Bonus: 45 questions (Modern C++, best practices, integer types)
- **Placeholder Chapters:** 2-28 (ready for content)
- **Static Pages Generated:** 102+ pages
- **Build Status:** ✅ All systems operational

### Environment Reset Commands
```bash
# Complete cleanup (when multiple issues occur)
rm -rf .next out node_modules/.cache
npm run dev

# Verify build still works
npm run build

# Development server
npm run dev
```

### Build Verification
```bash
# Check page generation count
npm run build | grep "Generating static pages"
# Should show: ✓ Generating static pages (102/102)

# Verify all chapters accessible
ls out/chapter/
# Should list all 28 chapter directories
```

### Port Management
- Development server auto-assigns ports (3000, 3001, 3002, etc.)
- Multiple instances can run simultaneously
- Port conflicts automatically resolved

---

*This troubleshooting guide should be updated as new CppMemory-specific issues are discovered and resolved.*
*Last Updated: July 19, 2025 - Added Turbopack and placeholder chapter solutions*