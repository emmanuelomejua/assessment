import React from 'react';
import { members } from '../data';

const PotentialMembers = () => {
  return (
    <div className='bg-white rounded-lg flex flex-col p-4 gap-3'>
         <h1 className='text-[#3B3B45] font-bold text-xl'>Potential Members</h1>
        
        <div className="flex flex-row gap-2 justify-between items-center">
            { members.map((member) => (
                <div className="flex flex-col justify-center items-center gap-2 px-8 py-4 border-[1px] rounded-lg" key={member.id}>
                    <img src={member.img} alt="" className="h-[40px] w-[40px] rounded-3xl" />
                    <h2 className='text-[#3B3B45] font-semibold text-[14px] leading-6'>{member.title}</h2>
                    <p className='text-[#818187] text-[11px] font-[400] leading-[14px]'>@ashking1234</p>

                    <div className="flex items-center flex-row gap-3">
                        <img src="/growth.png" alt="" className="" />
                        <strong className='text-[#3B3B45] text-[16px]'>{member.level}</strong>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default PotentialMembers;


