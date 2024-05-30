import s from "./Store.module.css";
import React from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Header from './Components/header/Header';
import Home from './Components/Home';
import Footer from './Components/footer/Footer';
import Cart from './Components/cart/Cart';
import Favourites from './Components/favourites/Favourites'

export const AppContext = React.createContext({})

function Store() {
 

   //Стейт хранит информацию о товарах на сервере.
   const [products, setProducts] = React.useState([]);
   //Стейт хранит информацию открыта ли корзина
   const [cartOpen, setCartOpen] = React.useState(false);
   //Стейт хранит информацию, что добавили в корзину
   const [cartItems, setCartItems] = React.useState([]);
   //Стейт хранит информацию, что добавили в избранное
   const [favouriteItems, setFavouriteItems] = React.useState([]);
   //Стейт хранит информацию о введенных символах в поиске
   const [search, setSearch] = React.useState('');

   //Подключение бд с сервера
   React.useEffect(()=> {
      
      async function asyncAxios() {
         const cartData = await axios.get('https://635236319d64d7c71310fa57.mockapi.io/Cart')
         const favouriteData = await axios.get('https://635236319d64d7c71310fa57.mockapi.io/favourites')
         const productData = await axios.get('https://635236319d64d7c71310fa57.mockapi.io/products')


         setCartItems(cartData.data)
         setFavouriteItems(favouriteData.data)
         setProducts(productData.data)

      }
      
      asyncAxios()
   }, [])

   //Функция по удалению кнопкой информации из бд по конкретному товару в корзине
   const onRemoveCartItem = (id) => {
      axios.delete(`https://635236319d64d7c71310fa57.mockapi.io/Cart/${id}`)
      setCartItems((prev) => prev.filter(item => item.id !== id))
      
   }

   //Проверка на наличие отметки(галочки) на товаре
   const itemAdded = (id) => {
      return cartItems.some((objCart) => objCart.id === id)
   }
   const itemFavour = (id) => {
      return favouriteItems.some((objFavour) => objFavour.id === id)
   }

   return(
      <AppContext.Provider value={{products,
                                  cartItems,
                                  favouriteItems,
                                  setFavouriteItems,
                                  setCartItems,
                                  setProducts,
                                  itemAdded,
                                  itemFavour}}>
         <div className={s.App}>
            {cartOpen ? <Cart onRemoveCartItem={onRemoveCartItem}
                              cartItems={cartItems}
                              closeCart={() => setCartOpen(false)}
                              totalPrice={
                                 cartItems.reduce((totalElements,objPrice) => totalElements + objPrice.price, 0)
                              }/> : null} 

            
            <Header openCart={ () => setCartOpen(true)} cartItems={cartItems}></Header>
            <Routes>
               <Route path='/favourites' element={
                  <Favourites/>
               }
               />
               
               <Route path='/' element={
                  <Home 
                        items={products}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        search={search}
                        setSearch={setSearch}
                        favouriteItems={favouriteItems}   
                        setFavouriteItems={setFavouriteItems}
                        >
                  
                  </Home>
               }
               />
            </Routes> 
            <Footer></Footer>    
         </div>
      </AppContext.Provider>      
   );
}

export default Store;
