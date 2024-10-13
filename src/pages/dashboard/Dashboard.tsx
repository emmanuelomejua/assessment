import React from 'react'
import Navbar from '../../sections/Navbar';
import Widget from '../../components/Widget';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-full w-full'>
        <Navbar/>

        <section className="flex flex-row w-full">
            <div className="flex flex-col w-full py-6 mx-4">
                <div className="flex flex-row gap-3 w-full">
                    <Widget/>
                    <Widget/>
                    <Widget/>
                </div>
            </div>

            <div className="flex flex-col w-[330px] bg-black py-6 mx-4">
    r
            </div>
        </section>
    </div>
  )
}

export default Dashboard;
