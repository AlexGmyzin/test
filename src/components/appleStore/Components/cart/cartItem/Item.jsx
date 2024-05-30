import style from "./item.module.css"

const Item = (props) => {
   return(
      <div className={style.cart__item}>
         <div className={style.cart__image}>
            <img src={props.img} alt="" />
         </div>
         <div className={style.cart__text}>
               <p>{props.title}</p>
               <p>{props.price} руб</p>
            </div>
         <div className={style.cart__right}>
            <button onClick={() => props.onRemoveCartItem(props.id)} className="btn">X</button>
         </div>         
      </div>
   )
}
export default Item;