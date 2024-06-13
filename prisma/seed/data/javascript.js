export const data = {
    language: "javascript",
    questions: [
        {
            id: 1,
            question: "What is JavaScript?",
            answer: "JavaScript is a high-level, interpreted programming language primarily used for creating interactive webpages.",
        },
        {
            id: 2,
            question: "What are the data types in JavaScript?",
            answer: "JavaScript has six primitive data types: string, number, boolean, null, undefined, and symbol, along with the object type.",
        },

        {
            id: 3,
            question: "Explain the concept of hoisting in JavaScript.",
            answer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that variables and functions can be used before they are declared.",
        },
        {
            id: 4,
            question: "What is the 'this' keyword in JavaScript, and how does it behave?",
            answer: "The 'this' keyword in JavaScript refers to the object that the function is bound to at runtime. Its value depends on how the function is called. In a global context, 'this' refers to the global object (e.g., window in a browser). In a method, 'this' refers to the object that owns the method. In a constructor, 'this' refers to the newly created object.",
        },
        {
            id: 5,
            question: "Explain the difference between '===' and '==' in JavaScript.",
            answer: "'===' is the strict equality operator in JavaScript, which checks for both value and type equality without type conversion. '==' is the equality operator, which performs type coercion if the operands are of different types before comparing their values.",
        },
        {
            id: 6,
            question: "What is event delegation in JavaScript, and how does it work?",
            answer: "Event delegation is a JavaScript technique where a single event listener is attached to a parent element to listen for events that occur on its child elements. This allows for more efficient event handling, especially for dynamically generated content.",
        },
        {
            id: 7,
            question: "What is a closure in JavaScript, and how does it work?",
            answer: "A closure is a function that has access to its outer function's scope even after the outer function has finished executing. Closures are created when a function is defined within another function and has access to the outer function's variables.",
        },
        {
            id: 8,
            question: "What are promises in JavaScript, and how do they work?",
            answer: "Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation. They provide a way to handle asynchronous code more elegantly using chained then() methods to handle success and catch() method to handle errors.",
        },
        {
            id: 9,
            question: "Explain the concept of event bubbling and capturing in JavaScript.",
            answer: "Event bubbling and capturing are two phases of event propagation in the DOM. During the bubbling phase, events are first captured at the target element and then bubbled up through its ancestors. During the capturing phase, events are captured at the outermost ancestor and then propagated down to the target element.",
        },
        {
            id: 10,
            question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
            answer: "'let' and 'const' are block-scoped variables introduced in ES6, while 'var' is function-scoped. 'let' variables can be reassigned, while 'const' variables are read-only and cannot be reassigned once declared.",
        },
        {
            id: 11,
            question: "Explain the concept of asynchronous programming in JavaScript.",
            answer: "Asynchronous programming in JavaScript allows multiple operations to be performed concurrently without blocking the execution of the program. This is achieved using callbacks, promises, async/await, and event-driven programming.",
        },
        {
            id: 12,
            question: "What are arrow functions in JavaScript, and how do they differ from regular functions?",
            answer: "Arrow functions are a concise way to write anonymous functions in JavaScript. They have a shorter syntax compared to regular functions and do not have their own 'this' context, lexically inheriting 'this' from the surrounding code.",
        },
        {
            id: 13,
            question: "Explain the concept of event loop in JavaScript.",
            answer: "The event loop is a fundamental concept in JavaScript that handles asynchronous operations by continuously checking the call stack and message queue. It ensures that asynchronous tasks are executed in the order they were queued and that the main thread remains responsive.",
        },
        {
            id: 14,
            question: "What is the purpose of the 'use strict' directive in JavaScript?",
            answer: "The 'use strict' directive enables strict mode in JavaScript, which imposes stricter parsing and error handling rules. It helps catch common coding errors and prohibits certain unsafe or deprecated features, promoting safer and more optimized code.",
        },
        {
            id: 15,
            question: "Explain the difference between 'map()' and 'forEach()' methods in JavaScript.",
            answer: "Both 'map()' and 'forEach()' are array methods used to iterate over arrays and execute a function for each element. The main difference is that 'map()' returns a new array containing the results of applying the function to each element, while 'forEach()' does not return anything.",
        },
        {
            id: 16,
            question: "What are the different ways to create objects in JavaScript?",
            answer: "Objects in JavaScript can be created using object literals, the 'new' keyword with constructor functions, object.create() method, and ES6 class syntax.",
        },
        {
            id: 17,
            question: "Explain the concept of rest parameters in JavaScript.",
            answer: "Rest parameters in JavaScript allow functions to accept an indefinite number of arguments as an array. They are denoted by the '...' syntax followed by the parameter name in the function definition.",
        },
        {
            id: 18,
            question: "What is the purpose of the 'bind()' method in JavaScript?",
            answer: "The 'bind()' method in JavaScript is used to create a new function that, when called, has its 'this' keyword set to a specified value. It is commonly used to bind methods to their object contexts or to create functions with pre-defined arguments.",
        },
        {
            id: 19,
            question: "Explain the concept of object destructuring in JavaScript.",
            answer: "Object destructuring in JavaScript allows developers to extract multiple properties from an object and assign them to variables in a single statement. It provides a convenient way to access and work with object properties.",
        },
        {
            id: 20,
            question: "What are modules in JavaScript, and how do they work?",
            answer: "Modules in JavaScript are reusable pieces of code that can be imported and exported between different files or modules. They help organize code, promote encapsulation, and facilitate code reuse and maintenance.",
        },
        {
            id: 21,
            question: "What is the purpose of the 'Object.freeze()' method in JavaScript?",
            answer: "The 'Object.freeze()' method in JavaScript is used to freeze an object, preventing new properties from being added, existing properties from being removed or modified, and the prototype from being modified. It provides a way to create immutable objects.",
        },
        {
            id: 22,
            question: "What is the purpose of the 'typeof' operator in JavaScript?",
            answer: "The 'typeof' operator in JavaScript is used to determine the data type of a variable or expression. It returns a string indicating the type of the operand, such as 'number', 'string', 'object', 'function', 'undefined', or 'boolean'.",
        },
        {
            id: 23,
            question: "Explain the difference between 'call()', 'apply()', and 'bind()' methods in JavaScript.",
            answer: "'call()', 'apply()', and 'bind()' are methods used to manipulate the 'this' context of functions in JavaScript. 'call()' and 'apply()' invoke the function immediately, while 'bind()' returns a new function with the specified 'this' value, allowing it to be invoked later.",
        },
        {
            id: 24,
            question: "What is the purpose of the 'Object.keys()' method in JavaScript?",
            answer: "The 'Object.keys()' method in JavaScript is used to return an array of a given object's own enumerable property names. It provides a convenient way to iterate over an object's properties.",
        },
        {
            id: 25,
            question: "Explain the concept of higher-order functions in JavaScript.",
            answer: "Higher-order functions in JavaScript are functions that can accept other functions as arguments or return functions as results. They enable functional programming paradigms such as map, filter, reduce, and provide flexibility and composability in code.",
        },
        {
            id: 26,
            question: "Explain the concept of callback functions in JavaScript.",
            answer: "Callback functions in JavaScript are functions that are passed as arguments to other functions and executed after a specific event or action occurs. They are commonly used in asynchronous programming to handle the result of an asynchronous operation.",
        },
        {
            id: 27,
            question: "Explain the concept of currying in JavaScript.",
            answer: "Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It enables partial application of functions and enhances code reusability.",
        },
        {
            id: 28,
            question: "What are generators in JavaScript, and how do they work?",
            answer: "Generators in JavaScript are special functions that can be paused and resumed, allowing for more flexible control flow and asynchronous programming. They are defined using the function* syntax and yield keyword.",
        },
        {
            id: 29,
            question: "Explain the concept of the 'async/await' syntax in JavaScript.",
            answer: "The 'async/await' syntax in JavaScript provides a more readable and concise way to work with asynchronous code. It allows functions to pause execution until a promise is resolved, using the 'async' keyword to define asynchronous functions and 'await' keyword to pause execution.",
        },
        {
            id: 30,
            question: "Explain the concept of prototypal inheritance in JavaScript.",
            answer: "Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects (prototypes). Each object has a prototype chain that links it to a series of prototypes, allowing it to access properties and methods defined on those prototypes.",
        },
        {
            id: 31,
            question: "How do you handle errors in JavaScript?",
            answer: "Errors in JavaScript can be handled using try-catch blocks, where code that might throw an exception is placed in the try block and handled in the catch block.",
        },

        {
            id: 32,
            question: "Explain the concept of lexical scoping in JavaScript.",
            answer: "Lexical scoping means that the accessibility of variables is determined by their physical location within the source code, based on the placement of variable declarations within nested functions.",
        },
    ],
}
