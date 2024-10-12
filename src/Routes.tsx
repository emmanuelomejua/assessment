import './app.css';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutBuddy from './sections/AboutBuddy';
import Auth from './pages/auth/Auth';
import VerifyEmail from './pages/auth/VerifyEmail';
import Sidebar from './sections/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Message from './pages/dashboard/Message';


function Routes() {


    function DashboardLayout(){
        return(
            <section className="flex flex-row">
                <div className="flex-1">
                    <Sidebar/>
                </div>
                <div className="flex-1">
                    <Outlet/>
                </div>
            </section>
        )
    }

    function AuthLayout(){
        return(
            <section className="flex">
                <div className="flex-1 bg-black">
                    <AboutBuddy/>
                </div>
                <div className="flex-1">
                    <Outlet/>
                </div>
            </section>
        )
    }


    const router = createBrowserRouter([
        {
            path: '/',
            element: <DashboardLayout/>,
            children: [
                {
                    path: '/',
                    element: <Dashboard/>
                },
                {
                    path: '/messages',
                    element: <Message/>
                },
            ]
        },
        {
            path: 'auth',
            element: <AuthLayout/>,
            children: [
                {
                    path: '/auth',
                    element: <Auth/>
                },
                {
                    path: '/auth/verifyemail',
                    element: <VerifyEmail/>
                },
            ]
        }
    ])


  return (
    <RouterProvider router={router}/>
  )
}

export default Routes;
