import { Quiz } from './types';

export const chapter17Quiz: Quiz = {
  id: "chapter-17-arrays",
  title: "Chapter 17 - Fixed-size Arrays",
  description: "Learn std::array and C-style arrays for fixed-size data storage",
  chapter: "Chapter 17",
  sections: ["17.1 through 17.7", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-17-part-1",
      title: "Fixed-size Arrays - Part 1",
      description: "Array fundamentals and std::array",
      chapter: "Chapter 17",
      sections: ["17.1 through 17.4", "Array basics"],
      questions: []
    },
    {
      id: "chapter-17-part-2",
      title: "Fixed-size Arrays - Part 2",
      description: "C-style arrays and multidimensional arrays",
      chapter: "Chapter 17",
      sections: ["17.5 through 17.7", "C-style arrays"],
      questions: []
    }
  ]
};