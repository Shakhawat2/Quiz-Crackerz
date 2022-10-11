import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details open="">
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is the Purpose of React-router-dom?</summary>
                        <div className="px-4 pb-4">
                            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br /><br />
                                Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does Context API works?</summary>
                        <div className="px-4 pb-4">
                            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is UseRef in react?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is Custom Hook in react?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How many ways can we implement Conditional rendering in React?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Six methods to achieve conditional rendering in React. <br /><br /> 1. if/else <br />2. Ternary operation <br /> 3. Inline IF with Logical && operator <br /> 4. Switch case operator <br />5. Conditional Rendering with enums <br />6. Higher-Order Components</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Can you explain how the Provider works with the React Context API?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How is React Routing different from Conventional routing?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>React Router is a library for React that provides routing functionality. It is different from conventional routing in a few ways. <br /><br /> First, React Router is declarative. This means that you specify what you want your route to look like, rather than specifying how to get there. This makes it more user-friendly and easier to read. <br /><br /> Second, React Router is modular. This means that you can use only the features you need, rather than having to include everything in the library. This makes it more lightweight and efficient. <br /><br /> Third, React Router is asynchronous. This means that routes can be loaded on-demand, rather than all at once. This makes the application more responsive and efficient. <br /><br /> Fourth, React Router is composable. This means that you can create complex routes by combining multiple routes together. This makes the routing process more flexible. <br /><br/> Example: Now we are going to use React router to add routing in our app. For this, we will create a new ‘pages’ directory in our ‘src’  folder. Inside this newly created directory, we will create two JavaScript files ‘Home.js’ and ‘Data.js’ with the below content.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;