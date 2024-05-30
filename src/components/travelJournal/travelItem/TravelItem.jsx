import React from "react";
import s from "./TravelItem.module.css"

const TravelItem = (props) => {
   return(
      <div className={s.item}>
         <div className={s.itemImage}>
            <img src={`${process.env.PUBLIC_URL}` + props.image} alt="" /> 
         </div>
         <div className={s.itemContent}>
            <div className={s.itemLocation}>
               <img src={`${process.env.PUBLIC_URL}/img/gallery/placeholder.png`} />
               <p>{props.country}</p>
               <a href="">View on Google Maps</a>
            </div>
            <div className={s.itemTitle}>
               {props.title}
            </div>
            <div className={s.itemDate}>
                  {props.date}
            </div>
            <div className={s.itemText}>
               <p>  {props.text}</p>
            </div>
         </div>
      </div>
   )
}

export default TravelItem