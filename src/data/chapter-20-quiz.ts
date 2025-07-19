import { Quiz } from './types';

export const chapter20Quiz: Quiz = {
  id: "chapter-20-advanced-functions",
  title: "Chapter 20 - Advanced Functions",
  description: "Function pointers, recursion, and lambda expressions",
  chapter: "Chapter 20",
  sections: ["20.1 through 20.6", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-20-part-1",
      title: "Advanced Functions - Part 1",
      description: "Function pointers and recursion",
      chapter: "Chapter 20",
      sections: ["20.1 through 20.3", "Function pointers"],
      questions: []
    },
    {
      id: "chapter-20-part-2",
      title: "Advanced Functions - Part 2",
      description: "Lambda expressions and std::function",
      chapter: "Chapter 20",
      sections: ["20.4 through 20.6", "Lambda expressions"],
      questions: []
    }
  ]
};