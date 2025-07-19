import { Quiz } from './types';

export const chapter6Quiz: Quiz = {
  id: "chapter-6-operators",
  title: "Chapter 6 - Operators",
  description: "Master C++ operators, precedence, and logical operations",
  chapter: "Chapter 6",
  sections: ["6.1 through 6.9", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-6-part-1",
      title: "Operators - Part 1",
      description: "Arithmetic and assignment operators",
      chapter: "Chapter 6",
      sections: ["6.1 through 6.3", "Basic operators"],
      questions: []
    },
    {
      id: "chapter-6-part-2",
      title: "Operators - Part 2",
      description: "Increment, decrement and precedence",
      chapter: "Chapter 6",
      sections: ["6.4 through 6.6", "Operator precedence"],
      questions: []
    },
    {
      id: "chapter-6-part-3",
      title: "Operators - Part 3",
      description: "Logical and comparison operators",
      chapter: "Chapter 6",
      sections: ["6.7 through 6.9", "Logical operations"],
      questions: []
    }
  ]
};