import React from "react";
import s from "./Airbnb.module.css";
import Item from "./item/Item";
import data from "../../data/data";

const Airbnb = () => {
   const jokeData = data.map(item => {
      return <Item 
               key={item.id}
               {...item}
               />
   })
   return(
      <div className={s.block}>
         <header>
            <div className={s.header__logo}>
               <img src="/img/gallery/Vector.png" alt="" />
            </div>
         </header>
         <main>
            <div className={s.main__banner}>
               <img src="/img/gallery/Group 77.png" alt="" />
            </div>
            <div className={s.main__content}>
               <h2>Online Experiences</h2>
               <p>
                  Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
               </p>
            </div>
            <div className={s.main__card}>
               {jokeData}
            </div>
         </main>
      </div>
   )
}
export default Airbnb;