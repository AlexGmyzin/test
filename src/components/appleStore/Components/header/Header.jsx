import style from "./header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
   return(
      <header>
               <Link to='/'>
                  <h1 className={style.logo}>ITECH</h1>
               </Link>
            
            <nav>
               {/* <Link to='/airbnb'>
                  <button href="" className={style.nav__item} >Избранное</button>
               </Link> */}
               <span  href="" className={style.nav__item} onClick={props.openCart}>Корзина</span>
               <span className={style.nav__count}>{props.cartItems.length}</span>
            </nav>
         </header> 
   )
}
export default Header;