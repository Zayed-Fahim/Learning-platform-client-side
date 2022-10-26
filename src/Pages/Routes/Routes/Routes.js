import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../../Blog/Blog';
import Courses from '../../Courses/Courses';
import Home from '../../Home/Home';
import Main from '../../Layout/Main';
import Login from '../../Login/Login';
import Register from '../../Register/Register';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    loader: () => {
                        return fetch("http://localhost:5000/courses");
                    },
                    element:<Home></Home>
                },
                {
                    path: '/courses',
                    element:<Courses></Courses>
                },
                {
                    path: '/blog',
                    element:<Blog></Blog>
                },
                {
                    path: '/login',
                    element:<Login></Login>
                },
                {
                    path: '/register',
                    element:<Register></Register>
                },
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    );
};

export default Routes;