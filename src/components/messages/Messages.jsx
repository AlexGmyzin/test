import React from "react";
import s from "./Messages.module.css";
import Message from "./message/Message";

const Messages = (props) =>  {
   return(
      <div className={s.messages}>
         <h2>New Messages</h2>
         <Message
            logo="F"
            title="Farid Shuluba"
            text="Hi, my Dear Friend! Wath's up?"
            color="background-color: brown;"
         />
         <Message
            logo="A"
            title="Alfred Solomonzo"
            text="Where is my mobile phone?"
         />
         <Message
            logo="Z"
            title="Zarib Hasbulla"
            text="Nice to meet you too!"
         />
         <Message
            logo="T"
            title="Tina Rasutti"
            text="Have you ever been in Pairs"
         />
      </div>
   )
}
export default Messages;