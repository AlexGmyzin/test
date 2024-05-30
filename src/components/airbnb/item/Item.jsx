import React from "react";
import s from "./Item.module.css";

const Item = (props) => {
   let badgeText
   if(props.count === 0) {
      badgeText = "SOLD OUT"
   }else if(props.location == "ONLINE") {
      badgeText = "Online"
   }
   return(
      <div className={s.item}>
         <div className={s.item__body}>
            <div className={s.item__image}>
               {badgeText && <div className={s.item__up}>{badgeText}</div>}
               <div className={s.item__img}>
                  <img src={`${process.env.PUBLIC_URL}` + props.img} alt="" />
               </div>
            </div>
            <div className={s.item__subphoto}>
               <img src={`${process.env.PUBLIC_URL}/img/gallery/Star 1.png`} alt="" />
               <span className={s.item__raiting}>{props.raiting}</span>
               <span className={s.item__land}>{props.bottom}</span>
               <span>{props.bottomSec}</span>
            </div>
            <div className={s.item__subtitle}>
               {props.subtitle}
            </div>
            <div className={s.item__bottom}>
               <p>
                  From {props.price} <span>/ person</span>
               </p>
            </div>
         </div>
      </div>
   )
}
export default Item