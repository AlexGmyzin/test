import React from "react";
import s from "./Header.module.css";


const Header = () => {
   return(
      <div className={s.header}>
         <div className={s.logo}>
            <span>🡻Проекты на React🡻</span>
         </div>
         <ul className={s.list}>
            <li className={s.link}><a href="#">Title#1</a> </li>
            <li className={s.link}><a href="#">Title#2</a></li>
            <li className={s.link}><a href="#">Title#3</a></li>
            <li className={s.link}><a href="#">Title#4</a></li>
         </ul>
         <div className={s.logout}>
            <img src="../" alt="" />
         </div>
      </div>
   )
}

export default Header;