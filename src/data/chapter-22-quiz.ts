import { Quiz } from './types';

export const chapter22Quiz: Quiz = {
  id: "chapter-22-move-semantics",
  title: "Chapter 22 - Move Semantics and Smart Pointers",
  description: "Master modern C++ memory management with smart pointers",
  chapter: "Chapter 22",
  sections: ["22.1 through 22.6", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-22-part-1",
      title: "Move Semantics and Smart Pointers - Part 1",
      description: "Move semantics and rvalue references",
      chapter: "Chapter 22",
      sections: ["22.1 through 22.3", "Move semantics"],
      questions: []
    },
    {
      id: "chapter-22-part-2",
      title: "Move Semantics and Smart Pointers - Part 2",
      description: "Smart pointers and RAII",
      chapter: "Chapter 22",
      sections: ["22.4 through 22.6", "Smart pointers"],
      questions: []
    }
  ]
};