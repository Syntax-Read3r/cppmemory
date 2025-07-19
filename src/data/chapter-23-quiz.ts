import { Quiz } from './types';

export const chapter23Quiz: Quiz = {
  id: "chapter-23-object-relationships",
  title: "Chapter 23 - Object Relationships",
  description: "Understand composition, aggregation, and object design patterns",
  chapter: "Chapter 23",
  sections: ["23.1 through 23.6", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-23-part-1",
      title: "Object Relationships - Part 1",
      description: "Composition and aggregation",
      chapter: "Chapter 23",
      sections: ["23.1 through 23.3", "Composition"],
      questions: []
    },
    {
      id: "chapter-23-part-2",
      title: "Object Relationships - Part 2",
      description: "Association and dependencies",
      chapter: "Chapter 23",
      sections: ["23.4 through 23.6", "Association"],
      questions: []
    }
  ]
};