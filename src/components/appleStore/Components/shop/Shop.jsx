
import Card from "./card/Card";
import axios from 'axios';

const Shop = (props) => {

   const onAddToCard = async (obj) => {
      
      try{
         const findCartItems = props.cartItems.find(cartItem => cartItem.myId === obj.myId)

         if(findCartItems) {
            axios.delete(`https://635236319d64d7c71310fa57.mockapi.io/Cart/${findCartItems.id}`)
            props.setCartItems(prev => prev.filter(cartItem => cartItem.myId !== obj.myId))
         }else {
            const {data} = await axios.post('https://635236319d64d7c71310fa57.mockapi.io/Cart', obj)
            props.setCartItems([...props.cartItems, data]);
         }
      }catch {
         alert('Не удалось')
      }
      
   }
   const onAddToFavor = async (obj2) => {
      const findFavouriteItems = props.favouriteItems.find(cartFavourite => cartFavourite.myId === obj2.myId)
      try{
         if(findFavouriteItems) {
            axios.delete(`https://635236319d64d7c71310fa57.mockapi.io/favourites/${findFavouriteItems.id}`)
            props.setFavouriteItems(prev => prev.filter(cartFav => cartFav.myId !== obj2.myId))
         }else {
            const {data} = await axios.post('https://635236319d64d7c71310fa57.mockapi.io/favourites', obj2)
            props.setFavouriteItems([...props.favouriteItems, data]);
         }
      }catch {
         alert('Не удалось')
      }
     
      
   }

   const onSearchInput = (inputValue) => {
      props.setSearch(inputValue.target.value)
   }



   return(
      <div className="phone">
            <div className="phone__head">
               <div className="phone__title">
                  <h2 className="phone__title title">{props.search ? 'Поиск по запросу: ' + props.search: 'Все смартфоны ' }</h2>
               </div>
               <div className="phone__search">
                  <img src="/img/search.png" alt="" />
                  <input onChange={onSearchInput} className="phone__input" placeholder="Поиск" />
               </div>
            </div>
            <div className="phone__row">
               {
                  props.items.filter((item)=>item.title.toLowerCase().includes(props.search.toLowerCase())).map( (obj,index) => {
                     return(
                        <Card
                           key={index}
                           
                           {...obj}
                           
                           // isAdded={props.cartItems.some((objAdded) => objAdded.myId === obj.myId)}
                           
                           // isFavour={props.favouriteItems.some((objFavour) => objFavour.myId === obj.myId)}
                           
                           onAddToCard={onAddToCard}
                           onPlus={(cartObj) => {
                           onAddToCard(cartObj);
                           }}
                           onFavourite={(cartObj) => {
                              onAddToFavor(cartObj);
                           }}
                           >
                        </Card>
                     )
                  })
               }
               

            </div>
      </div>
   )
}
export default Shop;