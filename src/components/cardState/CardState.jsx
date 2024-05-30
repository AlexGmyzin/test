import React from "react";
import s from "./CardState.module.css";


const CardState = () => {

   let [isCard, setIsCard] = React.useState({
      name: "John Macclein",
      email:"alex24101997@gmail.com",
      phone:"8 9885 8774 545",
      star: true
   })

   let url = isCard.star ? `star 1.png`: `star2.png`

   function clickToStar() {
      setIsCard(prevCard => ({
         ...prevCard,
         star: !prevCard.star
      }))
   }

   
   return(
      <div className={s.cardState}>
         <div className={s.item}>
            <div className={s.image}>
               <img src= {`${process.env.PUBLIC_URL}/img/gallery/user.png`} alt="" />
            </div>
            <div className={s.star}>
               <img onClick={clickToStar} src={`${process.env.PUBLIC_URL}/img/gallery/${url}`} alt="" />
            </div>
            <h2>{isCard.name}</h2>
            <p>{isCard.email}</p>
            <p>{isCard.phone}</p>
         </div>
      </div>
   )
}
export default CardState