import React from 'react';

const lists = [
  {
    id: 0,
    text: 'Track real-time overview of company’s financial performance.'
  },
  {
    id: 1,
    text: 'Track created projects budget against actual revenue and expenses'
  },
  {
    id: 2,
    text: 'Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.'
  },
]


const AboutBuddy = () => {


  return (
    <section className='flex flex-col justify-center h-full px-[60px] py-[30px]'>

      <div className="flex flex-row gap-1 items-center mb-[40px]">
        <img src="/buddy.png" alt="" className="h-[36px] w-[31px]" />
        <span className="text-[#3B3B45] text-[24px] font-semibold">Buddy</span>
      </div>

        { lists.map((item) => (
          <div className="flex gap-3 items-center mt-[30px]" key={item.id}>
              <img src="/checkbox.png" alt="" className="h-[16px]" />
              <p className='text-[#5B6871] text-[20px] font-[400] leading-6'>{item.text}</p>
          </div>
        ))
        }

        <p className='text-[#84919A] text-[13px] font-[400] mt-[100px]'>© 2022 Revvex. All rights reserved</p>
    </section>
  )
}

export default AboutBuddy;

// background: #FF8600;
