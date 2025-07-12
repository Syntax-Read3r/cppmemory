export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  codeSnippet?: string;
  codeLanguage?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  chapter: string;
  sections: string[];
  questions: Question[];
  isParent?: boolean;
  children?: Quiz[];
}

export const quizzes: Quiz[] = [
  {
    id: "chapter-1-basics",
    title: "Chapter 1 - C++ Basics",
    description: "Master fundamental C++ concepts including statements, variables, and I/O",
    chapter: "Chapter 1",
    sections: ["1.1 through 1.11", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-1-part-1",
        title: "C++ Basics - Part 1",
        description: "Statements, comments, and variable introduction",
        chapter: "Chapter 1",
        sections: ["1.1 Statements and the structure of a program", "1.2 Comments", "1.3 Introduction to objects and variables"],
        questions: [
          {
            id: 1,
            question: "What is a statement in C++?",
            options: [
              "A complete instruction that performs some action",
              "Only variable declarations",
              "Only function calls",
              "Comments in the code"
            ],
            correctAnswer: 0,
            explanation: "A statement is a complete instruction that tells the computer to perform some action. Examples include variable declarations, assignments, and function calls."
          },
          {
            id: 2,
            question: "Which of the following is a valid C++ comment?",
            options: [
              "# This is a comment",
              "/* This is a comment */",
              "<!-- This is a comment -->",
              "// This is a comment"
            ],
            correctAnswer: 1,
            explanation: "C++ supports two types of comments: single-line comments starting with '//' and multi-line comments enclosed in '/* */'.",
            codeSnippet: `#include <iostream>

int main() {
    // This is a single-line comment
    
    /* This is a 
       multi-line comment */
    
    std::cout << "Hello World!" << std::endl;
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 3,
            question: "What is an object in C++?",
            options: [
              "Only classes and structs",
              "A region of storage that can hold a value",
              "Only variables with names",
              "Only dynamically allocated memory"
            ],
            correctAnswer: 1,
            explanation: "An object is a region of storage (typically memory) that can hold a value. Objects can be named (variables) or unnamed (anonymous)."
          }
        ]
      },
      {
        id: "chapter-1-part-2",
        title: "C++ Basics - Part 2", 
        description: "Variable assignment, initialization, and iostream",
        chapter: "Chapter 1",
        sections: ["1.4 Variable assignment and initialization", "1.5 Introduction to iostream: cout, cin, and endl", "1.6 Uninitialized variables and undefined behavior"],
        questions: [
          {
            id: 4,
            question: "What is the difference between assignment and initialization?",
            options: [
              "They are the same thing",
              "Assignment gives a variable its first value, initialization changes it",
              "Initialization gives a variable its first value, assignment changes it",
              "Assignment is only for constants"
            ],
            correctAnswer: 2,
            explanation: "Initialization gives a variable its first value when it's created. Assignment changes the value of an already-existing variable.",
            codeSnippet: `int main() {
    int x = 5;      // Initialization - first value
    int y;          // Declaration without initialization
    
    y = 10;         // Assignment - giving value to existing variable
    x = 7;          // Assignment - changing existing value
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 5,
            question: "Which header file is needed for std::cout?",
            options: [
              "#include <stdio.h>",
              "#include <iostream>",
              "#include <cout>",
              "#include <output>"
            ],
            correctAnswer: 1,
            explanation: "The <iostream> header file contains declarations for input/output stream objects like std::cout and std::cin."
          },
          {
            id: 6,
            question: "What happens when you use an uninitialized variable?",
            options: [
              "It automatically gets value 0",
              "The program won't compile",
              "Undefined behavior - unpredictable results",
              "It gets a null value"
            ],
            correctAnswer: 2,
            explanation: "Using an uninitialized variable results in undefined behavior. The variable contains whatever garbage value was previously in that memory location.",
            codeSnippet: `#include <iostream>

int main() {
    int uninitializedVar;        // Contains garbage value
    int initializedVar = 42;     // Contains 42
    
    // This is undefined behavior - don't do this!
    std::cout << uninitializedVar << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-1-part-3",
        title: "C++ Basics - Part 3",
        description: "Keywords, naming, formatting, and expressions",
        chapter: "Chapter 1", 
        sections: ["1.7 Keywords and naming identifiers", "1.8 Whitespace and basic formatting", "1.9 Introduction to literals and operators"],
        questions: [
          {
            id: 7,
            question: "Which of the following is a valid C++ identifier?",
            options: [
              "2variable",
              "my-variable", 
              "my_variable",
              "class"
            ],
            correctAnswer: 2,
            explanation: "Valid identifiers must start with a letter or underscore, followed by letters, digits, or underscores. 'class' is a reserved keyword.",
            codeSnippet: `int main() {
    // Valid identifiers
    int myVariable = 5;
    int my_variable = 10;
    int _private = 15;
    
    // Invalid identifiers (would cause compiler errors)
    // int 2variable = 20;     // Can't start with digit
    // int my-variable = 25;   // Can't contain hyphen
    // int class = 30;         // Can't use keywords
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 8,
            question: "What is a literal in C++?",
            options: [
              "A variable name",
              "A value inserted directly into source code",
              "A function call",
              "A comment"
            ],
            correctAnswer: 1,
            explanation: "A literal is a fixed value that is inserted directly into the source code, such as 5, 'A', or \"Hello\"."
          },
          {
            id: 9,
            question: "What is whitespace used for in C++?",
            options: [
              "Only for making code look pretty",
              "To separate tokens and improve readability",
              "It's completely ignored by the compiler",
              "Only for indentation"
            ],
            correctAnswer: 1,
            explanation: "Whitespace separates tokens (keywords, identifiers, operators) and makes code more readable. While extra whitespace is often ignored, some is required for separation."
          }
        ]
      }
    ]
  },
  {
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
        questions: [
          {
            id: 10,
            question: "What is the correct syntax for a function that returns an integer?",
            options: [
              "function int myFunc()",
              "int myFunc()",
              "return int myFunc()",
              "int: myFunc()"
            ],
            correctAnswer: 1,
            explanation: "Functions in C++ are declared with the return type first, followed by the function name and parentheses: 'returnType functionName(parameters)'.",
            codeSnippet: `#include <iostream>

// Function declaration and definition
int addNumbers(int a, int b) {
    return a + b;
}

void printMessage() {    // void means no return value
    std::cout << "Hello from function!" << std::endl;
}

int main() {
    int result = addNumbers(5, 3);
    std::cout << "Result: " << result << std::endl;
    
    printMessage();
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 11,
            question: "What does 'void' mean as a return type?",
            options: [
              "The function returns an empty string",
              "The function returns nothing",
              "The function returns zero",
              "The function returns null"
            ],
            correctAnswer: 1,
            explanation: "'void' indicates that the function doesn't return any value. It performs operations but doesn't send back data to the caller."
          },
          {
            id: 12,
            question: "What happens if a function is supposed to return a value but doesn't?",
            options: [
              "It returns 0",
              "It returns a random value", 
              "The behavior is undefined",
              "The program automatically returns the last variable"
            ],
            correctAnswer: 2,
            explanation: "If a function with a non-void return type doesn't explicitly return a value, the behavior is undefined and can lead to unpredictable results."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-3-debugging", 
    title: "Chapter 3 - Debugging C++ Programs",
    description: "Learn debugging techniques and error handling strategies",
    chapter: "Chapter 3",
    sections: ["3.1 through 3.10", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-3-part-1",
        title: "Debugging - Part 1",
        description: "Error types and debugging process",
        chapter: "Chapter 3",
        sections: ["3.1 Syntax and semantic errors", "3.2 The debugging process", "3.3 A strategy for debugging"],
        questions: [
          {
            id: 13,
            question: "What is a syntax error?",
            options: [
              "An error in program logic",
              "An error in language grammar rules", 
              "An error that occurs during runtime",
              "An error in variable naming"
            ],
            correctAnswer: 1,
            explanation: "Syntax errors occur when code doesn't follow the grammatical rules of the C++ language. These are caught by the compiler."
          },
          {
            id: 14,
            question: "When do semantic errors typically occur?",
            options: [
              "During compilation",
              "During runtime or produce wrong results",
              "Never, they're automatically fixed",
              "Only in debug mode"
            ],
            correctAnswer: 1,
            explanation: "Semantic errors occur when code is syntactically correct but doesn't do what the programmer intended. They can cause runtime errors or incorrect behavior."
          },
          {
            id: 15,
            question: "What is the first step in debugging?",
            options: [
              "Rewrite the entire program",
              "Add more comments",
              "Reproduce the problem",
              "Ask someone else to fix it"
            ],
            correctAnswer: 2,
            explanation: "The first step in debugging is to reproduce the problem consistently. You can't fix what you can't reliably observe.",
            codeSnippet: `#include <iostream>

int calculateSum(int a, int b) {
    std::cout << "DEBUG: calculateSum called with a=" << a << ", b=" << b << std::endl;
    int result = a + b;
    std::cout << "DEBUG: result=" << result << std::endl;
    return result;
}

int main() {
    std::cout << "DEBUG: Program starting" << std::endl;
    
    int x = 5;
    int y = 10;
    std::cout << "DEBUG: x=" << x << ", y=" << y << std::endl;
    
    int sum = calculateSum(x, y);
    std::cout << "Final sum: " << sum << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  }
];