import React from 'react'
import Navbar from '../../sections/Navbar';
import { MessageBody } from "../../sections/message/MessageBody";


const Message = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#f0f0f0] flex flex-col">
      <Navbar title='Messages'/>
      <div className="p-4 w-full">
        <MessageBody />
      </div>
    </div>
  );
};

export default Message;

