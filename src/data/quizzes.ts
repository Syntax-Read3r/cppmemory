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
  },
  {
    id: "chapter-4-data-types",
    title: "Chapter 4 - Fundamental Data Types",
    description: "Master C++ fundamental data types, integers, floats, and type conversions",
    chapter: "Chapter 4",
    sections: ["4.1 through 4.12", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-4-part-1",
        title: "Data Types - Part 1",
        description: "Introduction to data types, void, and object sizes",
        chapter: "Chapter 4",
        sections: ["4.1 Introduction to fundamental data types", "4.2 Void", "4.3 Object sizes and the sizeof operator"],
        questions: [
          {
            id: 16,
            question: "Which of the following is NOT a fundamental data type in C++?",
            options: [
              "int",
              "float",
              "string",
              "bool"
            ],
            correctAnswer: 2,
            explanation: "string is not a fundamental data type in C++. It's part of the standard library (std::string). Fundamental types include int, float, bool, char, etc.",
            codeSnippet: `#include <iostream>
#include <string>

int main() {
    // Fundamental types
    int number = 42;
    float decimal = 3.14f;
    bool flag = true;
    char letter = 'A';
    
    // Not fundamental - standard library type
    std::string text = "Hello";
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 17,
            question: "What does the sizeof operator return?",
            options: [
              "The value stored in a variable",
              "The number of bytes used by a type or variable",
              "The memory address of a variable",
              "The number of bits in a type"
            ],
            correctAnswer: 1,
            explanation: "The sizeof operator returns the size in bytes that a type or variable occupies in memory."
          },
          {
            id: 18,
            question: "What is the purpose of the void type?",
            options: [
              "To store null values",
              "To indicate no type or no return value",
              "To store empty strings",
              "To represent zero values"
            ],
            correctAnswer: 1,
            explanation: "void is used to indicate the absence of type, commonly for functions that don't return a value or for generic pointers."
          }
        ]
      },
      {
        id: "chapter-4-part-2",
        title: "Data Types - Part 2",
        description: "Signed and unsigned integers, fixed-width types",
        chapter: "Chapter 4",
        sections: ["4.4 Signed integers", "4.5 Unsigned integers, and why to avoid them", "4.6 Fixed-width integers and size_t"],
        questions: [
          {
            id: 19,
            question: "What is the main difference between signed and unsigned integers?",
            options: [
              "Signed integers are faster",
              "Unsigned integers can only store positive values",
              "Signed integers use more memory",
              "There is no difference"
            ],
            correctAnswer: 1,
            explanation: "Unsigned integers can only store non-negative values (0 and positive), while signed integers can store both positive and negative values.",
            codeSnippet: `#include <iostream>

int main() {
    signed int signedNum = -42;     // Can be negative
    unsigned int unsignedNum = 42;  // Only positive values
    
    // This would cause undefined behavior:
    // unsigned int problem = -1;   // Don't do this!
    
    std::cout << "Signed: " << signedNum << std::endl;
    std::cout << "Unsigned: " << unsignedNum << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 20,
            question: "Why should you generally avoid unsigned integers?",
            options: [
              "They use more memory",
              "They are slower",
              "They can cause unexpected wraparound behavior",
              "They are not supported on all platforms"
            ],
            correctAnswer: 2,
            explanation: "Unsigned integers can cause unexpected wraparound behavior when arithmetic operations result in negative values, leading to bugs."
          },
          {
            id: 21,
            question: "What is the purpose of fixed-width integers like int32_t?",
            options: [
              "They are faster than regular int",
              "They guarantee a specific size across platforms",
              "They use less memory",
              "They support larger numbers"
            ],
            correctAnswer: 1,
            explanation: "Fixed-width integers like int32_t guarantee a specific size (32 bits) regardless of the platform, ensuring portability."
          }
        ]
      },
      {
        id: "chapter-4-part-3",
        title: "Data Types - Part 3",
        description: "Scientific notation, floating point, and boolean values",
        chapter: "Chapter 4",
        sections: ["4.7 Introduction to scientific notation", "4.8 Floating point numbers", "4.9 Boolean values"],
        questions: [
          {
            id: 22,
            question: "How is the number 1,500,000 written in scientific notation?",
            options: [
              "1.5e6",
              "15e5",
              "1500e3",
              "0.15e7"
            ],
            correctAnswer: 0,
            explanation: "Scientific notation expresses numbers as a coefficient (1.5) times 10 raised to a power (6): 1.5 × 10⁶ = 1.5e6",
            codeSnippet: `#include <iostream>

int main() {
    // Scientific notation in C++
    double large = 1.5e6;      // 1,500,000
    double small = 2.5e-4;     // 0.00025
    
    std::cout << "Large: " << large << std::endl;
    std::cout << "Small: " << small << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 23,
            question: "What is the difference between float and double?",
            options: [
              "float is signed, double is unsigned",
              "double has higher precision than float",
              "float can store larger numbers",
              "There is no difference"
            ],
            correctAnswer: 1,
            explanation: "double (double precision) has higher precision than float (single precision). double typically uses 64 bits vs float's 32 bits."
          },
          {
            id: 24,
            question: "What are the only two values a bool variable can store?",
            options: [
              "0 and 1",
              "yes and no",
              "true and false",
              "on and off"
            ],
            correctAnswer: 2,
            explanation: "Boolean variables can only store true or false. While they may be represented as 1 and 0 internally, the bool type uses true/false keywords."
          }
        ]
      },
      {
        id: "chapter-4-part-4",
        title: "Data Types - Part 4",
        description: "If statements, chars, and type conversion",
        chapter: "Chapter 4",
        sections: ["4.10 Introduction to if statements", "4.11 Chars", "4.12 Introduction to type conversion and static_cast"],
        questions: [
          {
            id: 25,
            question: "What is the basic syntax of an if statement?",
            options: [
              "if condition then { }",
              "if (condition) { }",
              "if condition: { }",
              "if [condition] { }"
            ],
            correctAnswer: 1,
            explanation: "The basic syntax is 'if (condition) { }' where the condition is in parentheses and the code block is in curly braces."
          },
          {
            id: 26,
            question: "How do you declare a char variable with the value 'A'?",
            options: [
              "char letter = A;",
              "char letter = \"A\";",
              "char letter = 'A';",
              "char letter = [A];"
            ],
            correctAnswer: 2,
            explanation: "Character literals are enclosed in single quotes: char letter = 'A'; Double quotes are for strings.",
            codeSnippet: `#include <iostream>

int main() {
    char letter = 'A';          // Single character
    char digit = '5';           // Character representation of digit
    
    // This would be a string (different type):
    // char* word = "Hello";    // C-style string
    
    std::cout << "Letter: " << letter << std::endl;
    std::cout << "Digit: " << digit << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 27,
            question: "What is static_cast used for?",
            options: [
              "Creating static variables",
              "Explicit type conversion",
              "Memory allocation",
              "Function overloading"
            ],
            correctAnswer: 1,
            explanation: "static_cast is used for explicit type conversion, allowing you to convert between compatible types safely."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-5-constants",
    title: "Chapter 5 - Constants and Strings",
    description: "Learn about constants, literals, numeral systems, and string handling",
    chapter: "Chapter 5",
    sections: ["5.1 through 5.9", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-5-part-1",
        title: "Constants - Part 1",
        description: "Constant variables, literals, and numeral systems",
        chapter: "Chapter 5",
        sections: ["5.1 Constant variables (named constants)", "5.2 Literals", "5.3 Numeral systems (decimal, binary, hexadecimal, and octal)"],
        questions: [
          {
            id: 28,
            question: "How do you declare a constant variable in C++?",
            options: [
              "constant int x = 5;",
              "const int x = 5;",
              "final int x = 5;",
              "readonly int x = 5;"
            ],
            correctAnswer: 1,
            explanation: "Use the 'const' keyword before the type: const int x = 5; This makes the variable immutable after initialization."
          },
          {
            id: 29,
            question: "What is a literal in C++?",
            options: [
              "A variable name",
              "A fixed value inserted directly in code",
              "A function parameter",
              "A comment"
            ],
            correctAnswer: 1,
            explanation: "A literal is a fixed value that appears directly in the source code, like 42, 3.14, 'A', or \"Hello\"."
          },
          {
            id: 30,
            question: "How do you write the decimal number 15 in binary?",
            options: [
              "0b1111",
              "0b1110",
              "0b1101",
              "0b1010"
            ],
            correctAnswer: 0,
            explanation: "15 in binary is 1111 (8+4+2+1). In C++, binary literals are prefixed with 0b: 0b1111"
          }
        ]
      },
      {
        id: "chapter-5-part-2",
        title: "Constants - Part 2",
        description: "Compile-time optimization and constant expressions",
        chapter: "Chapter 5",
        sections: ["5.4 The as-if rule and compile-time optimization", "5.5 Constant expressions", "5.6 Constexpr variables"],
        questions: [
          {
            id: 31,
            question: "What is the difference between const and constexpr?",
            options: [
              "They are identical",
              "constexpr must be evaluated at compile time",
              "const is faster",
              "constexpr only works with integers"
            ],
            correctAnswer: 1,
            explanation: "constexpr requires the value to be computable at compile time, while const just means the value cannot be modified after initialization."
          },
          {
            id: 32,
            question: "What is the as-if rule?",
            options: [
              "Code must behave as if it follows the standard",
              "Variables must be initialized",
              "Functions must return values",
              "Comments must explain the code"
            ],
            correctAnswer: 0,
            explanation: "The as-if rule allows compilers to optimize code as long as the observable behavior matches what the C++ standard specifies."
          },
          {
            id: 33,
            question: "When should you use constexpr?",
            options: [
              "For all variables",
              "For values that can be computed at compile time",
              "Only for integers",
              "Never, const is better"
            ],
            correctAnswer: 1,
            explanation: "Use constexpr for values that can be computed at compile time, which enables compile-time optimizations."
          }
        ]
      },
      {
        id: "chapter-5-part-3",
        title: "Constants - Part 3",
        description: "String handling with std::string and std::string_view",
        chapter: "Chapter 5",
        sections: ["5.7 Introduction to std::string", "5.8 Introduction to std::string_view", "5.9 std::string_view (part 2)"],
        questions: [
          {
            id: 34,
            question: "How do you create a std::string variable?",
            options: [
              "string name = \"Hello\";",
              "std::string name = \"Hello\";",
              "String name = \"Hello\";",
              "char name = \"Hello\";"
            ],
            correctAnswer: 1,
            explanation: "Use std::string name = \"Hello\"; Remember to include <string> header and use the std:: namespace.",
            codeSnippet: `#include <iostream>
#include <string>

int main() {
    std::string greeting = "Hello";
    std::string name = "World";
    
    // String concatenation
    std::string message = greeting + " " + name + "!";
    
    std::cout << message << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 35,
            question: "What is the main advantage of std::string_view?",
            options: [
              "It's faster to create than std::string",
              "It provides a read-only view without copying",
              "It can store more characters",
              "It automatically manages memory"
            ],
            correctAnswer: 1,
            explanation: "std::string_view provides a lightweight, read-only view of string data without making copies, improving performance."
          },
          {
            id: 36,
            question: "When should you prefer std::string_view over std::string?",
            options: [
              "When you need to modify the string",
              "When you only need to read the string",
              "When storing the string permanently",
              "Always use std::string instead"
            ],
            correctAnswer: 1,
            explanation: "Use std::string_view when you only need to read string data and don't need to modify it or store it permanently."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-6-operators",
    title: "Chapter 6 - Operators",
    description: "Master C++ operators, precedence, and logical operations",
    chapter: "Chapter 6",
    sections: ["6.1 through 6.8", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-6-part-1",
        title: "Operators - Part 1",
        description: "Operator precedence, arithmetic, and remainder operations",
        chapter: "Chapter 6",
        sections: ["6.1 Operator precedence and associativity", "6.2 Arithmetic operators", "6.3 Remainder and Exponentiation"],
        questions: [
          {
            id: 37,
            question: "What is the result of 3 + 4 * 2?",
            options: [
              "14",
              "11", 
              "10",
              "8"
            ],
            correctAnswer: 1,
            explanation: "Due to operator precedence, multiplication happens before addition: 3 + (4 * 2) = 3 + 8 = 11",
            codeSnippet: `#include <iostream>

int main() {
    int result1 = 3 + 4 * 2;        // 11 (multiplication first)
    int result2 = (3 + 4) * 2;      // 14 (parentheses first)
    
    std::cout << "3 + 4 * 2 = " << result1 << std::endl;
    std::cout << "(3 + 4) * 2 = " << result2 << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 38,
            question: "What does the % operator do?",
            options: [
              "Division",
              "Percentage calculation",
              "Returns the remainder of division",
              "Multiplication"
            ],
            correctAnswer: 2,
            explanation: "The % operator returns the remainder after integer division. For example, 7 % 3 = 1 because 7 ÷ 3 = 2 remainder 1."
          },
          {
            id: 39,
            question: "Which operators have the highest precedence?",
            options: [
              "+ and -",
              "* and /", 
              "Parentheses ()",
              "= assignment"
            ],
            correctAnswer: 2,
            explanation: "Parentheses have the highest precedence and can be used to override the default order of operations."
          }
        ]
      },
      {
        id: "chapter-6-part-2",
        title: "Operators - Part 2", 
        description: "Increment/decrement, comma, and conditional operators",
        chapter: "Chapter 6",
        sections: ["6.4 Increment/decrement operators, and side effects", "6.5 The comma operator", "6.6 The conditional operator"],
        questions: [
          {
            id: 40,
            question: "What is the difference between ++x and x++?",
            options: [
              "No difference",
              "++x increments first then returns, x++ returns first then increments",
              "++x is faster",
              "x++ increments by 2"
            ],
            correctAnswer: 1,
            explanation: "++x (pre-increment) increments first then returns the new value. x++ (post-increment) returns the current value then increments.",
            codeSnippet: `#include <iostream>

int main() {
    int x = 5;
    int y = 5;
    
    int a = ++x;  // x becomes 6, a gets 6
    int b = y++;  // b gets 5, y becomes 6
    
    std::cout << "Pre-increment: x=" << x << ", a=" << a << std::endl;
    std::cout << "Post-increment: y=" << y << ", b=" << b << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 41,
            question: "What is the syntax of the conditional operator?",
            options: [
              "condition ? true_value : false_value",
              "if condition then true_value else false_value",
              "condition -> true_value : false_value",
              "condition | true_value : false_value"
            ],
            correctAnswer: 0,
            explanation: "The conditional operator (ternary operator) uses the syntax: condition ? true_value : false_value"
          },
          {
            id: 42,
            question: "What does the comma operator do?",
            options: [
              "Separates function parameters",
              "Evaluates expressions left to right, returns the rightmost value", 
              "Performs addition",
              "Creates arrays"
            ],
            correctAnswer: 1,
            explanation: "The comma operator evaluates expressions from left to right and returns the value of the rightmost expression."
          }
        ]
      },
      {
        id: "chapter-6-part-3",
        title: "Operators - Part 3",
        description: "Relational and logical operators",
        chapter: "Chapter 6", 
        sections: ["6.7 Relational operators and floating point comparisons", "6.8 Logical operators"],
        questions: [
          {
            id: 43,
            question: "Which relational operator tests for equality?",
            options: [
              "=",
              "==",
              "===",
              "eq"
            ],
            correctAnswer: 1,
            explanation: "The == operator tests for equality. The single = is for assignment, not comparison."
          },
          {
            id: 44,
            question: "What does the && operator represent?",
            options: [
              "Logical OR",
              "Logical AND",
              "Bitwise AND", 
              "Address-of operator"
            ],
            correctAnswer: 1,
            explanation: "The && operator represents logical AND. Both operands must be true for the result to be true."
          },
          {
            id: 45,
            question: "Why should you be careful when comparing floating point numbers?",
            options: [
              "They are slower to compare",
              "Floating point precision can cause unexpected results",
              "They use more memory",
              "They cannot be compared"
            ],
            correctAnswer: 1,
            explanation: "Floating point precision issues can cause numbers that should be equal to have tiny differences, making direct comparison unreliable."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-7-scope",
    title: "Chapter 7 - Scope, Duration, and Linkage",
    description: "Understand variable scope, lifetime, and linking in C++",
    chapter: "Chapter 7",
    sections: ["7.1 through 7.14", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-7-part-1",
        title: "Scope - Part 1",
        description: "Compound statements, namespaces, and local variables",
        chapter: "Chapter 7",
        sections: ["7.1 Compound statements (blocks)", "7.2 User-defined namespaces and the scope resolution operator", "7.3 Local variables"],
        questions: [
          {
            id: 46,
            question: "What defines a compound statement or block?",
            options: [
              "Parentheses ()",
              "Square brackets []",
              "Curly braces {}",
              "Angle brackets <>"
            ],
            correctAnswer: 2,
            explanation: "Compound statements or blocks are defined by curly braces {}. Variables declared inside have block scope."
          },
          {
            id: 47,
            question: "What is the scope resolution operator?",
            options: [
              "::",
              "->",
              ".",
              "@"
            ],
            correctAnswer: 0,
            explanation: "The scope resolution operator :: is used to access members of namespaces or specify which scope a name belongs to."
          },
          {
            id: 48,
            question: "Where are local variables accessible?",
            options: [
              "Throughout the entire program",
              "Only within the block where they are declared",
              "Only in the main function",
              "In all functions of the same class"
            ],
            correctAnswer: 1,
            explanation: "Local variables are only accessible within the block (scope) where they are declared."
          }
        ]
      },
      {
        id: "chapter-7-part-2",
        title: "Scope - Part 2", 
        description: "Global variables, variable shadowing, and linkage",
        chapter: "Chapter 7",
        sections: ["7.4 Introduction to global variables", "7.5 Variable shadowing (name hiding)", "7.6 Internal linkage"],
        questions: [
          {
            id: 49,
            question: "What is variable shadowing?",
            options: [
              "Making variables private",
              "When a local variable hides a global variable with the same name",
              "Copying variables",
              "Deleting variables"
            ],
            correctAnswer: 1,
            explanation: "Variable shadowing occurs when a local variable has the same name as a global variable, hiding the global one in that scope."
          },
          {
            id: 50,
            question: "What does internal linkage mean?",
            options: [
              "Variables can be accessed from other files",
              "Variables are only accessible within the current translation unit",
              "Variables are stored internally in the CPU",
              "Variables are linked to the operating system"
            ],
            correctAnswer: 1,
            explanation: "Internal linkage means the identifier can only be accessed within the current translation unit (source file)."
          },
          {
            id: 51,
            question: "Why are global variables generally discouraged?",
            options: [
              "They use more memory",
              "They are slower",
              "They can be modified from anywhere, making code harder to debug",
              "They don't work with functions"
            ],
            correctAnswer: 2,
            explanation: "Global variables can be modified from anywhere in the program, making it difficult to track changes and debug issues."
          }
        ]
      },
      {
        id: "chapter-7-part-3",
        title: "Scope - Part 3",
        description: "External linkage, static variables, and using declarations", 
        chapter: "Chapter 7",
        sections: ["7.7 External linkage and variable forward declarations", "7.11 Static local variables", "7.13 Using declarations and using directives"],
        questions: [
          {
            id: 52,
            question: "What is external linkage?",
            options: [
              "Variables accessible across multiple translation units",
              "Variables that link to external libraries",
              "Variables stored on external drives",
              "Variables that are externally visible to the OS"
            ],
            correctAnswer: 0,
            explanation: "External linkage allows identifiers to be accessed from other translation units (files) in the same program."
          },
          {
            id: 53,
            question: "What happens to static local variables?",
            options: [
              "They are destroyed when the function ends",
              "They retain their value between function calls",
              "They become global variables",
              "They cannot be modified"
            ],
            correctAnswer: 1,
            explanation: "Static local variables retain their value between function calls and are only initialized once."
          },
          {
            id: 54,
            question: "What does 'using namespace std;' do?",
            options: [
              "Creates a new namespace",
              "Brings all std namespace identifiers into the current scope",
              "Deletes the std namespace", 
              "Makes std a global variable"
            ],
            correctAnswer: 1,
            explanation: "The using directive brings all identifiers from the std namespace into the current scope, allowing you to use them without the std:: prefix."
          }
        ]
      }
    ]
  },
  {
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
        description: "If statements, switch basics, and common problems",
        chapter: "Chapter 8",
        sections: ["8.2 If statements and blocks", "8.3 Common if statement problems", "8.5 Switch statement basics"],
        questions: [
          {
            id: 55,
            question: "What is the correct syntax for an if-else statement?",
            options: [
              "if (condition) { } else { }",
              "if condition then { } else { }",
              "if (condition): { } else: { }",
              "if [condition] { } else { }"
            ],
            correctAnswer: 0,
            explanation: "The correct syntax is: if (condition) { } else { } with the condition in parentheses."
          },
          {
            id: 56,
            question: "When should you use a switch statement instead of if-else?",
            options: [
              "When comparing floating point numbers",
              "When testing a single variable against multiple discrete values",
              "When you need complex boolean logic",
              "Switch is always better than if-else"
            ],
            correctAnswer: 1,
            explanation: "Use switch when testing a single variable against multiple discrete values. It's cleaner and potentially more efficient than multiple if-else statements."
          },
          {
            id: 57,
            question: "What is a common problem with nested if statements?",
            options: [
              "They use too much memory",
              "The dangling else problem - else may bind to wrong if",
              "They are slower",
              "They don't work with functions"
            ],
            correctAnswer: 1,
            explanation: "The dangling else problem occurs when an else clause could potentially bind to multiple if statements, creating ambiguity."
          }
        ]
      },
      {
        id: "chapter-8-part-2",
        title: "Control Flow - Part 2",
        description: "Switch fallthrough, loops, and while statements", 
        chapter: "Chapter 8",
        sections: ["8.6 Switch fallthrough and scoping", "8.8 Introduction to loops and while statements", "8.9 Do while statements"],
        questions: [
          {
            id: 58,
            question: "What happens if you forget 'break' in a switch case?",
            options: [
              "Compilation error",
              "Runtime error",
              "Execution falls through to the next case",
              "The switch exits automatically"
            ],
            correctAnswer: 2,
            explanation: "Without 'break', execution falls through to the next case. This is sometimes intentional but often a bug.",
            codeSnippet: `#include <iostream>

int main() {
    int value = 1;
    
    switch (value) {
        case 1:
            std::cout << "One" << std::endl;
            // Missing break - falls through!
        case 2:
            std::cout << "Two" << std::endl;
            break;
        case 3:
            std::cout << "Three" << std::endl;
            break;
    }
    
    // Output will be: One\\nTwo
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 59,
            question: "What is the difference between while and do-while loops?",
            options: [
              "No difference",
              "do-while always executes at least once",
              "while is faster",
              "do-while can only count up"
            ],
            correctAnswer: 1,
            explanation: "do-while loops check the condition after executing the body, so they always execute at least once. while loops check the condition first."
          },
          {
            id: 60,
            question: "When might you use a do-while loop?",
            options: [
              "When you need the loop body to execute at least once",
              "When counting backwards",
              "When working with arrays",
              "Never, while loops are always better"
            ],
            correctAnswer: 0,
            explanation: "Use do-while when you need the loop body to execute at least once, such as input validation where you need to prompt the user at least once."
          }
        ]
      },
      {
        id: "chapter-8-part-3",
        title: "Control Flow - Part 3",
        description: "For loops, break/continue, and random number generation",
        chapter: "Chapter 8",
        sections: ["8.10 For statements", "8.11 Break and continue", "8.13 Introduction to random number generation"],
        questions: [
          {
            id: 61,
            question: "What are the three parts of a for loop?",
            options: [
              "start, middle, end",
              "initialization, condition, update",
              "begin, check, increment",
              "setup, test, modify"
            ],
            correctAnswer: 1,
            explanation: "A for loop has three parts: initialization (runs once), condition (checked each iteration), and update (runs after each iteration).",
            codeSnippet: `#include <iostream>

int main() {
    // for (initialization; condition; update)
    for (int i = 0; i < 5; ++i) {
        std::cout << "i = " << i << std::endl;
    }
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 62,
            question: "What does the 'continue' statement do?",
            options: [
              "Exits the loop completely",
              "Skips the rest of the current iteration and goes to the next",
              "Restarts the loop from the beginning",
              "Pauses the loop execution"
            ],
            correctAnswer: 1,
            explanation: "'continue' skips the rest of the current loop iteration and jumps to the next iteration of the loop."
          },
          {
            id: 63,
            question: "Why should you seed a random number generator?",
            options: [
              "To make numbers truly random",
              "To get the same sequence every time",
              "To get different sequences on different runs", 
              "Random numbers don't need seeding"
            ],
            correctAnswer: 2,
            explanation: "Seeding with different values (like current time) ensures you get different random sequences on different program runs."
          }
        ]
      }
    ]
  },
  {
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
        title: "Error Handling - Part 1",
        description: "Testing, code coverage, and semantic errors",
        chapter: "Chapter 9",
        sections: ["9.1 Introduction to testing your code", "9.2 Code coverage", "9.3 Common semantic errors in C++"],
        questions: [
          {
            id: 64,
            question: "What is the main purpose of testing your code?",
            options: [
              "To make it run faster",
              "To verify it works correctly and catches bugs",
              "To reduce memory usage",
              "To make it look better"
            ],
            correctAnswer: 1,
            explanation: "Testing verifies that your code works correctly under various conditions and helps catch bugs before users encounter them."
          },
          {
            id: 65,
            question: "What does code coverage measure?",
            options: [
              "How fast your code runs",
              "How much memory your code uses",
              "What percentage of your code is executed by tests",
              "How many functions you have"
            ],
            correctAnswer: 2,
            explanation: "Code coverage measures what percentage of your source code is executed when your test suite runs, helping identify untested code paths."
          },
          {
            id: 66,
            question: "Which is an example of a semantic error?",
            options: [
              "Missing semicolon",
              "Using = instead of == in a condition",
              "Misspelled keyword",
              "Missing closing brace"
            ],
            correctAnswer: 1,
            explanation: "Using = (assignment) instead of == (comparison) in a condition is a semantic error - the code compiles but doesn't do what was intended.",
            codeSnippet: `#include <iostream>

int main() {
    int x = 5;
    
    // Semantic error: assignment instead of comparison
    if (x = 10) {  // Should be x == 10
        std::cout << "x equals 10" << std::endl;
    }
    
    // x is now 10, not 5!
    std::cout << "x is now: " << x << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-9-part-2",
        title: "Error Handling - Part 2",
        description: "Error detection, input handling, and assertions",
        chapter: "Chapter 9",
        sections: ["9.4 Detecting and handling errors", "9.5 std::cin and handling invalid input", "9.6 Assert and static_assert"],
        questions: [
          {
            id: 67,
            question: "What happens when std::cin encounters invalid input?",
            options: [
              "The program crashes",
              "std::cin enters a failure state",
              "The input is automatically converted",
              "Nothing, it continues normally"
            ],
            correctAnswer: 1,
            explanation: "When std::cin encounters invalid input (like letters when expecting a number), it enters a failure state and stops processing input."
          },
          {
            id: 68,
            question: "What is the purpose of assert?",
            options: [
              "To handle user input errors",
              "To check assumptions during development and debugging",
              "To optimize code performance",
              "To create user-friendly error messages"
            ],
            correctAnswer: 1,
            explanation: "assert() is used to check assumptions during development. If the condition is false, the program terminates with an error message."
          },
          {
            id: 69,
            question: "When is static_assert evaluated?",
            options: [
              "At runtime",
              "At compile time",
              "During debugging only",
              "When the program starts"
            ],
            correctAnswer: 1,
            explanation: "static_assert is evaluated at compile time, allowing you to catch errors before the program even runs.",
            codeSnippet: `#include <iostream>
#include <cassert>

int main() {
    // Runtime assertion
    int x = 5;
    assert(x > 0);  // Program continues if x > 0, terminates if not
    
    // Compile-time assertion
    static_assert(sizeof(int) >= 4, "int must be at least 4 bytes");
    
    std::cout << "All assertions passed!" << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
    id: "chapter-10-type-conversion",
    title: "Chapter 10 - Type Conversion and Deduction",
    description: "Master type conversions, aliases, and auto keyword in C++",
    chapter: "Chapter 10",
    sections: ["10.1 through 10.9", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-10-part-1",
        title: "Type Conversion - Part 1",
        description: "Implicit conversions and numeric promotions",
        chapter: "Chapter 10",
        sections: ["10.1 Implicit type conversion", "10.2 Floating-point and integral promotion", "10.3 Numeric conversions"],
        questions: [
          {
            id: 70,
            question: "What is implicit type conversion?",
            options: [
              "Manual conversion using static_cast",
              "Automatic conversion performed by the compiler",
              "Conversion that always fails",
              "Conversion only for pointers"
            ],
            correctAnswer: 1,
            explanation: "Implicit type conversion is automatic conversion performed by the compiler when needed, such as converting int to double in mixed arithmetic."
          },
          {
            id: 71,
            question: "What happens in integral promotion?",
            options: [
              "Integers become floating point numbers",
              "Small integer types are promoted to int or unsigned int",
              "All numbers become doubles",
              "Integers are converted to strings"
            ],
            correctAnswer: 1,
            explanation: "Integral promotion converts small integer types (char, short) to int or unsigned int for arithmetic operations."
          },
          {
            id: 72,
            question: "Which conversion can potentially lose precision?",
            options: [
              "int to double",
              "char to int",
              "double to float",
              "short to int"
            ],
            correctAnswer: 2,
            explanation: "Converting double to float can lose precision because float has less precision than double.",
            codeSnippet: `#include <iostream>

int main() {
    // Implicit conversions
    int i = 42;
    double d = i;        // int to double (safe)
    
    double pi = 3.14159;
    float f = pi;        // double to float (may lose precision)
    int truncated = pi;  // double to int (loses fractional part)
    
    std::cout << "Original: " << pi << std::endl;
    std::cout << "Float: " << f << std::endl;
    std::cout << "Int: " << truncated << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-10-part-2",
        title: "Type Conversion - Part 2",
        description: "Narrowing conversions and explicit casting",
        chapter: "Chapter 10",
        sections: ["10.4 Narrowing conversions, list initialization, and constexpr initializers", "10.5 Arithmetic conversions", "10.6 Explicit type conversion (casting) and static_cast"],
        questions: [
          {
            id: 73,
            question: "What is a narrowing conversion?",
            options: [
              "Converting to a wider type",
              "Converting to a type that may not represent all values of the source",
              "Converting only integers",
              "Converting only floating point numbers"
            ],
            correctAnswer: 1,
            explanation: "A narrowing conversion converts to a type that cannot represent all values of the source type, potentially losing information."
          },
          {
            id: 74,
            question: "When should you use static_cast?",
            options: [
              "For all type conversions",
              "For explicit, safe type conversions",
              "Only for pointer conversions",
              "Never, implicit conversion is always better"
            ],
            correctAnswer: 1,
            explanation: "Use static_cast for explicit, compile-time checked conversions when you intentionally want to convert between types."
          },
          {
            id: 75,
            question: "What does list initialization help prevent?",
            options: [
              "All type conversions",
              "Narrowing conversions that lose data",
              "Implicit conversions",
              "Explicit conversions"
            ],
            correctAnswer: 1,
            explanation: "List initialization (using braces {}) helps prevent narrowing conversions that could lose data, making code safer."
          }
        ]
      },
      {
        id: "chapter-10-part-3",
        title: "Type Conversion - Part 3",
        description: "Type aliases and auto keyword",
        chapter: "Chapter 10",
        sections: ["10.7 Typedefs and type aliases", "10.8 Type deduction for objects using the auto keyword", "10.9 Type deduction for functions"],
        questions: [
          {
            id: 76,
            question: "What is the modern way to create type aliases?",
            options: [
              "typedef",
              "using",
              "auto",
              "const"
            ],
            correctAnswer: 1,
            explanation: "The modern way to create type aliases is using the 'using' keyword: using MyInt = int; This is preferred over typedef."
          },
          {
            id: 77,
            question: "What does the auto keyword do?",
            options: [
              "Makes variables automatic",
              "Deduces the type from the initializer",
              "Makes variables static",
              "Creates arrays automatically"
            ],
            correctAnswer: 1,
            explanation: "The auto keyword tells the compiler to deduce the variable's type from its initializer, making code more maintainable."
          },
          {
            id: 78,
            question: "When is auto particularly useful?",
            options: [
              "For simple types like int",
              "For complex template types and iterators",
              "For all variables always",
              "Never, explicit types are always better"
            ],
            correctAnswer: 1,
            explanation: "auto is particularly useful for complex types like iterators, template types, and lambda expressions where the full type name would be verbose.",
            codeSnippet: `#include <iostream>
#include <vector>

int main() {
    // Type aliases
    using Distance = double;
    using StudentGrades = std::vector<int>;
    
    Distance miles = 3.5;
    StudentGrades grades = {85, 92, 78, 96};
    
    // Auto type deduction
    auto count = grades.size();        // deduces size_t
    auto average = 85.5;               // deduces double
    auto it = grades.begin();          // deduces iterator type
    
    std::cout << "Miles: " << miles << std::endl;
    std::cout << "Grade count: " << count << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
    id: "chapter-11-function-overloading",
    title: "Chapter 11 - Function Overloading and Templates",
    description: "Learn function overloading, templates, and advanced function features",
    chapter: "Chapter 11",
    sections: ["11.1 through 11.10", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-11-part-1",
        title: "Function Overloading - Part 1",
        description: "Function overloading basics and differentiation",
        chapter: "Chapter 11",
        sections: ["11.1 Introduction to function overloading", "11.2 Function overload differentiation", "11.3 Function overload resolution and ambiguous matches"],
        questions: [
          {
            id: 79,
            question: "What is function overloading?",
            options: [
              "Having too many functions",
              "Multiple functions with the same name but different parameters",
              "Functions that call themselves",
              "Functions with very long names"
            ],
            correctAnswer: 1,
            explanation: "Function overloading allows multiple functions to have the same name as long as they have different parameter lists (different signatures)."
          },
          {
            id: 80,
            question: "Which of these can differentiate overloaded functions?",
            options: [
              "Return type only",
              "Function name only",
              "Number and type of parameters",
              "Comments in the function"
            ],
            correctAnswer: 2,
            explanation: "Overloaded functions are differentiated by their parameter lists - the number, types, and order of parameters, not by return type alone."
          },
          {
            id: 81,
            question: "What happens when the compiler cannot decide which overload to call?",
            options: [
              "It picks the first one",
              "It causes an ambiguous match error",
              "It calls all of them",
              "It creates a new function"
            ],
            correctAnswer: 1,
            explanation: "When the compiler cannot uniquely determine which overloaded function to call, it generates an ambiguous match error.",
            codeSnippet: `#include <iostream>

// Function overloads
void print(int value) {
    std::cout << "Integer: " << value << std::endl;
}

void print(double value) {
    std::cout << "Double: " << value << std::endl;
}

void print(const std::string& value) {
    std::cout << "String: " << value << std::endl;
}

int main() {
    print(42);        // Calls int version
    print(3.14);      // Calls double version
    print("Hello");   // Calls string version
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-11-part-2",
        title: "Function Overloading - Part 2",
        description: "Deleting functions and default arguments",
        chapter: "Chapter 11",
        sections: ["11.4 Deleting functions", "11.5 Default arguments", "11.6 Function templates"],
        questions: [
          {
            id: 82,
            question: "What does deleting a function do?",
            options: [
              "Removes it from memory",
              "Prevents it from being called",
              "Makes it private",
              "Optimizes it away"
            ],
            correctAnswer: 1,
            explanation: "Deleting a function with '= delete' prevents it from being called, causing a compile error if someone tries to use it."
          },
          {
            id: 83,
            question: "What are default arguments?",
            options: [
              "Arguments that are always zero",
              "Parameters with default values if not provided",
              "The first argument to a function",
              "Arguments that are automatically generated"
            ],
            correctAnswer: 1,
            explanation: "Default arguments provide default values for function parameters, allowing the function to be called with fewer arguments."
          },
          {
            id: 84,
            question: "What is the main benefit of function templates?",
            options: [
              "They run faster",
              "They work with multiple types without code duplication",
              "They use less memory",
              "They are easier to debug"
            ],
            correctAnswer: 1,
            explanation: "Function templates allow you to write one function that works with multiple types, avoiding code duplication while maintaining type safety."
          }
        ]
      },
      {
        id: "chapter-11-part-3",
        title: "Function Overloading - Part 3",
        description: "Template instantiation and advanced template features",
        chapter: "Chapter 11",
        sections: ["11.7 Function template instantiation", "11.8 Function templates with multiple template types", "11.10 Using function templates in multiple files"],
        questions: [
          {
            id: 85,
            question: "When are function templates instantiated?",
            options: [
              "When the template is defined",
              "When the template is first used with specific types",
              "At program startup",
              "Never, they remain templates"
            ],
            correctAnswer: 1,
            explanation: "Function templates are instantiated (compiled into actual functions) when they are first used with specific types."
          },
          {
            id: 86,
            question: "Can a function template have multiple template parameters?",
            options: [
              "No, only one is allowed",
              "Yes, you can have multiple template parameters",
              "Only if they're the same type",
              "Only with special syntax"
            ],
            correctAnswer: 1,
            explanation: "Function templates can have multiple template parameters, allowing functions to work with several different types simultaneously.",
            codeSnippet: `#include <iostream>

// Function template with multiple template parameters
template<typename T, typename U>
void printPair(T first, U second) {
    std::cout << "First: " << first << ", Second: " << second << std::endl;
}

// Template with default type
template<typename T = int>
T add(T a, T b) {
    return a + b;
}

int main() {
    printPair(42, 3.14);           // T=int, U=double
    printPair("Hello", 'A');       // T=const char*, U=char
    
    auto result1 = add(5, 3);      // Uses default int
    auto result2 = add(2.5, 1.5);  // T=double
    
    std::cout << "Int result: " << result1 << std::endl;
    std::cout << "Double result: " << result2 << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
    id: "chapter-12-references-pointers",
    title: "Chapter 12 - References and Pointers",
    description: "Master references, pointers, and parameter passing in C++",
    chapter: "Chapter 12",
    sections: ["12.1 through 12.15", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-12-part-1",
        title: "References & Pointers - Part 1",
        description: "Compound types, value categories, and lvalue references",
        chapter: "Chapter 12",
        sections: ["12.1 Introduction to compound data types", "12.2 Value categories (lvalues and rvalues)", "12.3 Lvalue references"],
        questions: [
          {
            id: 87,
            question: "What is a compound data type?",
            options: [
              "A type made from fundamental types",
              "A type that stores multiple values",
              "A type with mathematical operations",
              "A type that can be null"
            ],
            correctAnswer: 0,
            explanation: "Compound data types are constructed from fundamental types, such as references, pointers, arrays, and user-defined types."
          },
          {
            id: 88,
            question: "What is an lvalue?",
            options: [
              "A value on the left side of assignment",
              "An expression that has an identity and can be addressed",
              "A literal value",
              "A local variable"
            ],
            correctAnswer: 1,
            explanation: "An lvalue is an expression that has an identity (can be addressed) and represents an object that persists beyond the expression."
          },
          {
            id: 89,
            question: "How do you declare an lvalue reference?",
            options: [
              "int* ref",
              "int& ref",
              "int ref&",
              "int&& ref"
            ],
            correctAnswer: 1,
            explanation: "Lvalue references are declared using the & symbol after the type: int& ref. They must be initialized when declared."
          }
        ]
      },
      {
        id: "chapter-12-part-2",
        title: "References & Pointers - Part 2",
        description: "Const references and parameter passing",
        chapter: "Chapter 12",
        sections: ["12.4 Lvalue references to const", "12.5 Pass by lvalue reference", "12.6 Pass by const lvalue reference"],
        questions: [
          {
            id: 90,
            question: "What can const references bind to?",
            options: [
              "Only const objects",
              "Only non-const objects",
              "Both const and non-const objects, and even temporaries",
              "Only variables, not literals"
            ],
            correctAnswer: 2,
            explanation: "Const references can bind to const objects, non-const objects, and even temporary values, making them very flexible."
          },
          {
            id: 91,
            question: "What is the main advantage of pass by reference?",
            options: [
              "It's always faster",
              "Avoids copying and allows modification of the original object",
              "It uses less memory",
              "It prevents all errors"
            ],
            correctAnswer: 1,
            explanation: "Pass by reference avoids copying the object and allows the function to modify the original object if needed."
          },
          {
            id: 92,
            question: "When should you use pass by const reference?",
            options: [
              "For all parameters",
              "For large objects you want to read but not modify",
              "Only for fundamental types",
              "Never, pass by value is always better"
            ],
            correctAnswer: 1,
            explanation: "Use pass by const reference for large objects when you need to read them but not modify them, avoiding expensive copies.",
            codeSnippet: `#include <iostream>
#include <string>

// Pass by value (makes a copy)
void printByValue(std::string str) {
    std::cout << "By value: " << str << std::endl;
}

// Pass by reference (can modify original)
void modifyByReference(std::string& str) {
    str += " modified";
}

// Pass by const reference (efficient, read-only)
void printByConstRef(const std::string& str) {
    std::cout << "By const ref: " << str << std::endl;
}

int main() {
    std::string message = "Hello";
    
    printByValue(message);      // Copies the string
    printByConstRef(message);   // No copy, read-only
    modifyByReference(message); // No copy, can modify
    
    std::cout << "Final: " << message << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-12-part-3",
        title: "References & Pointers - Part 3",
        description: "Introduction to pointers and null pointers",
        chapter: "Chapter 12",
        sections: ["12.7 Introduction to pointers", "12.8 Null pointers", "12.9 Pointers and const"],
        questions: [
          {
            id: 93,
            question: "What is a pointer?",
            options: [
              "A variable that stores the address of another object",
              "A reference that can be reassigned",
              "A special type of integer",
              "A function that returns an address"
            ],
            correctAnswer: 0,
            explanation: "A pointer is a variable that stores the memory address of another object, allowing indirect access to that object."
          },
          {
            id: 94,
            question: "What value represents a null pointer in modern C++?",
            options: [
              "0",
              "NULL",
              "nullptr",
              "void"
            ],
            correctAnswer: 2,
            explanation: "nullptr is the modern C++ way to represent a null pointer. It's type-safe and preferred over 0 or NULL."
          },
          {
            id: 95,
            question: "What does 'const int* ptr' mean?",
            options: [
              "ptr is constant",
              "The value pointed to by ptr is constant",
              "Both ptr and the value are constant",
              "ptr cannot point to integers"
            ],
            correctAnswer: 1,
            explanation: "'const int* ptr' means the value pointed to by ptr is constant (cannot be modified through ptr), but ptr itself can be reassigned."
          }
        ]
      },
      {
        id: "chapter-12-part-4",
        title: "References & Pointers - Part 4",
        description: "Pass by address and return semantics",
        chapter: "Chapter 12",
        sections: ["12.10 Pass by address", "12.12 Return by reference and return by address", "12.15 std::optional"],
        questions: [
          {
            id: 96,
            question: "What is pass by address?",
            options: [
              "Passing the value of a variable",
              "Passing a pointer to the variable",
              "Passing the variable name",
              "Passing by reference"
            ],
            correctAnswer: 1,
            explanation: "Pass by address means passing a pointer to an object, allowing the function to access and potentially modify the original object through the pointer."
          },
          {
            id: 97,
            question: "When should you return by reference?",
            options: [
              "Always, it's faster",
              "When returning a local variable",
              "When returning an object that exists beyond the function's lifetime",
              "Never, it's dangerous"
            ],
            correctAnswer: 2,
            explanation: "Return by reference only when the object being returned exists beyond the function's lifetime, such as a member variable or parameter."
          },
          {
            id: 98,
            question: "What is std::optional used for?",
            options: [
              "Optional function parameters",
              "Representing a value that may or may not exist",
              "Making pointers optional",
              "Optional template parameters"
            ],
            correctAnswer: 1,
            explanation: "std::optional represents a value that may or may not exist, providing a safe alternative to using null pointers or special sentinel values."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-13-enums-structs",
    title: "Chapter 13 - Enums and Structs",
    description: "Learn enumerations, structures, and user-defined types in C++",
    chapter: "Chapter 13",
    sections: ["13.1 through 13.15", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-13-part-1",
        title: "Enums & Structs - Part 1",
        description: "User-defined types and unscoped enumerations",
        chapter: "Chapter 13",
        sections: ["13.1 Introduction to program-defined (user-defined) types", "13.2 Unscoped enumerations", "13.3 Unscoped enumerator integral conversions"],
        questions: [
          {
            id: 99,
            question: "What are user-defined types?",
            options: [
              "Types built into the language",
              "Types created by programmers using language features",
              "Types that can only store user input",
              "Types that are automatically generated"
            ],
            correctAnswer: 1,
            explanation: "User-defined types are types created by programmers using C++ language features like enums, structs, classes, and unions."
          },
          {
            id: 100,
            question: "How do you declare an unscoped enumeration?",
            options: [
              "enum class Color",
              "enum Color",
              "enumeration Color",
              "define Color"
            ],
            correctAnswer: 1,
            explanation: "Unscoped enumerations are declared with 'enum TypeName'. They allow implicit conversion to integers.",
            codeSnippet: `#include <iostream>

// Unscoped enumeration
enum Color {
    RED,     // 0
    GREEN,   // 1
    BLUE     // 2
};

enum Priority {
    LOW = 1,
    MEDIUM = 5,
    HIGH = 10
};

int main() {
    Color myColor = RED;
    Priority taskPriority = HIGH;
    
    // Implicit conversion to int
    int colorValue = myColor;        // 0
    int priorityValue = taskPriority; // 10
    
    std::cout << "Color value: " << colorValue << std::endl;
    std::cout << "Priority value: " << priorityValue << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 101,
            question: "What happens with unscoped enumerator integral conversions?",
            options: [
              "Enumerators cannot be converted to integers",
              "Enumerators can be implicitly converted to integers",
              "Conversion requires explicit casting",
              "Conversion only works with negative numbers"
            ],
            correctAnswer: 1,
            explanation: "Unscoped enumerators can be implicitly converted to integers, which can sometimes lead to unexpected behavior."
          }
        ]
      },
      {
        id: "chapter-13-part-2",
        title: "Enums & Structs - Part 2",
        description: "Enum conversions and scoped enumerations",
        chapter: "Chapter 13",
        sections: ["13.4 Converting an enumeration to and from a string", "13.6 Scoped enumerations (enum classes)", "13.7 Introduction to structs, members, and member selection"],
        questions: [
          {
            id: 102,
            question: "How do scoped enumerations differ from unscoped ones?",
            options: [
              "They are the same",
              "Scoped enums don't implicitly convert to integers",
              "Scoped enums are faster",
              "Scoped enums use less memory"
            ],
            correctAnswer: 1,
            explanation: "Scoped enumerations (enum class) don't implicitly convert to integers and require explicit scope resolution, making them safer."
          },
          {
            id: 103,
            question: "How do you access members of a struct?",
            options: [
              "Using -> operator",
              "Using . (dot) operator",
              "Using :: operator",
              "Using [] brackets"
            ],
            correctAnswer: 1,
            explanation: "Struct members are accessed using the dot (.) operator for direct access or -> for pointer access."
          },
          {
            id: 104,
            question: "What is the main purpose of structs?",
            options: [
              "To create functions",
              "To group related data together",
              "To create loops",
              "To handle errors"
            ],
            correctAnswer: 1,
            explanation: "Structs are used to group related data members together into a single type, creating logical data units.",
            codeSnippet: `#include <iostream>
#include <string>

// Scoped enumeration
enum class Animal {
    DOG,
    CAT,
    BIRD
};

// Struct definition
struct Person {
    std::string name;
    int age;
    double height;
};

int main() {
    // Scoped enum usage
    Animal myPet = Animal::DOG;
    // int value = myPet;  // Error! No implicit conversion
    
    // Struct usage
    Person student;
    student.name = "Alice";
    student.age = 20;
    student.height = 5.6;
    
    std::cout << "Student: " << student.name << std::endl;
    std::cout << "Age: " << student.age << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-13-part-3",
        title: "Enums & Structs - Part 3",
        description: "Struct initialization and class templates",
        chapter: "Chapter 13",
        sections: ["13.8 Struct aggregate initialization", "13.9 Default member initialization", "13.13 Class templates"],
        questions: [
          {
            id: 105,
            question: "What is aggregate initialization?",
            options: [
              "Initializing with functions",
              "Initializing struct members with a brace-enclosed list",
              "Initializing only the first member",
              "Initializing with pointers"
            ],
            correctAnswer: 1,
            explanation: "Aggregate initialization allows initializing all members of a struct using a brace-enclosed list of values."
          },
          {
            id: 106,
            question: "What is default member initialization?",
            options: [
              "Automatic initialization by the compiler",
              "Providing default values for struct members in the definition",
              "Initializing to zero",
              "Copying from another struct"
            ],
            correctAnswer: 1,
            explanation: "Default member initialization allows providing default values for struct members directly in the struct definition."
          },
          {
            id: 107,
            question: "What are class templates?",
            options: [
              "Pre-written classes",
              "Classes that can work with different types",
              "Classes for organizing code",
              "Classes that cannot be instantiated"
            ],
            correctAnswer: 1,
            explanation: "Class templates are blueprints for classes that can work with different types, allowing generic programming."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-14-classes",
    title: "Chapter 14 - Introduction to Classes",
    description: "Learn object-oriented programming fundamentals with C++ classes",
    chapter: "Chapter 14",
    sections: ["14.1 through 14.17", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-14-part-1",
        title: "Classes - Part 1",
        description: "OOP introduction, classes, and member functions",
        chapter: "Chapter 14",
        sections: ["14.1 Introduction to object-oriented programming", "14.2 Introduction to classes", "14.3 Member functions"],
        questions: [
          {
            id: 108,
            question: "What is object-oriented programming?",
            options: [
              "Programming with objects from real world",
              "A programming paradigm based on objects that contain data and functions",
              "Programming that focuses on graphics",
              "A type of database programming"
            ],
            correctAnswer: 1,
            explanation: "Object-oriented programming is a paradigm that organizes code around objects which contain both data (attributes) and functions (methods)."
          },
          {
            id: 109,
            question: "What is the main difference between a struct and a class?",
            options: [
              "Structs cannot have functions",
              "Classes are faster than structs",
              "Default access level: struct members are public, class members are private",
              "Classes use more memory"
            ],
            correctAnswer: 2,
            explanation: "The main difference is default access: struct members are public by default, while class members are private by default."
          },
          {
            id: 110,
            question: "What are member functions?",
            options: [
              "Functions that belong to a class and operate on class data",
              "Functions that cannot access class data",
              "Functions that are always public",
              "Functions that return class objects"
            ],
            correctAnswer: 0,
            explanation: "Member functions are functions that belong to a class and can access and manipulate the class's data members."
          }
        ]
      },
      {
        id: "chapter-14-part-2",
        title: "Classes - Part 2",
        description: "Access specifiers and encapsulation",
        chapter: "Chapter 14",
        sections: ["14.4 Const class objects and const member functions", "14.5 Public and private members and access specifiers", "14.8 The benefits of data hiding (encapsulation)"],
        questions: [
          {
            id: 111,
            question: "What are the three main access specifiers in C++?",
            options: [
              "public, protected, private",
              "open, closed, hidden",
              "read, write, execute",
              "static, dynamic, auto"
            ],
            correctAnswer: 0,
            explanation: "The three access specifiers are public (accessible everywhere), protected (accessible in derived classes), and private (only accessible within the class)."
          },
          {
            id: 112,
            question: "What is encapsulation?",
            options: [
              "Making all data public",
              "Hiding internal implementation details and providing controlled access",
              "Creating multiple classes",
              "Using only functions"
            ],
            correctAnswer: 1,
            explanation: "Encapsulation is hiding internal implementation details and providing controlled access to data through public interfaces, improving code maintainability."
          },
          {
            id: 113,
            question: "What does the const keyword do when applied to member functions?",
            options: [
              "Makes the function faster",
              "Prevents the function from modifying object data",
              "Makes the function private",
              "Allows the function to be called without an object"
            ],
            correctAnswer: 1,
            explanation: "Const member functions promise not to modify the object's data, allowing them to be called on const objects.",
            codeSnippet: `#include <iostream>
#include <string>

class Student {
private:
    std::string name;
    int grade;

public:
    // Constructor
    Student(const std::string& n, int g) : name(n), grade(g) {}
    
    // Const member function - doesn't modify object
    std::string getName() const {
        return name;  // OK, just reading
    }
    
    // Non-const member function - can modify object
    void setGrade(int newGrade) {
        grade = newGrade;  // OK, modifying is allowed
    }
    
    // Const member function
    int getGrade() const {
        return grade;  // OK, just reading
    }
};

int main() {
    Student student("Alice", 85);
    const Student constStudent("Bob", 90);
    
    // Both can call const functions
    std::cout << student.getName() << std::endl;
    std::cout << constStudent.getName() << std::endl;
    
    // Only non-const object can call non-const functions
    student.setGrade(95);  // OK
    // constStudent.setGrade(95);  // Error!
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-14-part-3",
        title: "Classes - Part 3",
        description: "Constructors and initialization",
        chapter: "Chapter 14",
        sections: ["14.9 Introduction to constructors", "14.10 Constructor member initializer lists", "14.11 Default constructors and default arguments"],
        questions: [
          {
            id: 114,
            question: "What is a constructor?",
            options: [
              "A function that destroys objects",
              "A special member function that initializes objects",
              "A function that copies objects",
              "A function that compares objects"
            ],
            correctAnswer: 1,
            explanation: "A constructor is a special member function that initializes objects when they are created, setting up their initial state."
          },
          {
            id: 115,
            question: "What are member initializer lists?",
            options: [
              "Lists of all class members",
              "A way to initialize members before the constructor body executes",
              "Lists of functions in a class",
              "Arrays of member variables"
            ],
            correctAnswer: 1,
            explanation: "Member initializer lists provide a way to initialize class members before the constructor body executes, which is more efficient for some types."
          },
          {
            id: 116,
            question: "When is a default constructor provided automatically?",
            options: [
              "Always",
              "When no other constructors are defined",
              "Never",
              "Only for structs"
            ],
            correctAnswer: 1,
            explanation: "The compiler provides a default constructor automatically only when no other constructors are explicitly defined by the programmer."
          }
        ]
      },
      {
        id: "chapter-14-part-4",
        title: "Classes - Part 4",
        description: "Advanced constructor features and copy semantics",
        chapter: "Chapter 14",
        sections: ["14.12 Delegating constructors", "14.14 Introduction to the copy constructor", "14.16 Converting constructors and the explicit keyword"],
        questions: [
          {
            id: 117,
            question: "What are delegating constructors?",
            options: [
              "Constructors that call other constructors in the same class",
              "Constructors that are called by other classes",
              "Constructors that don't initialize anything",
              "Constructors that are automatically generated"
            ],
            correctAnswer: 0,
            explanation: "Delegating constructors allow one constructor to call another constructor in the same class, reducing code duplication."
          },
          {
            id: 118,
            question: "What is a copy constructor?",
            options: [
              "A constructor that creates empty objects",
              "A constructor that initializes an object from another object of the same type",
              "A constructor that copies functions",
              "A constructor that duplicates the entire program"
            ],
            correctAnswer: 1,
            explanation: "A copy constructor creates a new object as a copy of an existing object of the same type."
          },
          {
            id: 119,
            question: "What does the explicit keyword do?",
            options: [
              "Makes constructors faster",
              "Prevents implicit conversions using the constructor",
              "Makes constructors public",
              "Allows constructors to be called without arguments"
            ],
            correctAnswer: 1,
            explanation: "The explicit keyword prevents implicit conversions using single-argument constructors, requiring explicit conversion syntax."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-15-more-classes",
    title: "Chapter 15 - More on Classes",
    description: "Advanced class features including static members and friend functions",
    chapter: "Chapter 15",
    sections: ["15.1 through 15.10", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-15-part-1",
        title: "More Classes - Part 1",
        description: "This pointer, header files, and nested types",
        chapter: "Chapter 15",
        sections: ["15.1 The hidden \"this\" pointer and member function chaining", "15.2 Classes and header files", "15.3 Nested types (member types)"],
        questions: [
          {
            id: 120,
            question: "What is the 'this' pointer?",
            options: [
              "A pointer to the current function",
              "A hidden pointer that points to the current object",
              "A pointer to the next object",
              "A pointer to the class definition"
            ],
            correctAnswer: 1,
            explanation: "The 'this' pointer is a hidden pointer available in non-static member functions that points to the current object."
          },
          {
            id: 121,
            question: "Why put class definitions in header files?",
            options: [
              "To make them faster",
              "To allow multiple source files to use the class",
              "To hide the implementation",
              "To reduce file size"
            ],
            correctAnswer: 1,
            explanation: "Class definitions are put in header files so they can be included and used by multiple source files in a project."
          },
          {
            id: 122,
            question: "What are nested types?",
            options: [
              "Types defined inside another type",
              "Types that inherit from other types",
              "Types that contain pointers",
              "Types that are automatically generated"
            ],
            correctAnswer: 0,
            explanation: "Nested types are types (like enums, structs, or classes) defined inside another class, providing logical grouping and scope."
          }
        ]
      },
      {
        id: "chapter-15-part-2",
        title: "More Classes - Part 2",
        description: "Destructors and static members",
        chapter: "Chapter 15",
        sections: ["15.4 Introduction to destructors", "15.6 Static member variables", "15.7 Static member functions"],
        questions: [
          {
            id: 123,
            question: "What is a destructor?",
            options: [
              "A function that creates objects",
              "A function that cleans up when an object is destroyed",
              "A function that copies objects",
              "A function that modifies objects"
            ],
            correctAnswer: 1,
            explanation: "A destructor is a special member function that performs cleanup when an object is destroyed, freeing resources and performing final operations."
          },
          {
            id: 124,
            question: "What are static member variables?",
            options: [
              "Variables that belong to the class rather than any instance",
              "Variables that cannot be modified",
              "Variables that are automatically initialized",
              "Variables that are only accessible within the class"
            ],
            correctAnswer: 0,
            explanation: "Static member variables belong to the class itself rather than to any specific instance, and are shared among all objects of the class."
          },
          {
            id: 125,
            question: "How do static member functions differ from regular member functions?",
            options: [
              "They are faster",
              "They don't have access to 'this' pointer or non-static members",
              "They are automatically generated",
              "They can only be called once"
            ],
            correctAnswer: 1,
            explanation: "Static member functions don't have access to the 'this' pointer and can only access static members, as they belong to the class rather than instances.",
            codeSnippet: `#include <iostream>

class Counter {
private:
    static int count;  // Static member variable
    int id;

public:
    Counter() : id(++count) {
        std::cout << "Counter " << id << " created" << std::endl;
    }
    
    ~Counter() {  // Destructor
        std::cout << "Counter " << id << " destroyed" << std::endl;
    }
    
    // Static member function
    static int getCount() {
        return count;  // Can only access static members
        // return id;  // Error! Cannot access non-static members
    }
    
    int getId() const {
        return id;
    }
};

// Static member definition
int Counter::count = 0;

int main() {
    std::cout << "Initial count: " << Counter::getCount() << std::endl;
    
    {
        Counter c1, c2;
        std::cout << "Count: " << Counter::getCount() << std::endl;
    }  // Destructors called here
    
    std::cout << "Final count: " << Counter::getCount() << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-15-part-3",
        title: "More Classes - Part 3",
        description: "Friend functions and advanced features",
        chapter: "Chapter 15",
        sections: ["15.8 Friend non-member functions", "15.9 Friend classes and friend member functions", "15.10 Ref qualifiers"],
        questions: [
          {
            id: 126,
            question: "What are friend functions?",
            options: [
              "Functions that are always public",
              "Non-member functions that have access to private members of a class",
              "Functions that can only be called by other functions",
              "Functions that are automatically generated"
            ],
            correctAnswer: 1,
            explanation: "Friend functions are non-member functions that have been granted access to the private and protected members of a class."
          },
          {
            id: 127,
            question: "When might you use friend functions?",
            options: [
              "To make all functions accessible",
              "For operator overloading or when a function needs access to private data of multiple classes",
              "To make functions faster",
              "To avoid writing member functions"
            ],
            correctAnswer: 1,
            explanation: "Friend functions are useful for operator overloading and situations where a function needs intimate access to the private data of one or more classes."
          },
          {
            id: 128,
            question: "What are ref qualifiers?",
            options: [
              "Qualifiers that make references faster",
              "Qualifiers that specify whether a member function can be called on lvalue or rvalue objects",
              "Qualifiers that make functions static",
              "Qualifiers that control access levels"
            ],
            correctAnswer: 1,
            explanation: "Ref qualifiers (& and &&) allow member functions to be overloaded based on whether the object is an lvalue or rvalue."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-16-vectors",
    title: "Chapter 16 - Dynamic Arrays: std::vector",
    description: "Master dynamic arrays and containers with std::vector",
    chapter: "Chapter 16",
    sections: ["16.1 through 16.12", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-16-part-1",
        title: "Vectors - Part 1",
        description: "Introduction to containers and std::vector basics",
        chapter: "Chapter 16",
        sections: ["16.1 Introduction to containers and arrays", "16.2 Introduction to std::vector and list constructors", "16.3 std::vector and the unsigned length and subscript problem"],
        questions: [
          {
            id: 129,
            question: "What is a container in C++?",
            options: [
              "A function that contains other functions",
              "A data structure that holds a collection of objects",
              "A file that contains source code",
              "A variable that contains a single value"
            ],
            correctAnswer: 1,
            explanation: "A container is a data structure that holds a collection of objects and provides methods to access and manipulate those objects."
          },
          {
            id: 130,
            question: "What is std::vector?",
            options: [
              "A fixed-size array",
              "A dynamic array that can change size during runtime",
              "A mathematical vector for calculations",
              "A function pointer"
            ],
            correctAnswer: 1,
            explanation: "std::vector is a dynamic array container that can automatically resize itself during runtime, providing flexible array functionality."
          },
          {
            id: 131,
            question: "Why should you be careful with unsigned indices in std::vector?",
            options: [
              "They are slower than signed indices",
              "Unsigned arithmetic can cause wraparound bugs",
              "They use more memory",
              "They are not supported"
            ],
            correctAnswer: 1,
            explanation: "Unsigned indices can cause wraparound bugs when arithmetic results in negative values, leading to unexpected behavior.",
            codeSnippet: `#include <iostream>
#include <vector>

int main() {
    // Creating vectors
    std::vector<int> numbers;           // Empty vector
    std::vector<int> scores(5);         // 5 elements, default initialized
    std::vector<int> grades{85, 90, 78, 92, 88};  // Initializer list
    
    // Adding elements
    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_back(30);
    
    // Accessing elements
    std::cout << "First number: " << numbers[0] << std::endl;
    std::cout << "Vector size: " << numbers.size() << std::endl;
    
    // Range-based for loop
    std::cout << "All numbers: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-16-part-2",
        title: "Vectors - Part 2",
        description: "Passing vectors and move semantics introduction",
        chapter: "Chapter 16",
        sections: ["16.4 Passing std::vector", "16.5 Returning std::vector, and an introduction to move semantics", "16.6 Arrays and loops"],
        questions: [
          {
            id: 132,
            question: "How should you pass a std::vector to a function if you don't want to modify it?",
            options: [
              "By value",
              "By const reference",
              "By pointer",
              "By rvalue reference"
            ],
            correctAnswer: 1,
            explanation: "Pass by const reference (const std::vector<T>&) avoids copying while preventing modification of the original vector."
          },
          {
            id: 133,
            question: "What is move semantics?",
            options: [
              "Moving objects in memory",
              "Transferring ownership of resources without copying",
              "Moving functions between classes",
              "Physically relocating data"
            ],
            correctAnswer: 1,
            explanation: "Move semantics allow transferring ownership of resources (like memory) from one object to another without expensive copying operations."
          },
          {
            id: 134,
            question: "What's the advantage of range-based for loops with vectors?",
            options: [
              "They are faster",
              "They provide cleaner, safer iteration without index management",
              "They use less memory",
              "They automatically sort the vector"
            ],
            correctAnswer: 1,
            explanation: "Range-based for loops provide cleaner, more readable code and eliminate common indexing errors while iterating through containers."
          }
        ]
      },
      {
        id: "chapter-16-part-3",
        title: "Vectors - Part 3",
        description: "Range-based for loops and vector capacity",
        chapter: "Chapter 16",
        sections: ["16.8 Range-based for loops (for-each)", "16.10 std::vector resizing and capacity", "16.11 std::vector and stack behavior"],
        questions: [
          {
            id: 135,
            question: "What is the difference between size() and capacity() in std::vector?",
            options: [
              "They are the same",
              "size() is current elements, capacity() is allocated space",
              "capacity() is always smaller than size()",
              "size() includes deleted elements"
            ],
            correctAnswer: 1,
            explanation: "size() returns the number of elements currently in the vector, while capacity() returns the amount of space allocated (which may be larger)."
          },
          {
            id: 136,
            question: "How does std::vector behave like a stack?",
            options: [
              "It can only store integers",
              "It provides push_back() and pop_back() for LIFO operations",
              "It automatically sorts elements",
              "It can only have one element"
            ],
            correctAnswer: 1,
            explanation: "std::vector provides push_back() to add elements to the end and pop_back() to remove from the end, enabling stack (LIFO) behavior."
          },
          {
            id: 137,
            question: "When might std::vector reallocate memory?",
            options: [
              "Never",
              "When adding elements exceeds current capacity",
              "Every time an element is added",
              "Only when explicitly requested"
            ],
            correctAnswer: 1,
            explanation: "std::vector reallocates memory when adding elements would exceed its current capacity, potentially invalidating existing iterators and references.",
            codeSnippet: `#include <iostream>
#include <vector>

void printVector(const std::vector<int>& vec) {
    std::cout << "Size: " << vec.size() 
              << ", Capacity: " << vec.capacity() << std::endl;
    
    // Range-based for loop
    std::cout << "Elements: ";
    for (const auto& element : vec) {
        std::cout << element << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::vector<int> stack;
    
    // Stack-like operations
    stack.push_back(10);  // Push onto stack
    stack.push_back(20);
    stack.push_back(30);
    
    printVector(stack);
    
    // Reserve capacity to avoid reallocations
    stack.reserve(10);
    std::cout << "After reserve(10): ";
    printVector(stack);
    
    // Pop from stack
    stack.pop_back();  // Removes 30
    std::cout << "After pop_back(): ";
    printVector(stack);
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
    id: "chapter-17-arrays",
    title: "Chapter 17 - Fixed-size Arrays",
    description: "Learn std::array and C-style arrays for fixed-size data storage",
    chapter: "Chapter 17",
    sections: ["17.1 through 17.13", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-17-part-1",
        title: "Arrays - Part 1",
        description: "std::array introduction, length, and passing",
        chapter: "Chapter 17",
        sections: ["17.1 Introduction to std::array", "17.2 std::array length and indexing", "17.3 Passing and returning std::array"],
        questions: [
          {
            id: 138,
            question: "What is std::array?",
            options: [
              "A dynamic array that can resize",
              "A fixed-size array container with compile-time size",
              "A pointer to an array",
              "A function that creates arrays"
            ],
            correctAnswer: 1,
            explanation: "std::array is a fixed-size array container where the size is determined at compile time, providing array functionality with STL container benefits."
          },
          {
            id: 139,
            question: "How do you declare a std::array with 5 integers?",
            options: [
              "std::array<int> arr(5);",
              "std::array<int, 5> arr;",
              "std::array arr[5];",
              "array<int, 5> arr;"
            ],
            correctAnswer: 1,
            explanation: "std::array is declared with the type and size as template parameters: std::array<type, size> name;",
            codeSnippet: `#include <iostream>
#include <array>

int main() {
    // Declaring std::array
    std::array<int, 5> numbers;           // Uninitialized
    std::array<int, 3> scores{85, 92, 78}; // Initialized
    
    // Size is compile-time constant
    constexpr size_t size = numbers.size(); // 5
    
    // Accessing elements
    numbers[0] = 10;
    numbers.at(1) = 20;  // Bounds-checked access
    
    // Range-based for loop
    for (int& num : numbers) {
        std::cout << num << " ";
    }
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 140,
            question: "How should you pass a std::array to a function?",
            options: [
              "By value (always)",
              "By reference or const reference",
              "By pointer only",
              "std::array cannot be passed to functions"
            ],
            correctAnswer: 1,
            explanation: "Pass std::array by reference to avoid copying, or by const reference if you don't need to modify it."
          }
        ]
      },
      {
        id: "chapter-17-part-2",
        title: "Arrays - Part 2",
        description: "Class types, reference arrays, and enumerations",
        chapter: "Chapter 17",
        sections: ["17.4 std::array of class types, and brace elision", "17.5 Arrays of references via std::reference_wrapper", "17.6 std::array and enumerations"],
        questions: [
          {
            id: 141,
            question: "What is brace elision in std::array initialization?",
            options: [
              "Using extra braces",
              "Omitting inner braces when initializing",
              "Using square brackets instead of braces",
              "A compilation error"
            ],
            correctAnswer: 1,
            explanation: "Brace elision allows omitting inner braces when the structure is clear, making initialization more concise."
          },
          {
            id: 142,
            question: "How do you create an array of references?",
            options: [
              "std::array<int&, 3> refs;",
              "std::array<std::reference_wrapper<int>, 3> refs;",
              "std::array<int*, 3> refs;",
              "Arrays of references are not possible"
            ],
            correctAnswer: 1,
            explanation: "Since references cannot be default constructed or reassigned, use std::reference_wrapper to create arrays of references."
          },
          {
            id: 143,
            question: "Why might you use enumerations with std::array?",
            options: [
              "To make arrays faster",
              "To use meaningful names for array indices",
              "To reduce memory usage",
              "To enable automatic sorting"
            ],
            correctAnswer: 1,
            explanation: "Enumerations provide meaningful names for array indices, making code more readable and self-documenting.",
            codeSnippet: `#include <iostream>
#include <array>
#include <functional>

enum class Color { RED, GREEN, BLUE, COUNT };

int main() {
    // Array with enum-based indexing
    std::array<int, static_cast<size_t>(Color::COUNT)> colorValues{255, 128, 64};
    
    // Accessing with meaningful names
    colorValues[static_cast<size_t>(Color::RED)] = 200;
    
    // Array of references using reference_wrapper
    int a = 10, b = 20, c = 30;
    std::array<std::reference_wrapper<int>, 3> refs{a, b, c};
    
    // Modifying through references
    refs[0].get() = 100;  // a is now 100
    
    std::cout << "a = " << a << std::endl;  // Prints 100
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-17-part-3",
        title: "Arrays - Part 3",
        description: "C-style arrays and pointer arithmetic",
        chapter: "Chapter 17",
        sections: ["17.7 Introduction to C-style arrays", "17.8 C-style array decay", "17.9 Pointer arithmetic and subscripting"],
        questions: [
          {
            id: 144,
            question: "What is array decay in C-style arrays?",
            options: [
              "Arrays becoming corrupted over time",
              "Arrays automatically converting to pointers when passed to functions",
              "Arrays losing their elements",
              "Arrays becoming slower"
            ],
            correctAnswer: 1,
            explanation: "Array decay is when C-style arrays automatically convert to pointers when passed to functions, losing size information."
          },
          {
            id: 145,
            question: "What does pointer arithmetic allow you to do?",
            options: [
              "Add and subtract mathematical operations",
              "Navigate through array elements using pointer operations",
              "Multiply pointers together",
              "Convert pointers to different types"
            ],
            correctAnswer: 1,
            explanation: "Pointer arithmetic allows navigating through array elements by adding/subtracting integer values to move the pointer."
          },
          {
            id: 146,
            question: "Why should you prefer std::array over C-style arrays?",
            options: [
              "C-style arrays are faster",
              "std::array is safer and provides more functionality",
              "C-style arrays use less memory",
              "std::array is only for advanced programmers"
            ],
            correctAnswer: 1,
            explanation: "std::array is safer (doesn't decay, knows its size), provides STL container functionality, and has better debugging support."
          }
        ]
      },
      {
        id: "chapter-17-part-4",
        title: "Arrays - Part 4",
        description: "C-style strings and multidimensional arrays",
        chapter: "Chapter 17",
        sections: ["17.10 C-style strings", "17.12 Multidimensional C-style Arrays", "17.13 Multidimensional std::array"],
        questions: [
          {
            id: 147,
            question: "What is a C-style string?",
            options: [
              "A std::string object",
              "An array of characters terminated by null character '\\0'",
              "A string that can only contain letters",
              "A string with fixed length"
            ],
            correctAnswer: 1,
            explanation: "C-style strings are arrays of characters terminated by the null character '\\0', inherited from the C programming language."
          },
          {
            id: 148,
            question: "How do you declare a 2D C-style array?",
            options: [
              "int arr[3, 4];",
              "int arr[3][4];",
              "int arr(3)(4);",
              "int arr<3><4>;"
            ],
            correctAnswer: 1,
            explanation: "Multidimensional C-style arrays use multiple sets of square brackets: int arr[rows][cols];"
          },
          {
            id: 149,
            question: "How do you declare a 2D std::array?",
            options: [
              "std::array<std::array<int, 4>, 3> arr;",
              "std::array<int, 3, 4> arr;",
              "std::array<int[3][4]> arr;",
              "std::array<int, 3*4> arr;"
            ],
            correctAnswer: 0,
            explanation: "2D std::array is declared as an array of arrays: std::array<std::array<type, inner_size>, outer_size>",
            codeSnippet: `#include <iostream>
#include <array>
#include <cstring>

int main() {
    // C-style string
    char greeting[] = "Hello";  // Automatically null-terminated
    char name[20];
    std::strcpy(name, "World");
    
    std::cout << greeting << " " << name << std::endl;
    
    // 2D C-style array
    int matrix[3][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    
    // 2D std::array
    std::array<std::array<int, 4>, 3> grid{{
        {{1, 2, 3, 4}},
        {{5, 6, 7, 8}},
        {{9, 10, 11, 12}}
    }};
    
    // Accessing elements
    std::cout << "Matrix[1][2]: " << matrix[1][2] << std::endl;  // 7
    std::cout << "Grid[1][2]: " << grid[1][2] << std::endl;     // 7
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
    id: "chapter-18-iterators",
    title: "Chapter 18 - Iterators and Algorithms",
    description: "Introduction to iterators and standard library algorithms",
    chapter: "Chapter 18",
    sections: ["18.1 through 18.4", "Under construction"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-18-part-1",
        title: "Iterators & Algorithms - Part 1",
        description: "Sorting algorithms and iterator introduction",
        chapter: "Chapter 18",
        sections: ["18.1 Sorting an array using selection sort", "18.2 Introduction to iterators", "18.4 Timing your code"],
        questions: [
          {
            id: 150,
            question: "What is selection sort?",
            options: [
              "A sorting algorithm that finds the smallest element and swaps it to the front",
              "A sorting algorithm that splits the array in half",
              "A sorting algorithm that uses recursion",
              "A sorting algorithm that only works with strings"
            ],
            correctAnswer: 0,
            explanation: "Selection sort repeatedly finds the smallest element from the unsorted portion and moves it to the sorted portion."
          },
          {
            id: 151,
            question: "What is an iterator?",
            options: [
              "A function that counts elements",
              "An object that provides access to elements in a container",
              "A type of loop",
              "A sorting algorithm"
            ],
            correctAnswer: 1,
            explanation: "An iterator is an object that provides a way to access elements in a container sequentially, similar to a pointer."
          },
          {
            id: 152,
            question: "Why might you want to time your code?",
            options: [
              "To measure algorithm performance and optimization",
              "To make the program look professional",
              "To debug syntax errors",
              "To count the number of functions"
            ],
            correctAnswer: 0,
            explanation: "Timing code helps measure performance, compare algorithms, and identify bottlenecks for optimization.",
            codeSnippet: `#include <iostream>
#include <vector>
#include <chrono>
#include <algorithm>

void selectionSort(std::vector<int>& arr) {
    size_t n = arr.size();
    for (size_t i = 0; i < n - 1; ++i) {
        size_t minIndex = i;
        for (size_t j = i + 1; j < n; ++j) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        std::swap(arr[i], arr[minIndex]);
    }
}

int main() {
    std::vector<int> numbers{64, 34, 25, 12, 22, 11, 90};
    
    // Timing the sort
    auto start = std::chrono::high_resolution_clock::now();
    selectionSort(numbers);
    auto end = std::chrono::high_resolution_clock::now();
    
    auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
    std::cout << "Sort took " << duration.count() << " microseconds" << std::endl;
    
    // Using iterators
    for (auto it = numbers.begin(); it != numbers.end(); ++it) {
        std::cout << *it << " ";
    }
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
    id: "chapter-19-dynamic-allocation",
    title: "Chapter 19 - Dynamic Allocation",
    description: "Learn dynamic memory management with new and delete",
    chapter: "Chapter 19",
    sections: ["19.1 through 19.5", "Under construction"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-19-part-1",
        title: "Dynamic Allocation - Part 1",
        description: "Dynamic memory allocation and arrays",
        chapter: "Chapter 19",
        sections: ["19.1 Dynamic memory allocation with new and delete", "19.2 Dynamically allocating arrays", "19.5 Void pointers"],
        questions: [
          {
            id: 153,
            question: "What operators are used for dynamic memory allocation in C++?",
            options: [
              "malloc and free",
              "new and delete",
              "alloc and dealloc",
              "create and destroy"
            ],
            correctAnswer: 1,
            explanation: "C++ uses 'new' to allocate memory and 'delete' to deallocate memory on the heap."
          },
          {
            id: 154,
            question: "What is the difference between stack and heap memory?",
            options: [
              "No difference",
              "Stack is automatic and limited, heap is manual and larger",
              "Heap is faster than stack",
              "Stack is only for integers"
            ],
            correctAnswer: 1,
            explanation: "Stack memory is automatically managed with limited size, while heap memory is manually managed with larger capacity."
          },
          {
            id: 155,
            question: "What is a void pointer?",
            options: [
              "A pointer that points to nothing",
              "A generic pointer that can point to any type",
              "A pointer that's always null",
              "A pointer that causes errors"
            ],
            correctAnswer: 1,
            explanation: "A void pointer (void*) is a generic pointer that can point to objects of any type, but requires casting to be dereferenced.",
            codeSnippet: `#include <iostream>

int main() {
    // Dynamic allocation
    int* ptr = new int(42);        // Allocate single int
    int* arr = new int[5]{1,2,3,4,5}; // Allocate array
    
    std::cout << "Value: " << *ptr << std::endl;
    std::cout << "Array[2]: " << arr[2] << std::endl;
    
    // Void pointer example
    void* voidPtr = ptr;           // Can point to any type
    int* intPtr = static_cast<int*>(voidPtr); // Cast back to use
    
    // Clean up memory
    delete ptr;       // Free single object
    delete[] arr;     // Free array
    
    // Avoid dangling pointers
    ptr = nullptr;
    arr = nullptr;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
    id: "chapter-20-advanced-functions",
    title: "Chapter 20 - Advanced Functions",
    description: "Function pointers, recursion, and lambda expressions",
    chapter: "Chapter 20",
    sections: ["20.1 through 20.7", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-20-part-1",
        title: "Advanced Functions - Part 1",
        description: "Function pointers, stack/heap, and recursion",
        chapter: "Chapter 20",
        sections: ["20.1 Function Pointers", "20.2 The stack and the heap", "20.3 Recursion"],
        questions: [
          {
            id: 156,
            question: "What is a function pointer?",
            options: [
              "A pointer inside a function",
              "A variable that stores the address of a function",
              "A function that returns a pointer",
              "A pointer to function parameters"
            ],
            correctAnswer: 1,
            explanation: "A function pointer is a variable that stores the memory address of a function, allowing indirect function calls."
          },
          {
            id: 157,
            question: "What is recursion?",
            options: [
              "A function calling other functions",
              "A function calling itself",
              "A function with multiple parameters",
              "A function that never returns"
            ],
            correctAnswer: 1,
            explanation: "Recursion is when a function calls itself, typically with modified parameters to eventually reach a base case."
          },
          {
            id: 158,
            question: "What is essential for a recursive function to work correctly?",
            options: [
              "It must be very fast",
              "It must have a base case to stop recursion",
              "It must use global variables",
              "It must return a pointer"
            ],
            correctAnswer: 1,
            explanation: "A recursive function must have a base case (stopping condition) to prevent infinite recursion and stack overflow."
          }
        ]
      },
      {
        id: "chapter-20-part-2",
        title: "Advanced Functions - Part 2",
        description: "Command line arguments and lambda expressions",
        chapter: "Chapter 20",
        sections: ["20.4 Command line arguments", "20.6 Introduction to lambdas (anonymous functions)", "20.7 Lambda captures"],
        questions: [
          {
            id: 159,
            question: "How do you access command line arguments in main()?",
            options: [
              "int main(string args)",
              "int main(int argc, char* argv[])",
              "int main(args[])",
              "int main(commandline cl)"
            ],
            correctAnswer: 1,
            explanation: "Command line arguments are accessed through main(int argc, char* argv[]) where argc is count and argv[] contains the arguments."
          },
          {
            id: 160,
            question: "What is a lambda expression?",
            options: [
              "A mathematical formula",
              "An anonymous function that can be defined inline",
              "A type of variable",
              "A control flow statement"
            ],
            correctAnswer: 1,
            explanation: "A lambda expression is an anonymous function that can be defined inline, useful for short functions and callbacks."
          },
          {
            id: 161,
            question: "What does lambda capture allow you to do?",
            options: [
              "Access variables from the surrounding scope",
              "Capture function parameters",
              "Catch exceptions",
              "Capture return values"
            ],
            correctAnswer: 0,
            explanation: "Lambda capture allows accessing variables from the surrounding scope within the lambda function body.",
            codeSnippet: `#include <iostream>
#include <vector>
#include <algorithm>

int factorial(int n) {
    if (n <= 1) return 1;          // Base case
    return n * factorial(n - 1);   // Recursive case
}

int main(int argc, char* argv[]) {
    // Command line arguments
    std::cout << "Program name: " << argv[0] << std::endl;
    std::cout << "Argument count: " << argc << std::endl;
    
    // Function pointer
    int (*funcPtr)(int) = factorial;
    std::cout << "5! = " << funcPtr(5) << std::endl;
    
    // Lambda expressions
    std::vector<int> numbers{1, 2, 3, 4, 5};
    int multiplier = 2;
    
    // Lambda with capture
    auto multiply = [multiplier](int x) { return x * multiplier; };
    
    std::transform(numbers.begin(), numbers.end(), numbers.begin(), multiply);
    
    for (int num : numbers) {
        std::cout << num << " ";  // 2 4 6 8 10
    }
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
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
        description: "Introduction and arithmetic operators",
        chapter: "Chapter 21",
        sections: ["21.1 Introduction to operator overloading", "21.2 Overloading the arithmetic operators using friend functions", "21.3 Overloading operators using normal functions"],
        questions: [
          {
            id: 162,
            question: "What is operator overloading?",
            options: [
              "Using too many operators",
              "Giving new meanings to operators for user-defined types",
              "Operators that work faster",
              "Operators that are automatically generated"
            ],
            correctAnswer: 1,
            explanation: "Operator overloading allows you to define custom behavior for operators when used with user-defined types like classes."
          },
          {
            id: 163,
            question: "Why use friend functions for operator overloading?",
            options: [
              "They are faster",
              "They can access private members and allow natural syntax",
              "They are required by the compiler",
              "They use less memory"
            ],
            correctAnswer: 1,
            explanation: "Friend functions can access private members while allowing natural syntax like 'obj1 + obj2' instead of 'obj1.operator+(obj2)'."
          },
          {
            id: 164,
            question: "Which operators cannot be overloaded?",
            options: [
              "+, -, *, /",
              "::, ., .*, ?:",
              "==, !=, <, >",
              "[], (), ++, --"
            ],
            correctAnswer: 1,
            explanation: "The scope resolution (::), member access (.), member pointer access (.*), and ternary (?:) operators cannot be overloaded.",
            codeSnippet: `#include <iostream>

class Point {
private:
    int x, y;

public:
    Point(int x = 0, int y = 0) : x(x), y(y) {}
    
    // Friend function for operator overloading
    friend Point operator+(const Point& lhs, const Point& rhs);
    friend std::ostream& operator<<(std::ostream& out, const Point& point);
    
    // Member function approach
    Point operator-(const Point& other) const {
        return Point(x - other.x, y - other.y);
    }
};

// Friend function implementation
Point operator+(const Point& lhs, const Point& rhs) {
    return Point(lhs.x + rhs.x, lhs.y + rhs.y);
}

std::ostream& operator<<(std::ostream& out, const Point& point) {
    out << "(" << point.x << ", " << point.y << ")";
    return out;
}

int main() {
    Point p1(3, 4);
    Point p2(1, 2);
    
    Point sum = p1 + p2;     // Uses friend function
    Point diff = p1 - p2;    // Uses member function
    
    std::cout << "p1 + p2 = " << sum << std::endl;
    std::cout << "p1 - p2 = " << diff << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-21-part-2",
        title: "Operator Overloading - Part 2",
        description: "I/O operators and member function overloading",
        chapter: "Chapter 21",
        sections: ["21.4 Overloading the I/O operators", "21.5 Overloading operators using member functions", "21.6 Overloading unary operators +, -, and !"],
        questions: [
          {
            id: 165,
            question: "How should you overload the << operator for output?",
            options: [
              "As a member function",
              "As a friend function returning ostream&",
              "As a static function",
              "As a virtual function"
            ],
            correctAnswer: 1,
            explanation: "The << operator should be overloaded as a friend function that returns ostream& to allow chaining and proper syntax."
          },
          {
            id: 166,
            question: "When should you use member functions vs. friend functions for operator overloading?",
            options: [
              "Always use member functions",
              "Use member functions when the left operand is your class",
              "Always use friend functions",
              "It doesn't matter"
            ],
            correctAnswer: 1,
            explanation: "Use member functions when the left operand is of your class type, and friend functions when you need access to private members with different syntax."
          },
          {
            id: 167,
            question: "What should unary operator- return?",
            options: [
              "void",
              "A reference to the object",
              "A new object with negated values",
              "A pointer to the object"
            ],
            correctAnswer: 2,
            explanation: "Unary operator- should return a new object with the negated values, preserving the original object."
          }
        ]
      },
      {
        id: "chapter-21-part-3",
        title: "Operator Overloading - Part 3",
        description: "Comparison and increment operators",
        chapter: "Chapter 21",
        sections: ["21.7 Overloading the comparison operators", "21.8 Overloading the increment and decrement operators", "21.12 Overloading the assignment operator"],
        questions: [
          {
            id: 168,
            question: "What should operator== return?",
            options: [
              "An integer",
              "A boolean value",
              "A reference to the object",
              "A new object"
            ],
            correctAnswer: 1,
            explanation: "Comparison operators like == should return a boolean value indicating whether the comparison is true or false."
          },
          {
            id: 169,
            question: "How do you distinguish between prefix and postfix increment?",
            options: [
              "Different function names",
              "Postfix takes a dummy int parameter",
              "Prefix is a member, postfix is a friend",
              "They cannot be distinguished"
            ],
            correctAnswer: 1,
            explanation: "Postfix increment/decrement operators take a dummy int parameter to distinguish them from prefix versions."
          },
          {
            id: 170,
            question: "What should the assignment operator return?",
            options: [
              "void",
              "A copy of the object",
              "A reference to *this",
              "A pointer to this"
            ],
            correctAnswer: 2,
            explanation: "The assignment operator should return a reference to *this to allow chaining assignments like a = b = c."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-22-move-semantics",
    title: "Chapter 22 - Move Semantics and Smart Pointers",
    description: "Master modern C++ memory management with smart pointers",
    chapter: "Chapter 22",
    sections: ["22.1 through 22.7", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-22-part-1",
        title: "Move Semantics - Part 1",
        description: "Introduction and rvalue references",
        chapter: "Chapter 22",
        sections: ["22.1 Introduction to smart pointers and move semantics", "22.2 R-value references", "22.3 Move constructors and move assignment"],
        questions: [
          {
            id: 171,
            question: "What are smart pointers?",
            options: [
              "Pointers that are faster",
              "Pointers that automatically manage memory",
              "Pointers that can do arithmetic",
              "Pointers that are always null"
            ],
            correctAnswer: 1,
            explanation: "Smart pointers are objects that automatically manage the lifetime of dynamically allocated memory, preventing memory leaks."
          },
          {
            id: 172,
            question: "What is an rvalue reference?",
            options: [
              "A reference to a variable on the right side",
              "A reference that can bind to temporary objects",
              "A reference that's always const",
              "A reference to return values"
            ],
            correctAnswer: 1,
            explanation: "An rvalue reference (&&) can bind to temporary objects and enables move semantics for efficient resource transfer."
          },
          {
            id: 173,
            question: "What is the purpose of move semantics?",
            options: [
              "To move objects physically in memory",
              "To transfer ownership of resources without copying",
              "To make objects move faster",
              "To move functions between classes"
            ],
            correctAnswer: 1,
            explanation: "Move semantics allow transferring ownership of resources (like memory) from one object to another without expensive copying."
          }
        ]
      },
      {
        id: "chapter-22-part-2",
        title: "Move Semantics - Part 2",
        description: "std::move and unique_ptr",
        chapter: "Chapter 22",
        sections: ["22.4 std::move", "22.5 std::unique_ptr", "22.6 std::shared_ptr"],
        questions: [
          {
            id: 174,
            question: "What does std::move do?",
            options: [
              "Physically moves objects in memory",
              "Casts an lvalue to an rvalue reference",
              "Copies an object to a new location",
              "Deletes the original object"
            ],
            correctAnswer: 1,
            explanation: "std::move casts an lvalue to an rvalue reference, enabling move semantics without actually moving anything."
          },
          {
            id: 175,
            question: "What is unique about std::unique_ptr?",
            options: [
              "It can be copied freely",
              "Only one unique_ptr can own a resource at a time",
              "It can point to multiple objects",
              "It never deletes the object"
            ],
            correctAnswer: 1,
            explanation: "std::unique_ptr provides exclusive ownership - only one unique_ptr can own a particular resource at any time."
          },
          {
            id: 176,
            question: "When should you use std::shared_ptr?",
            options: [
              "When you need exclusive ownership",
              "When multiple objects need to share ownership",
              "Never, unique_ptr is always better",
              "Only for arrays"
            ],
            correctAnswer: 1,
            explanation: "Use std::shared_ptr when multiple objects need to share ownership of the same resource.",
            codeSnippet: `#include <iostream>
#include <memory>

class Resource {
    int id;
public:
    Resource(int id) : id(id) {
        std::cout << "Resource " << id << " created" << std::endl;
    }
    
    ~Resource() {
        std::cout << "Resource " << id << " destroyed" << std::endl;
    }
    
    int getId() const { return id; }
};

int main() {
    // unique_ptr - exclusive ownership
    std::unique_ptr<Resource> ptr1 = std::make_unique<Resource>(1);
    std::unique_ptr<Resource> ptr2 = std::move(ptr1); // Transfer ownership
    // ptr1 is now null, ptr2 owns the resource
    
    // shared_ptr - shared ownership
    std::shared_ptr<Resource> shared1 = std::make_shared<Resource>(2);
    std::shared_ptr<Resource> shared2 = shared1; // Both share ownership
    
    std::cout << "shared1 use count: " << shared1.use_count() << std::endl; // 2
    
    // Resource 1 destroyed when ptr2 goes out of scope
    // Resource 2 destroyed when both shared1 and shared2 go out of scope
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-22-part-3",
        title: "Move Semantics - Part 3",
        description: "Circular dependencies and weak_ptr",
        chapter: "Chapter 22",
        sections: ["22.7 Circular dependency issues with std::shared_ptr, and std::weak_ptr"],
        questions: [
          {
            id: 177,
            question: "What problem can occur with std::shared_ptr?",
            options: [
              "Memory leaks from circular references",
              "They are too slow",
              "They use too much memory",
              "They cannot be copied"
            ],
            correctAnswer: 0,
            explanation: "Circular references between shared_ptrs can prevent objects from being destroyed, causing memory leaks."
          },
          {
            id: 178,
            question: "How does std::weak_ptr help with circular references?",
            options: [
              "It automatically breaks cycles",
              "It provides non-owning access to shared_ptr objects",
              "It makes shared_ptr faster",
              "It prevents all memory leaks"
            ],
            correctAnswer: 1,
            explanation: "std::weak_ptr provides non-owning access to objects managed by shared_ptr, breaking circular dependency cycles."
          },
          {
            id: 179,
            question: "How do you access an object through weak_ptr?",
            options: [
              "Direct dereferencing with *",
              "Using lock() to get a shared_ptr",
              "Using get() method",
              "weak_ptr cannot access objects"
            ],
            correctAnswer: 1,
            explanation: "Use weak_ptr's lock() method to get a shared_ptr if the object still exists, or an empty shared_ptr if it's been destroyed."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-23-object-relationships",
    title: "Chapter 23 - Object Relationships",
    description: "Understand composition, aggregation, and object design patterns",
    chapter: "Chapter 23",
    sections: ["23.1 through 23.7", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-23-part-1",
        title: "Object Relationships - Part 1",
        description: "Types of relationships and composition",
        chapter: "Chapter 23",
        sections: ["23.1 Object relationships", "23.2 Composition", "23.3 Aggregation"],
        questions: [
          {
            id: 180,
            question: "What is composition in object-oriented design?",
            options: [
              "Creating multiple classes",
              "A 'part-of' relationship where parts cannot exist without the whole",
              "Writing music with objects",
              "Combining functions together"
            ],
            correctAnswer: 1,
            explanation: "Composition is a strong 'part-of' relationship where the parts are created and destroyed with the whole object."
          },
          {
            id: 181,
            question: "What is the difference between composition and aggregation?",
            options: [
              "No difference",
              "Composition is stronger - parts die with the whole, aggregation allows independent existence",
              "Aggregation is faster",
              "Composition uses more memory"
            ],
            correctAnswer: 1,
            explanation: "Composition implies ownership and lifetime management, while aggregation is a weaker relationship where parts can exist independently."
          },
          {
            id: 182,
            question: "Which represents composition: Car and Engine?",
            options: [
              "Car contains Engine - composition",
              "Car uses Engine - aggregation",
              "Engine inherits from Car",
              "No relationship"
            ],
            correctAnswer: 0,
            explanation: "A Car contains an Engine as an integral part - the Engine typically doesn't exist independently of the Car, making this composition."
          }
        ]
      },
      {
        id: "chapter-23-part-2",
        title: "Object Relationships - Part 2",
        description: "Association, dependencies, and containers",
        chapter: "Chapter 23",
        sections: ["23.4 Association", "23.5 Dependencies", "23.6 Container classes"],
        questions: [
          {
            id: 183,
            question: "What is association?",
            options: [
              "A 'uses-a' relationship between objects",
              "Objects that are identical",
              "Objects that inherit from each other",
              "Objects that are created together"
            ],
            correctAnswer: 0,
            explanation: "Association is a 'uses-a' relationship where objects interact but don't own each other, like Doctor-Patient."
          },
          {
            id: 184,
            question: "What is a dependency relationship?",
            options: [
              "When one object owns another",
              "When one object temporarily uses another",
              "When objects inherit from each other",
              "When objects are created together"
            ],
            correctAnswer: 1,
            explanation: "A dependency is when one object temporarily uses another, often passed as a parameter or created locally."
          },
          {
            id: 185,
            question: "What are container classes?",
            options: [
              "Classes that hold Docker containers",
              "Classes designed to hold and organize other objects",
              "Classes that are very large",
              "Classes that cannot be instantiated"
            ],
            correctAnswer: 1,
            explanation: "Container classes are designed to hold, organize, and manage collections of other objects, like std::vector or custom collections."
          }
        ]
      },
      {
        id: "chapter-23-part-3",
        title: "Object Relationships - Part 3",
        description: "Initializer lists and advanced patterns",
        chapter: "Chapter 23",
        sections: ["23.7 std::initializer_list"],
        questions: [
          {
            id: 186,
            question: "What is std::initializer_list used for?",
            options: [
              "Initializing variables",
              "Enabling brace initialization for custom classes",
              "Creating lists of functions",
              "Managing memory automatically"
            ],
            correctAnswer: 1,
            explanation: "std::initializer_list allows custom classes to accept brace-enclosed initialization lists like {1, 2, 3}."
          },
          {
            id: 187,
            question: "How do you implement std::initializer_list in a constructor?",
            options: [
              "Constructor(std::initializer_list<T> list)",
              "Constructor(list<T> init)",
              "Constructor({T} values)",
              "Constructor(T... args)"
            ],
            correctAnswer: 0,
            explanation: "Take std::initializer_list<T> as a parameter in your constructor to enable brace initialization.",
            codeSnippet: `#include <iostream>
#include <initializer_list>
#include <vector>

class IntArray {
private:
    std::vector<int> data;

public:
    // Constructor accepting initializer_list
    IntArray(std::initializer_list<int> list) : data(list) {
        std::cout << "Created array with " << data.size() << " elements" << std::endl;
    }
    
    void print() const {
        for (int value : data) {
            std::cout << value << " ";
        }
        std::cout << std::endl;
    }
};

// Example of composition
class Car {
private:
    class Engine {
        int horsepower;
    public:
        Engine(int hp) : horsepower(hp) {}
        int getHP() const { return horsepower; }
    };
    
    Engine engine;  // Composition - Engine is part of Car
    
public:
    Car(int hp) : engine(hp) {}  // Engine created with Car
    
    int getEngineHP() const {
        return engine.getHP();
    }
};

int main() {
    // Using initializer_list
    IntArray numbers{1, 2, 3, 4, 5};
    numbers.print();
    
    // Composition example
    Car myCar(250);
    std::cout << "Engine HP: " << myCar.getEngineHP() << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
    id: "chapter-24-inheritance",
    title: "Chapter 24 - Inheritance",
    description: "Learn inheritance fundamentals and class hierarchies",
    chapter: "Chapter 24",
    sections: ["24.1 through 24.9", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-24-part-1",
        title: "Inheritance - Part 1",
        description: "Introduction and basic inheritance",
        chapter: "Chapter 24",
        sections: ["24.1 Introduction to inheritance", "24.2 Basic inheritance in C++", "24.3 Order of construction of derived classes"],
        questions: [
          {
            id: 188,
            question: "What is inheritance in C++?",
            options: [
              "Getting money from relatives",
              "A mechanism where a class derives properties from another class",
              "Copying code between files",
              "A type of pointer"
            ],
            correctAnswer: 1,
            explanation: "Inheritance allows a class (derived/child) to acquire properties and behaviors from another class (base/parent)."
          },
          {
            id: 189,
            question: "What is the correct syntax for inheritance?",
            options: [
              "class Derived : Base",
              "class Derived extends Base",
              "class Derived : public Base",
              "class Derived inherits Base"
            ],
            correctAnswer: 2,
            explanation: "The correct syntax is 'class Derived : public Base' where 'public' specifies the inheritance access level."
          },
          {
            id: 190,
            question: "In what order are constructors called in inheritance?",
            options: [
              "Derived first, then base",
              "Base first, then derived",
              "Both at the same time",
              "Order doesn't matter"
            ],
            correctAnswer: 1,
            explanation: "Base class constructors are called first, then derived class constructors, ensuring the base is fully constructed before the derived part."
          }
        ]
      },
      {
        id: "chapter-24-part-2",
        title: "Inheritance - Part 2", 
        description: "Constructor initialization and access specifiers",
        chapter: "Chapter 24",
        sections: ["24.4 Constructors and initialization of derived classes", "24.5 Inheritance and access specifiers", "24.6 Adding new functionality to a derived class"],
        questions: [
          {
            id: 191,
            question: "How do you call a base class constructor from a derived class?",
            options: [
              "base(parameters)",
              "super(parameters)",
              "BaseClass(parameters) in initializer list",
              "You cannot call base constructors"
            ],
            correctAnswer: 2,
            explanation: "Call base class constructors in the derived class's initializer list using the base class name."
          },
          {
            id: 192,
            question: "What happens to private base class members in derived classes?",
            options: [
              "They become public",
              "They are not accessible in derived classes",
              "They become protected",
              "They are copied to the derived class"
            ],
            correctAnswer: 1,
            explanation: "Private members of the base class are not accessible in derived classes, even with public inheritance."
          },
          {
            id: 193,
            question: "What access level should base class members have to be accessible in derived classes?",
            options: [
              "private",
              "protected or public",
              "Only public",
              "static"
            ],
            correctAnswer: 1,
            explanation: "Protected and public members are accessible in derived classes. Protected provides access to derived classes but not to external code.",
            codeSnippet: `#include <iostream>

class Animal {
protected:
    std::string name;
    int age;

public:
    Animal(const std::string& n, int a) : name(n), age(a) {
        std::cout << "Animal constructor called" << std::endl;
    }
    
    void makeSound() {
        std::cout << name << " makes a sound" << std::endl;
    }
};

class Dog : public Animal {
private:
    std::string breed;

public:
    // Call base constructor in initializer list
    Dog(const std::string& n, int a, const std::string& b) 
        : Animal(n, a), breed(b) {
        std::cout << "Dog constructor called" << std::endl;
    }
    
    // Add new functionality
    void bark() {
        std::cout << name << " barks loudly!" << std::endl;  // Can access protected member
    }
    
    // Override base functionality
    void makeSound() {
        std::cout << name << " barks: Woof!" << std::endl;
    }
};

int main() {
    Dog myDog("Buddy", 3, "Golden Retriever");
    
    myDog.makeSound();  // Calls Dog's version
    myDog.bark();       // Dog-specific functionality
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      },
      {
        id: "chapter-24-part-3",
        title: "Inheritance - Part 3",
        description: "Function overriding and multiple inheritance",
        chapter: "Chapter 24",
        sections: ["24.7 Calling inherited functions and overriding behavior", "24.8 Hiding inherited functionality", "24.9 Multiple inheritance"],
        questions: [
          {
            id: 194,
            question: "What is function overriding?",
            options: [
              "Using too many functions",
              "Providing a new implementation of a base class function in derived class",
              "Calling functions multiple times",
              "Deleting functions from base class"
            ],
            correctAnswer: 1,
            explanation: "Function overriding allows derived classes to provide their own implementation of base class functions."
          },
          {
            id: 195,
            question: "What is multiple inheritance?",
            options: [
              "Having multiple constructors",
              "A class inheriting from multiple base classes",
              "Creating multiple objects",
              "Having multiple member functions"
            ],
            correctAnswer: 1,
            explanation: "Multiple inheritance allows a class to inherit from more than one base class, though it can introduce complexity."
          },
          {
            id: 196,
            question: "What problem can multiple inheritance cause?",
            options: [
              "Faster execution",
              "The diamond problem - ambiguous inheritance paths",
              "Less memory usage",
              "Automatic function generation"
            ],
            correctAnswer: 1,
            explanation: "The diamond problem occurs when a class inherits from two classes that both inherit from the same base class, creating ambiguity."
          }
        ]
      }
    ]
  },
  {
    id: "chapter-25-virtual-functions",
    title: "Chapter 25 - Virtual Functions",
    description: "Master polymorphism with virtual functions and dynamic binding",
    chapter: "Chapter 25", 
    sections: ["25.1 through 25.11", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-25-part-1",
        title: "Virtual Functions - Part 1",
        description: "Polymorphism and virtual functions",
        chapter: "Chapter 25",
        sections: ["25.1 Pointers and references to the base class of derived objects", "25.2 Virtual functions and polymorphism", "25.3 The override and final specifiers, and covariant return types"],
        questions: [
          {
            id: 197,
            question: "What is polymorphism?",
            options: [
              "Having multiple forms or behaviors",
              "Having multiple constructors",
              "Having multiple inheritance",
              "Having multiple files"
            ],
            correctAnswer: 0,
            explanation: "Polymorphism allows objects of different types to be treated as objects of a common base type, with behavior determined at runtime."
          },
          {
            id: 198,
            question: "What does the virtual keyword do?",
            options: [
              "Makes functions faster",
              "Enables runtime polymorphism through dynamic binding",
              "Makes functions private",
              "Creates virtual memory"
            ],
            correctAnswer: 1,
            explanation: "The virtual keyword enables runtime polymorphism, allowing the correct derived class function to be called through base class pointers/references."
          },
          {
            id: 199,
            question: "What does the override specifier do?",
            options: [
              "Forces a function to be virtual",
              "Explicitly indicates a function overrides a virtual base function",
              "Makes functions faster",
              "Prevents function overriding"
            ],
            correctAnswer: 1,
            explanation: "The override specifier explicitly indicates that a function is intended to override a virtual function, helping catch errors."
          }
        ]
      },
      {
        id: "chapter-25-part-2",
        title: "Virtual Functions - Part 2",
        description: "Virtual destructors and binding",
        chapter: "Chapter 25",
        sections: ["25.4 Virtual destructors, virtual assignment, and overriding virtualization", "25.5 Early binding and late binding", "25.6 The virtual table"],
        questions: [
          {
            id: 200,
            question: "Why do you need virtual destructors?",
            options: [
              "They are faster",
              "To ensure proper cleanup when deleting through base pointers",
              "They are required by the compiler",
              "They use less memory"
            ],
            correctAnswer: 1,
            explanation: "Virtual destructors ensure that the derived class destructor is called when deleting an object through a base class pointer."
          },
          {
            id: 201,
            question: "What is the difference between early and late binding?",
            options: [
              "Early is faster, late is slower",
              "Early binding occurs at compile time, late binding at runtime",
              "No difference",
              "Early uses more memory"
            ],
            correctAnswer: 1,
            explanation: "Early binding resolves function calls at compile time, while late binding (dynamic binding) resolves them at runtime based on object type."
          },
          {
            id: 202,
            question: "What is a virtual table (vtable)?",
            options: [
              "A table of virtual memory addresses",
              "A table of function pointers for virtual functions",
              "A table of class names",
              "A table of object sizes"
            ],
            correctAnswer: 1,
            explanation: "A virtual table is a table of function pointers used to implement virtual function calls and runtime polymorphism."
          }
        ]
      },
      {
        id: "chapter-25-part-3",
        title: "Virtual Functions - Part 3",
        description: "Pure virtual functions and abstract classes",
        chapter: "Chapter 25",
        sections: ["25.7 Pure virtual functions, abstract base classes, and interface classes", "25.9 Object slicing", "25.10 Dynamic casting"],
        questions: [
          {
            id: 203,
            question: "What is a pure virtual function?",
            options: [
              "A very clean function",
              "A virtual function with no implementation (= 0)",
              "A function that's always fast",
              "A function that cannot be called"
            ],
            correctAnswer: 1,
            explanation: "A pure virtual function is declared with '= 0' and has no implementation in the base class, making the class abstract."
          },
          {
            id: 204,
            question: "What is object slicing?",
            options: [
              "Cutting objects into pieces",
              "When derived class parts are lost during base class assignment",
              "A memory optimization technique",
              "A debugging technique"
            ],
            correctAnswer: 1,
            explanation: "Object slicing occurs when a derived object is assigned to a base object, losing the derived class-specific parts."
          },
          {
            id: 205,
            question: "What is dynamic_cast used for?",
            options: [
              "Making casts faster",
              "Safe downcasting in inheritance hierarchies",
              "Converting between primitive types",
              "Creating dynamic objects"
            ],
            correctAnswer: 1,
            explanation: "dynamic_cast provides safe downcasting in inheritance hierarchies, returning nullptr if the cast is invalid.",
            codeSnippet: `#include <iostream>
#include <memory>

// Abstract base class with pure virtual function
class Shape {
public:
    virtual ~Shape() = default;  // Virtual destructor
    virtual double getArea() const = 0;  // Pure virtual function
    virtual void draw() const {
        std::cout << "Drawing a shape" << std::endl;
    }
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}
    
    double getArea() const override {  // Must implement pure virtual
        return 3.14159 * radius * radius;
    }
    
    void draw() const override {
        std::cout << "Drawing a circle" << std::endl;
    }
};

class Rectangle : public Shape {
private:
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}
    
    double getArea() const override {
        return width * height;
    }
    
    void draw() const override {
        std::cout << "Drawing a rectangle" << std::endl;
    }
};

int main() {
    // Cannot instantiate abstract class
    // Shape shape;  // Error!
    
    // Polymorphism through base pointers
    std::unique_ptr<Shape> shapes[] = {
        std::make_unique<Circle>(5.0),
        std::make_unique<Rectangle>(4.0, 6.0)
    };
    
    for (const auto& shape : shapes) {
        shape->draw();    // Calls derived version
        std::cout << "Area: " << shape->getArea() << std::endl;
    }
    
    // Dynamic casting
    Shape* shapePtr = new Circle(3.0);
    Circle* circlePtr = dynamic_cast<Circle*>(shapePtr);
    if (circlePtr) {
        std::cout << "Successfully cast to Circle" << std::endl;
    }
    
    delete shapePtr;  // Virtual destructor ensures proper cleanup
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
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
        title: "Templates & Classes - Part 1",
        description: "Template classes and non-type parameters",
        chapter: "Chapter 26",
        sections: ["26.1 Template classes", "26.2 Template non-type parameters", "26.3 Function template specialization"],
        questions: [
          {
            id: 206,
            question: "What is a template class?",
            options: [
              "A pre-written class",
              "A class that works with different types",
              "A class that's very organized",
              "A class for creating templates"
            ],
            correctAnswer: 1,
            explanation: "A template class is a blueprint for creating classes that can work with different types, specified when instantiated."
          },
          {
            id: 207,
            question: "What are non-type template parameters?",
            options: [
              "Parameters that are not types but values",
              "Parameters that have no type",
              "Parameters that are always int",
              "Parameters that cannot be used"
            ],
            correctAnswer: 0,
            explanation: "Non-type template parameters are compile-time constant values (like integers) rather than types."
          },
          {
            id: 208,
            question: "What is template specialization?",
            options: [
              "Making templates faster",
              "Providing specific implementations for certain types",
              "Making templates private",
              "Using templates only once"
            ],
            correctAnswer: 1,
            explanation: "Template specialization allows providing specific implementations of templates for particular types or values."
          }
        ]
      },
      {
        id: "chapter-26-part-2",
        title: "Templates & Classes - Part 2",
        description: "Class template specialization and partial specialization",
        chapter: "Chapter 26",
        sections: ["26.4 Class template specialization", "26.5 Partial template specialization", "26.6 Partial template specialization for pointers"],
        questions: [
          {
            id: 209,
            question: "What is partial template specialization?",
            options: [
              "Specializing only some template parameters",
              "Partially implementing a template",
              "Using templates sometimes",
              "Breaking templates into parts"
            ],
            correctAnswer: 0,
            explanation: "Partial template specialization allows specializing a template for a subset of possible template arguments."
          },
          {
            id: 210,
            question: "Why might you specialize a template for pointers?",
            options: [
              "Pointers are faster",
              "To provide pointer-specific behavior like dereferencing",
              "Pointers use less memory",
              "Pointers are easier to use"
            ],
            correctAnswer: 1,
            explanation: "Pointer specializations can provide specific behavior for pointer types, such as automatic dereferencing or null checking."
          },
          {
            id: 211,
            question: "When does template instantiation occur?",
            options: [
              "When the template is defined",
              "When the template is used with specific types",
              "At program startup",
              "Never"
            ],
            correctAnswer: 1,
            explanation: "Template instantiation occurs when the template is used with specific types, creating actual code for those types.",
            codeSnippet: `#include <iostream>

// Basic template class
template<typename T, int Size>
class Array {
private:
    T data[Size];

public:
    void set(int index, const T& value) {
        if (index >= 0 && index < Size) {
            data[index] = value;
        }
    }
    
    T get(int index) const {
        if (index >= 0 && index < Size) {
            return data[index];
        }
        return T{};
    }
    
    int size() const { return Size; }
};

// Full specialization for bool
template<int Size>
class Array<bool, Size> {
private:
    unsigned char data[(Size + 7) / 8];  // Bit packing

public:
    void set(int index, bool value) {
        if (index >= 0 && index < Size) {
            int byteIndex = index / 8;
            int bitIndex = index % 8;
            if (value) {
                data[byteIndex] |= (1 << bitIndex);
            } else {
                data[byteIndex] &= ~(1 << bitIndex);
            }
        }
    }
    
    bool get(int index) const {
        if (index >= 0 && index < Size) {
            int byteIndex = index / 8;
            int bitIndex = index % 8;
            return (data[byteIndex] & (1 << bitIndex)) != 0;
        }
        return false;
    }
    
    int size() const { return Size; }
};

int main() {
    // Regular template instantiation
    Array<int, 5> intArray;
    intArray.set(0, 42);
    std::cout << "intArray[0]: " << intArray.get(0) << std::endl;
    
    // Specialized version for bool
    Array<bool, 10> boolArray;
    boolArray.set(0, true);
    boolArray.set(1, false);
    std::cout << "boolArray[0]: " << boolArray.get(0) << std::endl;
    std::cout << "boolArray[1]: " << boolArray.get(1) << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
    id: "chapter-27-exceptions",
    title: "Chapter 27 - Exceptions",
    description: "Learn exception handling for robust error management",
    chapter: "Chapter 27",
    sections: ["27.1 through 27.10", "Complete chapter coverage"],
    questions: [],
    isParent: true,
    children: [
      {
        id: "chapter-27-part-1",
        title: "Exceptions - Part 1",
        description: "Exception basics and handling",
        chapter: "Chapter 27",
        sections: ["27.1 The need for exceptions", "27.2 Basic exception handling", "27.3 Exceptions, functions, and stack unwinding"],
        questions: [
          {
            id: 212,
            question: "Why are exceptions needed?",
            options: [
              "To make programs faster",
              "To handle error conditions gracefully",
              "To reduce memory usage",
              "To make code shorter"
            ],
            correctAnswer: 1,
            explanation: "Exceptions provide a structured way to handle error conditions, separating error handling from normal program flow."
          },
          {
            id: 213,
            question: "What is the basic syntax for exception handling?",
            options: [
              "try { } catch { }",
              "try { } catch(...) { }",
              "handle { } error { }",
              "attempt { } rescue { }"
            ],
            correctAnswer: 1,
            explanation: "Basic exception handling uses try { } to contain risky code and catch(...) { } to handle any exceptions thrown."
          },
          {
            id: 214,
            question: "What is stack unwinding?",
            options: [
              "Removing items from a stack",
              "The process of destroying local objects when an exception is thrown",
              "Optimizing stack usage",
              "Debugging stack contents"
            ],
            correctAnswer: 1,
            explanation: "Stack unwinding automatically destroys local objects and calls destructors when an exception propagates up the call stack."
          }
        ]
      },
      {
        id: "chapter-27-part-2",
        title: "Exceptions - Part 2",
        description: "Exception types and specifications",
        chapter: "Chapter 27",
        sections: ["27.4 Uncaught exceptions and catch-all handlers", "27.5 Exceptions, classes, and inheritance", "27.9 Exception specifications and noexcept"],
        questions: [
          {
            id: 215,
            question: "What happens with uncaught exceptions?",
            options: [
              "They are ignored",
              "The program terminates",
              "They become warnings",
              "They are automatically handled"
            ],
            correctAnswer: 1,
            explanation: "Uncaught exceptions cause the program to terminate, typically calling std::terminate."
          },
          {
            id: 216,
            question: "How do exception classes work with inheritance?",
            options: [
              "They don't work together",
              "Catch handlers can catch base class exceptions for derived exceptions",
              "Only exact type matches work",
              "Inheritance makes exceptions slower"
            ],
            correctAnswer: 1,
            explanation: "Exception handling respects inheritance - a catch handler for a base class can catch exceptions of derived classes."
          },
          {
            id: 217,
            question: "What does noexcept specify?",
            options: [
              "A function that cannot be called",
              "A function that promises not to throw exceptions",
              "A function that only throws exceptions",
              "A function that's very fast"
            ],
            correctAnswer: 1,
            explanation: "noexcept specifies that a function promises not to throw exceptions, enabling optimizations and clearer interfaces."
          }
        ]
      },
      {
        id: "chapter-27-part-3",
        title: "Exceptions - Part 3",
        description: "Exception best practices and downsides",
        chapter: "Chapter 27",
        sections: ["27.8 Exception dangers and downsides", "27.10 std::move_if_noexcept"],
        questions: [
          {
            id: 218,
            question: "What is a major downside of exceptions?",
            options: [
              "They make code faster",
              "They can make code flow harder to follow",
              "They reduce memory usage",
              "They prevent all errors"
            ],
            correctAnswer: 1,
            explanation: "Exceptions can make code flow harder to follow and reason about, as control can jump unexpectedly to exception handlers."
          },
          {
            id: 219,
            question: "What does std::move_if_noexcept do?",
            options: [
              "Always moves objects",
              "Moves only if the move constructor is noexcept",
              "Never moves objects",
              "Moves very fast"
            ],
            correctAnswer: 1,
            explanation: "std::move_if_noexcept conditionally moves objects only if the move constructor is marked noexcept, providing strong exception safety."
          },
          {
            id: 220,
            question: "When should you avoid using exceptions?",
            options: [
              "Never, always use exceptions",
              "In performance-critical code or resource-constrained environments",
              "Only on weekends",
              "When using classes"
            ],
            correctAnswer: 1,
            explanation: "Avoid exceptions in performance-critical code, embedded systems, or when interfacing with C code that doesn't understand exceptions.",
            codeSnippet: `#include <iostream>
#include <stdexcept>
#include <vector>

class DivisionByZeroError : public std::runtime_error {
public:
    DivisionByZeroError() : std::runtime_error("Division by zero!") {}
};

double safeDivide(double a, double b) noexcept(false) {
    if (b == 0.0) {
        throw DivisionByZeroError();
    }
    return a / b;
}

void demonstrateStackUnwinding() {
    std::vector<int> localVector{1, 2, 3};
    std::cout << "Vector created in function" << std::endl;
    
    // This will cause stack unwinding
    throw std::runtime_error("Something went wrong!");
    
    // This line never executes, but localVector's destructor will be called
    std::cout << "This won't print" << std::endl;
}

int main() {
    try {
        // Basic exception handling
        double result = safeDivide(10.0, 0.0);
        std::cout << "Result: " << result << std::endl;
    }
    catch (const DivisionByZeroError& e) {
        std::cout << "Caught specific exception: " << e.what() << std::endl;
    }
    catch (const std::exception& e) {
        std::cout << "Caught standard exception: " << e.what() << std::endl;
    }
    catch (...) {
        std::cout << "Caught unknown exception" << std::endl;
    }
    
    try {
        demonstrateStackUnwinding();
    }
    catch (const std::exception& e) {
        std::cout << "Caught exception from function: " << e.what() << std::endl;
        // localVector was automatically destroyed during stack unwinding
    }
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  },
  {
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
        title: "Input/Output - Part 1",
        description: "I/O streams and basic operations",
        chapter: "Chapter 28",
        sections: ["28.1 Input and output (I/O) streams", "28.2 Input with istream", "28.3 Output with ostream and ios"],
        questions: [
          {
            id: 221,
            question: "What is a stream in C++?",
            options: [
              "A flow of water",
              "An abstraction for input/output operations",
              "A type of variable",
              "A function parameter"
            ],
            correctAnswer: 1,
            explanation: "A stream is an abstraction that represents a sequence of data and provides a unified interface for input/output operations."
          },
          {
            id: 222,
            question: "What are the standard I/O streams?",
            options: [
              "std::in, std::out, std::err",
              "std::cin, std::cout, std::cerr",
              "input, output, error",
              "stdin, stdout, stderr"
            ],
            correctAnswer: 1,
            explanation: "The standard I/O streams are std::cin (input), std::cout (output), and std::cerr (error output)."
          },
          {
            id: 223,
            question: "What does the >> operator do with streams?",
            options: [
              "Shifts bits to the right",
              "Extracts data from input streams",
              "Compares two streams",
              "Deletes stream content"
            ],
            correctAnswer: 1,
            explanation: "The >> operator (extraction operator) extracts data from input streams, parsing it according to the target variable's type."
          }
        ]
      },
      {
        id: "chapter-28-part-2",
        title: "Input/Output - Part 2",
        description: "String streams and stream states",
        chapter: "Chapter 28",
        sections: ["28.4 Stream classes for strings", "28.5 Stream states and input validation", "28.6 Basic file I/O"],
        questions: [
          {
            id: 224,
            question: "What are string streams used for?",
            options: [
              "Only for reading strings",
              "Performing I/O operations on strings in memory",
              "Streaming music",
              "Network communication"
            ],
            correctAnswer: 1,
            explanation: "String streams (std::stringstream, std::istringstream, std::ostringstream) allow I/O operations on strings in memory."
          },
          {
            id: 225,
            question: "What happens when stream input fails?",
            options: [
              "The program crashes",
              "The stream enters a fail state",
              "Data is automatically converted",
              "Nothing happens"
            ],
            correctAnswer: 1,
            explanation: "When stream input fails (wrong type, end of file, etc.), the stream enters a fail state and stops processing input."
          },
          {
            id: 226,
            question: "How do you open a file for reading?",
            options: [
              "std::ifstream file(\"filename\");",
              "std::file input(\"filename\");",
              "std::open(\"filename\");",
              "file.read(\"filename\");"
            ],
            correctAnswer: 0,
            explanation: "Use std::ifstream to open a file for reading: std::ifstream file(\"filename\"); automatically opens the file."
          }
        ]
      },
      {
        id: "chapter-28-part-3",
        title: "Input/Output - Part 3",
        description: "Random file I/O and advanced operations",
        chapter: "Chapter 28",
        sections: ["28.7 Random file I/O"],
        questions: [
          {
            id: 227,
            question: "What is random file I/O?",
            options: [
              "Reading files in random order",
              "Accessing any position in a file directly",
              "Creating random file names",
              "Reading random data"
            ],
            correctAnswer: 1,
            explanation: "Random file I/O allows accessing any position in a file directly using functions like seekg() and tellg()."
          },
          {
            id: 228,
            question: "What does seekg() do?",
            options: [
              "Searches for text in a file",
              "Sets the position of the input stream",
              "Seeks out errors",
              "Counts file size"
            ],
            correctAnswer: 1,
            explanation: "seekg() sets the position of the input stream's get pointer, allowing you to jump to any position in the file."
          },
          {
            id: 229,
            question: "What does tellg() return?",
            options: [
              "The contents of the file",
              "The current position in the file",
              "The size of the file",
              "Error information"
            ],
            correctAnswer: 1,
            explanation: "tellg() returns the current position of the input stream's get pointer within the file.",
            codeSnippet: `#include <iostream>
#include <fstream>
#include <sstream>
#include <string>

int main() {
    // String stream example
    std::stringstream ss;
    ss << "Hello " << 42 << " World";
    
    std::string word;
    int number;
    std::string word2;
    
    ss >> word >> number >> word2;
    std::cout << "Parsed: " << word << ", " << number << ", " << word2 << std::endl;
    
    // File I/O example
    std::ofstream outFile("example.txt");
    if (outFile) {
        outFile << "Line 1: Hello\\n";
        outFile << "Line 2: World\\n";
        outFile << "Line 3: 12345\\n";
        outFile.close();
    }
    
    // Random access file I/O
    std::fstream file("example.txt", std::ios::in | std::ios::out);
    if (file) {
        // Read from beginning
        std::string line;
        std::getline(file, line);
        std::cout << "First line: " << line << std::endl;
        
        // Jump to position and read
        file.seekg(10);  // Jump to position 10
        std::getline(file, line);
        std::cout << "From position 10: " << line << std::endl;
        
        // Check current position
        std::cout << "Current position: " << file.tellg() << std::endl;
        
        file.close();
    }
    
    // Stream state checking
    std::istringstream badInput("abc");
    int value;
    badInput >> value;  // This will fail
    
    if (badInput.fail()) {
        std::cout << "Input failed - not a valid integer" << std::endl;
        badInput.clear();  // Clear error state
    }
    
    return 0;
}`,
            codeLanguage: "cpp"
          }
        ]
      }
    ]
  }
];