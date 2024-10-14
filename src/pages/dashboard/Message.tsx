import React from 'react'
import Navbar from '../../sections/Navbar';
import { MessageBody } from "../../sections/message/MessageBody";


const Message = () => {
  return (
    <div className="w-full h-[100vh] p-5 bg-[#f0f0f0] flex flex-col">
      <Navbar title='Messages'/>
      <MessageBody />
    </div>
  );
};

export default Message;

