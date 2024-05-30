import React from "react";
import s from "./Travel.module.css";
import TravelItem from "./travelItem/TravelItem"
import dataTravel from "../../data/dataTravel";

const Travel = () => {
   const callback = dataTravel.map(item => {
      return(
         <TravelItem
            key={item.id}
            {...item}
       />
      )
      
   })
   return(
      <div className={s.travel}>
         <div className={s.header}>
            <p>my travel journal.</p>  
         </div>
         <div className={s.content}>
            {callback}
         </div>
      </div>
   )
}
export default Travel