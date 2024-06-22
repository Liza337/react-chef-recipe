
import React, { useRef } from 'react';
import { usePDF } from '@react-pdf/renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    const ref = useRef();

    const downloadPDF = () => {
        usePDF(ref.current);
    };

    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-4xl text-center font-bold my-8'>Welcome to our Blog page</h1>

            <div ref={ref}>
                <section className='border-4 p-4 bg-base-200 mb-5'>
                    <h2 className='text-xl font-bold mb-2'>The difference between uncontrolled and controlled components</h2>
                    <p>In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc.<br/>While Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.</p>
                </section>

                <section className='border-4 p-4 bg-base-200 mb-5'>
                    <h2 className='text-xl font-bold mb-2'>How to validate React props using PropTypes?</h2>
                    <p>Props are an important mechanism for passing read-only attributes to React components. Props validation is a tool that helps developers avoid future bugs and problems. When developing a React application, it's essential to structure and define the props to prevent bugs and errors. To validate React props using PropTypes, we need to follow these steps:</p>
                    <ul>
                        <li>Import PropTypes</li>
                        <li>Define PropTypes</li>
                    </ul>
                </section>

                <section className='border-4 p-4 bg-base-200 mb-5'>
                    <h2 className='text-xl font-bold mb-2'>The difference between nodejs and express js</h2>
                    <p>Node.js and Express.js are both crucial for building server-side applications with JavaScript, but they serve different purposes. Node.js is a runtime environment that allows JavaScript to be executed on the server side, providing the foundational platform to build and run applications outside of the browser. <br/>On the other hand, Express.js is a web application framework built on top of Node.js that simplifies the process of building robust web applications and APIs. It provides a higher-level abstraction for handling routes, middleware, and HTTP requests, making development faster and more efficient.</p>
                </section>

                <section className='border-4 p-4 bg-base-200 mb-8'>
                    <h2 className='text-xl font-bold mb-2'>What is a custom hook, and why will you create a custom hook?</h2>
                    <p>A custom hook in React is a reusable function that encapsulates logic for stateful behavior, allowing you to share this logic across multiple components. Custom hooks can use other hooks like useState, useEffect, or even other custom hooks, making them highly flexible.</p>
                </section>
            </div>
            
            {/**download pdf from react */}
            <div className='text-center'>
                <button className='btn btn-primary mb-5' onClick={downloadPDF}>
                    Download PDF <FontAwesomeIcon icon={faDownload} className='ml-2' />
                </button>
            </div>
        </div>
    );
};

export default Blog;
