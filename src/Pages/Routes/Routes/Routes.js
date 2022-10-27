import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../../Blog/Blog';
import Courses from '../../Courses/Courses';
import Home from '../../Home/Home';
import Main from '../../Layout/Main';
import Login from '../../Login/Login';
import Register from '../../Register/Register';
import Route404 from '../../Route404/Route404';
import PrivateRoute from '../PrivateRoute.js/PrivateRoute';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    loader: () => {
                        return fetch("https://learning-platform-server-ecru.vercel.app/courses");
                    },
                    element:<Home></Home>
                },
                {
                    path: '/courses',
                    element:<PrivateRoute><Courses></Courses></PrivateRoute>
                },
                {
                    path: '/blog',
                    element:<PrivateRoute><Blog></Blog></PrivateRoute>
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
        },
        {
            path: '*',
            element:<Route404></Route404>
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