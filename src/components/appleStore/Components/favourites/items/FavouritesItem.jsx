import React from "react";

const FavouritesItem = (props) => {

    const [added, setAdded] = React.useState(false);

   const onClickPlus = () => {
      let title = props.title
      let description = props.description
      let price = props.price
      let img = props.img
      props.onPlus({title,description,price,img});
      setAdded(!added);
      
   }

   const onRemoveFavourite =() => {
      props.onFavorite(props.id)
   }
   

   return(
      <div className="phone__item">
                  {
                    <button className="phone__mod" onClick={onRemoveFavourite}>Удалить из избранного</button>
                  }
                  <div className="phone__image">
                     <img src={props.img} alt="" />
                  </div>
                  <div className="phone__subtitle">{props.title}</div>
                     <p className='phone__description'>{props.description}</p>
                     <p className='phone__price'>Цена</p>
                     <div className="phone__footer">
                        <span>{props.price} руб</span> 
                        <button className={added ? "btnModTwo" : "btnMod"} onClick={onClickPlus}>
                           <img src={added ? "/img/done.png" : "./img/icons8.png"} alt="" />
                        </button>   
                  </div>
               </div>
   )
}

export default FavouritesItem;