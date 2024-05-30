import Item from "./cartItem/Item";

import style from "./cart.module.css";


const Cart = (props) => {
   return (
      <div className={style.overlay}>
            <div className={style.cart}>
               <div className={style.cart__row}>
                  <h2 className={style.cart__title}>Корзина</h2>
                  <button className="btn cart__btn" onClick={props.closeCart}>X</button>
               </div>    

               {
                  props.cartItems.length > 0 ? 
                  <div className={style.cart__list}>
                  {
                     props.cartItems.map( obj2 => {
                        return(
                           <Item id={obj2.id} key={obj2.id} title={obj2.title} price={obj2.price} img={obj2.img} onRemoveCartItem={props.onRemoveCartItem} ></Item>
                        )   
                     })
                  }
               </div>
                  : <h2>В корзине нет товаров</h2> 
               }

                    
               <div className={style.cart__footer}>
                  <div className={style.cart__price}>
                     <div>Итог:</div>
                     <div>{props.totalPrice} руб.</div>
                  </div>
                  <div className={style.cart__buy}>
                     <button className={style.cart__btnThree}>Заказать</button>
                  </div>
               </div>   
            </div>
         </div>
   )
}

export default Cart;