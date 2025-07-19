import { Quiz } from './types';

export const chapter8Quiz: Quiz = {
  id: "chapter-8-control-flow",
  title: "Chapter 8 - Control Flow",
  description: "Master control flow with if statements, loops, and switches",
  chapter: "Chapter 8",
  sections: ["8.1 through 8.15", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-8-part-1",
      title: "Control Flow - Part 1",
      description: "If statements and logical operators",
      chapter: "Chapter 8",
      sections: ["8.1 through 8.5", "Conditional statements"],
      questions: []
    },
    {
      id: "chapter-8-part-2",
      title: "Control Flow - Part 2",
      description: "Switch statements and goto",
      chapter: "Chapter 8",
      sections: ["8.6 through 8.10", "Switch and goto"],
      questions: []
    },
    {
      id: "chapter-8-part-3",
      title: "Control Flow - Part 3",
      description: "Loops and random number generation",
      chapter: "Chapter 8",
      sections: ["8.11 through 8.15", "Loops and random"],
      questions: []
    }
  ]
};