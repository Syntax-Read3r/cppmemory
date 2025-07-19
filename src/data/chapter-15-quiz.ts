import { Quiz } from './types';

export const chapter15Quiz: Quiz = {
  id: "chapter-15-more-classes",
  title: "Chapter 15 - More on Classes",
  description: "Advanced class features including static members and friend functions",
  chapter: "Chapter 15",
  sections: ["15.1 through 15.6", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-15-part-1",
      title: "More on Classes - Part 1",
      description: "Static members and nested types",
      chapter: "Chapter 15",
      sections: ["15.1 through 15.3", "Static members"],
      questions: []
    },
    {
      id: "chapter-15-part-2",
      title: "More on Classes - Part 2",
      description: "Friend functions and anonymous objects",
      chapter: "Chapter 15",
      sections: ["15.4 through 15.6", "Friends and anonymous"],
      questions: []
    }
  ]
};