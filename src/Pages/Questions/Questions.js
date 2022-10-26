import React from 'react';

const Questions = () => {
    return (
        <div className=''>
            <div className='mx-32 border mt-[100px] p-10 rounded-lg'>
                <h1 className='text-3xl font-semibold'>1.What is CORS?</h1>
            <span className='font-bold text-xl inline'>Ans:</span><p className='text-xl ml-10'>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </p>
            </div>
            <div className='mx-32 border mt-[100px] p-10 rounded-lg'>
                <h1 className='text-3xl font-semibold'>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
            <span className='font-bold text-xl inline'>Ans:</span><p className='text-xl ml-10'>
                Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. As an Android developer I use Firebase in most of my projects. It has many features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, etc.
                <br /><br />
                Firebase can be used when you do not want to spend a lot of time developing your own backend. It can be used for rapid development. I have been using it in my apps in production. You will not have to take care of servers, etc, Google will take care of it for you.
                <br /><br />
                If you do not find the need to develop your own backend, Firebase is one of the best options.
            </p>
            </div>
            <div className='mx-32 border mt-[100px] p-10 rounded-lg'>
                <h1 className='text-3xl font-semibold'>3.How does private route works?</h1>
            <span className='font-bold text-xl inline'>Ans:</span><p className='text-xl ml-10'>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
            </p>
            </div>
            <div className='mx-32 border mt-[100px] p-10 rounded-lg mb-[100px]    '>
                <h1 className='text-3xl font-semibold'>4.What is Node? How does Node work?</h1>
            <span className='font-bold text-xl inline'>Ans:</span><p className='text-xl ml-10'>
                Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.
            </p>
            </div>
        </div>
    );
};

export default Questions;