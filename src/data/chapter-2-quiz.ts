import { Quiz } from './types';

export const chapter2Quiz: Quiz = {
  id: "chapter-2-functions",
  title: "Chapter 2 - Functions and Files",
  description: "Learn about functions, parameters, scope, and multi-file programs",
  chapter: "Chapter 2",
  sections: ["2.1 through 2.13", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-2-part-1",
      title: "Functions and Files - Part 1",
      description: "Function basics and return values",
      chapter: "Chapter 2",
      sections: ["2.1 Introduction to functions", "2.2 Function return values", "2.3 Void functions"],
      questions: []
    },
    {
      id: "chapter-2-bonus",
      title: "Functions and Files - Bonus",
      description: "Modern C++ function features and build practices",
      chapter: "Chapter 2",
      sections: ["Bonus: Modern C++", "Build Systems", "Industry Standards"],
      questions: []
    }
  ]
};