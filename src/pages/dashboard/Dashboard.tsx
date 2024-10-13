import React from 'react'
import Navbar from '../../sections/Navbar';
import Widget from '../../components/Widget';
import Chart from '../../sections/Chart';
import Posts from '../../sections/Posts';
import PotentialMembers from '../../sections/PotentialMembers';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-full w-full'>
        <Navbar/>

        <section className="flex flex-row w-full">
            <div className="flex flex-col w-full py-6 mx-4 gap-3">
                <div className="flex flex-row gap-3 w-full">
                    <Widget type='1'/>
                    <Widget  type='2'/>
                    <Widget  type='3'/>
                </div>
                <Chart/>
                <Posts/>
                <PotentialMembers/>
            </div>

            <div className="flex flex-col w-[330px] bg-black py-6 mx-4">
    r
            </div>
        </section>
    </div>
  )
}

export default Dashboard;
