import React from "react";
import s from "./Content.module.css";
import Item from "./Item/Item";

const Content = () => {
   return(
      <div className={s.content}>
         <Item logo="A"
               title="æsthetics"
               subtitle="Советую ознакомиться))"
               image={`${process.env.PUBLIC_URL}/img/gallery/first.jpg`}
               count="24"
               />
         <Item logo="D"
               title="TheDUMP"
               subtitle="Атмосфера наслаждения"
               image={`${process.env.PUBLIC_URL}/img/gallery/third.jpg`}
               count="57"
               color="s.green"
               />
         
      </div>
   )
}

export default Content;