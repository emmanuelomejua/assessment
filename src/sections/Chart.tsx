import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,  ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'JUN',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'JUL',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'AUG',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'SEP',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'OCT',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'NOV',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'DEC',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const Chart = () => {
  return (
    <div className='bg-white rounded-[16px] flex flex-col p-4 gap-3 w-full'>
        <div className="flex justify-between items-center w-full">
            <h2 className='text-[#3B3B45] font-bold text-xl'>Overview</h2>

            <div className="flex items-center gap-2">
                <span className='text-sm bg-[#FF8600] text-[#fff] px-4 py-2 rounded-lg font-[500]'>Robbin Hood</span>
                <span className='text-sm bg-[#F6F6F6] text-[#818187] px-4 py-2 rounded-lg font-[500]'>Amreitrade</span>
                <span className='text-sm bg-[#F6F6F6] text-[#818187] px-4 py-2 rounded-lg font-[500]'>Fidelity</span>
                <span className='text-sm bg-[#F6F6F6] text-[#818187] px-4 py-2 rounded-lg font-[500]'>Charlse</span>
            </div>
        </div>
        <div className="w-[300px] lg:w-[690px] h-[300px] flex justify-center items-center mt-3">
        <ResponsiveContainer width="100%" height="90%">
            <BarChart
                data={data}
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
            <XAxis dataKey="name" tickLine={false}/>
            <YAxis axisLine={false} tickLine={false}/>
            <Bar dataKey="pv" fill="#F1F1F2" />
            <Bar dataKey="uv" fill="#E6E6E7" />
            </BarChart>
        </ResponsiveContainer>

        </div>
    </div>
  )
}

export default Chart;


