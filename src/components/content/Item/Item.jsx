import { logDOM } from "@testing-library/react";
import React from "react"
import s from "./Item.module.css";

const Item = (props) => {
   return(
      <div className={s.item}>
         <div className={s.top}>
            <div className={s.logo}>
               <span className={s.logo}>{props.logo}</span>
            </div>
            <div className={s.title}>
               <h2 className={s.titleOne}>{props.title}</h2>
               <h3 className={s.subTitle}>{props.subtitle}</h3>
            </div>
         </div>
         <div className={s.image}>
            <img src={props.image} alt="" />
         </div>
         <div className={s.bottom}>
            <div className={s.like}>
               <img src="img/heart.png" alt="" />
            </div>
            <div className={s.count}>
               {props.count}
            </div>
            <div className={s.comments}>
               <img src="img/comment.png" alt="" />
            </div>
         </div>
      </div>
   )
}

export default Item;