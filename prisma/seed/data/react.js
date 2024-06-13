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
            question: "What is JSX?",
            answer: "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like createElement() or appendChild().",
        },
        {
            id: 3,
            question: "What is the Virtual DOM?",
            answer: "The Virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation.",
        },
        {
            id: 4,
            question: "What is a React component?",
            answer: "A component is a self-contained module that renders some output. You can write them as functions or classes.",
        },
        {
            id: 5,
            question: "What is the difference between a functional component and a class component?",
            answer: "Functional components are stateless and are just functions that return JSX. Class components can have state and lifecycle methods.",
        },
        {
            id: 6,
            question: "What are props in React?",
            answer: "Props are short for properties. They are read-only attributes that are passed from a parent component to a child component.",
        },
        {
            id: 7,
            question: "What is state in React and How do you create it?",
            answer: "State is an object that represents the parts of the app that can change. Each component can maintain its own state. to create state In class components, you use this.state and this.setState() to update it. In functional components, you use the useState hook.",
        },

        {
            id: 8,
            question: "What are hooks in React?",
            answer: "Hooks are functions that let you use state and other React features in functional components.",
        },
        {
            id: 9,
            question: "What is the useState hook?",
            answer: "The useState hook is a function that lets you add state to functional components.",
        },
        {
            id: 10,
            question: "What is the useEffect hook?",
            answer: "The `useEffect` hook allows you to perform side effects in functional components, such as fetching data, directly interacting with the DOM, or subscribing to events. It runs after the render cycle.",
        },
        {
            id: 11,
            question: "What is the useContext hook?",
            answer: "The useContext hook allows you to use context directly in functional components.",
        },

        {
            id: 12,
            question: "What is the purpose of the `useReducer` hook?",
            answer: "The `useReducer` hook is used for managing complex state logic in a component. It is an alternative to the `useState` hook and is useful for managing state transitions in a predictable manner.",
        },
        {
            id: 13,
            question: "What is the purpose of `useRef`?",
            answer: "The `useRef` hook is used to create a mutable reference that persists across component re-renders. It can be used to access a DOM element directly or store a mutable value that doesn't cause a re-render when changed.",
        },

        {
            id: 14,
            question: "What is the purpose of the `useMemo` hook?",
            answer: "The `useMemo` hook is used to memoize the result of a computation to avoid re-computation on every render when the dependencies have not changed.",
        },
        {
            id: 15,
            question: "What is the purpose of the `useCallback` hook?",
            answer: "The `useCallback` hook is used to memoize a function, ensuring that the same instance of the function is returned between renders as long as its dependencies remain unchanged.",
        },
        {
            id: 16,
            question: "What is the difference between `useEffect` and `useLayoutEffect`?",
            answer: "`useEffect` runs asynchronously after the DOM has been updated, while `useLayoutEffect` runs synchronously after all DOM mutations but before the browser has painted. `useLayoutEffect` is useful for measuring the DOM and applying mutations.",
        },
        {
            id: 17,
            question: "What is the useImperativeHandle hook?",
            answer: "The useImperativeHandle hook customizes the instance value that is exposed when using ref.",
        },
        {
            id: 18,
            question: "What is lifting state up in React?",
            answer: "Lifting state up refers to moving state to a common ancestor of components that need to share the state.",
        },
        {
            id: 19,
            question: "What is prop drilling?",
            answer: "Prop drilling is the process of passing data through multiple levels of components by passing props down the component tree.",
        },

        {
            id: 20,
            question: "What is the difference between controlled and uncontrolled components?",
            answer: "Controlled components have their state controlled by React, whereas uncontrolled components have their state managed by the DOM itself.",
        },
        {
            id: 21,
            question: "What are higher-order components (HOC)?",
            answer: "HOCs are functions that take a component and return a new component, adding additional functionality.",
        },
        {
            id: 22,
            question: "What is the purpose of keys in React?",
            answer: "Keys help React identify which items have changed, are added, or are removed. They should be stable, unique, and constant for the component's identity.",
        },
        {
            id: 23,
            question: "What is the React component lifecycle?",
            answer: "The lifecycle of a React component includes mounting, updating, and unmounting phases.",
        },
        {
            id: 24,
            question: "What are lifecycle methods in React?",
            answer: "Lifecycle methods are methods that get called at different stages of a component's lifecycle, such as componentDidMount, componentDidUpdate, and componentWillUnmount.",
        },
        {
            id: 25,
            question: "What is the difference between componentDidMount and componentWillMount?",
            answer: "componentDidMount is called after the component is rendered, whereas componentWillMount is deprecated and was called before the component is rendered.",
        },
        {
            id: 26,
            question: "What is reconciliation in React?",
            answer: "Reconciliation is the process through which React updates the DOM with the results of the render output by comparing the new render tree with the previous one.",
        },
        {
            id: 27,
            question: "What are fragments in React?",
            answer: "Fragments let you group a list of children without adding extra nodes to the DOM.",
        },
        {
            id: 28,
            question: "What is React Fiber?",
            answer: "React Fiber is the new reconciliation engine in React that improves perceived performance of rendering updates.",
        },
        {
            id: 29,
            question: "What is a PureComponent in React?",
            answer: "PureComponent is a base class that implements shouldComponentUpdate with a shallow prop and state comparison to avoid unnecessary renders.",
        },
        {
            id: 30,
            question: "What is shouldComponentUpdate?",
            answer: "shouldComponentUpdate is a lifecycle method that determines if a component should re-render when receiving new props or state.",
        },
        {
            id: 31,
            question: "What is the purpose of React.memo?",
            answer: "React.memo is a higher-order component that memoizes the result of a functional component to avoid unnecessary renders.",
        },
        {
            id: 32,
            question: "How do you handle events in React?",
            answer: "Events in React are handled using camelCase syntax for event handlers, and you pass the function as a prop, e.g., onClick={handleClick}.",
        },
        {
            id: 33,
            question: "What is synthetic event in React?",
            answer: "Synthetic events are objects that wrap native events to provide consistent behavior across different browsers.",
        },
        {
            id: 34,
            question: "What is a portal in React?",
            answer: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.",
        },
        {
            id: 35,
            question: "How do you create a portal in React?",
            answer: "You create a portal using `ReactDOM.createPortal(children, container)`, where `children` is the React element to render and `container` is the DOM node to render into.",
        },
        {
            id: 36,
            question: "What are error boundaries?",
            answer: "Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.",
        },
        {
            id: 37,
            question: "How do you create an error boundary?",
            answer: "By defining a class component with componentDidCatch and getDerivedStateFromError lifecycle methods.",
        },

        {
            id: 38,
            question: "What is the purpose of server-side rendering (SSR)?",
            answer: "SSR is used to render React components on the server, providing the initial HTML to the client. This improves performance and SEO as the content is available before the JavaScript loads.",
        },
        {
            id: 39,
            question: "What is hydration in React?",
            answer: "Hydration is the process of attaching event listeners to the already-rendered HTML generated by server-side rendering, making it interactive.",
        },
        {
            id: 40,
            question: "What is code splitting?",
            answer: "Code splitting is a feature supported by bundlers like Webpack to split code into smaller chunks that can be loaded on demand to improve performance.",
        },
        {
            id: 41,
            question: "How do you perform code splitting in React?",
            answer: "Code splitting can be achieved using React.lazy and Suspense to load components lazily.",
        },

        {
            id: 42,
            question: "What is React Router?",
            answer: "React Router is a library for handling routing in React applications, enabling navigation between different views or pages.",
        },
        {
            id: 43,
            question: "What is the difference between BrowserRouter and HashRouter?",
            answer: "BrowserRouter uses the HTML5 history API to keep the UI in sync with the URL, whereas HashRouter uses the hash portion of the URL.",
        },
        {
            id: 44,
            question: "What are the route components in React Router?",
            answer: "Route components are components that render UI when the location matches the route’s path, such as Route, Switch, and Link.",
        },

        {
            id: 45,
            question: "What is React Context API?",
            answer: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. It is the alternative to prop drilling or moving state to a state manager like Redux.",
        },
        {
            id: 46,
            question: "What is a context provider in React?",
            answer: "A context provider is a component that provides the context to its child components. It holds the context value and makes it available to all descendants.",
        },
        {
            id: 47,
            question: "What is a context consumer in React?",
            answer: "A context consumer is a component that subscribes to context changes. It receives the current context value and re-renders whenever the context value changes.",
        },

        {
            id: 48,
            question: "How do you handle form submission in React?",
            answer: "Form submission in React is handled by adding an `onSubmit` event handler to the form element, which triggers a function to process the form data.",
        },

        {
            id: 49,
            question: "How do you prevent a component from re-rendering in React?",
            answer: "To prevent unnecessary re-renders, you can use `React.memo` for functional components, `PureComponent` for class components, or implement `shouldComponentUpdate` to control when a component should re-render.",
        },

        {
            id: 50,
            question: "What is the purpose of the `useImperativeHandle` hook?",
            answer: "The `useImperativeHandle` hook customizes the instance value that is exposed to parent components when using `ref` in functional components.",
        },
    ],
}
