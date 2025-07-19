import { Quiz } from './types';

export const chapter4Quiz: Quiz = {
  id: "chapter-4-data-types",
  title: "Chapter 4 - Fundamental Data Types",
  description: "Master C++ fundamental data types, integers, floats, and type conversions",
  chapter: "Chapter 4",
  sections: ["4.1 through 4.18", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-4-part-1",
      title: "Fundamental Data Types - Part 1",
      description: "Integer types and basic data types",
      chapter: "Chapter 4",
      sections: ["4.1 through 4.6", "Integer fundamentals"],
      questions: []
    },
    {
      id: "chapter-4-part-2",
      title: "Fundamental Data Types - Part 2",
      description: "Floating point and character types",
      chapter: "Chapter 4",
      sections: ["4.7 through 4.12", "Floating point numbers"],
      questions: []
    },
    {
      id: "chapter-4-part-3",
      title: "Fundamental Data Types - Part 3",
      description: "Boolean types and type conversions",
      chapter: "Chapter 4",
      sections: ["4.13 through 4.18", "Boolean and conversions"],
      questions: []
    }
  ]
};