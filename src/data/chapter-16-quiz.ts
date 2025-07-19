import { Quiz } from './types';

export const chapter16Quiz: Quiz = {
  id: "chapter-16-vectors",
  title: "Chapter 16 - Dynamic Arrays: std::vector",
  description: "Master dynamic arrays and containers with std::vector",
  chapter: "Chapter 16",
  sections: ["16.1 through 16.7", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-16-part-1",
      title: "Dynamic Arrays: std::vector - Part 1",
      description: "Vector basics and operations",
      chapter: "Chapter 16",
      sections: ["16.1 through 16.3", "Vector fundamentals"],
      questions: []
    },
    {
      id: "chapter-16-part-2",
      title: "Dynamic Arrays: std::vector - Part 2",
      description: "Vector algorithms and performance",
      chapter: "Chapter 16",
      sections: ["16.4 through 16.7", "Vector algorithms"],
      questions: []
    }
  ]
};