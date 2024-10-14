import React from "react";

interface IMsgItem {
  avatar: string;
  name: string;
  message: string;
  time: string;
  notificationCount: number;
  showNotification: boolean;
  isActive: boolean;
  onClick: () => void;
}

export const MessageItem = ({
  avatar,
  name,
  message,
  time,
  notificationCount,
  showNotification,
  isActive,
  onClick,
}: IMsgItem) => (
  <div
    className={`p-4 rounded-[15px] cursor-pointer ${
      isActive
        ? "bg-white shadow"
        : "group transition-all duration-300 hover:bg-[#f0f0f0] hover:shadow"
    }`}
    onClick={onClick}
  >
    <div className="flex gap-2 justify-between">
      <div className="flex gap-2">
        <img src={avatar} alt="" className="h-[40px] w-[40px]" />
        <div>
          <h1 className="text-[#FF8600] font-[500] text-[12.5px]">{name}</h1>
          <h1 className="text-[#6c757d] font-[300] text-[10px] w-[180px]">
            {message}
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-end text-end items-end">
        <h1 className="text-[#3B3B45] font-[300] text-[10px]">{time}</h1>
        {showNotification ? (
          <div className="h-[20px] w-[20px] bg-[#FF8600] rounded-[20px] flex items-center justify-center">
            <h1 className="text-[#ffffff] font-[500] text-[10px]">
              {notificationCount}
            </h1>
          </div>
        ) : (
          <div className="h-[20px] w-[20px] bg-[#f0f0f0] rounded-[20px] flex items-center justify-center">
            <h1 className="text-[#000] font-[500] text-[10px]">✔️</h1>
          </div>
        )}
      </div>
    </div>
  </div>
);
