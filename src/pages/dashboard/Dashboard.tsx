import React from 'react'
import Navbar from '../../sections/Navbar';
import Widget from '../../components/Widget';
import Chart from '../../sections/Chart';
import Posts from '../../sections/Posts';
import PotentialMembers from '../../sections/PotentialMembers';
import WatchList from '../../sections/WatchList';
import Revenue from '../../sections/Revenue';
import News from '../../sections/News';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-full w-full'>
        <Navbar/>

        <section className="flex flex-row w-full">
            <div className="flex flex-col w-full py-6 mx-4 gap-4">
                <div className="flex flex-row justify-between gap-2 w-full">
                    <Widget type='channels'/>
                    <Widget  type='members'/>
                    <Widget  type='impreession'/>
                </div>
                <Chart/>
                <Posts/>
                <PotentialMembers/>
            </div>

            <div className="flex flex-col w-[330px] py-6 mx-1 gap-3">
                <WatchList/>
                <Revenue/>
                <News/>
            </div>
        </section>
    </div>
  )
}

export default Dashboard;

