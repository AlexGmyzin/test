import React from "react";
import { AppContext } from "../../../Store";

const Card = (props) => {

   const context = React.useContext(AppContext);

   //Состояние для изменения картинки Теперь в App
   // const [added, setAdded] = React.useState(props.isAdded);
   // const [added2, setAdded2] = React.useState(props.isFavour);

   const onClickPlus = () => {
      let id = props.id
      let myId = props.myId
      let title = props.title
      let description = props.description
      let price = props.price
      let img = props.img
      props.onPlus({id, myId, title,description,price,img});
      console.log(context.itemAdded(props.id))
      console.log(context.cartItems)
      // setAdded(!added);
      
   }

   const onClickFavourite =() => {
      let id = props.id
      let myId = props.myId
      let title = props.title
      let description = props.description
      let price = props.price
      let img = props.img
      props.onFavourite({id, myId,title,description,price,img});

      // setAdded2(!added2);
   }
   

   return(
      <div className="phone__item">
         {/* {
            context.itemFavour(props.id) === true ? <button className="phone__mod" onClick={onClickFavourite}>Удалить из избранного</button> :
            <button className="phone__button" onClick={onClickFavourite}>Добавить в избранное</button>
         } */}
         
         <div className="phone__image">
            <img src={`${process.env.PUBLIC_URL}` + props.img} alt="" />
         </div>
         <div className="phone__subtitle">{props.title}</div>
            <p className='phone__description'>{props.description}</p>
            <p className='phone__price'>Цена</p>
               <div className="phone__footer">
                  <span>{props.price} руб</span> 
                  <button className={ context.itemAdded(props.id) ? "btnModTwo" : "btnMod"} onClick={onClickPlus}>
                     <img src={context.itemAdded(props.id) ? `${process.env.PUBLIC_URL}/img/done.png` : `${process.env.PUBLIC_URL}/img/icons8.png` } alt="" /> 
                  </button>   
            </div>    
      </div> 

   )
}

export default Card;