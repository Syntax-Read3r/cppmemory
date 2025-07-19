// Template for creating new chapter quiz files
// Copy this file and rename to chapter-X-quiz.ts

import { Quiz } from './types';

export const chapterXQuiz: Quiz = {
  id: "chapter-X-topic", // Update with actual chapter number and topic
  title: "Chapter X - Topic Name", // Update with actual title
  description: "Description of the chapter content", // Update with actual description
  chapter: "Chapter X", // Update with actual chapter number
  sections: ["X.1 through X.Y", "Complete chapter coverage"], // Update with actual sections
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-X-part-1",
      title: "Chapter X - Part 1",
      description: "First part description",
      chapter: "Chapter X",
      sections: ["X.1 Section name", "X.2 Section name", "X.3 Section name"],
      questions: [
        // Add questions here
        // {
        //   id: 1,
        //   question: "Question text?",
        //   options: [
        //     "Option A",
        //     "Option B", 
        //     "Option C",
        //     "Option D"
        //   ],
        //   correctAnswer: 0, // Index of correct option (0-3)
        //   explanation: "Explanation of why this is correct",
        //   codeSnippet: `code here`, // Optional
        //   codeLanguage: "cpp" // Optional
        // }
      ]
    }
    // Add more parts as needed
  ]
};