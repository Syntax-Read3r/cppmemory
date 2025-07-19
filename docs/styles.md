# CppMemory - Styling Guide

This document defines the consistent styling patterns used across the CppMemory quiz platform. Use this as a reference to maintain visual consistency and code quality.

## 🎨 Design System Overview

CppMemory follows a utility-first approach using Tailwind CSS with consistent patterns for:
- Hierarchical quiz platform with parent/child chapter organization
- User-controlled quiz progression with Next button interface
- Purple gradient theme with clean typography and visual progress indicators
- Interactive quiz components with option shuffling and proper badge handling
- Professional code snippets with C++ syntax highlighting and terminal-style headers
- Advanced progress tracking with reset functionality
- Mobile-first responsive design with flex layouts

---

## 📐 Page Structure & Layout

### Page Container Pattern
```jsx
<div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
  <div className="px-4 py-8 mx-auto max-w-7xl">
    {/* Page content */}
  </div>
</div>
```

**Classes:**
- `min-h-screen bg-gradient-to-br from-purple-50 to-blue-100` - Full viewport with purple gradient background
- `px-4 py-8` - Responsive padding (16px horizontal, 32px vertical)
- `max-w-7xl mx-auto` - Centered content with max width for quiz grids

### Spacing System
- **Major sections**: `space-y-8` (32px vertical spacing)
- **Component sections**: `space-y-4` (16px vertical spacing)
- **Inline elements**: `space-x-4` (16px horizontal spacing)
- **Small spacing**: `space-x-2` (8px horizontal spacing)

---

## 🎭 Component Containers & Cards

### Primary Card Pattern
```jsx
<div className="p-6 bg-white rounded-lg shadow-md">
  {/* Card content */}
</div>
```

**Usage:** All main content sections, interactive components, code examples

### Description Card Pattern
```jsx
<div className="p-6 mb-8 bg-white rounded-lg shadow-md">
  {/* Description content */}
</div>
```

**Usage:** Hook descriptions, explanatory sections at top of pages

### Status Cards
```jsx
// Info/Loading
<div className="p-4 border border-blue-200 rounded bg-blue-50">
  <p className="text-blue-800">{message}</p>
</div>

// Success
<div className="p-4 border border-green-200 rounded bg-green-50">
  <p className="text-green-800">{message}</p>
</div>

// Error
<div className="p-4 border border-red-200 rounded bg-red-50">
  <p className="text-red-800">{message}</p>
</div>

// Warning
<div className="p-4 border border-yellow-200 rounded bg-yellow-50">
  <p className="text-yellow-800">{message}</p>
</div>
```

**Usage:** Status messages, alerts, loading states

---

## 🔘 Button Styles & Variants

### Primary Action Buttons
```jsx
// Green (success/add actions)
<button className="px-4 py-2 text-white transition-colors bg-green-500 rounded hover:bg-green-600">
  Add Item
</button>

// Blue (primary actions)
<button className="px-4 py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600">
  Submit
</button>

// Red (danger/remove actions)
<button className="px-4 py-2 text-white transition-colors bg-red-500 rounded hover:bg-red-600">
  Remove
</button>

// Purple (special actions)
<button className="px-4 py-2 text-white transition-colors bg-purple-500 rounded hover:bg-purple-600">
  Update
</button>
```

### Secondary Buttons
```jsx
// Gray (neutral actions)
<button className="px-4 py-2 text-white transition-colors bg-gray-500 rounded hover:bg-gray-600">
  Cancel
</button>

// Code toggle buttons (smaller)
<button className="px-3 py-1 text-sm text-white transition-colors bg-gray-600 rounded hover:bg-gray-700">
  {showCode ? 'Hide Code' : 'View Code'}
</button>
```

### Toggle Buttons (Conditional Styling)
```jsx
<button
  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
    isToggled
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-gray-200 text-gray-900 hover:bg-gray-300 border-2 border-gray-400'
  }`}
>
  {isToggled ? 'ON' : 'OFF'}
</button>
```

### Disabled State
```jsx
<button
  disabled
  className="px-4 py-2 bg-gray-400 text-gray-600 cursor-not-allowed rounded"
>
  Disabled Button
</button>
```

---

## 💻 Code Block Styling

### Code Container Structure
```jsx
<div className="p-4 border border-gray-200 rounded bg-gray-50">
  <pre className="p-4 overflow-x-auto text-sm bg-gray-900 rounded">
    <code className="text-white">
      {/* Code content */}
    </code>
  </pre>
</div>
```

### Inline Code
```jsx
<code className="px-2 py-1 text-white bg-gray-800 rounded">
  useState()
</code>
```

### Syntax Highlighting Colors
```jsx
// Example with syntax highlighting
<pre className="p-4 overflow-x-auto text-sm bg-gray-900 rounded">
  <code>
    <span className="text-blue-400">const</span>
    <span className="text-white"> [</span>
    <span className="text-yellow-300">count</span>
    <span className="text-white">, </span>
    <span className="text-yellow-300">setCount</span>
    <span className="text-white">] = </span>
    <span className="text-purple-400">useState</span>
    <span className="text-white">(</span>
    <span className="text-orange-400">0</span>
    <span className="text-white">);</span>
  </code>
</pre>
```

**Syntax Color Mapping:**
- **Comments**: `text-green-400`
- **Keywords**: `text-blue-400`
- **Variables**: `text-yellow-300`
- **Strings**: `text-yellow-200`
- **Numbers**: `text-orange-400`
- **Functions**: `text-purple-400`
- **JSX tags**: `text-red-400`
- **JSX attributes**: `text-green-300`
- **Operators**: `text-cyan-400`
- **Default text**: `text-white`

### Code Block Headers
```jsx
<div className="flex items-center justify-between mb-4">
  <h2 className="text-xl font-semibold text-gray-700">Code Example</h2>
  <button className="px-3 py-1 text-sm text-white transition-colors bg-gray-600 rounded hover:bg-gray-700">
    {showCode ? 'Hide Code' : 'View Code'}
  </button>
</div>
```

---

## 🔤 Typography & Text

### Headings
```jsx
// Page title (H1)
<h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
  useState Hook Demo
</h1>

// Section title (H2)
<h2 className="mb-4 text-xl font-semibold text-gray-700">
  What is useState?
</h2>

// Subsection (H3)
<h3 className="mb-2 text-lg font-medium text-gray-800">
  Basic Usage
</h3>

// Code block header
<p className="mb-2 text-sm font-medium text-gray-700">
  Example:
</p>
```

### Body Text
```jsx
// Primary text
<p className="text-gray-700">
  This is the primary text content.
</p>

// Secondary text
<p className="text-gray-600">
  This is secondary text content.
</p>

// Small text
<p className="text-sm text-gray-700">
  This is small text content.
</p>

// Extra small text
<p className="text-xs text-gray-700">
  This is extra small text content.
</p>
```

### Status Text Colors
```jsx
// Success text
<p className="text-green-800">Success message</p>

// Error text
<p className="text-red-800">Error message</p>

// Warning text
<p className="text-yellow-800">Warning message</p>

// Info text
<p className="text-blue-800">Info message</p>
```

---

## 🎨 Color Schemes & Themes

### Primary Color Palette
- **Page background**: `bg-gradient-to-br from-purple-50 to-blue-100`
- **Card background**: `bg-white`
- **Border color**: `border-gray-200`
- **Primary text**: `text-gray-900`
- **Secondary text**: `text-gray-600`
- **Dark text**: `text-gray-800`

### CppMemory Theme Colors
- **Purple**: Primary brand color for buttons and accents (`bg-purple-600`, `text-purple-600`)
- **Blue**: Secondary accent and links (`bg-blue-500`, `text-blue-800`)
- **Green**: Completed/mastered state (100% score) (`bg-green-50`, `border-green-200`)
- **Orange**: In-progress state (attempted but not 100%) (`bg-orange-50`, `border-orange-200`)
- **Red**: Incorrect answers and error states (`bg-red-500`, `border-red-500`) 
- **Gray**: Fresh/not started state (`bg-white`, `border-gray-200`)

### Code Theme
- **Background**: `bg-gray-900`
- **Text**: `text-white`
- **Inline code background**: `bg-gray-800`

## 💻 Code Snippet Styling

### **Professional Code Display**
```jsx
// Terminal-style header with colored dots
<div className="bg-gray-800 px-4 py-2 text-white text-sm font-medium flex items-center">
  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
  C++ Code Example
</div>

// Syntax highlighted code area
<div className="bg-gray-900 p-4">
  <pre className="text-sm overflow-x-auto leading-relaxed">
    <code className="font-mono">{syntaxHighlightedCode}</code>
  </pre>
</div>
```

### **Syntax Highlighting Colors**
- **🔵 Keywords** (`int`, `void`, `return`) - `text-blue-400`
- **🟢 Comments** (`//`, `/* */`) - `text-green-400`
- **🟡 Strings** (`"Hello"`, `'A'`) - `text-yellow-300`
- **🟠 Numbers** (`42`, `3.14`) - `text-orange-400`
- **🟣 Identifiers** (variables, functions) - `text-purple-400`
- **🔵 Operators** (`+`, `<<`, `::`) - `text-cyan-400`
- **🩷 Preprocessor** (`#include`) - `text-pink-400`

### **Code Container Structure**
```jsx
<div className="mb-6 border border-gray-300 rounded-lg overflow-hidden">
  {/* Header with terminal dots */}
  <div className="bg-gray-800 px-4 py-2 text-white text-sm font-medium flex items-center">
    {/* Terminal-style dots */}
  </div>
  
  {/* Code content area */}
  <div className="bg-gray-900 p-4">
    {/* Syntax highlighted code */}
  </div>
</div>
```

## 🎯 Progress Tracking Cards

### **Card Status Visual System**
```jsx
// Dynamic card styling based on progress
{quizzes.map((quiz) => {
  let borderStyle = 'border-gray-200';     // Default: not started
  let bgStyle = 'bg-white';
  
  if (isCompleted) {                       // 100% completion
    borderStyle = 'border-green-200';
    bgStyle = 'bg-green-50';
  } else if (hasAttempted) {              // Attempted but not 100%
    borderStyle = 'border-orange-200';
    bgStyle = 'bg-orange-50';
  }
  
  return (
    <Link className={`border-2 ${borderStyle} ${bgStyle}`}>
      {/* Card content */}
    </Link>
  );
})}
```

### **Progress Status Indicators**
```jsx
// Completion badge for 100% scores
{finalScore === 100 && (
  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
    ✅ Section Completed!
  </div>
)}

// Progress percentage badge for in-progress quizzes
{quizScore && !isCompleted && (
  <span className="px-2 py-1 text-xs font-medium rounded-full text-yellow-800 bg-yellow-100">
    {quizScore.percentage}%
  </span>
)}
```

### **Chapter Progress Display**
```jsx
// Chapter completion percentage
<span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">
  {chapterProgress.percentage}% completed
</span>

// Progress overview card
<div className="text-center">
  <div className="text-2xl font-bold text-green-600">{chapterProgress.percentage}%</div>
  <div className="text-sm text-gray-600">Completed</div>
</div>
```

## ✨ Animation Patterns

### **Question Transitions**
```jsx
// Fade out animation (800ms)
transition-opacity duration-[800ms] opacity-0

// Fade in animation (1100ms)  
transition-opacity duration-[1100ms] opacity-100
```

### **Animation States**
- **Initial Load** - No animation, immediate display
- **Question Change** - Fade out → Content update → Fade in
- **Timing** - 800ms out + 1100ms in = ~1.9s total transition

---

## 🔄 Progress Management & Reset Functionality

### **Progress Status Visual System**
```jsx
// Dynamic card styling based on progress
{quizzes.map((quiz) => {
  let borderStyle = 'border-gray-200';     // Default: not started
  let bgStyle = 'bg-white';
  
  if (isCompleted) {                       // 100% completion
    borderStyle = 'border-green-200';
    bgStyle = 'bg-green-50';
  } else if (hasAttempted) {              // Attempted but not 100%
    borderStyle = 'border-orange-200';
    bgStyle = 'bg-orange-50';
  }
  
  return (
    <Link className={`border-2 ${borderStyle} ${bgStyle}`}>
      {/* Card content */}
    </Link>
  );
})}
```

### **Reset Button Pattern**
```jsx
// Chapter-level reset (in progress overview section)
{chapterProgress.completed > 0 && (
  <button
    onClick={handleResetChapter}
    className="mt-2 sm:mt-0 px-4 py-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 transition-colors"
  >
    🔄 Reset Chapter Progress
  </button>
)}

// Global reset (in main section header)
{hasAnyProgress && (
  <button
    onClick={handleResetAll}
    className="mt-2 sm:mt-0 px-4 py-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 transition-colors"
  >
    🔄 Reset All Progress
  </button>
)}
```

**Reset Button Guidelines:**
- Only show when there's progress to reset
- Use red color scheme to indicate destructive action
- Include emoji icon for visual clarity
- Responsive layout with proper spacing
- Confirmation dialogs required before action

### **Flex Layout for Badges**
```jsx
// Proper flex handling to prevent badge compression
<div className="flex items-center justify-between mb-3">
  <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-3">
    {quiz.title}
  </h3>
  <span className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full whitespace-nowrap flex-shrink-0">
    {quiz.isParent ? `${quiz.children?.length || 0} parts` : `${quiz.questions.length} questions`}
  </span>
</div>
```

**Badge Layout Rules:**
- Title gets `flex-1 mr-3` for available space + margin
- Badge gets `whitespace-nowrap flex-shrink-0` to prevent compression
- Always maintain readable badge text regardless of title length

---

## 📝 User-Controlled Quiz Interface

### **Next Button Pattern**
```jsx
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
```

### **Quiz Completion with Study Recommendations**
```jsx
{/* Study recommendations for low scores */}
{finalScore < 50 && quiz.id === 'chapter-1-part-1' && (
  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
    <h3 className="text-lg font-semibold text-blue-900 mb-3">📖 Recommended Study Materials</h3>
    <p className="text-blue-800 text-sm mb-4">
      Since you scored below 50%, we recommend reviewing these LearnCpp.com sections before retaking the quiz:
    </p>
    <div className="space-y-2">
      <a
        href="https://www.learncpp.com/cpp-tutorial/..."
        target="_blank"
        rel="noopener noreferrer"
        className="block p-3 bg-white border border-blue-300 rounded-lg hover:bg-blue-100 transition-colors"
      >
        <div className="flex items-center">
          <span className="text-blue-600 font-medium mr-2">1.1</span>
          <span className="text-gray-800">Section Title</span>
          <span className="ml-auto text-blue-500">↗</span>
        </div>
      </a>
    </div>
    <p className="text-blue-700 text-xs mt-3">
      💡 These links will open in a new tab so you can study and come back to retake the quiz.
    </p>
  </div>
)}
```

**Study Recommendations Guidelines:**
- Only show for specific quizzes when score < 50%
- Blue color scheme for educational/informational content
- External link indicators with new tab behavior
- Clear section numbering and descriptions
- Helpful tip about new tab behavior

---

## 🏗️ Hierarchical Chapter Structure

### **Chapter Page Layout**
```jsx
// Chapter header with reset button
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
  <h3 className="text-lg font-semibold text-gray-800">Chapter Progress</h3>
  {chapterProgress.completed > 0 && (
    <button /* reset button */ />
  )}
</div>

// Progress stats grid
<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
  <div className="text-center">
    <div className="text-2xl font-bold text-purple-600">{totalSections}</div>
    <div className="text-sm text-gray-600">Total Sections</div>
  </div>
  {/* More stats */}
</div>
```

### **Main Page Section Header**
```jsx
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
  <h2 className="flex items-center text-2xl font-semibold text-gray-800">
    📚 C++ Learning Quizzes
    <span className="px-2 py-1 ml-3 text-sm text-purple-800 bg-purple-100 rounded-full">
      Based on LearnCpp.com
    </span>
  </h2>
  {hasAnyProgress && (
    <button /* global reset button */ />
  )}
</div>
```

## ⚡ Next.js 15 Patterns

### **Params Handling with React.use()**
```jsx
// Chapter page with Promise params unwrapping
interface ChapterPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ChapterPage({ params }: ChapterPageProps) {
  // Unwrap the params Promise
  const resolvedParams = use(params);
  
  // Use resolved params
  const parentChapter = quizzes.find(quiz => quiz.id === resolvedParams.id && quiz.isParent);
}
```

### **Client Component Params**
```jsx
// Quiz page using useParams for client components
export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;
  // Continue with component logic
}
```

**Next.js 15 Guidelines:**
- Use `React.use()` for server component params (Promise unwrapping)
- Use `useParams()` hook for client component navigation
- Always import `use` from 'react' when needed
- Update TypeScript interfaces to reflect Promise params

---

## 📱 Interactive Elements

### Form Inputs
```jsx
// Standard input field
<input
  type="text"
  className="px-3 py-2 text-gray-800 placeholder-gray-500 border-2 border-gray-300 rounded 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Enter text..."
/>

// Full width input
<input
  type="text"
  className="flex-1 px-3 py-2 text-gray-800 placeholder-gray-500 border-2 border-gray-300 rounded 
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  placeholder="Enter text..."
/>

// Input with error state
<input
  type="text"
  className="px-3 py-2 text-gray-800 placeholder-gray-500 border-2 border-red-500 rounded 
           focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
  placeholder="Enter text..."
/>
```

### Form Labels
```jsx
<label className="block text-sm font-medium text-gray-700">
  Field Name
</label>
```

### Error Messages
```jsx
<p className="mt-1 text-sm text-red-600">
  This field is required
</p>
```

---

## 📐 Layout Patterns

### Flex Layouts
```jsx
// Header with title and button
<div className="flex items-center justify-between mb-4">
  <h2 className="text-xl font-semibold text-gray-700">Section Title</h2>
  <button className="px-3 py-1 text-sm text-white transition-colors bg-gray-600 rounded hover:bg-gray-700">
    Action
  </button>
</div>

// Inline elements with spacing
<div className="flex items-center space-x-4">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

### Grid Layouts
```jsx
// Two-column grid (responsive)
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

---

## 📱 Responsive Design

### Breakpoint Strategy
- **Mobile first**: Start with `grid-cols-1`, single column layouts
- **Medium screens**: Use `md:grid-cols-2` for side-by-side content
- **Consistent spacing**: Maintain spacing across all breakpoints

### Responsive Patterns
```jsx
// Responsive grid
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
  {/* Content */}
</div>

// Responsive text (if needed)
<h1 className="text-2xl md:text-3xl font-bold">
  Responsive Title
</h1>
```

---

## 🔧 Component Patterns

### Section Header Pattern
```jsx
<div className="flex items-center justify-between mb-4">
  <h2 className="text-xl font-semibold text-gray-700">Section Title</h2>
  <button
    onClick={() => setShowCode(!showCode)}
    className="px-3 py-1 text-sm text-white transition-colors bg-gray-600 rounded hover:bg-gray-700"
  >
    {showCode ? 'Hide Code' : 'View Code'}
  </button>
</div>
```

### Collapsible Code Section Pattern
```jsx
{showCode && (
  <div className="p-4 mt-4 border border-gray-200 rounded bg-gray-50">
    <pre className="p-4 overflow-x-auto text-sm bg-gray-900 rounded">
      <code className="text-white">
        {/* Code content */}
      </code>
    </pre>
  </div>
)}
```

### Status Display Pattern
```jsx
<div className="p-4 border border-blue-200 rounded bg-blue-50">
  <p className="text-blue-800">
    <strong>Status:</strong> {status}
  </p>
</div>
```

---

## 🎯 Best Practices

### 1. Consistency
- Always use the same classes for similar components
- Follow the established color scheme
- Maintain consistent spacing patterns

### 2. Accessibility
- Ensure proper contrast ratios
- Use semantic HTML elements
- Include focus states for interactive elements

### 3. Responsive Design
- Use mobile-first approach
- Test on multiple screen sizes
- Maintain readability across devices

### 4. Code Quality
- Use conditional classes for dynamic states
- Keep utility classes organized and readable
- Follow Tailwind CSS best practices

### 5. Performance
- Use `transition-colors` for smooth hover effects
- Optimize for fast rendering
- Minimize CSS bundle size

---

## 📋 Component Checklist

When creating new components, ensure they include:

### Required Elements
- [ ] Consistent card styling (`p-6 bg-white rounded-lg shadow-md`)
- [ ] Proper typography classes with flex layouts for badges
- [ ] Appropriate color scheme (green=completed, orange=in-progress, gray=fresh)
- [ ] Hover states for interactive elements
- [ ] Focus states for accessibility
- [ ] Responsive design considerations with proper flex handling

### Progress & Reset Functionality
- [ ] Visual progress indicators with proper status detection
- [ ] Reset buttons with red color scheme for destructive actions
- [ ] Confirmation dialogs before destructive operations
- [ ] Smart visibility (only show when there's progress to reset)
- [ ] Proper flex layouts to prevent badge compression

### User Interface Patterns
- [ ] User-controlled progression with Next buttons
- [ ] Study recommendations for low scores (< 50%)
- [ ] External link indicators with new tab behavior
- [ ] Proper animation handling (skip on first load)
- [ ] Hierarchical navigation support

### Code Sections
- [ ] Terminal-style headers with colored dots
- [ ] C++ syntax highlighting with proper tokenization
- [ ] Professional code container styling
- [ ] Proper multiline comment support

### Next.js 15 Compatibility
- [ ] React.use() for Promise params unwrapping
- [ ] Proper TypeScript interfaces for Promise params
- [ ] useParams() for client component navigation
- [ ] Correct import statements for React.use

### Layout & Responsive Design
- [ ] Proper spacing using space utilities
- [ ] Responsive grid layouts with mobile-first approach
- [ ] Flex layouts for component headers with reset buttons
- [ ] Badge handling with flex-shrink-0 and whitespace-nowrap
- [ ] Consistent padding and margins across breakpoints

---

## 🔍 Common Mistakes to Avoid

1. **Inconsistent spacing**: Always use the established spacing system
2. **Wrong color usage**: Follow the color scheme (green/orange/gray for progress status)
3. **Missing hover states**: All interactive elements need hover effects
4. **Poor contrast**: Ensure text is readable against backgrounds
5. **Badge compression**: Always use `flex-shrink-0` and `whitespace-nowrap` for badges
6. **Missing reset confirmations**: Destructive actions must have confirmation dialogs
7. **Incorrect progress detection**: Use `hasAttempted` for orange status, not just `percentage > 0`
8. **Animation on first load**: Skip fade transitions for initial question display
9. **Missing responsive layouts**: Test badge/title flex behavior on mobile devices
10. **Next.js 15 params**: Use `React.use()` for server components, `useParams()` for client components
11. **Incorrect external links**: Always include `target="_blank"` and `rel="noopener noreferrer"`
12. **Missing study recommendations**: Implement for quizzes with scores < 50%

---

*This styling guide should be referenced for all new components and updated as patterns evolve.*