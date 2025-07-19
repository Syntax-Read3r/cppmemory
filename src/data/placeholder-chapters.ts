import { Quiz } from './types';

// Placeholder chapters 2-28 for curriculum display
// These contain no questions but show the full C++ learning path

export const chapter2Quiz: Quiz = {
  id: "chapter-2-functions",
  title: "Chapter 2 - Functions and Files",
  description: "Learn about functions, parameters, scope, and multi-file programs",
  chapter: "Chapter 2",
  sections: ["2.1 through 2.13", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-2-part-1",
      title: "Functions and Files - Part 1",
      description: "Function basics and return values",
      chapter: "Chapter 2",
      sections: ["2.1 Introduction to functions", "2.2 Function return values", "2.3 Void functions"],
      questions: []
    },
    {
      id: "chapter-2-bonus",
      title: "Functions and Files - Bonus",
      description: "Modern C++ function features and build practices",
      chapter: "Chapter 2",
      sections: ["Bonus: Modern C++", "Build Systems", "Industry Standards"],
      questions: []
    }
  ]
};

export const chapter3Quiz: Quiz = {
  id: "chapter-3-debugging",
  title: "Chapter 3 - Debugging C++ Programs",
  description: "Learn debugging techniques and error handling strategies",
  chapter: "Chapter 3",
  sections: ["3.1 through 3.9", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-3-part-1",
      title: "Debugging C++ Programs",
      description: "Debugging techniques and strategies",
      chapter: "Chapter 3",
      sections: ["3.1 through 3.9", "Debugging fundamentals"],
      questions: []
    }
  ]
};

export const chapter4Quiz: Quiz = {
  id: "chapter-4-data-types",
  title: "Chapter 4 - Fundamental Data Types",
  description: "Master C++ fundamental data types, integers, floats, and type conversions",
  chapter: "Chapter 4",
  sections: ["4.1 through 4.18", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-4-part-1",
      title: "Fundamental Data Types - Part 1",
      description: "Integer types and basic data types",
      chapter: "Chapter 4",
      sections: ["4.1 through 4.6", "Integer fundamentals"],
      questions: []
    },
    {
      id: "chapter-4-part-2",
      title: "Fundamental Data Types - Part 2",
      description: "Floating point and character types",
      chapter: "Chapter 4",
      sections: ["4.7 through 4.12", "Floating point numbers"],
      questions: []
    },
    {
      id: "chapter-4-part-3",
      title: "Fundamental Data Types - Part 3",
      description: "Boolean types and type conversions",
      chapter: "Chapter 4",
      sections: ["4.13 through 4.18", "Boolean and conversions"],
      questions: []
    }
  ]
};

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

export const chapter6Quiz: Quiz = {
  id: "chapter-6-operators",
  title: "Chapter 6 - Operators",
  description: "Master C++ operators, precedence, and logical operations",
  chapter: "Chapter 6",
  sections: ["6.1 through 6.9", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-6-part-1",
      title: "Operators - Part 1",
      description: "Arithmetic and assignment operators",
      chapter: "Chapter 6",
      sections: ["6.1 through 6.3", "Basic operators"],
      questions: []
    },
    {
      id: "chapter-6-part-2",
      title: "Operators - Part 2",
      description: "Increment, decrement and precedence",
      chapter: "Chapter 6",
      sections: ["6.4 through 6.6", "Operator precedence"],
      questions: []
    },
    {
      id: "chapter-6-part-3",
      title: "Operators - Part 3",
      description: "Logical and comparison operators",
      chapter: "Chapter 6",
      sections: ["6.7 through 6.9", "Logical operations"],
      questions: []
    }
  ]
};

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

export const chapter9Quiz: Quiz = {
  id: "chapter-9-error-handling",
  title: "Chapter 9 - Error Detection and Handling",
  description: "Learn testing, debugging, and error handling strategies in C++",
  chapter: "Chapter 9",
  sections: ["9.1 through 9.6", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-9-part-1",
      title: "Error Detection and Handling - Part 1",
      description: "Testing and debugging strategies",
      chapter: "Chapter 9",
      sections: ["9.1 through 9.3", "Testing fundamentals"],
      questions: []
    },
    {
      id: "chapter-9-part-2",
      title: "Error Detection and Handling - Part 2",
      description: "Error handling and validation",
      chapter: "Chapter 9",
      sections: ["9.4 through 9.6", "Error handling"],
      questions: []
    }
  ]
};

export const chapter10Quiz: Quiz = {
  id: "chapter-10-type-conversion",
  title: "Chapter 10 - Type Conversion and Deduction",
  description: "Master type conversions, aliases, and auto keyword in C++",
  chapter: "Chapter 10",
  sections: ["10.1 through 10.10", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-10-part-1",
      title: "Type Conversion and Deduction - Part 1",
      description: "Implicit type conversion",
      chapter: "Chapter 10",
      sections: ["10.1 through 10.4", "Implicit conversion"],
      questions: []
    },
    {
      id: "chapter-10-part-2",
      title: "Type Conversion and Deduction - Part 2",
      description: "Explicit type conversion and casts",
      chapter: "Chapter 10",
      sections: ["10.5 through 10.7", "Explicit conversion"],
      questions: []
    },
    {
      id: "chapter-10-part-3",
      title: "Type Conversion and Deduction - Part 3",
      description: "Type aliases and auto keyword",
      chapter: "Chapter 10",
      sections: ["10.8 through 10.10", "Aliases and auto"],
      questions: []
    }
  ]
};

export const chapter11Quiz: Quiz = {
  id: "chapter-11-function-overloading",
  title: "Chapter 11 - Function Overloading and Templates",
  description: "Learn function overloading, templates, and advanced function features",
  chapter: "Chapter 11",
  sections: ["11.1 through 11.13", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-11-part-1",
      title: "Function Overloading and Templates - Part 1",
      description: "Function overloading basics",
      chapter: "Chapter 11",
      sections: ["11.1 through 11.4", "Function overloading"],
      questions: []
    },
    {
      id: "chapter-11-part-2",
      title: "Function Overloading and Templates - Part 2",
      description: "Function templates",
      chapter: "Chapter 11",
      sections: ["11.5 through 11.9", "Function templates"],
      questions: []
    },
    {
      id: "chapter-11-part-3",
      title: "Function Overloading and Templates - Part 3",
      description: "Template specialization and advanced features",
      chapter: "Chapter 11",
      sections: ["11.10 through 11.13", "Advanced templates"],
      questions: []
    }
  ]
};

export const chapter12Quiz: Quiz = {
  id: "chapter-12-references-pointers",
  title: "Chapter 12 - References and Pointers",
  description: "Master references, pointers, and parameter passing in C++",
  chapter: "Chapter 12",
  sections: ["12.1 through 12.12", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-12-part-1",
      title: "References and Pointers - Part 1",
      description: "References and lvalue references",
      chapter: "Chapter 12",
      sections: ["12.1 through 12.3", "References"],
      questions: []
    },
    {
      id: "chapter-12-part-2",
      title: "References and Pointers - Part 2",
      description: "Pointer fundamentals",
      chapter: "Chapter 12",
      sections: ["12.4 through 12.8", "Pointer basics"],
      questions: []
    },
    {
      id: "chapter-12-part-3",
      title: "References and Pointers - Part 3",
      description: "Advanced pointers and null pointers",
      chapter: "Chapter 12",
      sections: ["12.9 through 12.12", "Advanced pointers"],
      questions: []
    }
  ]
};

export const chapter13Quiz: Quiz = {
  id: "chapter-13-enums-structs",
  title: "Chapter 13 - Enums and Structs",
  description: "Learn enumerations, structures, and user-defined types in C++",
  chapter: "Chapter 13",
  sections: ["13.1 through 13.17", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-13-part-1",
      title: "Enums and Structs - Part 1",
      description: "Enumerated types",
      chapter: "Chapter 13",
      sections: ["13.1 through 13.5", "Enumerations"],
      questions: []
    },
    {
      id: "chapter-13-part-2",
      title: "Enums and Structs - Part 2",
      description: "Structure fundamentals",
      chapter: "Chapter 13",
      sections: ["13.6 through 13.11", "Structures"],
      questions: []
    },
    {
      id: "chapter-13-part-3",
      title: "Enums and Structs - Part 3",
      description: "Advanced structs and member selection",
      chapter: "Chapter 13",
      sections: ["13.12 through 13.17", "Advanced structs"],
      questions: []
    }
  ]
};

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

export const chapter18Quiz: Quiz = {
  id: "chapter-18-iterators",
  title: "Chapter 18 - Iterators and Algorithms",
  description: "Introduction to iterators and standard library algorithms",
  chapter: "Chapter 18",
  sections: ["18.1 through 18.5", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-18-part-1",
      title: "Iterators and Algorithms",
      description: "Iterator fundamentals and standard algorithms",
      chapter: "Chapter 18",
      sections: ["18.1 through 18.5", "Iterators and algorithms"],
      questions: []
    }
  ]
};

export const chapter19Quiz: Quiz = {
  id: "chapter-19-dynamic-allocation",
  title: "Chapter 19 - Dynamic Allocation",
  description: "Learn dynamic memory management with new and delete",
  chapter: "Chapter 19",
  sections: ["19.1 through 19.7", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-19-part-1",
      title: "Dynamic Allocation",
      description: "Dynamic memory allocation and management",
      chapter: "Chapter 19",
      sections: ["19.1 through 19.7", "Dynamic memory"],
      questions: []
    }
  ]
};

export const chapter20Quiz: Quiz = {
  id: "chapter-20-advanced-functions",
  title: "Chapter 20 - Advanced Functions",
  description: "Function pointers, recursion, and lambda expressions",
  chapter: "Chapter 20",
  sections: ["20.1 through 20.6", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-20-part-1",
      title: "Advanced Functions - Part 1",
      description: "Function pointers and recursion",
      chapter: "Chapter 20",
      sections: ["20.1 through 20.3", "Function pointers"],
      questions: []
    },
    {
      id: "chapter-20-part-2",
      title: "Advanced Functions - Part 2",
      description: "Lambda expressions and std::function",
      chapter: "Chapter 20",
      sections: ["20.4 through 20.6", "Lambda expressions"],
      questions: []
    }
  ]
};

export const chapter21Quiz: Quiz = {
  id: "chapter-21-operator-overloading",
  title: "Chapter 21 - Operator Overloading",
  description: "Learn to overload operators for custom classes and types",
  chapter: "Chapter 21",
  sections: ["21.1 through 21.14", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-21-part-1",
      title: "Operator Overloading - Part 1",
      description: "Basic operator overloading",
      chapter: "Chapter 21",
      sections: ["21.1 through 21.5", "Basic overloading"],
      questions: []
    },
    {
      id: "chapter-21-part-2",
      title: "Operator Overloading - Part 2",
      description: "Arithmetic and comparison operators",
      chapter: "Chapter 21",
      sections: ["21.6 through 21.10", "Arithmetic operators"],
      questions: []
    },
    {
      id: "chapter-21-part-3",
      title: "Operator Overloading - Part 3",
      description: "Advanced operator overloading",
      chapter: "Chapter 21",
      sections: ["21.11 through 21.14", "Advanced overloading"],
      questions: []
    }
  ]
};

export const chapter22Quiz: Quiz = {
  id: "chapter-22-move-semantics",
  title: "Chapter 22 - Move Semantics and Smart Pointers",
  description: "Master modern C++ memory management with smart pointers",
  chapter: "Chapter 22",
  sections: ["22.1 through 22.6", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-22-part-1",
      title: "Move Semantics and Smart Pointers - Part 1",
      description: "Move semantics and rvalue references",
      chapter: "Chapter 22",
      sections: ["22.1 through 22.3", "Move semantics"],
      questions: []
    },
    {
      id: "chapter-22-part-2",
      title: "Move Semantics and Smart Pointers - Part 2",
      description: "Smart pointers and RAII",
      chapter: "Chapter 22",
      sections: ["22.4 through 22.6", "Smart pointers"],
      questions: []
    }
  ]
};

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

export const chapter26Quiz: Quiz = {
  id: "chapter-26-templates-classes",
  title: "Chapter 26 - Templates and Classes",
  description: "Advanced template programming and specialization",
  chapter: "Chapter 26",
  sections: ["26.1 through 26.6", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-26-part-1",
      title: "Templates and Classes - Part 1",
      description: "Class templates",
      chapter: "Chapter 26",
      sections: ["26.1 through 26.3", "Class templates"],
      questions: []
    },
    {
      id: "chapter-26-part-2",
      title: "Templates and Classes - Part 2",
      description: "Template specialization and advanced features",
      chapter: "Chapter 26",
      sections: ["26.4 through 26.6", "Template specialization"],
      questions: []
    }
  ]
};

export const chapter27Quiz: Quiz = {
  id: "chapter-27-exceptions",
  title: "Chapter 27 - Exceptions",
  description: "Learn exception handling for robust error management",
  chapter: "Chapter 27",
  sections: ["27.1 through 27.9", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-27-part-1",
      title: "Exceptions - Part 1",
      description: "Exception basics and try-catch",
      chapter: "Chapter 27",
      sections: ["27.1 through 27.3", "Exception basics"],
      questions: []
    },
    {
      id: "chapter-27-part-2",
      title: "Exceptions - Part 2",
      description: "Exception classes and inheritance",
      chapter: "Chapter 27",
      sections: ["27.4 through 27.6", "Exception classes"],
      questions: []
    },
    {
      id: "chapter-27-part-3",
      title: "Exceptions - Part 3",
      description: "Exception safety and best practices",
      chapter: "Chapter 27",
      sections: ["27.7 through 27.9", "Exception safety"],
      questions: []
    }
  ]
};

export const chapter28Quiz: Quiz = {
  id: "chapter-28-input-output",
  title: "Chapter 28 - Input and Output (I/O)",
  description: "Master C++ I/O streams and file operations",
  chapter: "Chapter 28",
  sections: ["28.1 through 28.7", "Complete chapter coverage"],
  questions: [],
  isParent: true,
  children: [
    {
      id: "chapter-28-part-1",
      title: "Input and Output (I/O) - Part 1",
      description: "Stream basics and console I/O",
      chapter: "Chapter 28",
      sections: ["28.1 through 28.3", "Stream basics"],
      questions: []
    },
    {
      id: "chapter-28-part-2",
      title: "Input and Output (I/O) - Part 2",
      description: "File I/O and stream manipulation",
      chapter: "Chapter 28",
      sections: ["28.4 through 28.5", "File I/O"],
      questions: []
    },
    {
      id: "chapter-28-part-3",
      title: "Input and Output (I/O) - Part 3",
      description: "String streams and advanced I/O",
      chapter: "Chapter 28",
      sections: ["28.6 through 28.7", "String streams"],
      questions: []
    }
  ]
};