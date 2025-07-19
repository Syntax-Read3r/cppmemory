import { Quiz } from './types';

export const chapter24Quiz: Quiz = {
  id: "chapter-24-inheritance",
  title: "Chapter 24 - Inheritance",
  description: "Learn inheritance fundamentals and class hierarchies",
  chapter: "Chapter 24",
  sections: ["24.1 through 24.7", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-24-part-1",
      title: "Inheritance - Part 1",
      description: "Basic inheritance concepts",
      chapter: "Chapter 24",
      sections: ["24.1 through 24.3", "Basic inheritance"],
      questions: []
    },
    {
      id: "chapter-24-part-2",
      title: "Inheritance - Part 2",
      description: "Inheritance and constructors",
      chapter: "Chapter 24",
      sections: ["24.4 through 24.5", "Constructors"],
      questions: []
    },
    {
      id: "chapter-24-part-3",
      title: "Inheritance - Part 3",
      description: "Multiple inheritance and virtual base classes",
      chapter: "Chapter 24",
      sections: ["24.6 through 24.7", "Multiple inheritance"],
      questions: []
    }
  ]
};