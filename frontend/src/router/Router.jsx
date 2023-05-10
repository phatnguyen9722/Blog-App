import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Single from '../pages/Single';
import Write from '../pages/Write';
import Layout from '../Layout/Layout';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/write',
                element: <Write />,
            },
            {
                path: '/post/:id',
                element: <Single />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default Router;
