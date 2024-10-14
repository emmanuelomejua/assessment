import React, { useState } from "react";
import { MessageLeftBox } from "./MessageLeftBox";
import { MessageRightBox } from "./MessageRightBox";
import { convoMessagesArray } from "./data/convo";

export const MessageBody = () => {
  const [activeFriend, setActiveFriend] = useState<string>(
    convoMessagesArray[0].name
  );
  const [activeFriendDP, setActiveFriendDP] = useState<string>(
    convoMessagesArray[0].avatar
  );

  return (
    <div className="flex bg-[#fff] w-full rounded-[15px] flex-grow py-5 px-3 mt-3 overflow-hidden">
      <MessageLeftBox
        setActiveFriend={setActiveFriend}
        setActiveFriendDP={setActiveFriendDP}
      />
      <MessageRightBox
        activeFriend={activeFriend}
        activeFriendDP={activeFriendDP}
      />
    </div>
  );
};
