import './app.scss';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutBuddy from './sections/aboutBuddy/AboutBuddy';
import Auth from './pages/auth/Auth';
import VerifyEmail from './pages/auth/VerifyEmail';
import Sidebar from './sections/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Message from './pages/dashboard/Message';


function Routes() {


    function DashboardLayout(){
        return(
            <section className="dash_layout">
                <div className="">
                    <Sidebar/>
                </div>
                <div className="">
                    <Outlet/>
                </div>
            </section>
        )
    }

    function AuthLayout(){
        return(
            <section className="auth-layout">
                <div className="auth_layout-l">
                    <AboutBuddy/>
                </div>
                <div className="auth_layout-r">
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
