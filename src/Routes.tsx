import './app.css';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutBuddy from './sections/AboutBuddy';
import Auth from './pages/auth/Auth';
import VerifyEmail from './pages/auth/VerifyEmail';
import Sidebar from './sections/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Message from './pages/dashboard/Message';
import Navbar from './sections/Navbar';
import SignIn from './pages/auth/SignIn';
import Verified from './pages/auth/Verified';



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
                <div className="flex-1 bg-[#fff] w-1/2 p-[30px]">
                    <AboutBuddy/>
                </div>
                <div className="flex-1 bg-[#F8FAFC] p-[20px] flex-col w-1/2">
                    <div className="flex justify-center items-center m-auto h-fit bg-[#fff] shadow-2xl rounded-[8px] p-[30px]">
                        <Outlet/>
                    </div>
                    <div className="flex justify-between p-[15px]">
                        <div className=""></div>
                        <div className='flex mt-[120px] items-center gap-1 p-[15px] text-[#fff] bg-[#FF8600] w-fit rounded-3xl cursor-pointer'>
                            <span className='text-[14px] font-bold'>Get Help</span>
                            <img src='/chat.png' alt='' className='h-4'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    function VerifyLayout(){
        return(
            <div className="flex flex-row min-h-[100vh]">
                <div className="flex-1 bg-[#fff] w-1/2 p-[30px]">
                    <AboutBuddy/>
                </div>
                <div className="flex-1 bg-[#F8FAFC] flex-col w-1/2">
                    <div className="flex justify-center items-center h-full p-[100px]">
                        <Outlet/>
                    </div>
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
                    path: '/auth/signin',
                    element: <SignIn/>
                },
            ]
        },
        {
            path: 'verify',
            element: <VerifyLayout/>,
            children: [
                {
                    path: '/verify',
                    element: <VerifyEmail/>
                },
                {
                    path: '/verify/success',
                    element: <Verified/>
                },
            ]
        },
    ])


  return (
    <RouterProvider router={router}/>
  )
}

export default Routes;
