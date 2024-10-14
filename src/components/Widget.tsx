import React, { FC } from 'react';
import Wiget1 from '../assests/widget1.png';
import Widget2 from '../assests/widget2.png';
import Widget3 from '../assests/widget3.png';
import { WidgetDetails, WidgetProps } from '../type';


const Widget:FC<WidgetProps> = ({type}) => {

    const wigetDetails = (): WidgetDetails => {
        switch(type){
            case 'channels':
                return {
                    title: 'Total Channels',
                    num: 51,
                    icon: Wiget1,
                    bgColor: '#E0FAF5'
                };
            case 'members':
                return {
                    title: 'New Members',
                    num: 125,
                    icon: Widget2,
                    bgColor: '#EFF2FE'
                };
            case 'impreession':
                return {
                    title: 'All Impreession',
                    num: 789,
                    icon: Widget3,
                    bgColor: '#FFF0E0'
                };
            default:
                throw new Error();
        }
    }

    const details = wigetDetails();

  return (
    <div className='flex items-center justify-between rounded-[16px] bg-white p-4 max-w-[280px] w-full min-h-[90px]' >
        <div className="flex flex-col">
            <span className='text-[#3B3B45] text-xl font-bold'>{details.num}</span>
            <span className='text-[#A3A3A6] text-xs leading-3'>{details.title}</span>
        </div>

        <div className={`flex p-3 rounded-3xl ${details.bgColor}`} style={{ backgroundColor: details.bgColor }}>
            <img src={details.icon} alt="Total Channels" className="h-[20px] w-[20px]" />
        </div>
    </div>
  )
}

export default Widget;


