import { Quiz } from './types';

export const chapter25Quiz: Quiz = {
  id: "chapter-25-virtual-functions",
  title: "Chapter 25 - Virtual Functions",
  description: "Master polymorphism with virtual functions and dynamic binding",
  chapter: "Chapter 25",
  sections: ["25.1 through 25.7", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-25-part-1",
      title: "Virtual Functions - Part 1",
      description: "Virtual function basics",
      chapter: "Chapter 25",
      sections: ["25.1 through 25.3", "Virtual basics"],
      questions: []
    },
    {
      id: "chapter-25-part-2",
      title: "Virtual Functions - Part 2",
      description: "Abstract classes and interfaces",
      chapter: "Chapter 25",
      sections: ["25.4 through 25.5", "Abstract classes"],
      questions: []
    },
    {
      id: "chapter-25-part-3",
      title: "Virtual Functions - Part 3",
      description: "Virtual destructors and polymorphism",
      chapter: "Chapter 25",
      sections: ["25.6 through 25.7", "Virtual destructors"],
      questions: []
    }
  ]
};