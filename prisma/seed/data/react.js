export const data = {
    language: "react",
    questions: [
        {
            id: 1,
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
        },
        {
            id: 2,
            question: "What are the features of React?",
            answer: "JSX, Components, Virtual DOM, One-way data binding, High performance",
        },
        {
            id: 3,
            question: "What is JSX?",
            answer: "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like createElement() or appendChild().",
        },
        {
            id: 4,
            question: "What is the Virtual DOM?",
            answer: "The Virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation.",
        },
        {
            id: 5,
            question: "What is a React component?",
            answer: "A component is a self-contained module that renders some output. You can write them as functions or classes.",
        },
        {
            id: 6,
            question: "What is the difference between a functional component and a class component?",
            answer: "Functional components are stateless and are just functions that return JSX. Class components can have state and lifecycle methods.",
        },
        {
            id: 7,
            question: "What are props in React?",
            answer: "Props are short for properties. They are read-only attributes that are passed from a parent component to a child component.",
        },
        {
            id: 8,
            question: "What is state in React?",
            answer: "State is an object that represents the parts of the app that can change. Each component can maintain its own state.",
        },
        {
            id: 9,
            question: "How do you create a state in a React component?",
            answer: "In class components, you use this.state to create state and this.setState() to update it. In functional components, you use the useState hook.",
        },
        {
            id: 10,
            question: "What are hooks in React?",
            answer: "Hooks are functions that let you use state and other React features in functional components.",
        },
        {
            id: 11,
            question: "What is the useState hook?",
            answer: "The useState hook is a function that lets you add state to functional components.",
        },
        {
            id: 12,
            question: "What is the useEffect hook?",
            answer: "The useEffect hook allows you to perform side effects in functional components, such as fetching data or subscribing to events.",
        },
        {
            id: 13,
            question: "What is the useContext hook?",
            answer: "The useContext hook allows you to use context directly in functional components.",
        },
        {
            id: 14,
            question: "What is the useReducer hook?",
            answer: "The useReducer hook is an alternative to useState for managing complex state logic.",
        },
        {
            id: 15,
            question: "What is the useRef hook?",
            answer: "The useRef hook allows you to create a mutable object that persists across re-renders.",
        },
        {
            id: 16,
            question: "What is the useMemo hook?",
            answer: "The useMemo hook returns a memoized value that only recalculates when one of its dependencies changes.",
        },
        {
            id: 17,
            question: "What is the useCallback hook?",
            answer: "The useCallback hook returns a memoized callback that only changes when one of its dependencies changes.",
        },
        {
            id: 18,
            question: "What is the useLayoutEffect hook?",
            answer: "The useLayoutEffect hook is similar to useEffect, but it fires synchronously after all DOM mutations.",
        },
        {
            id: 19,
            question: "What is the useImperativeHandle hook?",
            answer: "The useImperativeHandle hook customizes the instance value that is exposed when using ref.",
        },
        {
            id: 20,
            question: "What is lifting state up in React?",
            answer: "Lifting state up refers to moving state to a common ancestor of components that need to share the state.",
        },
        {
            id: 21,
            question: "What is prop drilling?",
            answer: "Prop drilling is the process of passing data through multiple levels of components by passing props down the component tree.",
        },
        {
            id: 22,
            question: "What is context in React?",
            answer: "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
        },
        {
            id: 23,
            question: "What is the difference between controlled and uncontrolled components?",
            answer: "Controlled components have their state controlled by React, whereas uncontrolled components have their state managed by the DOM itself.",
        },
        {
            id: 24,
            question: "What are higher-order components (HOC)?",
            answer: "HOCs are functions that take a component and return a new component, adding additional functionality.",
        },
        {
            id: 25,
            question: "What is the purpose of keys in React?",
            answer: "Keys help React identify which items have changed, are added, or are removed. They should be stable, unique, and constant for the component's identity.",
        },
        {
            id: 26,
            question: "What is the React component lifecycle?",
            answer: "The lifecycle of a React component includes mounting, updating, and unmounting phases.",
        },
        {
            id: 27,
            question: "What are lifecycle methods in React?",
            answer: "Lifecycle methods are methods that get called at different stages of a component's lifecycle, such as componentDidMount, componentDidUpdate, and componentWillUnmount.",
        },
        {
            id: 28,
            question: "What is the difference between componentDidMount and componentWillMount?",
            answer: "componentDidMount is called after the component is rendered, whereas componentWillMount is deprecated and was called before the component is rendered.",
        },
        {
            id: 29,
            question: "What is reconciliation in React?",
            answer: "Reconciliation is the process through which React updates the DOM with the results of the render output by comparing the new render tree with the previous one.",
        },
        {
            id: 30,
            question: "What are fragments in React?",
            answer: "Fragments let you group a list of children without adding extra nodes to the DOM.",
        },
        {
            id: 31,
            question: "What is React Fiber?",
            answer: "React Fiber is the new reconciliation engine in React that improves perceived performance of rendering updates.",
        },
        {
            id: 32,
            question: "What is a PureComponent in React?",
            answer: "PureComponent is a base class that implements shouldComponentUpdate with a shallow prop and state comparison to avoid unnecessary renders.",
        },
        {
            id: 33,
            question: "What is shouldComponentUpdate?",
            answer: "shouldComponentUpdate is a lifecycle method that determines if a component should re-render when receiving new props or state.",
        },
        {
            id: 34,
            question: "What is the purpose of React.memo?",
            answer: "React.memo is a higher-order component that memoizes the result of a functional component to avoid unnecessary renders.",
        },
        {
            id: 35,
            question: "How do you handle events in React?",
            answer: "Events in React are handled using camelCase syntax for event handlers, and you pass the function as a prop, e.g., onClick={handleClick}.",
        },
        {
            id: 36,
            question: "What is synthetic event in React?",
            answer: "Synthetic events are objects that wrap native events to provide consistent behavior across different browsers.",
        },
        {
            id: 37,
            question: "What is a portal in React?",
            answer: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
        },
        {
            id: 38,
            question: "What are error boundaries?",
            answer: "Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.",
        },
        {
            id: 39,
            question: "How do you create an error boundary?",
            answer: "By defining a class component with componentDidCatch and getDerivedStateFromError lifecycle methods.",
        },
        {
            id: 40,
            question: "What is server-side rendering (SSR)?",
            answer: "SSR is the process of rendering a React component on the server and sending the HTML to the client, which improves performance and SEO.",
        },
        {
            id: 41,
            question: "What is hydration in React?",
            answer: "Hydration is the process of attaching event listeners to the already-rendered HTML generated by SSR.",
        },
        {
            id: 42,
            question: "What is code splitting?",
            answer: "Code splitting is a feature supported by bundlers like Webpack to split code into smaller chunks that can be loaded on demand to improve performance.",
        },
        {
            id: 43,
            question: "How do you perform code splitting in React?",
            answer: "Code splitting can be achieved using React.lazy and Suspense to load components lazily.",
        },
        {
            id: 44,
            question: "What is lazy loading in React?",
            answer: "Lazy loading is the technique of loading components or resources only when they are needed.",
        },
        {
            id: 45,
            question: "What is React Router?",
            answer: "React Router is a library for handling routing in React applications.",
        },
        {
            id: 46,
            question: "What is the difference between BrowserRouter and HashRouter?",
            answer: "BrowserRouter uses the HTML5 history API to keep the UI in sync with the URL, whereas HashRouter uses the hash portion of the URL.",
        },
        {
            id: 47,
            question: "What are the route components in React Router?",
            answer: "Route components are components that render UI when the location matches the route’s path, such as Route, Switch, and Link.",
        },
        {
            id: 48,
            question: "What is Redux?",
            answer: "Redux is a state management library for JavaScript applications, providing a single source of truth for application state.",
        },
        {
            id: 49,
            question: "What are the core principles of Redux?",
            answer: "Single source of truth, State is read-only, Changes are made with pure functions",
        },
        {
            id: 50,
            question: "What are actions in Redux?",
            answer: "Actions are plain JavaScript objects that describe an event that has happened and indicate the intention to change state.",
        },
        {
            id: 51,
            question: "What are reducers in Redux?",
            answer: "Reducers are pure functions that take the current state and an action as arguments and return a new state.",
        },
        {
            id: 52,
            question: "What is the Redux store?",
            answer: "The store is an object that holds the entire state tree of a Redux application.",
        },
        {
            id: 53,
            question: "What is middleware in Redux?",
            answer: "Middleware provides a way to interact with actions that have been dispatched before they reach the reducer.",
        },
        {
            id: 54,
            question: "What is the purpose of connect function from react-redux?",
            answer: "The connect function connects a React component to the Redux store.",
        },
        {
            id: 55,
            question: "What is the Provider component in react-redux?",
            answer: "The Provider component makes the Redux store available to any nested components that need to access the Redux store.",
        },
        {
            id: 56,
            question: "What are selectors in Redux?",
            answer: "Selectors are functions that extract specific pieces of information from the store.",
        },
        {
            id: 57,
            question: "What is the purpose of Redux Thunk?",
            answer: "Redux Thunk is a middleware that allows you to write action creators that return a function instead of an action. This can be used to delay the dispatch of an action or to dispatch only if a certain condition is met.",
        },
        {
            id: 58,
            question: "What is the difference between Redux Thunk and Redux Saga?",
            answer: "Redux Thunk allows you to handle side effects by returning functions in action creators, whereas Redux Saga uses generators to handle side effects, offering more powerful and flexible control over asynchronous flows.",
        },
        {
            id: 59,
            question: "What is React Context API?",
            answer: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. It is the alternative to prop drilling or moving state to Redux.",
        },
        {
            id: 60,
            question: "What is a context provider in React?",
            answer: "A context provider is a component that provides the context to its child components. It holds the context value and makes it available to all descendants.",
        },
        {
            id: 61,
            question: "What is a context consumer in React?",
            answer: "A context consumer is a component that subscribes to context changes. It receives the current context value and re-renders whenever the context value changes.",
        },
        {
            id: 62,
            question: "What is the difference between context and Redux?",
            answer: "Context is a simpler solution for state management that works well for smaller applications or situations with less complex state logic, while Redux is a more robust state management library suited for larger applications with more complex state logic.",
        },
        {
            id: 63,
            question: "How do you use the `useContext` hook?",
            answer: "You use the `useContext` hook by passing the context object to it, which then returns the current context value. For example: `const value = useContext(MyContext);`",
        },
        {
            id: 64,
            question: "What is the purpose of the `useReducer` hook?",
            answer: "The `useReducer` hook is used for managing complex state logic in a component. It is an alternative to the `useState` hook and is useful for managing state transitions in a predictable manner.",
        },
        {
            id: 65,
            question: "How does `useReducer` differ from `useState`?",
            answer: "While `useState` is suitable for simple state updates, `useReducer` is more appropriate for state logic that involves multiple sub-values or when the next state depends on the previous one. `useReducer` uses a reducer function to determine the new state.",
        },
        {
            id: 66,
            question: "What is the purpose of `useRef`?",
            answer: "The `useRef` hook is used to create a mutable reference that persists across component re-renders. It can be used to access a DOM element directly or store a mutable value that doesn't cause a re-render when changed.",
        },
        {
            id: 67,
            question: "What is a controlled component in React?",
            answer: "A controlled component is a component where React controls and updates the component's state based on user input. The form data is handled by the state within the component.",
        },
        {
            id: 68,
            question: "What is an uncontrolled component in React?",
            answer: "An uncontrolled component is a component where the form data is handled by the DOM itself rather than by React. You use refs to access the form values.",
        },
        {
            id: 69,
            question: "How do you handle form submission in React?",
            answer: "Form submission in React is handled by adding an `onSubmit` event handler to the form element, which triggers a function to process the form data.",
        },
        {
            id: 70,
            question: "What are synthetic events in React?",
            answer: "Synthetic events are objects that wrap native browser events to provide consistent behavior across different browsers. They have the same interface as native events but are normalized.",
        },
        {
            id: 71,
            question: "What is the purpose of `React.PureComponent`?",
            answer: "`React.PureComponent` is a base class for components that implements a shallow prop and state comparison in `shouldComponentUpdate` to avoid unnecessary re-renders.",
        },
        {
            id: 72,
            question: "What are the benefits of using `React.memo`?",
            answer: "`React.memo` is a higher-order component that memoizes the rendered output of a functional component, preventing unnecessary re-renders when the component's props have not changed.",
        },
        {
            id: 73,
            question: "What is the purpose of the `useEffect` hook?",
            answer: "The `useEffect` hook allows you to perform side effects in functional components, such as fetching data, directly interacting with the DOM, or subscribing to events. It runs after the render cycle.",
        },
        {
            id: 74,
            question: "What is the difference between `useEffect` and `useLayoutEffect`?",
            answer: "`useEffect` runs asynchronously after the DOM has been updated, while `useLayoutEffect` runs synchronously after all DOM mutations but before the browser has painted. `useLayoutEffect` is useful for measuring the DOM and applying mutations.",
        },
        {
            id: 75,
            question: "How do you prevent a component from re-rendering in React?",
            answer: "To prevent unnecessary re-renders, you can use `React.memo` for functional components, `PureComponent` for class components, or implement `shouldComponentUpdate` to control when a component should re-render.",
        },
        {
            id: 76,
            question: "What is the purpose of the `useMemo` hook?",
            answer: "The `useMemo` hook is used to memoize the result of a computation to avoid re-computation on every render when the dependencies have not changed.",
        },
        {
            id: 77,
            question: "What is the purpose of the `useCallback` hook?",
            answer: "The `useCallback` hook is used to memoize a function, ensuring that the same instance of the function is returned between renders as long as its dependencies remain unchanged.",
        },
        {
            id: 78,
            question: "What is the purpose of the `useImperativeHandle` hook?",
            answer: "The `useImperativeHandle` hook customizes the instance value that is exposed to parent components when using `ref` in functional components.",
        },
        {
            id: 79,
            question: "What are portals in React?",
            answer: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
        },
        {
            id: 80,
            question: "How do you create a portal in React?",
            answer: "You create a portal using `ReactDOM.createPortal(children, container)`, where `children` is the React element to render and `container` is the DOM node to render into.",
        },
        {
            id: 81,
            question: "What are error boundaries?",
            answer: "Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.",
        },
        {
            id: 82,
            question: "How do you create an error boundary in React?",
            answer: "You create an error boundary by defining a class component that implements `componentDidCatch` and `getDerivedStateFromError` lifecycle methods to handle errors and update the state to display a fallback UI.",
        },
        {
            id: 83,
            question: "What is the purpose of server-side rendering (SSR)?",
            answer: "SSR is used to render React components on the server, providing the initial HTML to the client. This improves performance and SEO as the content is available before the JavaScript loads.",
        },
        {
            id: 84,
            question: "What is hydration in React?",
            answer: "Hydration is the process of attaching event listeners to the already-rendered HTML generated by server-side rendering, making it interactive.",
        },
        {
            id: 85,
            question: "What is code splitting?",
            answer: "Code splitting is a technique to split code into smaller bundles that can be loaded on demand, improving the initial load time and performance of the application.",
        },
        {
            id: 86,
            question: "How do you implement code splitting in React?",
            answer: "Code splitting in React can be implemented using `React.lazy` and `Suspense` to load components lazily, loading them only when they are needed.",
        },
        {
            id: 87,
            question: "What is the purpose of lazy loading?",
            answer: "Lazy loading is used to load components or resources only when they are needed, improving the performance and reducing the initial load time of the application.",
        },
        {
            id: 88,
            question: "What is React Router?",
            answer: "React Router is a library for handling routing in React applications, enabling navigation between different views or pages.",
        },
        {
            id: 89,
            question: "What is the difference between `BrowserRouter` and `HashRouter`?",
            answer: "`BrowserRouter` uses the HTML5 history API to keep the UI in sync with the URL, while `HashRouter` uses the hash portion of the URL to manage routing.",
        },
        {
            id: 90,
            question: "What are route components in React Router?",
            answer: "Route components are components that render UI based on the current location's path, such as `Route`, `Switch`, `Link`, and `NavLink`.",
        },
        {
            id: 91,
            question: "What is Redux?",
            answer: "Redux is a state management library for JavaScript applications, providing a single source of truth for the application state and ensuring that state changes are predictable and traceable.",
        },
        {
            id: 92,
            question: "What are the core principles of Redux?",
            answer: "The core principles of Redux are: single source of truth, state is read-only, and changes are made with pure functions.",
        },
        {
            id: 93,
            question: "What are actions in Redux?",
            answer: "Actions are plain JavaScript objects that describe an event that has happened and indicate the intention to change state. They typically include a `type` property and optionally other data.",
        },
        {
            id: 94,
            question: "What are reducers in Redux?",
            answer: "Reducers are pure functions that take the current state and an action as arguments and return a new state based on the action's type and payload.",
        },
        {
            id: 95,
            question: "What is the Redux store?",
            answer: "The Redux store is an object that holds the entire state tree of a Redux application and provides methods to access the state, dispatch actions, and subscribe to changes.",
        },
        {
            id: 96,
            question: "What is middleware in Redux?",
            answer: "Middleware in Redux provides a way to interact with actions that have been dispatched before they reach the reducer. It can be used for logging, handling asynchronous actions, and more.",
        },
        {
            id: 97,
            question: "What is the purpose of the `connect` function from `react-redux`?",
            answer: "The `connect` function connects a React component to the Redux store, allowing it to read state and dispatch actions.",
        },
        {
            id: 98,
            question: "What is the `Provider` component in `react-redux`?",
            answer: "The `Provider` component makes the Redux store available to any nested components that need to access the store via `connect` or hooks.",
        },
        {
            id: 99,
            question: "What are selectors in Redux?",
            answer: "Selectors are functions that extract specific pieces of information from the Redux store's state. They help in encapsulating the state structure and reusing state queries.",
        },
        {
            id: 100,
            question: "What is the purpose of Redux DevTools?",
            answer: "Redux DevTools is a development tool that provides a way to inspect every action and state change, allowing developers to debug and track state changes in a Redux application.",
        },
    ],
}
