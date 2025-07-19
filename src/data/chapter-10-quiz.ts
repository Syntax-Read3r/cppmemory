import { Quiz } from './types';

export const chapter10Quiz: Quiz = {
  id: "chapter-10-type-conversion",
  title: "Chapter 10 - Type Conversion and Deduction",
  description: "Master type conversions, aliases, and auto keyword in C++",
  chapter: "Chapter 10",
  sections: ["10.1 through 10.10", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-10-part-1",
      title: "Type Conversion and Deduction - Part 1",
      description: "Implicit type conversion",
      chapter: "Chapter 10",
      sections: ["10.1 through 10.4", "Implicit conversion"],
      questions: []
    },
    {
      id: "chapter-10-part-2",
      title: "Type Conversion and Deduction - Part 2",
      description: "Explicit type conversion and casts",
      chapter: "Chapter 10",
      sections: ["10.5 through 10.7", "Explicit conversion"],
      questions: []
    },
    {
      id: "chapter-10-part-3",
      title: "Type Conversion and Deduction - Part 3",
      description: "Type aliases and auto keyword",
      chapter: "Chapter 10",
      sections: ["10.8 through 10.10", "Aliases and auto"],
      questions: []
    }
  ]
};