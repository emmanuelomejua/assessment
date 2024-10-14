import React, { Dispatch, SetStateAction, useState } from "react";
import { convoMessagesArray } from "./data/convo";
import { MessageItem } from "./MessageItem";

export const MessageLeftBox = ({
  setActiveFriend,
  setActiveFriendDP,
}: {
  setActiveFriend: Dispatch<SetStateAction<string>>;
  setActiveFriendDP: Dispatch<SetStateAction<string>>;
}) => {
  const [messages, setMessages] = useState(
    convoMessagesArray.map((msg, index) => ({
      ...msg,
      isActive: index === 0,
    }))
  );

  const handleItemClick = (index: number) => {
    setMessages(
      messages.map((msg: any, i: number) => ({
        ...msg,
        isActive: i === index,
      }))
    );
  };

  return (
    <div className="bg-gray-100 w-[350px] h-full rounded-[15px] py-5 px-3 flex flex-col">
      <div className="flex rounded-[15px] justify-between items-center w-full">
        <div className="flex gap-3">
          <div>
            <img
              src="/avater5.png"
              alt=""
              className="h-[50px] w-[50px] rounded-[50px]"
            />
          </div>
          <div>
            <h1 className="text-[#FF8600] font-[500] text-[14px]">
              David Peters
            </h1>
            <h1 className="text-[#3B3B45] font-[500] text-[12px]">
              Senior Developer
            </h1>
          </div>
        </div>
        <img src="/avater5.png" alt="" className="h-[20px] w-[20px]" />
      </div>
      <div className="flex items-center rounded-[30px] bg-white py-3 px-4 gap-1 mt-5">
        <img src="/search.png" alt="Search" className="text-[#000F29]" />
        <input
          type="text"
          className="outline-none text-[13px] ml-2 w-full"
          placeholder="Search Here..."
        />
      </div>
      <hr className="my-5 bg-gray-900" />
      <div className="flex-grow overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg: any, index: number) => (
            <MessageItem
              key={index}
              {...msg}
              onClick={() => {
                handleItemClick(index);
                setActiveFriend(msg?.name);
                setActiveFriendDP(msg?.avatar);
              }}
            />
          ))}
        </div>
        <hr className="my-5 bg-gray-900" />
      </div>
    </div>
  );
};
