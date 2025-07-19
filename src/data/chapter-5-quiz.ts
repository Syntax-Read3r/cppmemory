import { Quiz } from './types';

export const chapter5Quiz: Quiz = {
  id: "chapter-5-constants",
  title: "Chapter 5 - Constants and Strings",
  description: "Learn about constants, literals, numeral systems, and string handling",
  chapter: "Chapter 5",
  sections: ["5.1 through 5.11", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-5-part-1",
      title: "Constants and Strings - Part 1",
      description: "Constants and literals",
      chapter: "Chapter 5",
      sections: ["5.1 through 5.4", "Constants fundamentals"],
      questions: []
    },
    {
      id: "chapter-5-part-2",
      title: "Constants and Strings - Part 2",
      description: "Numeral systems and string introduction",
      chapter: "Chapter 5",
      sections: ["5.5 through 5.8", "Numeral systems"],
      questions: []
    },
    {
      id: "chapter-5-part-3",
      title: "Constants and Strings - Part 3",
      description: "String handling and manipulation",
      chapter: "Chapter 5",
      sections: ["5.9 through 5.11", "String operations"],
      questions: []
    }
  ]
};