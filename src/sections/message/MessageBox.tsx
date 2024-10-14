import React from "react";

interface IMBox {
  pos: "left" | "right";
  message: string;
  image: any;
}

const MessageBox = ({ pos, message, image }: IMBox) => {
  return (
    <div>
      {pos === "left" ? (
        <div className="flex my-10">
          {image}
          <div className="bg-[#e9ecef] p-3 rounded-lg max-w-[300px] mx-2 text-[13px] font-[300]">
            <h1>{message}</h1>
          </div>
        </div>
      ) : (
        <div className="flex flex-row-reverse my-10">
          {image}
          <div className="bg-[#e9ecef] p-3 rounded-lg max-w-[300px] mx-2 text-[13px] font-[300]">
            <h1 className="text-[#FF8600]">{message}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBox;
