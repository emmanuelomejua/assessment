import './app.css';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutBuddy from './sections/AboutBuddy';
import Auth from './pages/auth/Auth';
import VerifyEmail from './pages/auth/VerifyEmail';
import Sidebar from './sections/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Message from './pages/dashboard/Message';
import Navbar from './sections/Navbar';



function Routes() {


    function DashboardLayout(){
        return(
            <div className="flex flex-row w-full" >
                <Sidebar/>
                <div className="flex flex-col">
                    <Navbar/>
                    <Outlet/>
                </div>
            </div>
        )
    }

    function AuthLayout(){
        return(
            <div className="flex min-h-[100vh]">
                <div className="flex-1 bg-[#fff]">
                    <AboutBuddy/>
                </div>
                <div className="flex-1 bg-[#F8FAFC]">
                    <Outlet/>
                </div>
            </div>
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
