export const data = {
    language: "javascript",
    questions: [
        {
            id: 1,
            question: "Explain the difference between 'undefined' and 'undeclared' variables in JavaScript.",
            answer: "'Undefined' variables are those that have been declared but not assigned a value or have been explicitly set to undefined. 'Undeclared' variables, on the other hand, are those that have not been declared at all and result in a ReferenceError when accessed.",
        },
        {
            id: 2,
            question: "What is a closure in JavaScript, and how does it work?",
            answer: "A closure is a function that has access to its outer function's scope even after the outer function has finished executing. Closures are created when a function is defined within another function and has access to the outer function's variables.",
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
            question: "Explain the concept of prototypal inheritance in JavaScript.",
            answer: "Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects (prototypes). Each object has a prototype chain that links it to a series of prototypes, allowing it to access properties and methods defined on those prototypes.",
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
            question: "Explain the concept of the prototype chain in JavaScript inheritance.",
            answer: "The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects (prototypes). Each object has a prototype property that links it to its prototype object, forming a chain of prototypes.",
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
            question: "What is the purpose of the 'Object.create()' method in JavaScript?",
            answer: "The 'Object.create()' method in JavaScript is used to create a new object with the specified prototype object and properties. It provides a way to create objects with specific prototype chains and inheritance hierarchies.",
        },
        {
            id: 27,
            question: "Explain the concept of the event loop in JavaScript.",
            answer: "The event loop is a fundamental concept in JavaScript that handles asynchronous operations by continuously checking the call stack and message queue. It ensures that asynchronous tasks are executed in the order they were queued and that the main thread remains responsive.",
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
            question: "What is the purpose of the 'Object.freeze()' method in JavaScript?",
            answer: "The 'Object.freeze()' method in JavaScript is used to freeze an object, preventing new properties from being added, existing properties from being removed or modified, and the prototype from being modified. It provides a way to create immutable objects.",
        },
        {
            id: 31,
            question: "Explain the concept of currying in JavaScript.",
            answer: "Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It enables partial application of functions and enhances code reusability.",
        },
        {
            id: 32,
            question: "What are the differences between 'var', 'let', and 'const' in JavaScript?",
            answer: "'var' is function-scoped and can be redeclared and reassigned. 'let' and 'const' are block-scoped and cannot be redeclared within the same scope. 'let' variables can be reassigned, while 'const' variables are read-only and cannot be reassigned once declared.",
        },
        {
            id: 33,
            question: "Explain the concept of promises in JavaScript.",
            answer: "Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation. They provide a way to handle asynchronous code more elegantly using chained then() methods to handle success and catch() method to handle errors.",
        },
        {
            id: 34,
            question: "What is object destructuring in JavaScript, and how does it work?",
            answer: "Object destructuring in JavaScript allows developers to extract multiple properties from an object and assign them to variables in a single statement. It provides a convenient way to access and work with object properties.",
        },
        {
            id: 35,
            question: "Explain the concept of 'this' keyword in JavaScript.",
            answer: "The 'this' keyword in JavaScript refers to the object that the function is bound to at runtime. Its value depends on how the function is called. In a global context, 'this' refers to the global object (e.g., window in a browser). In a method, 'this' refers to the object that owns the method. In a constructor, 'this' refers to the newly created object.",
        },
        {
            id: 36,
            question: "What is the difference between '===' and '==' in JavaScript?",
            answer: "'===' is the strict equality operator in JavaScript, which checks for both value and type equality without type conversion. '==' is the equality operator, which performs type coercion if the operands are of different types before comparing their values.",
        },
        {
            id: 37,
            question: "Explain the concept of callback functions in JavaScript.",
            answer: "Callback functions in JavaScript are functions that are passed as arguments to other functions and executed after a specific event or action occurs. They are commonly used in asynchronous programming to handle the result of an asynchronous operation.",
        },
        {
            id: 38,
            question: "What are closures in JavaScript, and how do they work?",
            answer: "Closures in JavaScript are functions that have access to their outer function's scope even after the outer function has finished executing. They are created when a function is defined within another function and have access to the outer function's variables.",
        },
        {
            id: 39,
            question: "Explain the concept of arrow functions in JavaScript.",
            answer: "Arrow functions in JavaScript are a concise way to write anonymous functions. They have a shorter syntax compared to regular functions and do not have their own 'this' context, lexically inheriting 'this' from the surrounding code.",
        },
        {
            id: 40,
            question: "What is the purpose of 'use strict' in JavaScript?",
            answer: "'use strict' is a directive introduced in ECMAScript 5 that enables strict mode in JavaScript, which imposes stricter parsing and error handling rules. It helps catch common coding errors and prohibits certain unsafe or deprecated features, promoting safer and more optimized code.",
        },
        {
            id: 41,
            question: "Explain the concept of event bubbling and capturing in JavaScript.",
            answer: "Event bubbling and capturing are two phases of event propagation in the DOM. During the bubbling phase, events are first captured at the target element and then bubbled up through its ancestors. During the capturing phase, events are captured at the outermost ancestor and then propagated down to the target element.",
        },
        {
            id: 42,
            question: "What are the different ways to create objects in JavaScript?",
            answer: "Objects in JavaScript can be created using object literals, constructor functions with the 'new' keyword, Object.create() method, and ES6 class syntax.",
        },
        {
            id: 43,
            question: "Explain the concept of prototypal inheritance in JavaScript.",
            answer: "Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects (prototypes). Each object has a prototype property that links it to a series of prototypes, allowing it to access properties and methods defined on those prototypes.",
        },
        {
            id: 44,
            question: "What are modules in JavaScript, and how do they work?",
            answer: "Modules in JavaScript are reusable pieces of code that can be imported and exported between different files or modules. They help organize code, promote encapsulation, and facilitate code reuse and maintenance.",
        },
        {
            id: 45,
            question: "Explain the concept of higher-order functions in JavaScript.",
            answer: "Higher-order functions in JavaScript are functions that can accept other functions as arguments or return functions as results. They enable functional programming paradigms such as map, filter, reduce, and provide flexibility and composability in code.",
        },
        {
            id: 46,
            question: "What is the purpose of the 'Object.keys()' method in JavaScript?",
            answer: "The 'Object.keys()' method in JavaScript is used to return an array of a given object's own enumerable property names. It provides a convenient way to iterate over an object's properties.",
        },
        {
            id: 47,
            question: "Explain the concept of the event loop in JavaScript.",
            answer: "The event loop is a fundamental concept in JavaScript that handles asynchronous operations by continuously checking the call stack and message queue. It ensures that asynchronous tasks are executed in the order they were queued and that the main thread remains responsive.",
        },
        {
            id: 48,
            question: "What are generators in JavaScript, and how do they work?",
            answer: "Generators in JavaScript are special functions that can be paused and resumed, allowing for more flexible control flow and asynchronous programming. They are defined using the function* syntax and yield keyword.",
        },
        {
            id: 49,
            question: "Explain the concept of the 'async/await' syntax in JavaScript.",
            answer: "The 'async/await' syntax in JavaScript provides a more readable and concise way to work with asynchronous code. It allows functions to pause execution until a promise is resolved, using the 'async' keyword to define asynchronous functions and 'await' keyword to pause execution.",
        },
        {
            id: 50,
            question: "What is the purpose of the 'Object.freeze()' method in JavaScript?",
            answer: "The 'Object.freeze()' method in JavaScript is used to freeze an object, preventing new properties from being added, existing properties from being removed or modified, and the prototype from being modified. It provides a way to create immutable objects.",
        },
        {
            id: 51,
            question: "Explain the concept of currying in JavaScript.",
            answer: "Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It enables partial application of functions and enhances code reusability.",
        },
        {
            id: 52,
            question: "What are the differences between 'var', 'let', and 'const' in JavaScript?",
            answer: "'var' is function-scoped and can be redeclared and reassigned. 'let' and 'const' are block-scoped and cannot be redeclared within the same scope. 'let' variables can be reassigned, while 'const' variables are read-only and cannot be reassigned once declared.",
        },
        {
            id: 53,
            question: "Explain the concept of promises in JavaScript.",
            answer: "Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation. They provide a way to handle asynchronous code more elegantly using chained then() methods to handle success and catch() method to handle errors.",
        },
        {
            id: 54,
            question: "What is object destructuring in JavaScript, and how does it work?",
            answer: "Object destructuring in JavaScript allows developers to extract multiple properties from an object and assign them to variables in a single statement. It provides a convenient way to access and work with object properties.",
        },
        {
            id: 55,
            question: "Explain the concept of 'this' keyword in JavaScript.",
            answer: "The 'this' keyword in JavaScript refers to the object that the function is bound to at runtime. Its value depends on how the function is called. In a global context, 'this' refers to the global object (e.g., window in a browser). In a method, 'this' refers to the object that owns the method. In a constructor, 'this' refers to the newly created object.",
        },
        {
            id: 56,
            question: "What is the difference between '===' and '==' in JavaScript?",
            answer: "'===' is the strict equality operator in JavaScript, which checks for both value and type equality without type conversion. '==' is the equality operator, which performs type coercion if the operands are of different types before comparing their values.",
        },
        {
            id: 57,
            question: "Explain the concept of callback functions in JavaScript.",
            answer: "Callback functions in JavaScript are functions that are passed as arguments to other functions and executed after a specific event or action occurs. They are commonly used in asynchronous programming to handle the result of an asynchronous operation.",
        },
        {
            id: 58,
            question: "What are closures in JavaScript, and how do they work?",
            answer: "Closures in JavaScript are functions that have access to their outer function's scope even after the outer function has finished executing. They are created when a function is defined within another function and have access to the outer function's variables.",
        },
        {
            id: 59,
            question: "Explain the concept of arrow functions in JavaScript.",
            answer: "Arrow functions in JavaScript are a concise way to write anonymous functions. They have a shorter syntax compared to regular functions and do not have their own 'this' context, lexically inheriting 'this' from the surrounding code.",
        },
        {
            id: 60,
            question: "What is the purpose of 'use strict' in JavaScript?",
            answer: "'use strict' is a directive introduced in ECMAScript 5 that enables strict mode in JavaScript, which imposes stricter parsing and error handling rules. It helps catch common coding errors and prohibits certain unsafe or deprecated features, promoting safer and more optimized code.",
        },
        {
            id: 61,
            question: "Explain the concept of event bubbling and capturing in JavaScript.",
            answer: "Event bubbling and capturing are two phases of event propagation in the DOM. During the bubbling phase, events are first captured at the target element and then bubbled up through its ancestors. During the capturing phase, events are captured at the outermost ancestor and then propagated down to the target element.",
        },
        {
            id: 62,
            question: "What are the different ways to create objects in JavaScript?",
            answer: "Objects in JavaScript can be created using object literals, constructor functions with the 'new' keyword, Object.create() method, and ES6 class syntax.",
        },
        {
            id: 63,
            question: "Explain the concept of prototypal inheritance in JavaScript.",
            answer: "Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects (prototypes). Each object has a prototype property that links it to a series of prototypes, allowing it to access properties and methods defined on those prototypes.",
        },
        {
            id: 64,
            question: "What are modules in JavaScript, and how do they work?",
            answer: "Modules in JavaScript are reusable pieces of code that can be imported and exported between different files or modules. They help organize code, promote encapsulation, and facilitate code reuse and maintenance.",
        },
        {
            id: 65,
            question: "Explain the concept of higher-order functions in JavaScript.",
            answer: "Higher-order functions in JavaScript are functions that can accept other functions as arguments or return functions as results. They enable functional programming paradigms such as map, filter, reduce, and provide flexibility and composability in code.",
        },
        {
            id: 66,
            question: "What is the purpose of the 'Object.keys()' method in JavaScript?",
            answer: "The 'Object.keys()' method in JavaScript is used to return an array of a given object's own enumerable property names. It provides a convenient way to iterate over an object's properties.",
        },
        {
            id: 67,
            question: "Explain the concept of the event loop in JavaScript.",
            answer: "The event loop is a fundamental concept in JavaScript that handles asynchronous operations by continuously checking the call stack and message queue. It ensures that asynchronous tasks are executed in the order they were queued and that the main thread remains responsive.",
        },
        {
            id: 68,
            question: "What are generators in JavaScript, and how do they work?",
            answer: "Generators in JavaScript are special functions that can be paused and resumed, allowing for more flexible control flow and asynchronous programming. They are defined using the function* syntax and yield keyword.",
        },
        {
            id: 69,
            question: "Explain the concept of the 'async/await' syntax in JavaScript.",
            answer: "The 'async/await' syntax in JavaScript provides a more readable and concise way to work with asynchronous code. It allows functions to pause execution until a promise is resolved, using the 'async' keyword to define asynchronous functions and 'await' keyword to pause execution.",
        },
        {
            id: 70,
            question: "What is the purpose of the 'Object.freeze()' method in JavaScript?",
            answer: "The 'Object.freeze()' method in JavaScript is used to freeze an object, preventing new properties from being added, existing properties from being removed or modified, and the prototype from being modified. It provides a way to create immutable objects.",
        },
        {
            id: 71,
            question: "Explain the concept of currying in JavaScript.",
            answer: "Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It enables partial application of functions and enhances code reusability.",
        },
        {
            id: 72,
            question: "What are the differences between 'var', 'let', and 'const' in JavaScript?",
            answer: "'var' is function-scoped and can be redeclared and reassigned. 'let' and 'const' are block-scoped and cannot be redeclared within the same scope. 'let' variables can be reassigned, while 'const' variables are read-only and cannot be reassigned once declared.",
        },
        {
            id: 73,
            question: "Explain the concept of promises in JavaScript.",
            answer: "Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation. They provide a way to handle asynchronous code more elegantly using chained then() methods to handle success and catch() method to handle errors.",
        },
        {
            id: 74,
            question: "What is object destructuring in JavaScript, and how does it work?",
            answer: "Object destructuring in JavaScript allows developers to extract multiple properties from an object and assign them to variables in a single statement. It provides a convenient way to access and work with object properties.",
        },
        {
            id: 75,
            question: "Explain the concept of 'this' keyword in JavaScript.",
            answer: "The 'this' keyword in JavaScript refers to the object that the function is bound to at runtime. Its value depends on how the function is called. In a global context, 'this' refers to the global object (e.g., window in a browser). In a method, 'this' refers to the object that owns the method. In a constructor, 'this' refers to the newly created object.",
        },
        {
            id: 76,
            question: "What is the difference between '===' and '==' in JavaScript?",
            answer: "'===' is the strict equality operator in JavaScript, which checks for both value and type equality without type conversion. '==' is the equality operator, which performs type coercion if the operands are of different types before comparing their values.",
        },
        {
            id: 77,
            question: "Explain the concept of callback functions in JavaScript.",
            answer: "Callback functions in JavaScript are functions that are passed as arguments to other functions and executed after a specific event or action occurs. They are commonly used in asynchronous programming to handle the result of an asynchronous operation.",
        },
        {
            id: 78,
            question: "What are closures in JavaScript, and how do they work?",
            answer: "Closures in JavaScript are functions that have access to their outer function's scope even after the outer function has finished executing. They are created when a function is defined within another function and have access to the outer function's variables.",
        },
        {
            id: 79,
            question: "Explain the concept of arrow functions in JavaScript.",
            answer: "Arrow functions in JavaScript are a concise way to write anonymous functions. They have a shorter syntax compared to regular functions and do not have their own 'this' context, lexically inheriting 'this' from the surrounding code.",
        },
        {
            id: 80,
            question: "What is the purpose of 'use strict' in JavaScript?",
            answer: "'use strict' is a directive introduced in ECMAScript 5 that enables strict mode in JavaScript, which imposes stricter parsing and error handling rules. It helps catch common coding errors and prohibits certain unsafe or deprecated features, promoting safer and more optimized code.",
        },
        {
            id: 81,
            question: "Explain the concept of event bubbling and capturing in JavaScript.",
            answer: "Event bubbling and capturing are two phases of event propagation in the DOM. During the bubbling phase, events are first captured at the target element and then bubbled up through its ancestors. During the capturing phase, events are captured at the outermost ancestor and then propagated down to the target element.",
        },
        {
            id: 82,
            question: "What are the different ways to create objects in JavaScript?",
            answer: "Objects in JavaScript can be created using object literals, constructor functions with the 'new' keyword, Object.create() method, and ES6 class syntax.",
        },
        {
            id: 83,
            question: "Explain the concept of prototypal inheritance in JavaScript.",
            answer: "Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects (prototypes). Each object has a prototype property that links it to a series of prototypes, allowing it to access properties and methods defined on those prototypes.",
        },
        {
            id: 84,
            question: "What are modules in JavaScript, and how do they work?",
            answer: "Modules in JavaScript are reusable pieces of code that can be imported and exported between different files or modules. They help organize code, promote encapsulation, and facilitate code reuse and maintenance.",
        },
        {
            id: 85,
            question: "Explain the concept of higher-order functions in JavaScript.",
            answer: "Higher-order functions in JavaScript are functions that can accept other functions as arguments or return functions as results. They enable functional programming paradigms such as map, filter, reduce, and provide flexibility and composability in code.",
        },
        {
            id: 86,
            question: "What is the purpose of the 'Object.keys()' method in JavaScript?",
            answer: "The 'Object.keys()' method in JavaScript is used to return an array of a given object's own enumerable property names. It provides a convenient way to iterate over an object's properties.",
        },
        {
            id: 87,
            question: "Explain the concept of the event loop in JavaScript.",
            answer: "The event loop is a fundamental concept in JavaScript that handles asynchronous operations by continuously checking the call stack and message queue. It ensures that asynchronous tasks are executed in the order they were queued and that the main thread remains responsive.",
        },
        {
            id: 88,
            question: "What are generators in JavaScript, and how do they work?",
            answer: "Generators in JavaScript are special functions that can be paused and resumed, allowing for more flexible control flow and asynchronous programming. They are defined using the function* syntax and yield keyword.",
        },
        {
            id: 89,
            question: "Explain the concept of the 'async/await' syntax in JavaScript.",
            answer: "The 'async/await' syntax in JavaScript provides a more readable and concise way to work with asynchronous code. It allows functions to pause execution until a promise is resolved, using the 'async' keyword to define asynchronous functions and 'await' keyword to pause execution.",
        },
        {
            id: 90,
            question: "What is the purpose of the 'Object.freeze()' method in JavaScript?",
            answer: "The 'Object.freeze()' method in JavaScript is used to freeze an object, preventing new properties from being added, existing properties from being removed or modified, and the prototype from being modified. It provides a way to create immutable objects.",
        },
        {
            id: 91,
            question: "Explain the concept of currying in JavaScript.",
            answer: "Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. It enables partial application of functions and enhances code reusability.",
        },
        {
            id: 92,
            question: "What are the differences between 'var', 'let', and 'const' in JavaScript?",
            answer: "'var' is function-scoped and can be redeclared and reassigned. 'let' and 'const' are block-scoped and cannot be redeclared within the same scope. 'let' variables can be reassigned, while 'const' variables are read-only and cannot be reassigned once declared.",
        },
        {
            id: 93,
            question: "Explain the concept of promises in JavaScript.",
            answer: "Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation. They provide a way to handle asynchronous code more elegantly using chained then() methods to handle success and catch() method to handle errors.",
        },
        {
            id: 94,
            question: "What is object destructuring in JavaScript, and how does it work?",
            answer: "Object destructuring in JavaScript allows developers to extract multiple properties from an object and assign them to variables in a single statement. It provides a convenient way to access and work with object properties.",
        },
        {
            id: 95,
            question: "Explain the concept of 'this' keyword in JavaScript.",
            answer: "The 'this' keyword in JavaScript refers to the object that the function is bound to at runtime. Its value depends on how the function is called. In a global context, 'this' refers to the global object (e.g., window in a browser). In a method, 'this' refers to the object that owns the method. In a constructor, 'this' refers to the newly created object.",
        },
        {
            id: 96,
            question: "What is the difference between '===' and '==' in JavaScript?",
            answer: "'===' is the strict equality operator in JavaScript, which checks for both value and type equality without type conversion. '==' is the equality operator, which performs type coercion if the operands are of different types before comparing their values.",
        },
        {
            id: 97,
            question: "Explain the concept of callback functions in JavaScript.",
            answer: "Callback functions in JavaScript are functions that are passed as arguments to other functions and executed after a specific event or action occurs. They are commonly used in asynchronous programming to handle the result of an asynchronous operation.",
        },
        {
            id: 98,
            question: "What are closures in JavaScript, and how do they work?",
            answer: "Closures in JavaScript are functions that have access to their outer function's scope even after the outer function has finished executing. They are created when a function is defined within another function and have access to the outer function's variables.",
        },
        {
            id: 99,
            question: "Explain the concept of arrow functions in JavaScript.",
            answer: "Arrow functions in JavaScript are a concise way to write anonymous functions. They have a shorter syntax compared to regular functions and do not have their own 'this' context, lexically inheriting 'this' from the surrounding code.",
        },
        {
            id: 100,
            question: "What is the purpose of 'use strict' in JavaScript?",
            answer: "'use strict' is a directive introduced in ECMAScript 5 that enables strict mode in JavaScript, which imposes stricter parsing and error handling rules. It helps catch common coding errors and prohibits certain unsafe or deprecated features, promoting safer and more optimized code.",
        },
    ],
}
