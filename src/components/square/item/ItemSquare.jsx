import React from "react";
import s from "./ItemSquare.module.css"

const ItemSquare = (props)  =>  {

   const styles = {
      backgroundColor: props.on ? "red" : "green"
   }

   return(
      <div onClick={props.toggle} style={styles} className={s.item} key={props.id}>
         {props.id}
      </div>
   )
}

export default ItemSquare