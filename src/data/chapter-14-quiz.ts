import { Quiz } from './types';

export const chapter14Quiz: Quiz = {
  id: "chapter-14-classes",
  title: "Chapter 14 - Introduction to Classes",
  description: "Learn object-oriented programming fundamentals with C++ classes",
  chapter: "Chapter 14",
  sections: ["14.1 through 14.15", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-14-part-1",
      title: "Introduction to Classes - Part 1",
      description: "Class basics and member functions",
      chapter: "Chapter 14",
      sections: ["14.1 through 14.4", "Class fundamentals"],
      questions: []
    },
    {
      id: "chapter-14-part-2",
      title: "Introduction to Classes - Part 2",
      description: "Constructors and destructors",
      chapter: "Chapter 14",
      sections: ["14.5 through 14.9", "Constructors"],
      questions: []
    },
    {
      id: "chapter-14-part-3",
      title: "Introduction to Classes - Part 3",
      description: "Access specifiers and encapsulation",
      chapter: "Chapter 14",
      sections: ["14.10 through 14.15", "Access control"],
      questions: []
    }
  ]
};