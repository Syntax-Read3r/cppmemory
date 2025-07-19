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
      },
      {
        id: "chapter-2-bonus",
        title: "Functions and Files - Bonus", 
        description: "Modern C++ function features and build practices",
        chapter: "Chapter 2",
        sections: ["Bonus: Modern C++", "Build Systems", "Industry Standards"],
        questions: [
          {
            id: 16,
            question: "What is a trailing return type in C++ and when would you use it?",
            options: [
              "A deprecated syntax from old C++",
              "A way to specify return type after the parameter list using 'auto' and '->'",
              "Only used with template functions",
              "A compiler optimization technique"
            ],
            correctAnswer: 1,
            explanation: "Trailing return type syntax (auto func() -> ReturnType) is useful when the return type depends on template parameters or is complex. It's especially helpful with lambdas and template metaprogramming.",
            codeSnippet: `#include <vector>

// Traditional syntax - can be difficult with templates
template<typename T, typename U>
decltype(T{} + U{}) add_traditional(T a, U b) {
    return a + b;
}

// Trailing return type - cleaner and more readable
template<typename T, typename U>
auto add_modern(T a, U b) -> decltype(a + b) {
    return a + b;
}

// C++14 and later - even simpler
template<typename T, typename U>
auto add_simple(T a, U b) {
    return a + b;  // Return type deduced
}`,
            codeLanguage: "cpp"
          },
          {
            id: 17,
            question: "What is the difference between a translation unit and a source file?",
            options: [
              "They are exactly the same thing",
              "A translation unit is a source file after preprocessing (includes expanded)",
              "Translation units only exist at runtime",
              "Source files are binary, translation units are text"
            ],
            correctAnswer: 1,
            explanation: "A translation unit is what the compiler sees after the preprocessor has processed a source file - all #include directives have been expanded and all macros have been replaced.",
            codeSnippet: `// main.cpp (source file)
#include <iostream>  // This gets expanded
#include "helper.h"  // This gets expanded

int main() {
    return 0;
}

// After preprocessing, the translation unit contains:
// - All content from <iostream>
// - All content from "helper.h" 
// - The main() function
// This entire expanded content is one translation unit`,
            codeLanguage: "cpp"
          },
          {
            id: 18,
            question: "What is the purpose of constexpr functions in modern C++?",
            options: [
              "To make functions run faster at runtime",
              "To enable compile-time evaluation when possible",
              "To prevent function inlining",
              "To make functions thread-safe"
            ],
            correctAnswer: 1,
            explanation: "constexpr functions can be evaluated at compile-time if given constant expressions as arguments, enabling compile-time computations and potentially better performance.",
            codeSnippet: `constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

int main() {
    // Computed at compile-time
    constexpr int result = factorial(5);  // 120
    
    // Can also be called at runtime
    int input;
    std::cin >> input;
    int runtime_result = factorial(input);
    
    return 0;
}`,
            codeLanguage: "cpp"
          },
          {
            id: 19,
            question: "Which build system is most commonly used for modern C++ projects?",
            options: [
              "Make only",
              "CMake",
              "Visual Studio solutions only",
              "Ninja only"
            ],
            correctAnswer: 1,
            explanation: "CMake is the de facto standard for cross-platform C++ build configuration. It generates native build files for various systems (Make, Ninja, Visual Studio, Xcode, etc.).",
            codeSnippet: `# CMakeLists.txt example
cmake_minimum_required(VERSION 3.20)
project(MyProject VERSION 1.0)

# Set C++ standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Create executable
add_executable(myapp 
    src/main.cpp
    src/helper.cpp
)

# Include directories
target_include_directories(myapp PRIVATE include)

# Link libraries
find_package(Threads REQUIRED)
target_link_libraries(myapp PRIVATE Threads::Threads)`,
            codeLanguage: "cmake"
          },
          {
            id: 20,
            question: "What is function overload resolution and why can it be tricky?",
            options: [
              "It's how the compiler chooses which overloaded function to call",
              "It's a runtime performance optimization",
              "It's only used with virtual functions",
              "It's a deprecated C++ feature"
            ],
            correctAnswer: 0,
            explanation: "Overload resolution is the compiler's process of selecting the best matching function from multiple overloads. It can be complex due to implicit conversions, template argument deduction, and const-correctness rules.",
            codeSnippet: `#include <iostream>

void print(int x) { std::cout << "int: " << x << std::endl; }
void print(double x) { std::cout << "double: " << x << std::endl; }
void print(const std::string& x) { std::cout << "string: " << x << std::endl; }

int main() {
    print(42);        // Calls print(int)
    print(3.14);      // Calls print(double)
    print("hello");   // Calls print(const std::string&)
    
    // Ambiguous cases can cause compilation errors:
    // print(42.0f);  // float - could convert to int or double
    
    return 0;
}`,
            codeLanguage: "cpp"
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