import React from "react";
import MessageBox from "./MessageBox";

export const MessageRightBox = ({
  activeFriend,
  activeFriendDP,
}: {
  activeFriend: string;
  activeFriendDP: string;
}) => {
  return (
    <div className="flex-grow p-5 bg-gray-100 ml-3 rounded-[15px] flex flex-col h-full">
      <div className="border-b border-[#DDE2E4] pb-2 mt-3 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="relative">
            <img
              src={activeFriendDP}
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <div className="absolute bottom-0 left-0 h-[13px] w-[13px] bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <h1 className="text-[#000] font-[600] text-[14px]">{activeFriend}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
          <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
          <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
        </div>
      </div>

      <div className="flex-grow overflow-y-auto my-4">
        <div className="space-y-4">
          <MessageBox
            pos="left"
            message="Hi David, have you got the project report pdf?"
            image={
              <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
            }
          />
          <MessageBox
            pos="right"
            message="No i did not get it"
            image={
              <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
            }
          />
          <div className="flex justify-center items-center gap-2">
            <hr className="border-t border-[#ced4da] w-[40%]" />
            <h1 className="text-[#ced4da] font-[400] text-[12px]">Yesterday</h1>
            <hr className="border-t border-[#ced4da] w-[40%]" />
          </div>
          <MessageBox
            pos="left"
            message="Ok, I will just sent it here. Plz be sure to fill the details by today end of the day."
            image={
              <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
            }
          />
          <MessageBox
            pos="left"
            message="project_topic.pdf?"
            image={
              <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
            }
          />
          <MessageBox
            pos="right"
            message="Ok. Should I send it over email as well after filling the details."
            image={
              <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
            }
          />
          <MessageBox
            pos="left"
            message="Ya. I’ll be adding more team members to it."
            image={
              <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
            }
          />
          <MessageBox
            pos="right"
            message="OK"
            image={
              <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
            }
          />
        </div>
      </div>

      <div className="bg-gray-300 rounded-[10px] flex flex-col justify-center mt-auto py-5">
        <div className="flex items-center justify-center gap-3 px-[50px]">
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-full">
            <img src="/avatar2.png" alt="" className="h-[30px] w-[30px]" />
            <input
              type="text"
              placeholder="Write Something..."
              className="flex-grow outline-none text-gray-500 ml-2 text-[13px]"
            />
            <div className="flex gap-2">
              <img src="/avatar2.png" alt="" className="h-[25px] w-[25px]" />
              <img src="/avatar2.png" alt="" className="h-[25px] w-[25px]" />
              <img src="/avatar2.png" alt="" className="h-[25px] w-[25px]" />
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-2 ml-2">
            <img src="/avatar2.png" alt="" className="h-[25px] w-[25px]" />
          </button>
        </div>
      </div>
    </div>
  );
};
