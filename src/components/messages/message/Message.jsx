import React from "react";
import s from "./Message.module.css";

const Message = (props) =>  {
   return(
      <div className={s.message}>
         <div className={s.logo}>
            <span className={s.logo}>{props.logo}</span>
         </div>  
         <div className={s.content}>
            <div className={s.title}>{props.title}</div>
            <div className={s.text}>{props.text}</div>
         </div>
      </div>
   )
}
export default Message;