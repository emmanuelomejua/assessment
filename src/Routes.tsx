import React from 'react';
import './app.scss';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';


function Routes() {

    function AuthLayout(){
        return(
            <section className="auth_layout">

            </section>
        )
    }


    const router = createBrowserRouter([
        {
            path: 'auth',
            element: <AuthLayout/>,
            children: [
                {
                    path: '/',
                    element: ''
                }
            ]
        }
    ])


  return (
    <RouterProvider router={router}/>
  )
}

export default Routes;
