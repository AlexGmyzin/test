import React from "react";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
   return(
      <div className={s.sidebar}>
         <ul className={s.list}>
            <li>
               <img src="/img/folders.png" alt="" className={s.icon} />
               <NavLink to='/' className={s.link}>Главня</NavLink>
            </li> 
            <li>
               <img src="/img/folders.png" alt="" className={s.icon} />
               <NavLink to='/store' className={s.link}>Проект интернет магазина</NavLink>
            </li>  
            <li>
               <img src="/img/homepage.png" alt="" className={s.icon} />
               <NavLink to='/content' className="link">Вывод постов медиа с внешнего data файла</NavLink>
            </li>
            <li>
               <img src="/img/news.png" alt="" className={s.icon} />
               <NavLink to='/airbnb' className={s.link}>Новостные карточки с внешнего data файла</NavLink>
            </li>
            <li>
               <img src="/img/conversation.png" alt="" className={s.icon} />
               <NavLink to='/messages' className={s.link}>Сообщения соц сети внешнего data файла</NavLink>
            </li>
            <li>
               <img src="/img/turntable.png" alt="" className={s.icon} />
               <NavLink to='/travel' className={s.link}>Карточки событий с внешнего data файла</NavLink>
            </li>
            <li>
               <img src="/img/folders.png" alt="" className={s.icon} />
               <NavLink to='/joke' className={s.link}>Генератор картинок с возможностью редактирвоания текста</NavLink>
            </li>
            <li>
               <img src="/img/folders.png" alt="" className={s.icon} />
               <NavLink to='/state' className={s.link}>Данные профиля с внешнего data файла</NavLink>
            </li>
            <li>
               <img src="/img/folders.png" alt="" className={s.icon} />
               <NavLink to='/square' className={s.link}>Практика JS и Form</NavLink>
            </li>
            <li>
               <img src="/img/folders.png" alt="" className={s.icon} />
               <NavLink to='/java' className={s.link}>Проект web приложения Spring Framework</NavLink>
            </li>
             
         </ul>
      </div>
   )
}
export default Sidebar;
