import { Quiz } from './types';

export const chapter7Quiz: Quiz = {
  id: "chapter-7-scope",
  title: "Chapter 7 - Scope, Duration, and Linkage",
  description: "Understand variable scope, lifetime, and linking in C++",
  chapter: "Chapter 7",
  sections: ["7.1 through 7.16", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-7-part-1",
      title: "Scope, Duration, and Linkage - Part 1",
      description: "Basic scope and local variables",
      chapter: "Chapter 7",
      sections: ["7.1 through 7.5", "Variable scope"],
      questions: []
    },
    {
      id: "chapter-7-part-2",
      title: "Scope, Duration, and Linkage - Part 2",
      description: "Global variables and linkage",
      chapter: "Chapter 7",
      sections: ["7.6 through 7.11", "Global scope"],
      questions: []
    },
    {
      id: "chapter-7-part-3",
      title: "Scope, Duration, and Linkage - Part 3",
      description: "Static variables and advanced scope",
      chapter: "Chapter 7",
      sections: ["7.12 through 7.16", "Static and advanced"],
      questions: []
    }
  ]
};