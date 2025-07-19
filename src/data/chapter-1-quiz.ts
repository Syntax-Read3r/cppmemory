import { Quiz } from './types';

export const chapter1Quiz: Quiz = {
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
        description: "Statements, program structure, comments, and variables",
        chapter: "Chapter 1",
        sections: ["1.1 Statements and the structure of a program", "1.2 Comments", "1.3 Introduction to objects and variables"],
        questions: [
          {
            id: 1,
            question: "What is a statement in C++?",
            options: [
              "A type of instruction that causes the program to perform some action",
              "Only variable declarations",
              "Only function calls",
              "A comment in the code"
            ],
            correctAnswer: 0,
            explanation: "A statement is a type of instruction that causes the program to perform some action. Statements are the smallest independent unit of computation in C++."
          },
          {
            id: 2,
            question: "How do most statements in C++ end?",
            options: [
              "With a comma",
              "With a semicolon",
              "With a period",
              "With a colon"
            ],
            correctAnswer: 1,
            explanation: "Most (but not all) statements in C++ end in a semicolon. If you see a line that ends in a semicolon, it's probably a statement."
          },
          {
            id: 3,
            question: "What is a function in C++?",
            options: [
              "A single statement",
              "A collection of statements that get executed sequentially",
              "Only the main function",
              "A type of variable"
            ],
            correctAnswer: 1,
            explanation: "A function is a collection of statements that get executed sequentially (in order, from top to bottom). Functions are used to organize code and perform specific tasks."
          },
          {
            id: 4,
            question: "What is the name of the special function that every C++ program must have?",
            options: [
              "start",
              "begin",
              "main",
              "program"
            ],
            correctAnswer: 2,
            explanation: "Every C++ program must have a special function named 'main' (all lower case letters). When the program is run, the statements inside main are executed in sequential order.",
            codeSnippet: `#include <iostream>

int main()
{
    std::cout << "Hello world!";
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 5,
            question: "When does a C++ program typically terminate?",
            options: [
              "When the first function is called",
              "After the last statement inside function main has been executed",
              "When a syntax error occurs",
              "When the preprocessor directive is processed"
            ],
            correctAnswer: 1,
            explanation: "Programs typically terminate (finish running) after the last statement inside function main has been executed, though programs may abort early in some circumstances."
          },
          {
            id: 6,
            question: "What is the name of a function, object, or type called in programming?",
            options: [
              "A label",
              "A tag",
              "An identifier",
              "A descriptor"
            ],
            correctAnswer: 2,
            explanation: "In programming, the name of a function (or object, type, template, etc.) is called its identifier. For example, 'main' is the identifier for the main function."
          },
          {
            id: 7,
            question: "What does the #include <iostream> preprocessor directive do?",
            options: [
              "It defines the main function",
              "It indicates that we want to use the contents of the iostream library",
              "It creates a syntax error",
              "It ends the program"
            ],
            correctAnswer: 1,
            explanation: "The #include <iostream> preprocessor directive indicates that we would like to use the contents of the iostream library, which allows us to read and write text from/to the console."
          },
          {
            id: 8,
            question: "What happens if you omit a required semicolon in a C++ statement?",
            options: [
              "The program runs normally",
              "The compiler generates a syntax error",
              "The statement is ignored",
              "The program crashes at runtime"
            ],
            correctAnswer: 1,
            explanation: "If you omit a required semicolon, the compiler will halt compilation and issue a syntax error. The compiler will generally point you to where the semicolon is expected.",
            codeSnippet: `// This will cause a syntax error:
std::cout << "Hello world!"  // Missing semicolon
return 0;

// Correct version:
std::cout << "Hello world!"; // Semicolon present
return 0;`,
            codeLanguage: "cpp"
          },
          {
            id: 9,
            question: "What are the curly braces { } used for in the main function?",
            options: [
              "To mark comments",
              "To define the function body and show which lines are part of the function",
              "To separate statements",
              "To include libraries"
            ],
            correctAnswer: 1,
            explanation: "The opening curly brace { and closing curly brace } tell the compiler which lines are part of the main function. Everything between them is considered part of the function body."
          },
          {
            id: 10,
            question: "What does 'return 0;' signify in a C++ program?",
            options: [
              "The program encountered an error",
              "The program ran successfully",
              "The program should restart",
              "The program should pause"
            ],
            correctAnswer: 1,
            explanation: "The 'return 0;' statement returns the integer value 0 to the operating system, which means 'everything went okay!' It indicates that the program ran successfully.",
            codeSnippet: `int main()
{
    std::cout << "Hello world!";
    return 0; // Indicates successful execution
}`,
            codeLanguage: "cpp"
          },
          {
            id: 11,
            question: "What symbol begins a C++ single-line comment?",
            options: [
              "#",
              "//",
              "/* */",
              "--"
            ],
            correctAnswer: 1,
            explanation: "The // symbol begins a C++ single-line comment, which tells the compiler to ignore everything from // to the end of the line."
          },
          {
            id: 12,
            question: "Which of the following is a valid multi-line comment in C++?",
            options: [
              "// This is a comment",
              "/* This is a comment */", 
              "<!-- This is a comment -->",
              "# This is a comment"
            ],
            correctAnswer: 1,
            explanation: "Multi-line comments in C++ are enclosed between /* and */ symbols. Everything between these symbols is ignored by the compiler.",
            codeSnippet: `#include <iostream>

int main() {
    /* This is a multi-line comment.
       This line will be ignored.
       So will this one. */
    
    std::cout << "Hello World!" << std::endl; // Single-line comment
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 13,
            question: "Can multi-line comments be nested inside other multi-line comments?",
            options: [
              "Yes, C++ supports nested multi-line comments",
              "No, multi-line comments cannot be nested",
              "Only if using special syntax",
              "Yes, but only up to 3 levels deep"
            ],
            correctAnswer: 1,
            explanation: "Multi-line comments cannot be nested. The first */ encountered will end the comment, which can lead to compilation errors if you try to nest them.",
            codeSnippet: `// This will cause a compilation error:
/* This is a multi-line /* comment */ this is not inside the comment */
// The above comment ends at the first */, not the second */

// Correct approach - don't nest multi-line comments
/* This is a comment */
/* This is a separate comment */`,
            codeLanguage: "cpp"
          },
          {
            id: 14,
            question: "What makes a good comment according to C++ best practices?",
            options: [
              "Comments that explain what the code is doing",
              "Comments that explain why the code is doing something",
              "Comments that repeat the code in English",
              "Comments that describe every single line"
            ],
            correctAnswer: 1,
            explanation: "Good comments explain WHY the code is doing something, not WHAT it's doing. The code itself should be clear enough to show what it does.",
            codeSnippet: `// Bad comment - explains WHAT
int sight = 0; // Set sight to 0

// Good comment - explains WHY  
int sight = 0; // Player drank a potion of blindness and can't see

// Bad comment - explains WHAT
cost = quantity * 2 * storePrice; // Calculate cost

// Good comment - explains WHY
cost = quantity * 2 * storePrice; // Multiply by 2 because items are sold in pairs`,
            codeLanguage: "cpp"
          },
          {
            id: 15,
            question: "What is 'commenting out' code?",
            options: [
              "Adding documentation to your code",
              "Converting code into comments to temporarily exclude it from compilation",
              "Removing all comments from code",
              "Writing better comments"
            ],
            correctAnswer: 1,
            explanation: "Commenting out code means converting one or more lines of code into comments to temporarily exclude them from being compiled and executed.",
            codeSnippet: `// Original code:
std::cout << "Hello";
std::cout << "World";

// Commented out using single-line comments:
// std::cout << "Hello";
std::cout << "World";

// Commented out using multi-line comments:
/*
std::cout << "Hello";
std::cout << "World";
*/`,
            codeLanguage: "cpp"
          },
          {
            id: 16,
            question: "Where should comments that describe what a function does be placed?",
            options: [
              "At the end of each line inside the function",
              "Immediately preceding the function or at the top of the file",
              "Only inside the function body",
              "Comments should not describe what functions do"
            ],
            correctAnswer: 1,
            explanation: "Comments describing what a library, program, or function does should be placed at the top of the file or immediately preceding the function, giving readers a high-level understanding without looking at implementation details.",
            codeSnippet: `// This function calculates the area of a circle using the given radius
double calculateCircleArea(double radius) {
    return 3.14159 * radius * radius;
}

// This program demonstrates basic input/output operations
int main() {
    double r = 5.0;
    double area = calculateCircleArea(r);
    std::cout << "Area: " << area << std::endl;
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 17,
            question: "What is data in the context of computer programming?",
            options: [
              "Only numbers that a program can use",
              "Any information that can be moved, processed, or stored by a computer",
              "Only text that appears on the screen",
              "The source code of the program itself"
            ],
            correctAnswer: 1,
            explanation: "Data is any information that can be moved, processed, or stored by a computer. Programs manipulate data to produce desired results."
          },
          {
            id: 18,
            question: "What is a value (or data value) in programming?",
            options: [
              "The price of software",
              "A single piece of data",
              "Only whole numbers",
              "The result of a program"
            ],
            correctAnswer: 1,
            explanation: "A value (sometimes called a data value) is a single piece of data. Examples include numbers (5, -6.7), characters ('H'), or text (\"Hello\")."
          },
          {
            id: 19,
            question: "Which of the following correctly demonstrates different types of literals?",
            options: [
              "5 (number), 'H' (character), \"Hello\" (text)",
              "'5' (number), H (character), Hello (text)",
              "5 (text), 'Hello' (character), \"H\" (number)",
              "All literals must be in quotes"
            ],
            correctAnswer: 0,
            explanation: "Numeric values are not quoted, character values use single quotes, and text values use double quotes. 5 is a number, 'H' is a character, \"Hello\" is text.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << 5;       // number literal (no quotes)
    std::cout << 'H';     // character literal (single quotes)  
    std::cout << "Hello"; // text literal (double quotes)
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 20,
            question: "What is an object in C++?",
            options: [
              "Only classes and structs",
              "A region of storage that can hold a value",
              "A function with parameters",
              "A type of comment"
            ],
            correctAnswer: 1,
            explanation: "An object in C++ represents a region of storage (typically RAM or a CPU register) that can hold a value. Objects provide indirect access to memory."
          },
          {
            id: 21,
            question: "What is the difference between an object and a variable?",
            options: [
              "There is no difference",
              "Objects are for classes, variables are for functions",
              "A variable is an object that has a name (identifier)",
              "Objects are bigger than variables"
            ],
            correctAnswer: 2,
            explanation: "A variable is an object that has a name (identifier). Objects can be unnamed (anonymous), but when we give an object a name, we call it a variable.",
            codeSnippet: `int main() {
    int x;    // x is a variable (named object)
    // Objects can also be unnamed/anonymous
    // but variables are the named ones we typically use
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 22,
            question: "What is a variable definition statement used for?",
            options: [
              "To delete a variable from memory",
              "To tell the compiler that we want to use a variable in our program",
              "To change the type of an existing variable",
              "To print the value of a variable"
            ],
            correctAnswer: 1,
            explanation: "A definition statement tells the compiler that we want to use a variable in our program. The compiler then handles memory allocation and other details.",
            codeSnippet: `int main() {
    int x;     // definition statement - tells compiler we want variable x
    double y;  // definition statement - tells compiler we want variable y
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 23,
            question: "What does 'int x;' accomplish?",
            options: [
              "It creates a variable named x that can store integer values",
              "It prints the number x to the screen",
              "It calculates the value of x",
              "It deletes variable x"
            ],
            correctAnswer: 0,
            explanation: "'int x;' is a variable definition that creates a variable named x of type int (integer). This variable can store whole number values like 5, -10, or 0.",
            codeSnippet: `int main() {
    int x;      // Define integer variable x
    double y;   // Define double variable y
    char c;     // Define character variable c
    
    // Each variable can store values of its specified type
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 24,
            question: "When must the data type of an object be known?",
            options: [
              "At runtime when the program executes",
              "At compile-time when the program is being compiled",
              "Only when debugging the program",
              "The type can be changed anytime"
            ],
            correctAnswer: 1,
            explanation: "The data type of an object must be known at compile-time so the compiler knows how much memory the object requires. The type cannot be changed without recompiling.",
            codeSnippet: `int main() {
    int x;     // Type 'int' known at compile-time
    double y;  // Type 'double' known at compile-time
    
    // The compiler uses this type information to:
    // - Allocate proper amount of memory
    // - Determine valid operations
    // - Catch type-related errors
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 25,
            question: "Which of the following is the correct way to define multiple variables of the same type?",
            options: [
              "int a, int b;",
              "int a, double b;",
              "int a, b;",
              "int a; int b; (recommended)"
            ],
            correctAnswer: 3,
            explanation: "While 'int a, b;' is legal, the recommended practice is to define each variable on its own line for better readability and documentation. This makes code easier to understand and maintain.",
            codeSnippet: `int main() {
    // Legal but not recommended:
    int a, b, c;
    
    // Recommended approach:
    int x;  // stores player x position
    int y;  // stores player y position  
    int z;  // stores player z position
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 26,
            question: "What happens to a variable at runtime after it's defined?",
            options: [
              "Nothing, it only exists during compilation",
              "Memory is allocated and the object is created",
              "It automatically gets a random value",
              "It is immediately destroyed"
            ],
            correctAnswer: 1,
            explanation: "At runtime, when the program executes, memory is allocated for the variable and the object is created. This process of reserving storage for an object's use is called allocation."
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
            id: 46,
            question: "Which form of initialization is preferred in modern C++?",
            options: [
              "Copy-initialization: int x = 5;",
              "Direct-initialization: int x(5);",
              "Direct-list-initialization: int x{5};",
              "Default-initialization: int x;"
            ],
            correctAnswer: 2,
            explanation: "Direct-list-initialization (using braces) is preferred because it works consistently, prevents narrowing conversions, and supports initialization with lists of values.",
            codeSnippet: `int main() {
    // Preferred modern C++ initialization
    int width { 5 };           // direct-list-initialization
    int height {};             // value-initialization (zero)
    
    // Other forms (less preferred)
    int a = 6;                 // copy-initialization  
    int b ( 7 );               // direct-initialization
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 47,
            question: "What happens when you try to list-initialize an int with a fractional value?",
            options: [
              "It automatically rounds to the nearest integer",
              "It truncates the fractional part",
              "The compiler generates an error or warning",
              "It stores the value as a float instead"
            ],
            correctAnswer: 2,
            explanation: "List-initialization disallows narrowing conversions, so initializing an int with a fractional value like 4.5 will cause a compilation error.",
            codeSnippet: `int main() {
    int w1 { 4.5 }; // ERROR: list-init prevents narrowing conversion
    int w2 = 4.5;   // OK: copy-init allows it (truncates to 4)
    int w3 ( 4.5 ); // OK: direct-init allows it (truncates to 4)
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 48,
            question: "What is value-initialization and what value does it typically produce?",
            options: [
              "Initialization with a specific value you provide",
              "Initialization with empty braces, typically resulting in zero",
              "Initialization that preserves the previous memory value",
              "Initialization that generates a random value"
            ],
            correctAnswer: 1,
            explanation: "Value-initialization uses empty braces {} and typically initializes the variable to zero (or the closest equivalent for the type).",
            codeSnippet: `int main() {
    int x {};           // value-initialization, x gets value 0
    double y {};        // value-initialization, y gets value 0.0
    
    std::cout << x;     // prints 0
    std::cout << y;     // prints 0
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 49,
            question: "What is wrong with this multiple variable initialization?",
            options: [
              "You can't declare multiple variables on one line",
              "Variable 'a' is not initialized to 5",
              "The syntax is completely invalid",
              "Both variables get the same value"
            ],
            correctAnswer: 1,
            explanation: "In 'int a, b = 5;', only variable 'b' is initialized to 5. Variable 'a' is left uninitialized. Each variable needs its own initializer.",
            codeSnippet: `int main() {
    int a, b = 5;       // WRONG: 'a' is not initialized!
    int c = 4, d = 5;   // CORRECT: both have initializers
    int e { 6 }, f { 7 }; // CORRECT: both have initializers
    
    // 'a' contains garbage value - undefined behavior to use it
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 50,
            question: "What is the purpose of the [[maybe_unused]] attribute?",
            options: [
              "To mark variables that might be deleted later",
              "To suppress compiler warnings about unused variables",
              "To indicate variables that use less memory",
              "To mark variables as potentially constant"
            ],
            correctAnswer: 1,
            explanation: "The [[maybe_unused]] attribute (C++17) tells the compiler not to warn about a variable being unused, useful for variables that are conditionally used.",
            codeSnippet: `#include <iostream>

int main() {
    [[maybe_unused]] double pi { 3.14159 };
    [[maybe_unused]] double gravity { 9.8 };
    
    std::cout << pi;  // pi is used
    // gravity is unused but no warning generated
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 51,
            question: "Which of these initialization forms allows narrowing conversions?",
            options: [
              "Direct-list-initialization: int x{4.5};",
              "Copy-initialization: int x = 4.5;",
              "Value-initialization: int x{};",
              "None of the above"
            ],
            correctAnswer: 1,
            explanation: "Copy-initialization and direct-initialization allow narrowing conversions (like float to int), while list-initialization prevents them.",
            codeSnippet: `int main() {
    // These allow narrowing (4.5 becomes 4):
    int a = 4.5;    // copy-initialization - OK
    int b ( 4.5 );  // direct-initialization - OK
    
    // This prevents narrowing:
    int c { 4.5 };  // list-initialization - ERROR
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 52,
            question: "What is the difference between the assignment operator (=) and equality operator (==)?",
            options: [
              "They are the same operator used in different contexts",
              "= assigns a value, == tests for equality",
              "= tests for equality, == assigns a value",
              "= is for integers, == is for floating-point numbers"
            ],
            correctAnswer: 1,
            explanation: "The assignment operator (=) assigns a value to a variable. The equality operator (==) tests whether two values are equal.",
            codeSnippet: `int main() {
    int x;
    
    x = 5;          // Assignment: give x the value 5
    
    if (x == 5) {   // Equality: test if x equals 5
        // This code runs because x equals 5
    }
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 53,
            question: "When should you prefer direct-list-initialization with {0} vs value-initialization with {}?",
            options: [
              "{0} and {} are completely interchangeable",
              "Use {0} when you're using the initial value, {} when it will be replaced",
              "Use {} when you're using the initial value, {0} when it will be replaced",
              "Always use {0} for better performance"
            ],
            correctAnswer: 1,
            explanation: "Use {0} when you're actually using that initial zero value. Use {} when the value is temporary and will be immediately replaced (like before user input).",
            codeSnippet: `#include <iostream>

int main() {
    int score { 0 };    // Use {0} - we're using the 0 value
    std::cout << score; // Printing the initial 0
    
    int userInput {};   // Use {} - value will be replaced
    std::cin >> userInput; // Immediately replacing value
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 54,
            question: "What is copy-assignment and when does it occur?",
            options: [
              "It's the same as copy-initialization",
              "It copies the right-hand value to the left-hand variable in assignment",
              "It only works with string variables",
              "It creates a copy of the variable"
            ],
            correctAnswer: 1,
            explanation: "Copy-assignment occurs when using the assignment operator (=) to copy a value from the right side to the variable on the left side.",
            codeSnippet: `int main() {
    int width;      // Declaration
    width = 5;      // Copy-assignment: copies 5 to width
    width = 7;      // Copy-assignment: copies 7 to width (overwrites 5)
    
    std::cout << width; // Prints 7
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 55,
            question: "What is the key limitation of normal variables regarding value storage?",
            options: [
              "They can only store integer values",
              "They can only hold one value at a time",
              "They can only be used once",
              "They can't be reassigned after initialization"
            ],
            correctAnswer: 1,
            explanation: "Normal variables can only hold one value at a time. When you assign a new value, it overwrites the previous value.",
            codeSnippet: `int main() {
    int x = 5;      // x holds value 5
    std::cout << x; // prints 5
    
    x = 7;          // x now holds 7 (5 is overwritten)
    std::cout << x; // prints 7
    
    // x cannot hold both 5 and 7 simultaneously
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
            id: 56,
            question: "What does std::cout stand for and what is it used for?",
            options: [
              "Character output - used to send data to the console",
              "Console output - used to clear the screen",
              "Computer output - used to save files",
              "Character operation - used to manipulate text"
            ],
            correctAnswer: 0,
            explanation: "std::cout stands for 'character output' and is used to send data to the console to be printed as text.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Hello world!";  // prints text
    std::cout << 42;              // prints numbers
    
    int x { 5 };
    std::cout << x;               // prints variable values
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 57,
            question: "What operator is used with std::cout to send data to the console?",
            options: [
              "The extraction operator >>",
              "The insertion operator <<",
              "The assignment operator =",
              "The equality operator =="
            ],
            correctAnswer: 1,
            explanation: "The insertion operator (<<) is used with std::cout to send data to the console. Think of it as data flowing in the direction of the arrows.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Hello";         // insertion operator
    std::cout << " " << "world!"; // can chain multiple insertions
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 58,
            question: "What happens when you use multiple std::cout statements without newlines?",
            options: [
              "Each statement prints on a separate line",
              "All output appears on the same line",
              "The program produces an error",
              "Only the last statement prints"
            ],
            correctAnswer: 1,
            explanation: "Separate std::cout statements without newlines will output all text on the same line. You need to explicitly add newlines for separate lines.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Hi!";
    std::cout << "My name is Alex.";
    // Prints: Hi!My name is Alex.
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 59,
            question: "What is the difference between std::endl and \\n?",
            options: [
              "They are exactly the same",
              "std::endl outputs a newline and flushes the buffer, \\n only outputs a newline",
              "\\n outputs a newline and flushes the buffer, std::endl only outputs a newline",
              "std::endl is for Windows, \\n is for Unix"
            ],
            correctAnswer: 1,
            explanation: "std::endl outputs a newline AND flushes the buffer (slow), while \\n only outputs a newline without flushing (faster).",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Line 1" << std::endl; // newline + flush (slower)
    std::cout << "Line 2" << '\\n';       // newline only (faster)
    std::cout << "Line 3\\n";            // newline embedded in text
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 60,
            question: "Which newline approach is preferred for console output?",
            options: [
              "Always use std::endl for consistency",
              "Prefer \\n over std::endl for better performance",
              "Use \\r\\n for cross-platform compatibility",
              "It doesn't matter, they're identical"
            ],
            correctAnswer: 1,
            explanation: "\\n is preferred because it's more efficient (no buffer flush), more concise, and can be embedded in existing text.",
            codeSnippet: `#include <iostream>

int main() {
    // Preferred approach
    std::cout << "Fast output\\n";
    std::cout << "Another line\\n";
    
    // Less efficient
    std::cout << "Slow output" << std::endl;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 61,
            question: "What does std::cin stand for and what operator is used with it?",
            options: [
              "Character input, uses the insertion operator <<",
              "Console input, uses the assignment operator =",
              "Character input, uses the extraction operator >>",
              "Computer input, uses the equality operator =="
            ],
            correctAnswer: 2,
            explanation: "std::cin stands for 'character input' and uses the extraction operator (>>) to read input from the keyboard into variables.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter a number: ";
    
    int x{};
    std::cin >> x;  // extraction operator reads input
    
    std::cout << "You entered " << x << '\\n';
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 62,
            question: "What happens when you chain multiple extractions with std::cin?",
            options: [
              "Only the first extraction works",
              "You can read multiple values separated by whitespace",
              "It causes a compilation error",
              "Each extraction requires a separate line of input"
            ],
            correctAnswer: 1,
            explanation: "You can chain multiple extractions to read multiple values from a single line of input, separated by whitespace (spaces, tabs, or newlines).",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter two numbers: ";
    
    int x{}, y{};
    std::cin >> x >> y;  // reads two values from one input line
    
    std::cout << "You entered " << x << " and " << y << '\\n';
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 63,
            question: "Why is std::cout considered 'buffered'?",
            options: [
              "It stores output in memory before sending it to the console",
              "It can only output one character at a time",
              "It automatically adds buffer space around text",
              "It prevents data from being output"
            ],
            correctAnswer: 0,
            explanation: "std::cout is buffered because output is collected in memory (buffer) and then sent to the console in batches for better performance.",
            codeSnippet: `#include <iostream>

int main() {
    // All this output goes to buffer first
    std::cout << "Line 1\\n";
    std::cout << "Line 2\\n";
    std::cout << "Line 3\\n";
    
    // Buffer gets flushed when:
    // - Buffer is full
    // - Program ends  
    // - std::endl is used
    // - Buffer is manually flushed
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 64,
            question: "What happens during std::cin extraction when invalid input is provided?",
            options: [
              "The program crashes immediately",
              "The variable gets a random value",
              "Extraction fails, variable gets 0, future extractions fail until cleared",
              "The invalid input is automatically converted"
            ],
            correctAnswer: 2,
            explanation: "When extraction fails (e.g., entering 'abc' for an int), the variable gets value 0, and std::cin enters a failed state where future extractions won't work until cleared.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter a number: ";
    
    int x{};
    std::cin >> x;  // If user enters 'abc', x becomes 0
    
    std::cout << "You entered " << x << '\\n';  // Prints 0
    
    // Future extractions will fail until std::cin is cleared
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 65,
            question: "When std::cin encounters whitespace during extraction, what happens?",
            options: [
              "Extraction stops and whitespace is included in the result",
              "Leading whitespace is discarded, extraction stops at trailing whitespace",
              "All whitespace is converted to underscores",
              "Whitespace causes an extraction error"
            ],
            correctAnswer: 1,
            explanation: "std::cin discards leading whitespace, then extracts characters until it hits whitespace, a newline, or invalid characters. Trailing whitespace remains in the buffer.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter numbers: ";
    
    int x{}, y{};
    // Input: "  5   10  " (with spaces)
    std::cin >> x;  // Reads 5, leaves "   10  " in buffer
    std::cin >> y;  // Reads 10, leaves "  " in buffer
    
    std::cout << x << " and " << y << '\\n';
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 66,
            question: "What is the correct way to use single quotes vs double quotes with newlines?",
            options: [
              "Always use double quotes: \"\\n\"",
              "Always use single quotes: '\\n'",
              "Use '\\n' when standalone, \"\\n\" when embedded in text",
              "Use '\\n' for variables, \"\\n\" for literals"
            ],
            correctAnswer: 2,
            explanation: "Use single quotes '\\n' when the newline stands alone (conventional), and double quotes when embedded in existing text like \"Hello\\n\".",
            codeSnippet: `#include <iostream>

int main() {
    int x { 5 };
    
    // Conventional usage
    std::cout << "Value: " << x << '\\n';        // standalone newline
    std::cout << "Hello world!\\n";             // embedded in text
    
    // Less conventional but acceptable
    std::cout << "Value: " << x << "\\n";       // standalone with double quotes
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 67,
            question: "Why should variables be initialized before reading input with std::cin?",
            options: [
              "std::cin requires initialized variables to work",
              "Uninitialized variables cause std::cin to fail",
              "Following best practice of always initializing variables",
              "std::cin cannot overwrite uninitialized memory"
            ],
            correctAnswer: 2,
            explanation: "While std::cin will overwrite the variable's value, it's best practice to always initialize variables upon creation for consistency and safety.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter a number: ";
    
    // Best practice: initialize even though std::cin will overwrite
    int x{};        // value-initialize to 0
    std::cin >> x;  // user input overwrites the 0
    
    std::cout << "You entered " << x << '\\n';
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 68,
            question: "What does FIFO (First In, First Out) mean in the context of std::cin buffering?",
            options: [
              "Data is processed in reverse order",
              "Data is processed in the order it was entered",
              "Only the first input character is processed",
              "Data processing order is random"
            ],
            correctAnswer: 1,
            explanation: "FIFO means data is processed in the same order it was entered. Characters added to the end of the input buffer are removed from the front, ensuring proper sequence.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter: abc123\\n";
    
    char a, b, c;
    int num;
    
    // Input buffer: a,b,c,1,2,3,\\n
    std::cin >> a;   // Extracts 'a' (first in, first out)
    std::cin >> b;   // Extracts 'b' (next in line)
    std::cin >> c;   // Extracts 'c' (next in line)
    std::cin >> num; // Extracts 123 (remaining digits)
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 69,
            question: "What happens when std::cin encounters a partial match during number extraction?",
            options: [
              "It waits for more input to complete the number",
              "It extracts what it can and stops at the first invalid character",
              "It discards the entire input and starts over",
              "It converts invalid characters to zeros"
            ],
            correctAnswer: 1,
            explanation: "std::cin extracts as many consecutive valid characters as possible, then stops when it hits an invalid character, leaving the invalid character in the buffer.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter: 123abc\\n";
    
    int x{};
    std::cin >> x;  // Extracts "123", stops at 'a'
    
    std::cout << x; // Prints: 123
    // Buffer still contains: abc\\n
    
    char letter;
    std::cin >> letter; // Extracts 'a' from remaining buffer
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 70,
            question: "In what order are these extraction steps performed by std::cin?",
            options: [
              "Extract characters → Check state → Discard whitespace → Wait for input",
              "Check state → Discard whitespace → Wait if needed → Extract characters",
              "Wait for input → Extract characters → Check state → Discard whitespace",
              "Discard whitespace → Extract characters → Wait for input → Check state"
            ],
            correctAnswer: 1,
            explanation: "std::cin follows this order: 1) Check if in good state, 2) Discard leading whitespace, 3) Wait for input if buffer empty, 4) Extract valid characters until invalid char or newline.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter:    123\\n";  // Leading spaces
    
    int x{};
    // 1. Check std::cin state (good)
    // 2. Discard leading spaces "   "
    // 3. Buffer not empty, no wait needed
    // 4. Extract "123" until newline
    std::cin >> x;
    
    std::cout << x; // Prints: 123
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 71,
            question: "Why is buffered output generally faster than unbuffered output?",
            options: [
              "Buffered output uses less memory",
              "Buffered output batches multiple requests to minimize slow device transfers",
              "Buffered output compresses the data before sending",
              "Buffered output processes data in parallel"
            ],
            correctAnswer: 1,
            explanation: "Buffered output is faster because writing to memory (buffer) is quick, while transferring to output devices is slow. Batching multiple outputs reduces the number of slow device transfers.",
            codeSnippet: `#include <iostream>

int main() {
    // Fast: All these go to buffer first (fast memory writes)
    std::cout << "Line 1\\n";
    std::cout << "Line 2\\n"; 
    std::cout << "Line 3\\n";
    
    // Then: One batch transfer to console (one slow device write)
    // vs unbuffered: 3 separate slow device writes
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 72,
            question: "What happens to input buffer contents when you enter multiple values on one line?",
            options: [
              "All values are processed immediately",
              "Values remain in buffer until extracted by subsequent std::cin operations",
              "Only the first value is stored, rest is discarded",
              "Values are automatically split into separate buffers"
            ],
            correctAnswer: 1,
            explanation: "When you enter multiple values on one line, they all go into the input buffer and remain there until extracted by subsequent std::cin operations.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter three numbers: ";
    // User enters: 10 20 30
    // Buffer contains: 10 20 30\\n
    
    int a{};
    std::cin >> a;  // Extracts 10, buffer: 20 30\\n
    
    int b{};  
    std::cin >> b;  // Extracts 20, buffer: 30\\n
    
    int c{};
    std::cin >> c;  // Extracts 30, buffer: \\n
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 73,
            question: "When std::cin is in a failed state, what happens to subsequent extraction attempts?",
            options: [
              "They work normally after the first failure",
              "They immediately fail without attempting extraction",
              "They clear the failed state automatically",
              "They prompt the user for new input"
            ],
            correctAnswer: 1,
            explanation: "When std::cin is in a failed state, all subsequent extraction attempts immediately fail without trying to extract anything, until the state is manually cleared.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Enter number: ";
    // User enters: abc
    
    int x{};
    std::cin >> x;  // FAILS: x becomes 0, std::cin in bad state
    
    int y{};
    std::cin >> y;  // FAILS IMMEDIATELY: doesn't even try to extract
    
    // y remains 0, std::cin still in bad state
    // Need to clear std::cin to fix this
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 74,
            question: "What is the precise definition of an uninitialized variable in C++?",
            options: [
              "A variable that was declared without a data type",
              "A variable that has not been given a known value yet",
              "A variable that was assigned a null value",
              "A variable that exists only in debug builds"
            ],
            correctAnswer: 1,
            explanation: "An uninitialized variable is one that has not been given a known value yet, whether through initialization at definition or through assignment afterward.",
            codeSnippet: `#include <iostream>

int main() {
    int x;          // Uninitialized - no known value
    int y = 5;      // Initialized - given known value at definition
    int z;          // Uninitialized
    z = 10;         // Now z is no longer uninitialized (has known value)
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 75,
            question: "Why doesn't C++ automatically initialize variables to zero by default?",
            options: [
              "It would use too much memory",
              "It's a performance optimization inherited from C",
              "Zero is not a valid value for all data types",
              "It would make the language too complex"
            ],
            correctAnswer: 1,
            explanation: "C++ inherited this behavior from C as a performance optimization. Imagine creating 100,000 variables to read data from a file - initializing them all to zero would be wasteful since you're immediately overwriting those values.",
            codeSnippet: `// Example scenario where auto-initialization would be wasteful
int main() {
    int values[100000];  // Don't waste time initializing these...
    
    // ...when we're immediately going to overwrite them
    for (int i = 0; i < 100000; ++i) {
        values[i] = readFromFile();  // Values get real data
    }
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 76,
            question: "What value will an uninitialized variable contain?",
            options: [
              "Always zero",
              "Always negative one",
              "Whatever garbage value was previously in that memory location",
              "A compiler-specific default value"
            ],
            correctAnswer: 2,
            explanation: "Uninitialized variables contain whatever garbage value happened to be in that memory location before. This value is unpredictable and can change between program runs.",
            codeSnippet: `#include <iostream>

int main() {
    int x;  // Contains garbage - could be anything!
    
    std::cout << x;  // Might print 7177728, -858993460, or any random value
    // The value is whatever was previously in that memory location
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 77,
            question: "What is undefined behavior (UB) in C++?",
            options: [
              "Code that compiles but crashes at runtime",
              "Code whose behavior is not well-defined by the C++ language",
              "Code that produces different results on different compilers",
              "Code that only works in debug mode"
            ],
            correctAnswer: 1,
            explanation: "Undefined behavior is the result of executing code whose behavior is not well-defined by the C++ language. The language doesn't specify what should happen, so anything can occur.",
            codeSnippet: `#include <iostream>

int main() {
    int x;          // Uninitialized variable
    std::cout << x; // Undefined behavior - C++ doesn't define what happens
    
    // Could print anything, crash, work fine, or behave unpredictably
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 78,
            question: "Which of these is NOT a possible symptom of undefined behavior?",
            options: [
              "Program produces different results every time it runs",
              "Program crashes immediately or later",
              "Program works on some compilers but not others",
              "Program always produces a compile-time error"
            ],
            correctAnswer: 3,
            explanation: "Undefined behavior typically manifests at runtime, not compile-time. Compile-time errors would prevent the program from being built, while UB allows the program to compile but behave unpredictably when run.",
            codeSnippet: `// This compiles fine but has undefined behavior
#include <iostream>

int main() {
    int x;           // No compiler error here
    std::cout << x;  // UB occurs at runtime, not compile time
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 79,
            question: "What might happen if you run a program with undefined behavior multiple times?",
            options: [
              "It will always produce the same incorrect result",
              "It will always crash in the same way",
              "Results may vary - sometimes work, sometimes crash, sometimes give different outputs",
              "It will automatically fix itself after several runs"
            ],
            correctAnswer: 2,
            explanation: "Undefined behavior is unpredictable. The same program might work fine one run, crash the next, and produce different garbage values on subsequent runs - you never know what you'll get!",
            codeSnippet: `#include <iostream>

int main() {
    int x;
    std::cout << x << '\\n';
    
    // Run 1: Might print 7177728
    // Run 2: Might print 5277592  
    // Run 3: Might crash
    // Run 4: Might print 0
    // Completely unpredictable!
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 80,
            question: "Why might an uninitialized variable appear to 'work' in debug builds but fail in release builds?",
            options: [
              "Debug builds automatically initialize variables to zero",
              "Some compilers initialize memory to preset values in debug builds",
              "Release builds have stricter error checking",
              "Debug builds run more slowly so errors are easier to catch"
            ],
            correctAnswer: 1,
            explanation: "Some compilers (like Visual Studio) initialize memory to preset values in debug builds but not in release builds. This can mask undefined behavior during development.",
            codeSnippet: `#include <iostream>

int main() {
    int x;
    std::cout << x;
    
    // Debug build: Might consistently print -858993460 (VS preset value)
    // Release build: Might print random garbage or crash
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 81,
            question: "What is implementation-defined behavior?",
            options: [
              "Behavior that causes undefined results",
              "Behavior defined by the implementation, must be documented and consistent",
              "Behavior that only works on specific operating systems",
              "Behavior that changes between debug and release builds"
            ],
            correctAnswer: 1,
            explanation: "Implementation-defined behavior allows the implementation (compiler + standard library) to choose how something behaves, but it must be documented and consistent for that implementation.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << sizeof(int);  // Implementation-defined
    
    // Might print 4 on most platforms
    // Might print 2 on some older/embedded systems
    // But consistent for each specific compiler/platform
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 82,
            question: "What's the difference between implementation-defined and unspecified behavior?",
            options: [
              "There is no difference, they're the same thing",
              "Implementation-defined must be documented, unspecified doesn't require documentation",
              "Unspecified must be documented, implementation-defined doesn't",
              "Implementation-defined causes errors, unspecified doesn't"
            ],
            correctAnswer: 1,
            explanation: "Both allow the implementation to choose behavior, but implementation-defined behavior must be documented while unspecified behavior doesn't require documentation.",
            codeSnippet: `// Implementation-defined: sizeof(int) - must be documented
// Unspecified: order of evaluation of function arguments - doesn't need docs

#include <iostream>

int getValue() { std::cout << "A"; return 1; }
int getOther() { std::cout << "B"; return 2; }

int main() {
    // Unspecified: might print "AB" or "BA" 
    someFunction(getValue(), getOther());
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 83,
            question: "What compiler warning might you see when using an uninitialized variable?",
            options: [
              "warning: unused variable",
              "warning: uninitialized local variable used",
              "error: variable not declared",
              "warning: implicit conversion"
            ],
            correctAnswer: 1,
            explanation: "Modern compilers often detect when uninitialized variables are used and issue warnings like 'uninitialized local variable used' to help catch this common mistake.",
            codeSnippet: `#include <iostream>

int main() {
    int x;          // Declaration
    std::cout << x; // Usage - compiler warns here
    
    // Warning: uninitialized local variable 'x' used
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 84,
            question: "Which of these situations demonstrates the terminology difference between initialized and uninitialized?",
            options: [
              "int x = 5; // initialized, int y; // uninitialized",
              "int x; x = 5; // x becomes initialized after assignment",
              "int x; x = 5; // x is no longer uninitialized after assignment",
              "Both B and C are correct"
            ],
            correctAnswer: 3,
            explanation: "After assignment, a variable is no longer uninitialized (it has a known value), but technically 'initialized' refers to getting a value at the point of definition. Both statements B and C correctly describe the terminology.",
            codeSnippet: `int main() {
    int x = 5;  // Initialized (value at definition)
    int y;      // Uninitialized (no known value)
    y = 10;     // y is no longer uninitialized (has known value)
                // but wasn't "initialized" since value came after definition
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 85,
            question: "Why should you 'always initialize your variables' even when performance matters?",
            options: [
              "The cost of initialization is minuscule compared to the benefit",
              "Uninitialized variables use more memory",
              "It prevents all forms of undefined behavior",
              "It makes your code run faster"
            ],
            correctAnswer: 0,
            explanation: "The performance cost of initializing variables is typically negligible compared to the massive benefit of avoiding unpredictable undefined behavior that can cause subtle bugs.",
            codeSnippet: `int main() {
    // Tiny cost...
    int x { 0 };        // Minimal performance impact
    double y { 0.0 };   // Negligible overhead
    
    // ...huge benefit: predictable, debuggable behavior
    std::cout << x + y; // Always works as expected
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 86,
            question: "What makes undefined behavior particularly challenging to debug?",
            options: [
              "It always crashes the program immediately",
              "It only occurs in release builds",
              "The program may seem to work fine if the uninitialized variable gets reasonable values",
              "Modern compilers can't detect it"
            ],
            correctAnswer: 2,
            explanation: "Undefined behavior is tricky because if an uninitialized variable happens to get a 'reasonable' value (like 0), the program might appear to work correctly, masking the underlying bug until it surfaces later.",
            codeSnippet: `#include <iostream>

int main() {
    int x;  // Uninitialized
    
    // If memory location happens to contain 0, this might work
    if (x == 0) {
        std::cout << "Looks like it works!\\n";
    }
    
    // But it's still undefined behavior and could fail anytime
    return 0;
}`,
            codeLanguage: "cpp"
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
            id: 87,
            question: "How many keywords does C++ have as of C++23?",
            options: [
              "85 keywords",
              "92 keywords", 
              "78 keywords",
              "100 keywords"
            ],
            correctAnswer: 1,
            explanation: "C++ reserves 92 words as keywords as of C++23. These words have special meaning and cannot be used as identifiers.",
            codeSnippet: `// Examples of C++ keywords:
// int, return, if, else, for, while, class, struct
// bool, true, false, const, static, void, auto
// namespace, using, template, typename, etc.

int main() {
    // int x;     // 'int' is a keyword (type)
    // return 0;  // 'return' is a keyword (statement)
}`,
            codeLanguage: "cpp"
          },
          {
            id: 88,
            question: "Which of these are C++20 keywords that were added in C++20?",
            options: [
              "auto, const, static",
              "concept, consteval, co_await",
              "class, struct, enum", 
              "int, bool, char"
            ],
            correctAnswer: 1,
            explanation: "C++20 introduced several new keywords including concept, consteval, constinit, co_await, co_return, co_yield, char8_t, and requires for new language features.",
            codeSnippet: `// C++20 keywords example
#include <concepts>

// 'concept' - new in C++20
template<typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

// 'consteval' - new in C++20  
consteval int square(int n) {
    return n * n;
}

// 'requires' - new in C++20
template<Numeric T>
T add(T a, T b) requires std::is_arithmetic_v<T> {
    return a + b;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 89,
            question: "What are C++ special identifiers?",
            options: [
              "Keywords that are case-sensitive",
              "Identifiers with special meaning in certain contexts but not reserved otherwise",
              "Identifiers that start with underscores",
              "Preprocessor directives"
            ],
            correctAnswer: 1,
            explanation: "Special identifiers (override, final, import, module) have specific meaning in certain contexts but are not reserved keywords and can be used as regular identifiers elsewhere.",
            codeSnippet: `class Base {
public:
    virtual void func() {}
};

class Derived : public Base {
public:
    void func() override {}  // 'override' is a special identifier
};

int main() {
    int override = 5;  // But can still be used as variable name
    int final = 10;    // 'final' can also be used as variable name
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 90,
            question: "What are the three main rules for C++ identifier naming?",
            options: [
              "Must be lowercase, no numbers, no symbols",
              "Cannot be keywords, letters/numbers/underscore only, must start with letter/underscore",
              "Must start with capital letter, cannot contain spaces, maximum 32 characters",
              "Cannot start with numbers, must be camelCase, cannot be longer than 16 characters"
            ],
            correctAnswer: 1,
            explanation: "C++ identifier rules: (1) Cannot be a keyword, (2) Can only contain letters, numbers, and underscores, (3) Must start with a letter or underscore (not a number).",
            codeSnippet: `int main() {
    // Valid identifiers
    int value;          // Rule: starts with letter
    int myValue2;       // Rule: letters, numbers, underscore only
    int _privateVar;    // Rule: can start with underscore
    
    // Invalid identifiers
    // int 2value;      // Can't start with number
    // int my-value;    // Can't contain hyphen
    // int class;       // Can't be a keyword
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 91,
            question: "Why is C++ case sensitive when it comes to identifiers?",
            options: [
              "To make the language more difficult",
              "To distinguish between different identifiers with similar names",
              "To match other programming languages",
              "To reduce memory usage"
            ],
            correctAnswer: 1,
            explanation: "C++ treats uppercase and lowercase letters as different characters, so nvalue, nValue, and NVALUE are three completely different identifiers.",
            codeSnippet: `int main() {
    int value = 1;      // Different from below
    int Value = 2;      // Different from above and below  
    int VALUE = 3;      // Different from above two
    int vAlUe = 4;      // Yet another different identifier
    
    // All four variables are distinct and can coexist
    std::cout << value << Value << VALUE << vAlUe; // Prints: 1234
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 92,
            question: "What is the conventional way to start variable names in C++?",
            options: [
              "With a capital letter",
              "With an underscore",
              "With a lowercase letter",
              "With a number"
            ],
            correctAnswer: 2,
            explanation: "C++ convention is that variable names should begin with a lowercase letter. If single word/acronym, use all lowercase. Capital letters are typically reserved for user-defined types.",
            codeSnippet: `int main() {
    // Conventional variable names
    int value;          // Good: starts with lowercase
    int customerCount;  // Good: camelCase for multi-word
    int user_input;     // Good: snake_case for multi-word
    
    // Unconventional (but valid)
    int Value;          // Should start with lowercase
    int TOTAL_SCORE;    // Should not be all caps
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 93,
            question: "What are the two common naming conventions for multi-word identifiers?",
            options: [
              "PascalCase and kebab-case",
              "snake_case and camelCase",
              "UPPER_CASE and lower-case",
              "Hungarian notation and reverse notation"
            ],
            correctAnswer: 1,
            explanation: "The two common conventions are snake_case (words separated by underscores) and camelCase (intercapped words). Both are acceptable in C++.",
            codeSnippet: `int main() {
    // snake_case convention
    int my_variable_name;
    int customer_total_score;
    int time_elapsed_seconds;
    
    // camelCase convention  
    int myVariableName;
    int customerTotalScore;
    int timeElapsedSeconds;
    
    // Both are conventional and widely used
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 94,
            question: "Why should you avoid starting identifier names with underscores?",
            options: [
              "It's against C++ syntax rules",
              "It makes code harder to read",
              "Names starting with underscore are typically reserved for OS, library, and compiler use",
              "It causes performance issues"
            ],
            correctAnswer: 2,
            explanation: "While syntactically legal, identifiers starting with underscores are typically reserved for operating systems, libraries, and compilers. Avoid them to prevent naming conflicts.",
            codeSnippet: `int main() {
    // Avoid these (though syntactically legal)
    // int _count;        // Reserved for implementation
    // int __value;       // Reserved for implementation
    // int _Value;        // Reserved for implementation
    
    // Use these instead
    int count;          // Good
    int value;          // Good
    int privateValue;   // Good alternative to _value
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 95,
            question: "What does 'make the length of an identifier proportional to how specific and accessible it is' mean?",
            options: [
              "All identifiers should be the same length",
              "Longer names for specific/accessible identifiers, shorter for trivial/local ones",
              "All identifiers should be as short as possible",
              "All identifiers should be as long as possible"
            ],
            correctAnswer: 1,
            explanation: "Short-lived, trivial identifiers can have shorter names (like 'i' for loop counters), while identifiers that are accessible widely or represent specific concepts should have descriptive longer names.",
            codeSnippet: `int main() {
    // Short names for short-lived, trivial use
    for (int i = 0; i < 10; ++i) {     // 'i' is fine for simple loop
        // ... 
    }
    
    // Longer names for specific, accessible values
    int customerAccountBalance = 1000;  // Specific concept, clear meaning
    int millimetersOfPipeLength = 500; // Very specific, units clear
    
    // Avoid vague short names for important data
    // int data;        // Bad: what kind of data?
    // int time;        // Bad: seconds? minutes? hours?
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 96,
            question: "Which of these identifier names follows best practices?",
            options: [
              "int ccount; // customer count",
              "int numApples;",
              "int _total;",
              "int data;"
            ],
            correctAnswer: 1,
            explanation: "numApples is descriptive, follows naming conventions (starts with lowercase), and clearly indicates what it represents. The others have various issues with clarity or conventions.",
            codeSnippet: `int main() {
    // Good examples
    int numApples;           // Clear, descriptive
    int customerCount;       // Obvious what we're counting
    int minutesElapsed;      // Clear units and meaning
    int monstersKilled;      // Descriptive and clear
    
    // Poor examples  
    // int ccount;           // What does 'c' mean?
    // int _total;           // Starts with underscore (avoid)
    // int data;             // Too vague
    // int x1, x2;           // Not descriptive
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 97,
            question: "When should you use comments to describe variables?",
            options: [
              "For every single variable",
              "Never, variable names should be self-explanatory",
              "When the variable's purpose or details might not be obvious from the name",
              "Only for global variables"
            ],
            correctAnswer: 2,
            explanation: "Use comments when additional context is needed that can't be reasonably conveyed in the variable name alone, such as units, inclusion/exclusion criteria, or special handling.",
            codeSnippet: `int main() {
    // Good use of comments for clarity
    // Count includes whitespace and punctuation  
    int numChars {};
    
    // Temperature in Celsius
    double roomTemp { 22.5 };
    
    // Index of last processed record (0-based)
    int lastIndex { -1 };
    
    // Self-explanatory names that don't need comments
    int appleCount { 5 };
    bool isGameOver { false };
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 98,
            question: "What's wrong with the identifier 'userinput1, userinput2'?",
            options: [
              "They contain numbers",
              "They don't follow camelCase",
              "They're hard to differentiate due to long similar names",
              "They should start with capital letters"
            ],
            correctAnswer: 2,
            explanation: "Long, similar names like userinput1 and userinput2 are hard to differentiate quickly when reading code. Better names would distinguish their specific purposes.",
            codeSnippet: `int main() {
    // Poor: Hard to differentiate
    // int userinput1, userinput2;
    
    // Better: Descriptive and distinguishable
    int userName;
    int userAge;
    
    // Or even better with specific context
    int firstPlayerScore;
    int secondPlayerScore;
    
    // Or
    int width, height;  // Short but clear in context
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 99,
            question: "Why should you 'match the style of existing code' when working on someone else's project?",
            options: [
              "To make the code compile correctly",
              "To maintain consistency and readability across the codebase",
              "Because it's required by C++ standards",
              "To avoid copyright issues"
            ],
            correctAnswer: 1,
            explanation: "Consistency within a codebase is more important than following abstract best practices. Mixed styles make code harder to read and maintain.",
            codeSnippet: `// If existing codebase uses snake_case:
int existing_function() {
    int user_count = 0;
    int max_value = 100;
    return user_count + max_value;
}

// New code should match existing style
int new_function() {
    int item_count = 5;        // Match snake_case
    // NOT: int itemCount = 5;  // Don't mix with camelCase
    return item_count;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 100,
            question: "Which statement about abbreviations in identifiers is correct?",
            options: [
              "Always use abbreviations to keep names short",
              "Never use any abbreviations",
              "Avoid abbreviations except when they are common and unambiguous",
              "Only use abbreviations for function names"
            ],
            correctAnswer: 2,
            explanation: "Avoid abbreviations except for common, unambiguous ones like 'num' (number), 'cm' (centimeters), 'idx' (index). Unclear abbreviations hurt readability.",
            codeSnippet: `int main() {
    // Good: Common, unambiguous abbreviations
    int numStudents;        // 'num' is widely understood
    int heightCm;           // 'cm' is standard unit abbreviation
    int currentIdx;         // 'idx' commonly means index
    
    // Poor: Unclear abbreviations
    // int stdCnt;          // Student count? Standard count?
    // int tmpVal;          // Temporary value? Template value?
    // int calcRes;         // Calculation result? Calendar resource?
    
    // Better: Full words
    int studentCount;
    int temporaryValue;
    int calculationResult;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 101,
            question: "What are the three primary uses of whitespace in C++?",
            options: [
              "Decoration, spacing, and indentation",
              "Separating language elements, inside text, and formatting code",
              "Comments, strings, and operators",
              "Variables, functions, and classes"
            ],
            correctAnswer: 1,
            explanation: "Whitespace in C++ is used for: (1) separating certain language elements, (2) inside quoted text where it's taken literally, and (3) formatting code to make it more readable.",
            codeSnippet: `#include <iostream>

int main()    // (1) Separating 'int' and 'main'
{
    std::cout << "Hello   world!";  // (2) Literal spaces in quotes
                                   // (3) Formatting with indentation
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 102,
            question: "Why must 'int' and 'x' be separated by whitespace in a variable declaration?",
            options: [
              "To make the code more readable",
              "So the compiler can distinguish between the keyword and identifier",
              "To follow C++ style guidelines",
              "To prevent syntax errors"
            ],
            correctAnswer: 1,
            explanation: "Without whitespace separation, 'intx' would be interpreted as a single identifier, and the compiler wouldn't recognize 'int' as a type keyword.",
            codeSnippet: `int main() {
    int x;    // Correct: 'int' and 'x' are separated
    // intx;  // Error: compiler sees 'intx' as one unknown identifier
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 103,
            question: "How much whitespace is required when the compiler needs separation?",
            options: [
              "Exactly one space",
              "At least one whitespace character, but can be more",
              "No more than three spaces",
              "Must be tabs, not spaces"
            ],
            correctAnswer: 1,
            explanation: "When whitespace is required for separation, the compiler doesn't care how much is used - one space, multiple spaces, tabs, or even newlines all work.",
            codeSnippet: `int main() {
    int x;              // One space
    int                y;  // Multiple spaces
                int
    z;                  // Newline separation
    
    // All are valid declarations
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 104,
            question: "What happens if you put code on the same line after a single-line comment?",
            options: [
              "The code executes normally",
              "The code becomes part of the comment and is ignored",
              "It causes a compilation error",
              "Only the comment is ignored"
            ],
            correctAnswer: 1,
            explanation: "Single-line comments extend to the end of the line, so any code following the comment on the same line becomes part of the comment and is ignored.",
            codeSnippet: `int main() {
    std::cout << "Hello"; // This comment continues
    // and this code would be ignored
    
    // Correct way:
    std::cout << "Hello"; // Comment here
    std::cout << "World"; // Code on new line
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 105,
            question: "Why must preprocessor directives be placed on separate lines?",
            options: [
              "To improve readability",
              "Because the preprocessor processes them line by line",
              "To follow coding standards",
              "To prevent namespace conflicts"
            ],
            correctAnswer: 1,
            explanation: "Preprocessor directives are processed line by line before compilation, so each directive must be on its own line for proper processing.",
            codeSnippet: `// Correct: Each directive on separate line
#include <iostream>
#include <string>

// Incorrect: Multiple directives on one line
// #include <iostream> #include <string>  // Won't work

int main() {
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 106,
            question: "How does whitespace behave inside quoted text?",
            options: [
              "All whitespace is removed",
              "Whitespace is taken literally",
              "Only single spaces are preserved",
              "Whitespace is converted to underscores"
            ],
            correctAnswer: 1,
            explanation: "Inside quoted text, whitespace is preserved exactly as written. The amount and type of whitespace matters and affects the output.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Hello world!";      // Single space
    std::cout << "Hello    world!";   // Multiple spaces preserved
    std::cout << "Hello\\tworld!";     // Tab character preserved
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 107,
            question: "Can newlines be included inside quoted text?",
            options: [
              "Yes, they are treated like any other character",
              "No, newlines are not allowed in quoted text",
              "Only with special escape sequences",
              "Only in multi-line strings"
            ],
            correctAnswer: 1,
            explanation: "Newlines are not allowed directly inside quoted text in C++. You must use escape sequences like \\n or end the quote and start a new one.",
            codeSnippet: `#include <iostream>

int main() {
    // Invalid: Direct newline in quotes
    // std::cout << "Hello
    //     world!";
    
    // Valid alternatives:
    std::cout << "Hello\\n    world!";  // Using escape sequence
    std::cout << "Hello "               // String concatenation
                 "world!";
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 108,
            question: "What happens when quoted strings are separated only by whitespace?",
            options: [
              "They are treated as separate strings",
              "They are automatically concatenated",
              "It causes a compilation error",
              "Only the first string is used"
            ],
            correctAnswer: 1,
            explanation: "Quoted strings separated by nothing but whitespace (spaces, tabs, newlines) are automatically concatenated by the preprocessor.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Hello "
                 "world!";    // Concatenated to "Hello world!"
    
    std::cout << "This "      // Multiple strings
                 "is "        // separated by whitespace
                 "concatenated!"; // become one string
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 109,
            question: "Why is C++ called a 'whitespace-independent' language?",
            options: [
              "Because whitespace is completely ignored",
              "Because C++ doesn't enforce formatting restrictions on programmers",
              "Because only tabs are allowed, not spaces",
              "Because all whitespace must be consistent"
            ],
            correctAnswer: 1,
            explanation: "C++ is whitespace-independent because it doesn't enforce specific formatting rules. Programmers have freedom to format code as they prefer (within syntax requirements).",
            codeSnippet: `// All of these are equivalent to the compiler:

int main(){std::cout<<"Hello";return 0;}

int main() {
    std::cout << "Hello";
    return 0;
}

int main()
{
    std::cout << "Hello";
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 110,
            question: "What is the recommended indentation amount for C++ code?",
            options: [
              "2 spaces",
              "4 spaces or equivalent tab width",
              "8 spaces",
              "1 tab character only"
            ],
            correctAnswer: 1,
            explanation: "The recommended indentation is 4 spaces (or tabs set to 4 spaces width). Some IDEs default to 3 spaces, which is also acceptable.",
            codeSnippet: `int main()
{
    std::cout << "Hello";        // 4 spaces indentation
    
    if (true)
    {
        std::cout << "World";    // 8 spaces (nested)
    }
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 111,
            question: "What are the two conventional styles for placing opening braces?",
            options: [
              "Above and below the statement",
              "Same line as statement, or on its own line below",
              "Indented and non-indented",
              "Before and after the function name"
            ],
            correctAnswer: 1,
            explanation: "The two common brace styles are: (1) opening brace on the same line as the statement, (2) opening brace on its own line below the statement.",
            codeSnippet: `// Style 1: Same line (saves vertical space)
int main() {
    std::cout << "Hello";
}

// Style 2: Own line (enhances readability)
int main()
{
    std::cout << "Hello";
}

// Both are widely used and acceptable`,
            codeLanguage: "cpp"
          },
          {
            id: 112,
            question: "What is the recommended maximum line length for C++ code?",
            options: [
              "60 characters",
              "80 characters",
              "120 characters",
              "No limit"
            ],
            correctAnswer: 1,
            explanation: "80 characters has been the de facto standard for maximum line length. This makes code easier to read and allows side-by-side comparison of code windows.",
            codeSnippet: `int main()
{
    // This line is getting close to 80 characters - consider splitting
    std::cout << "This is a really, really, really long line that should be split\\n";
    
    // Better: Split long lines
    std::cout << "This is a really, really, really long line "
                 "that has been properly split\\n";
                 
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 113,
            question: "When splitting a long line with operators, where should the operator be placed?",
            options: [
              "At the end of the current line",
              "At the beginning of the next line",
              "On its own separate line",
              "It doesn't matter"
            ],
            correctAnswer: 1,
            explanation: "Operators should be placed at the beginning of the continuation line, making it clearer that the line is a continuation and allowing for better alignment.",
            codeSnippet: `int main()
{
    // Preferred: Operator at beginning of next line
    std::cout << "Long string part 1 "
              << "and part 2 "
              << "and part 3\\n";
    
    int result = 3 + 4
               + 5 + 6
               * 7 * 8;
               
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 114,
            question: "What is the benefit of using whitespace to align values and comments?",
            options: [
              "It makes the code compile faster",
              "It makes the code easier to read and compare",
              "It reduces memory usage",
              "It's required by C++ standards"
            ],
            correctAnswer: 1,
            explanation: "Aligning values and comments with whitespace makes code much easier to read, scan, and compare. Related elements can be visually grouped and patterns become obvious.",
            codeSnippet: `int main()
{
    // Harder to read:
    int cost = 57;
    int pricePerItem = 24;
    int value = 5;
    
    // Easier to read (aligned):
    int cost         = 57;
    int pricePerItem = 24;
    int value        = 5;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 115,
            question: "What is the most important principle when choosing a formatting style?",
            options: [
              "Use the shortest possible lines",
              "Follow internet tutorials exactly",
              "Be consistent with existing project style",
              "Use as much whitespace as possible"
            ],
            correctAnswer: 2,
            explanation: "Consistency is key. When working in an existing project, match the established style rather than imposing your personal preferences. Consistency trumps personal preference.",
            codeSnippet: `// If existing codebase uses this style:
int existingFunction() {
    int value = 5;
    return value;
}

// New code should match (even if you prefer different style):
int newFunction() {    // Match opening brace style
    int result = 10;   // Match indentation and spacing
    return result;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 116,
            question: "What is the purpose of automatic formatting features in IDEs?",
            options: [
              "To change your code logic",
              "To maintain consistent formatting style throughout your code",
              "To optimize code performance",
              "To add missing semicolons"
            ],
            correctAnswer: 1,
            explanation: "Automatic formatting helps maintain consistent style throughout your code, especially when adding/removing code or pasting from other sources. It ensures uniformity without manual effort.",
            codeSnippet: `// Before auto-formatting (inconsistent):
int main(){
std::cout<<"Hello";
    if(true){std::cout<<"World";}
return 0;}

// After auto-formatting (consistent):
int main()
{
    std::cout << "Hello";
    if (true)
    {
        std::cout << "World";
    }
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 117,
            question: "What is a literal in C++?",
            options: [
              "A variable that can be changed",
              "A fixed value inserted directly into source code",
              "A function that returns a value",
              "A memory location that stores data"
            ],
            correctAnswer: 1,
            explanation: "A literal (or literal constant) is a fixed value that has been inserted directly into the source code. Examples include 5, 'A', and \"Hello world!\".",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << "Hello world!";  // "Hello world!" is a string literal
    int x { 5 };                  // 5 is an integer literal
    char c { 'A' };               // 'A' is a character literal
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 118,
            question: "What is the key difference between a literal and a variable?",
            options: [
              "Literals are stored in memory, variables are not",
              "Variables have types, literals do not",
              "Literals have fixed values that can't be changed, variables can be changed",
              "Variables are compiled directly into code, literals are not"
            ],
            correctAnswer: 2,
            explanation: "Literals have fixed values that cannot be changed (5 is always 5), while variables can have their values changed through assignment. Literals are compiled directly into the executable.",
            codeSnippet: `#include <iostream>

int main() {
    std::cout << 5;    // Literal: value 5 is fixed, compiled into executable
    
    int x { 5 };       // Variable: value stored in memory location
    x = 10;            // Variable can be changed
    std::cout << x;    // Prints new value from memory
    
    // 5 = 10;         // Error: can't change a literal!
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 119,
            question: "Why are literals also called 'literal constants'?",
            options: [
              "Because they are declared with the const keyword",
              "Because their values are fixed and cannot be changed",
              "Because they use constant memory",
              "Because they are only used in constant expressions"
            ],
            correctAnswer: 1,
            explanation: "Literals are called constants because their values are fixed and unchangeable. The literal 5 will always have the value 5, unlike variables whose values can be modified.",
            codeSnippet: `int main() {
    // These literals are constants - their values never change
    int a { 42 };        // 42 is always 42
    double b { 3.14 };   // 3.14 is always 3.14
    char c { 'X' };      // 'X' is always 'X'
    
    // Variables can change, literals cannot
    a = 100;  // OK: variable can be changed
    // 42 = 100;  // Error: literal cannot be changed
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 120,
            question: "What is an operator in C++?",
            options: [
              "A function that takes parameters",
              "A symbol or keyword that performs an operation on operands",
              "A variable that stores multiple values",
              "A type that defines data structure"
            ],
            correctAnswer: 1,
            explanation: "An operator is a symbol (like +, -, *) or keyword (like new, delete) that performs a specific operation on one or more operands to produce a result.",
            codeSnippet: `#include <iostream>

int main() {
    int result = 2 + 3;     // '+' is an operator, 2 and 3 are operands
    
    std::cout << result;    // '<<' is the insertion operator
    
    bool equal = (5 == 5);  // '==' is the equality operator
    
    int x = 10;             // '=' is the assignment operator
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 121,
            question: "What are operands in the context of operators?",
            options: [
              "The results produced by operators",
              "The input values that operators act upon",
              "The symbols used to represent operations",
              "The memory locations where operations occur"
            ],
            correctAnswer: 1,
            explanation: "Operands are the input values that operators act upon. In '2 + 3', the numbers 2 and 3 are operands, while + is the operator.",
            codeSnippet: `int main() {
    int result = 5 * 7;
    //           ^   ^
    //           |   |
    //      operands (5 and 7)
    //             ^
    //           operator (*)
    
    std::cout << "Result: " << result;
    //           ^         ^    ^
    //           |         |    |
    //        operand   operator operand
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 122,
            question: "What is operator arity?",
            options: [
              "The speed at which an operator executes",
              "The number of operands an operator takes as input",
              "The precedence level of an operator",
              "The memory usage of an operator"
            ],
            correctAnswer: 1,
            explanation: "Operator arity refers to the number of operands that an operator takes as input. C++ has unary (1), binary (2), ternary (3), and nullary (0) operators.",
            codeSnippet: `int main() {
    int x = 5;
    
    // Unary operator (1 operand)
    int neg = -x;           // operator- with one operand
    
    // Binary operator (2 operands)  
    int sum = 3 + 4;        // operator+ with two operands
    
    // Ternary operator (3 operands)
    int max = (x > 0) ? x : 0;  // conditional operator with three operands
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 123,
            question: "Which of these is an example of a unary operator?",
            options: [
              "2 + 3 (addition)",
              "-5 (negation)",
              "x = 10 (assignment)",
              "a == b (equality)"
            ],
            correctAnswer: 1,
            explanation: "The negation operator (-) in '-5' is a unary operator because it acts on only one operand (the number 5). It flips the sign of its operand.",
            codeSnippet: `int main() {
    int positive = 5;
    int negative = -positive;  // Unary minus operator
    
    // Other unary operators:
    positive = +positive;      // Unary plus operator (rarely used)
    bool flag = true;
    bool notFlag = !flag;      // Logical NOT operator (unary)
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 124,
            question: "Which of these is an example of a binary operator?",
            options: [
              "-x (negation)",
              "x + y (addition)",
              "!flag (logical NOT)",
              "++counter (increment)"
            ],
            correctAnswer: 1,
            explanation: "The addition operator (+) in 'x + y' is a binary operator because it acts on two operands: x (left operand) and y (right operand).",
            codeSnippet: `int main() {
    int x = 5, y = 3;
    
    // Binary operators (take two operands):
    int sum = x + y;        // Addition
    int diff = x - y;       // Subtraction  
    int product = x * y;    // Multiplication
    bool equal = x == y;    // Equality comparison
    
    std::cout << sum;       // << is also binary: cout and sum
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 125,
            question: "How many ternary operators does C++ have?",
            options: [
              "Zero",
              "One (the conditional operator)",
              "Three",
              "Many, depending on the context"
            ],
            correctAnswer: 1,
            explanation: "C++ has exactly one ternary operator: the conditional operator (?:), which takes three operands in the form 'condition ? value_if_true : value_if_false'.",
            codeSnippet: `int main() {
    int x = 5;
    int y = 10;
    
    // The only ternary operator in C++:
    int max = (x > y) ? x : y;
    //        ^^^^^^^   ^   ^
    //        condition | value_if_false
    //                value_if_true
    
    std::cout << "Max: " << max;
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 126,
            question: "Can operators have different meanings depending on context?",
            options: [
              "No, each operator has exactly one meaning",
              "Yes, some operators can be unary or binary depending on usage",
              "Only arithmetic operators can have different meanings",
              "Only in advanced C++ features"
            ],
            correctAnswer: 1,
            explanation: "Some operators have different meanings based on context. For example, '-' can be unary (negation: -5) or binary (subtraction: 4 - 3).",
            codeSnippet: `int main() {
    int x = 5;
    int y = 3;
    
    // Minus operator as binary (subtraction)
    int diff = x - y;       // Binary: 5 - 3 = 2
    
    // Minus operator as unary (negation)
    int negative = -x;      // Unary: -(5) = -5
    
    // Can combine both:
    int result = x - (-y);  // Binary subtraction of unary negation
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 127,
            question: "What happens when operators are chained together like '2 * 3 + 4'?",
            options: [
              "All operators execute simultaneously",
              "Operators execute left to right regardless of type",
              "Operators execute according to precedence rules (PEMDAS)",
              "It causes a compilation error"
            ],
            correctAnswer: 2,
            explanation: "When operators are chained, they execute according to precedence rules. In '2 * 3 + 4', multiplication happens first (2 * 3 = 6), then addition (6 + 4 = 10), following PEMDAS.",
            codeSnippet: `#include <iostream>

int main() {
    // Demonstrates operator precedence
    int result1 = 2 * 3 + 4;    // Multiplication first: (2 * 3) + 4 = 10
    int result2 = 2 + 3 * 4;    // Multiplication first: 2 + (3 * 4) = 14
    int result3 = (2 + 3) * 4;  // Parentheses first: (2 + 3) * 4 = 20
    
    std::cout << result1 << " " << result2 << " " << result3;
    // Prints: 10 14 20
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 128,
            question: "What does PEMDAS stand for in operator precedence?",
            options: [
              "Please Execute My Detailed Algorithm Steps",
              "Parentheses, Exponents, Multiplication & Division, Addition & Subtraction",
              "Precedence, Evaluation, Mathematics, Division, Addition, Subtraction",
              "Primary, Expression, Mathematical, Division, Assignment, Statement"
            ],
            correctAnswer: 1,
            explanation: "PEMDAS stands for Parentheses, Exponents, Multiplication & Division, Addition & Subtraction - the order of mathematical operations. Also taught as PEDMAS, BEDMAS, BODMAS, or BIDMAS in some countries.",
            codeSnippet: `#include <iostream>

int main() {
    // PEMDAS example:
    int result = 2 + 3 * 4 - 6 / 2;
    
    // Step by step:
    // 1. Multiplication and Division (left to right): 3 * 4 = 12, 6 / 2 = 3
    // 2. Addition and Subtraction (left to right): 2 + 12 - 3 = 11
    
    std::cout << result;  // Prints: 11
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 129,
            question: "What is a return value of an operator?",
            options: [
              "The memory address where the result is stored",
              "The output value produced by an operation",
              "The operator symbol itself",
              "The variable used to store the result"
            ],
            correctAnswer: 1,
            explanation: "A return value is the output value produced by an operation. For example, in '2 + 3', the return value is 5. In C++, operator return values are often just called return values.",
            codeSnippet: `#include <iostream>

int main() {
    // Each operation produces a return value:
    int sum = 5 + 3;        // Return value: 8
    int product = 4 * 2;    // Return value: 8  
    bool comparison = 5 > 3; // Return value: true
    
    // Return values can be used directly:
    std::cout << 2 + 3;     // Uses return value 5 directly
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 130,
            question: "What is a side effect in the context of C++ operators?",
            options: [
              "An unexpected error caused by an operator",
              "An observable effect beyond producing a return value",
              "A secondary operator that executes automatically",
              "A performance penalty from using operators"
            ],
            correctAnswer: 1,
            explanation: "A side effect is an observable effect of an operator beyond producing a return value. For example, 'x = 5' has the side effect of changing x's value, and 'std::cout << 5' has the side effect of printing to console.",
            codeSnippet: `#include <iostream>

int main() {
    int x = 10;
    
    // Assignment has side effect (changes x) AND return value (x)
    int y = (x = 5);  // Side effect: x becomes 5, Return value: x (which is 5)
    
    // cout has side effect (prints) AND return value (std::cout)
    std::cout << "Hello" << " World";  // Prints to console (side effect)
    
    std::cout << x;   // Prints: 5 (showing x was changed)
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 131,
            question: "Which operators are primarily used for their side effects rather than return values?",
            options: [
              "Arithmetic operators like + and *",
              "Comparison operators like == and <",
              "Assignment (=) and output (<<) operators",
              "Logical operators like && and ||"
            ],
            correctAnswer: 2,
            explanation: "Assignment (=) and output (<<) operators are primarily used for their side effects: assignment changes a variable's value, and output prints to console. Their return values are often incidental.",
            codeSnippet: `#include <iostream>

int main() {
    int x, y;
    
    // Used primarily for side effects:
    x = 5;              // Side effect: x gets value 5
    std::cout << x;     // Side effect: prints 5 to console
    
    // Used primarily for return values:
    int sum = 3 + 4;    // Return value: 7 (no side effects)
    bool equal = 5 == 5; // Return value: true (no side effects)
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 132,
            question: "What do assignment (=) and output (<<) operators return to enable chaining?",
            options: [
              "They return the result of the operation",
              "They return their left operand",
              "They return their right operand",
              "They don't return anything"
            ],
            correctAnswer: 1,
            explanation: "Both assignment (=) and output (<<) operators return their left operand, enabling chaining. 'x = y = 5' works because 'y = 5' returns y, and 'cout << a << b' works because 'cout << a' returns cout.",
            codeSnippet: `#include <iostream>

int main() {
    int x, y, z;
    
    // Assignment chaining (right to left evaluation):
    x = y = z = 10;  // z = 10 returns z, y = z returns y, x = y returns x
    
    // Output chaining (left to right evaluation):
    std::cout << "x=" << x << " y=" << y << " z=" << z;
    // cout << "x=" returns cout, then cout << x returns cout, etc.
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 133,
            question: "Which statement about keyword operators is correct?",
            options: [
              "All operators are symbols like + and -",
              "Some operators are keywords like new, delete, and throw",
              "Keyword operators are only used in advanced C++",
              "Keywords cannot be used as operators"
            ],
            correctAnswer: 1,
            explanation: "While most operators are symbols (like +, -, *, ==), some operators are keywords such as 'new' (for memory allocation), 'delete' (for memory deallocation), and 'throw' (for exceptions).",
            codeSnippet: `#include <iostream>

int main() {
    // Symbol operators:
    int sum = 5 + 3;        // + operator
    bool equal = 5 == 5;    // == operator
    
    // Keyword operators:
    int* ptr = new int(42); // 'new' operator
    delete ptr;             // 'delete' operator
    
    // 'throw' is also a keyword operator (for exceptions)
    // throw std::runtime_error("Error");
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
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
      },
      {
        id: "chapter-1-bonus",
        title: "C++ Basics - Bonus",
        description: "Modern C++ features, best practices, and fundamental concepts beyond LearnCpp.com",
        chapter: "Chapter 1",
        sections: ["Modern C++ features", "Function behavior", "Memory concepts", "Integer types"],
        questions: [
          {
            id: 1,
            question: "What does the 'auto' keyword do in modern C++?",
            options: [
              "It creates automatic variables",
              "It lets the compiler deduce the variable type",
              "It makes variables constant",
              "It allocates memory automatically"
            ],
            correctAnswer: 1,
            explanation: "The 'auto' keyword (C++11+) allows the compiler to automatically deduce the type of a variable based on its initializer, making code more readable and maintainable.",
            codeSnippet: `#include <vector>
#include <string>

int main() {
    auto number = 42;           // int
    auto decimal = 3.14;        // double
    auto text = "Hello";        // const char*
    auto name = std::string("World"); // std::string
    
    std::vector<int> nums = {1, 2, 3};
    auto it = nums.begin();     // std::vector<int>::iterator
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 2,
            question: "What is the difference between '#include <iostream>' and '#include \"iostream\"'?",
            options: [
              "No difference, both work the same",
              "<> searches system directories, \"\" searches local directories first",
              "\"\" is for C headers, <> is for C++ headers",
              "<> is deprecated in modern C++"
            ],
            correctAnswer: 1,
            explanation: "Angle brackets <> tell the preprocessor to search for headers in system/standard directories. Quotes \"\" search in the current directory first, then system directories.",
            codeSnippet: `// System/standard library headers
#include <iostream>    // Standard C++ library
#include <vector>      // STL container
#include <cmath>       // C math library (C++ wrapper)

// User-defined headers (local files)
#include "myheader.h"     // Look in current directory first
#include "../utils.h"     // Relative path
#include "config/settings.h" // Subdirectory`,
            codeLanguage: "cpp"
          },
          {
            id: 3,
            question: "What does 'using namespace std;' do and why might it be problematic?",
            options: [
              "It's always the best practice for cleaner code",
              "It brings all std names into global scope, potentially causing name conflicts",
              "It's required for using any standard library functions",
              "It only works in header files"
            ],
            correctAnswer: 1,
            explanation: "While 'using namespace std;' allows writing 'cout' instead of 'std::cout', it can cause name conflicts and is generally avoided in header files and large projects.",
            codeSnippet: `// Problematic in larger projects
using namespace std;
cout << "Hello" << endl;  // Can conflict with other 'cout' definitions

// Better practice - be explicit
std::cout << "Hello" << std::endl;

// Acceptable compromise - specific using declarations
using std::cout;
using std::endl;
cout << "Hello" << endl;`,
            codeLanguage: "cpp"
          },
          {
            id: 4,
            question: "What is the purpose of '#pragma once' in C++ headers?",
            options: [
              "It compiles the file only once per program",
              "It prevents multiple inclusions of the same header file",
              "It optimizes compilation speed",
              "It's a deprecated feature from old C++"
            ],
            correctAnswer: 1,
            explanation: "'#pragma once' is a non-standard but widely supported directive that prevents a header file from being included multiple times in the same translation unit, similar to include guards.",
            codeSnippet: `// myheader.h - Modern approach
#pragma once

class MyClass {
    // class definition
};

// Alternative traditional approach with include guards
#ifndef MYHEADER_H
#define MYHEADER_H

class MyClass {
    // class definition  
};

#endif // MYHEADER_H`,
            codeLanguage: "cpp"
          },
          {
            id: 5,
            question: "What does the '::' operator do in C++?",
            options: [
              "It's used for comments",
              "It's the scope resolution operator",
              "It concatenates strings",
              "It compares two values"
            ],
            correctAnswer: 1,
            explanation: "The '::' scope resolution operator is used to access members of namespaces, classes, or to specify global scope. It's essential for organizing code and avoiding name conflicts.",
            codeSnippet: `#include <iostream>

int value = 100;  // Global variable

namespace MyNamespace {
    int value = 200;
    
    class MyClass {
    public:
        static int value;
    };
}

int MyNamespace::MyClass::value = 300;

int main() {
    int value = 400;  // Local variable
    
    std::cout << ::value << std::endl;                    // 100 (global)
    std::cout << MyNamespace::value << std::endl;         // 200 (namespace)
    std::cout << MyNamespace::MyClass::value << std::endl; // 300 (class static)
    std::cout << value << std::endl;                      // 400 (local)
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 6,
            question: "What is a bit in computer memory?",
            options: [
              "A piece of hardware",
              "A memory signal",
              "A binary digit",
              "A CPU command"
            ],
            correctAnswer: 2,
            explanation: "A bit is a binary digit — either 0 or 1. It's the smallest unit of information in computing."
          },
          {
            id: 7,
            question: "Why are bits grouped together?",
            options: [
              "To save energy",
              "To store colors",
              "To form values",
              "To clean memory"
            ],
            correctAnswer: 2,
            explanation: "Bits are grouped to represent values like numbers, characters, and other data types."
          },
          {
            id: 8,
            question: "How many values can 4 bits hold?",
            options: [
              "16 values",
              "15 values",
              "12 values",
              "10 values"
            ],
            correctAnswer: 0,
            explanation: "2⁴ = 16, so 4 bits can hold 16 unique values (from 0 to 15)."
          },
          {
            id: 9,
            question: "What does n = 2^b mean?",
            options: [
              "Bit speed",
              "Bit type",
              "Bit range",
              "Bit size"
            ],
            correctAnswer: 2,
            explanation: "It shows how many values (n) you can represent with b bits."
          },
          {
            id: 10,
            question: "What does 01000001 mean?",
            options: [
              "Always 'A'",
              "Always 65",
              "May mean 'A'",
              "Always true"
            ],
            correctAnswer: 2,
            explanation: "It could mean 'A' (char) or 65 (int) depending on the data type."
          },
          {
            id: 11,
            question: "Why is the data type needed?",
            options: [
              "To sort code",
              "To name bits",
              "To read bits",
              "To color code"
            ],
            correctAnswer: 2,
            explanation: "Data types tell the compiler how to interpret and use the bits."
          },
          {
            id: 12,
            question: "Why use a variable name?",
            options: [
              "For short code",
              "For quick math",
              "For clear use",
              "For more RAM"
            ],
            correctAnswer: 2,
            explanation: "Variable names let us label memory locations in a readable way."
          },
          {
            id: 13,
            question: "Why not add char + bool?",
            options: [
              "Too slow",
              "Not valid",
              "Wastes RAM",
              "Used rarely"
            ],
            correctAnswer: 1,
            explanation: "They're different types and not logically compatible for addition.",
            codeSnippet: `char a = 'A';
bool b = true;
auto x = a + b;`,
            codeLanguage: "cpp"
          },
          {
            id: 14,
            question: "What must a constant have?",
            options: [
              "A name",
              "A type",
              "A value",
              "A flag"
            ],
            correctAnswer: 2,
            explanation: "A constant must be assigned a value when declared.",
            codeSnippet: `const int max = 100;`,
            codeLanguage: "cpp"
          },
          {
            id: 15,
            question: "How is const different?",
            options: [
              "Can't change",
              "No address",
              "No type tag",
              "Used once"
            ],
            correctAnswer: 0,
            explanation: "Constants can't be changed after being initialized."
          },
          {
            id: 16,
            question: "What is the primary difference between `int` and `unsigned int`?",
            options: [
              "`unsigned int` uses more memory",
              "`int` can store negative and positive numbers, `unsigned int` only positive",
              "`unsigned int` stores decimal values only",
              "`int` automatically wraps to 0 on overflow"
            ],
            correctAnswer: 1,
            explanation: "`unsigned int` can store only non-negative values but allows twice the positive range of `int`, which splits its range between positive and negative numbers.",
            codeSnippet: `int a = -5;
unsigned int b = 5;
// 'b' cannot store negative values`,
            codeLanguage: "cpp"
          },
          {
            id: 17,
            question: "What happens when you assign `-1` to an `unsigned int`?",
            options: [
              "It stores -1 without error",
              "It stores 0",
              "It wraps to the maximum value representable",
              "It causes a compilation error"
            ],
            correctAnswer: 2,
            explanation: "Assigning a negative value to an unsigned type wraps it to a large positive value due to binary representation (e.g., `-1` becomes `4294967295` on 32-bit).",
            codeSnippet: `unsigned int value = -1;
std::cout << value << "\\n"; // Likely prints 4294967295`,
            codeLanguage: "cpp"
          },
          {
            id: 18,
            question: "Which type should be used to store only positive values up to 65,535?",
            options: [
              "int",
              "short",
              "unsigned short",
              "long long"
            ],
            correctAnswer: 2,
            explanation: "`unsigned short` provides a 16-bit range from 0 to 65,535. `short` covers -32,768 to 32,767.",
            codeSnippet: `unsigned short level = 65535;`,
            codeLanguage: "cpp"
          },
          {
            id: 19,
            question: "What is the output of the following code on most systems?",
            options: [
              "0",
              "-32768",
              "32767",
              "Overflow error"
            ],
            correctAnswer: 1,
            explanation: "`short` wraps on overflow. Incrementing the max value of a 16-bit `short` causes it to wrap to the lowest negative value.",
            codeSnippet: `short x = 32767;
x++;
std::cout << x << "\\n";`,
            codeLanguage: "cpp"
          },
          {
            id: 20,
            question: "Which of the following is true about `long long` compared to `int`?",
            options: [
              "`long long` takes less memory",
              "`long long` always stores only positive numbers",
              "`long long` has a wider range than `int`",
              "`long long` is deprecated in modern C++"
            ],
            correctAnswer: 2,
            explanation: "`long long` uses at least 64 bits, allowing much larger integer values than `int` which is typically 32 bits.",
            codeSnippet: `long long big = 9223372036854775807;`,
            codeLanguage: "cpp"
          },
          {
            id: 21,
            question: "Which statement correctly initializes the largest possible value in an `unsigned long long`?",
            options: [
              "unsigned long long x = -1;",
              "unsigned long long x = 18446744073709551615ULL;",
              "unsigned long long x = 9223372036854775807;",
              "unsigned long long x = 1e20;"
            ],
            correctAnswer: 1,
            explanation: "The max value for `unsigned long long` is `2^64 - 1`, which is `18446744073709551615`. The `ULL` suffix ensures it's treated as an unsigned long long.",
            codeSnippet: `unsigned long long x = 18446744073709551615ULL;`,
            codeLanguage: "cpp"
          },
          {
            id: 22,
            question: "What happens if you add 1 to an `unsigned short` containing 65535?",
            options: [
              "It wraps to 0",
              "It causes a compile-time error",
              "It becomes 65536",
              "It becomes undefined"
            ],
            correctAnswer: 0,
            explanation: "`unsigned short` has a max value of 65535. Adding 1 causes a wraparound back to 0 due to modulo arithmetic.",
            codeSnippet: `unsigned short x = 65535;
x++;
std::cout << x << "\\n"; // Outputs 0`,
            codeLanguage: "cpp"
          },
          {
            id: 23,
            question: "Which of the following declarations is most memory-efficient for storing values from 0 to 200?",
            options: [
              "int",
              "short",
              "unsigned short",
              "long long"
            ],
            correctAnswer: 2,
            explanation: "`unsigned short` uses 16 bits and supports values from 0 to 65,535 — more than enough to store 0 to 200 using minimal memory.",
            codeSnippet: `unsigned short score = 200;`,
            codeLanguage: "cpp"
          },
          {
            id: 24,
            question: "Which type is safest to use when you need to store very large positive numbers only?",
            options: [
              "long long",
              "unsigned int",
              "unsigned long long",
              "int"
            ],
            correctAnswer: 2,
            explanation: "`unsigned long long` gives the widest range of positive values among standard integer types (up to `2^64 - 1`).",
            codeSnippet: `unsigned long long id = 12345678901234567890ULL;`,
            codeLanguage: "cpp"
          },
          {
            id: 25,
            question: "What is the result of subtracting a larger `unsigned int` from a smaller one?",
            options: [
              "A negative number",
              "Zero",
              "Wraparound to a large positive number",
              "A compile error"
            ],
            correctAnswer: 2,
            explanation: "Unsigned integers can't represent negative numbers. Subtracting a larger number from a smaller one causes wraparound to a large positive value.",
            codeSnippet: `unsigned int a = 5;
unsigned int b = 10;
std::cout << a - b << "\\n"; // Outputs a large value`,
            codeLanguage: "cpp"
          },
          {
            id: 26,
            question: "Why might you prefer `int` over `unsigned int` for general-purpose arithmetic?",
            options: [
              "`int` is faster to compile",
              "`int` handles negative values and avoids subtle wraparound bugs",
              "`unsigned int` is deprecated",
              "`int` uses more memory"
            ],
            correctAnswer: 1,
            explanation: "While `unsigned int` gives more positive range, it can cause hard-to-detect bugs when negative values are accidentally assigned or subtracted. `int` behaves more predictably in many arithmetic contexts."
          },
          {
            id: 27,
            question: "Why will `secondmain()` and `thirdmain()` potentially result in undefined behavior even though they compile?",
            options: [
              "Because they don't use `std::cout`",
              "Because their names are not `main`",
              "Because they lack return statements but declare `int` as the return type",
              "Because they use both `cout` and `std::cout` inconsistently"
            ],
            correctAnswer: 2,
            explanation: "Both `secondmain()` and `thirdmain()` declare `int` as their return type but do not include return statements. In C++, any non-`main` function that returns `int` must explicitly return a value. Omitting it results in undefined behavior, even if it seems to run correctly.",
            codeSnippet: `int secondmain() {
    cout << "Hello New World!\\n";
    // No return statement — undefined behavior
}`,
            codeLanguage: "cpp"
          },
          {
            id: 28,
            question: "Why does the `main()` function work without a return statement?",
            options: [
              "Because it's the first function declared",
              "Because the compiler automatically adds `return 1;`",
              "Because the C++ standard allows `main()` to implicitly return 0",
              "Because `std::cout` handles return values internally"
            ],
            correctAnswer: 2,
            explanation: "Since C++11, the standard allows `main()` to implicitly return 0 if no return statement is provided. This only applies to `main()` — other `int` functions must still return a value.",
            codeSnippet: `int main() {
    std::cout << "Hello World!\\n";
    // Implicit return 0 is allowed here
}`,
            codeLanguage: "cpp"
          },
          {
            id: 29,
            question: "What does the line `std::cout << \"Hello World!\\n\";` do?",
            options: [
              "It writes text to a file",
              "It sends the string to the standard output stream",
              "It stores the string in a variable",
              "It takes user input"
            ],
            correctAnswer: 1,
            explanation: "`std::cout` is the standard output stream, and the `<<` operator sends the string into the stream to be printed on the console.",
            codeSnippet: `#include <iostream>
int main() {
    std::cout << "Hello World!\\n";
}`,
            codeLanguage: "cpp"
          },
          {
            id: 30,
            question: "What is the purpose of `using namespace std;` in this program?",
            options: [
              "It disables the need for `#include <iostream>`",
              "It lets you use standard library names like `cout` without prefixing `std::`",
              "It defines a new namespace called `std`",
              "It makes the program run faster"
            ],
            correctAnswer: 1,
            explanation: "`using namespace std;` brings all names from the `std` namespace into the current scope, so you can write `cout` instead of `std::cout`. This is purely syntactic convenience and has no effect on performance.",
            codeSnippet: `using namespace std;
int main() {
    cout << "Hello!";
}`,
            codeLanguage: "cpp"
          },
          {
            id: 31,
            question: "Why might someone prefer `std::endl` over `\\n` in output?",
            options: [
              "`std::endl` makes the output more readable",
              "`std::endl` adds a newline and flushes the stream",
              "`\\n` does not work in all compilers",
              "`std::endl` skips an extra line automatically"
            ],
            correctAnswer: 1,
            explanation: "`std::endl` inserts a newline and forces the output stream to flush, which can be helpful when immediate output is needed (e.g., before a crash or pause). `\\n` is a plain newline and does not flush the stream.",
            codeSnippet: `std::cout << "Hello" << std::endl; // newline + flush
std::cout << "World\\n";          // newline only`,
            codeLanguage: "cpp"
          },
          {
            id: 32,
            question: "Why does the following code cause a compilation error?",
            options: [
              "Because braces can't be used with floats",
              "Because 100.3 is a narrowing conversion not allowed with braced initialization",
              "Because braced initialization only works with constants",
              "Because the variable is declared after a const"
            ],
            correctAnswer: 1,
            explanation: "Braced initialization in C++ prevents narrowing conversions. Assigning a float to an int using `{}` triggers a compile-time error.",
            codeSnippet: `int nameOfVariable5{ 100.3 };`,
            codeLanguage: "cpp"
          },
          {
            id: 33,
            question: "Why does the following code compile without error, even though 100.3 is a float?",
            options: [
              "C++ automatically rounds all float values",
              "Assignment-style initialization allows implicit narrowing conversions",
              "The compiler assumes the float is intentional",
              "The value is cast to float at runtime"
            ],
            correctAnswer: 1,
            explanation: "Assignment-style initialization allows implicit conversion from float to int, which truncates the decimal part without a compile-time error.",
            codeSnippet: `int nameOfVariable4 = 100.3;`,
            codeLanguage: "cpp"
          },
          {
            id: 34,
            question: "Why does the following constant declaration work correctly?",
            options: [
              "Because constants can only be initialized with literals",
              "Because the compiler treats it as a global",
              "Because constants must be initialized where they're declared",
              "Because `const` variables are automatically static"
            ],
            correctAnswer: 2,
            explanation: "C++ requires `const` variables to be initialized at the time of declaration, which is correctly done here.",
            codeSnippet: `const int secondsPerMinute{ 60 };`,
            codeLanguage: "cpp"
          },
          {
            id: 35,
            question: "What is the value of `minutesPlayed` after the following code runs?",
            options: [
              "1",
              "0",
              "60",
              "100"
            ],
            correctAnswer: 0,
            explanation: "Integer division truncates the decimal. 100 / 60 equals 1 with the remainder discarded.",
            codeSnippet: `int totalSecondsPlayed = 100;
int minutesPlayed = totalSecondsPlayed / 60;`,
            codeLanguage: "cpp"
          },
          {
            id: 36,
            question: "What is the purpose of the following constant declarations?",
            options: [
              "To allow reuse while preventing reassignment",
              "To reduce memory usage",
              "To enforce compile-time evaluation",
              "To make all divisions faster"
            ],
            correctAnswer: 0,
            explanation: "`const` values like `secondsPerMinute` and `minutesPerHour` make the code easier to read, safer, and less error-prone by preventing accidental changes.",
            codeSnippet: `const int secondsPerMinute{ 60 };
const int minutesPerHour{ 60 };`,
            codeLanguage: "cpp"
          },
          {
            id: 37,
            question: "Why is using `const` for values like 60 seconds per minute a good practice?",
            options: [
              "It speeds up runtime",
              "It allows you to skip initialization",
              "It prevents modification and clarifies intent",
              "It changes value at runtime"
            ],
            correctAnswer: 2,
            explanation: "`const` is ideal for values that never change. It prevents reassignment and signals to others that the value is fixed."
          },
          {
            id: 38,
            question: "What happens when `totalSecondsPlayed` is initialized as shown?",
            options: [
              "It triggers a narrowing conversion",
              "It causes a runtime error",
              "It copies the value of another int",
              "It converts a string to int"
            ],
            correctAnswer: 2,
            explanation: "`nameOfVariable2` is an `int` initialized to 100, so assigning its value to another `int` is valid and safe.",
            codeSnippet: `int nameOfVariable2 = 100;
int totalSecondsPlayed = nameOfVariable2;`,
            codeLanguage: "cpp"
          },
          {
            id: 39,
            question: "What will `secondsPlayed` hold after the following code runs?",
            options: [
              "40",
              "1",
              "0", 
              "60"
            ],
            correctAnswer: 0,
            explanation: "`secondsPlayed` calculates the remainder: 100 % 60 = 40 seconds remaining after removing complete minutes.",
            codeSnippet: `int totalSecondsPlayed = 100;
const int secondsPerMinute = 60;
int secondsPlayed = totalSecondsPlayed % secondsPerMinute;`,
            codeLanguage: "cpp"
          },
          {
            id: 40,
            question: "Why might the following line break an autograder test?",
            options: [
              "It causes a runtime error",
              "It includes text not expected by the grader",
              "It uses the wrong escape sequence",
              "It prints a negative number"
            ],
            correctAnswer: 1,
            explanation: "Autograders usually expect exact output values. Including extra text like `Mins Played:` can cause mismatches.",
            codeSnippet: `std::cout << "Mins Played: " << minutesPlayed << "\\n";`,
            codeLanguage: "cpp"
          },
          {
            id: 41,
            question: "What is the main benefit of using braced initialization in C++?",
            options: [
              "It uses fewer characters",
              "It prevents narrowing conversions",
              "It supports older C syntax",
              "It initializes values at runtime"
            ],
            correctAnswer: 1,
            explanation: "Braced initialization is safer than assignment or constructor-style initialization because it prevents narrowing conversions, like from float to int.",
            codeSnippet: `int safeInit{ 100.3 }; // Error
int looseInit = 100.3; // OK, but silently truncates`,
            codeLanguage: "cpp"
          },
          {
            id: 42,
            question: "Which of the following is NOT a valid way to initialize an int in C++?",
            options: [
              "int x = 5;",
              "int x(5);",
              "int x{5};",
              "int x = {5.0};"
            ],
            correctAnswer: 3,
            explanation: "`int x = {5.0};` is invalid because the float literal creates a narrowing conversion, which is disallowed even when wrapped in braces."
          },
          {
            id: 43,
            question: "What is the problem with using an uninitialized variable like `nameOfVariable` in a calculation?",
            options: [
              "The compiler will substitute zero",
              "The program will crash",
              "It results in undefined behavior",
              "It converts the variable to float"
            ],
            correctAnswer: 2,
            explanation: "Using an uninitialized local variable leads to undefined behavior, which can cause unpredictable results or subtle bugs.",
            codeSnippet: `int nameOfVariable;
int result = nameOfVariable + 1; // undefined behavior`,
            codeLanguage: "cpp"
          },
          {
            id: 44,
            question: "Which variable is not initialized in the following code?",
            options: [
              "nameOfVariable",
              "nameOfVariable2", 
              "totalSecondsPlayed",
              "secondsPerMinute"
            ],
            correctAnswer: 0,
            explanation: "`nameOfVariable` is declared without assignment. In C++, local variables are not zero-initialized by default.",
            codeSnippet: `int nameOfVariable;
int nameOfVariable2 = 100;
int totalSecondsPlayed = nameOfVariable2;`,
            codeLanguage: "cpp"
          },
          {
            id: 45,
            question: "Which of the following statements is true about narrowing conversions in C++?",
            options: [
              "They are always allowed with braced initialization",
              "They are silently allowed in braced initialization", 
              "They are disallowed with braced initialization but allowed with assignment",
              "They never occur in C++"
            ],
            correctAnswer: 2,
            explanation: "Braced initialization disallows narrowing conversions (e.g., float to int), but assignment initialization allows them silently."
          }
        ]
      }
    ]
};