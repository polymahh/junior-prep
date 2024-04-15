import { useState } from "react"

import PageInfo from "@/components/flashcards/page-info"
import QuestionCard from "@/components/flashcards/question-card"
import Questions from "@/components/flashcards/questions"
import { Icons } from "@/components/icons"

// language_questions is an array of interview questions related to javascript

const language_questions = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted programming language primarily used for creating interactive webpages.",
  },
  {
    id: 2,
    question: "What are the data types in JavaScript?",
    answer:
      "JavaScript has six primitive data types: string, number, boolean, null, undefined, and symbol, along with the object type.",
  },

  {
    id: 3,
    question: "How do you declare variables in JavaScript?",
    answer:
      "Variables in JavaScript can be declared using the var, let, or const keywords.",
  },

  {
    id: 4,
    question: "What is the difference between let, const, and var?",
    answer:
      "let and const are block-scoped, while var is function-scoped. let allows reassignment, const does not, and var is flexible but may lead to variable hoisting issues.",
  },

  {
    id: 5,
    question: "Explain hoisting in JavaScript.",
    answer:
      "Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their containing scope during compilation.",
  },

  {
    id: 6,
    question: "What are closures in JavaScript?",
    answer:
      "Closures are functions that retain access to variables from their containing lexical scope even after the scope has closed.",
  },

  {
    id: 7,
    question: "What is a callback function?",
    answer:
      "A callback function is a function passed as an argument to another function to be executed later, typically after an asynchronous operation completes.",
  },

  {
    id: 8,
    question: "Explain the concept of event bubbling in JavaScript.",
    answer:
      "Event bubbling is the process where an event triggered on a child element propagates up through its parent elements in the DOM hierarchy.",
  },

  {
    id: 9,
    question: "What are arrow functions in JavaScript?",
    answer:
      "Arrow functions are a concise way to write anonymous functions in JavaScript, providing a more concise syntax and lexical scoping of this.",
  },

  {
    id: 10,
    question: "What is this keyword in JavaScript?",
    answer:
      "In JavaScript, this refers to the context in which a function is executed. Its value is determined by how a function is called.",
  },

  // {
  //   id: 11,
  //   question: "How do you handle asynchronous operations in JavaScript?",
  //   answer:
  //     "Asynchronous operations in JavaScript can be handled using callbacks, promises, or async/await syntax.",
  // },

  // {
  //   id: 12,
  //   question: "What are promises in JavaScript?",
  //   answer:
  //     "Promises are objects representing the eventual completion or failure of an asynchronous operation, allowing for better handling of asynchronous code.",
  // },

  // {
  //   id: 13,
  //   question: "What is the purpose of async and await in JavaScript?",
  //   answer:
  //     "async functions enable asynchronous, promise-based behavior, while await is used to pause execution within an async function until a promise is settled.",
  // },

  // {
  //   id: 14,
  //   question:
  //     "Explain the difference between == and === operators in JavaScript.",
  //   answer:
  //     "== checks for equality after type coercion, while === checks for equality without type coercion, also known as strict equality.",
  // },

  // {
  //   id: 15,
  //   question: "What are the different ways to create objects in JavaScript?",
  //   answer:
  //     "Objects in JavaScript can be created using object literals, constructor functions, the Object.create() method, or class syntax (introduced in ES6).",
  // },

  // {
  //   id: 16,
  //   question: "What is the purpose of the bind() method in JavaScript?",
  //   answer:
  //     "The bind() method in JavaScript is used to create a new function with a specified this value and initial arguments provided to bind().",
  // },

  // {
  //   id: 17,
  //   question:
  //     "What is the purpose of the call() and apply() methods in JavaScript?",
  //   answer:
  //     "Both call() and apply() are methods used to invoke functions with a specified this value, but call() accepts arguments individually, while apply() accepts arguments as an array.",
  // },

  // {
  //   id: 18,
  //   question: "Explain the concept of prototypal inheritance in JavaScript.",
  //   answer:
  //     "In JavaScript, objects inherit properties and methods from a prototype object, forming a prototype chain.",
  // },

  // {
  //   id: 19,
  //   question:
  //     "What is the difference between null and undefined in JavaScript?",
  //   answer:
  //     "null represents the intentional absence of any object value, while undefined represents the lack of an assigned value.",
  // },

  // {
  //   id: 20,
  //   question: "How do you handle errors in JavaScript?",
  //   answer:
  //     "Errors in JavaScript can be handled using try-catch blocks, where code that might throw an exception is placed in the try block and handled in the catch block.",
  // },

  // {
  //   id: 21,
  //   question: "Explain the concept of lexical scoping in JavaScript.",
  //   answer:
  //     "Lexical scoping means that the accessibility of variables is determined by their physical location within the source code, based on the placement of variable declarations within nested functions.",
  // },

  // {
  //   id: 22,
  //   question: "What is a closure? Can you provide an example?",
  //   answer:
  //     "A closure is a function that retains access to variables from its containing lexical scope even after that scope has closed.",
  // },

  // {
  //   id: 23,
  //   question: "How does JavaScript handle asynchronous programming?",
  //   answer:
  //     "JavaScript uses asynchronous programming techniques such as callbacks, promises, and async/await to manage asynchronous operations without blocking the main execution thread.",
  // },

  // {
  //   id: 24,
  //   question: "What is the event loop in JavaScript?",
  //   answer:
  //     "The event loop is a mechanism in JavaScript that allows asynchronous operations to be performed without blocking the main execution thread, ensuring that the program remains responsive.",
  // },

  // {
  //   id: 25,
  //   question: "What is a generator function in JavaScript?",
  //   answer:
  //     "A generator function is a special type of function in JavaScript that can be paused and resumed at arbitrary points using the yield keyword.",
  // },

  // {
  //   id: 26,
  //   question: "How do you handle errors in asynchronous code?",
  //   answer:
  //     "Errors in asynchronous code can be handled using try-catch blocks inside async functions or by attaching a .catch() method to promises.",
  // },

  // {
  //   id: 27,
  //   question: "What are the differences between var, let, and const?",
  //   answer:
  //     "var is function-scoped, while let and const are block-scoped. var allows variable hoisting, while let and const do not. const variables cannot be reassigned after declaration, while let variables can.",
  // },

  // {
  //   id: 28,
  //   question:
  //     "Explain the difference between function declarations and function expressions.",
  //   answer:
  //     "Function declarations are hoisted and can be called before they are defined, while function expressions are not hoisted and must be defined before they are called.",
  // },

  // {
  //   id: 29,
  //   question: "How do you create a promise in JavaScript?",
  //   answer:
  //     "Promises in JavaScript can be created using the Promise constructor, passing a function with resolve and reject parameters.",
  // },

  // {
  //   id: 30,
  //   question: "What are the advantages of using arrow functions in JavaScript?",
  //   answer:
  //     "Arrow functions have a more concise syntax, lexical scoping of this, and implicitly return values when there is no block body. They are particularly useful for writing short, one-liner functions and for preserving the value of this in callbacks.",
  // },
]

const user_answers = [
  {
    id: 1,
    easeFactor: 1.3,
    interval: 1,
    response: "good",
    lastReviewed: "2024-04-13T12:00:00.000Z",
  },
  {
    id: 2,
    easeFactor: 1.3,
    interval: 1.3,
    response: "good",
    lastReviewed: "2024-04-13T12:00:00.000Z",
  },
]
const Javascript = () => {
  return (
    <div className=" m-auto w-full  md:px-4 h-full flex flex-col gap-4 md:py-4 py-2 ">
      <div className="flex  w-full items-center justify-center md:justify-start gap-2 rounded-md bg-secondary px-4 py-2 ">
        <Icons.javascript className="h-6 w-6" />
        <h1 className="font-semibold">JavaScript</h1>
      </div>
      <div className="grow flex flex-col w-full px-2 md:px-4 ">
        <Questions
          language_questions={language_questions}
          user_answers={user_answers}
        />
      </div>
    </div>
  )
}
export default Javascript
