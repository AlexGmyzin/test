import axios from "axios";
import React from "react";
import FavouritesItem from "./items/FavouritesItem";
import { AppContext } from "../../Store";


const Favourites = (props) => {

   const context = React.useContext(AppContext);

    const onAddToCard =(obj) => {
        axios.post('https://635236319d64d7c71310fa57.mockapi.io/Cart', obj)
        context.setCartItems([...context.cartItems, obj]);
        
     }
     const onRemoveFavour = (id) => {
        axios.delete(`https://635236319d64d7c71310fa57.mockapi.io/favourites/${id}`)
        context.setFavouriteItems((prev) => prev.filter(item => item.id !== id))
     }
    return(
        <div className="phone">
              <h2>Избранные товары</h2>
              <div className="phone__row">
                 {
                    context.favouriteItems.map( obj => {
                       return(
                          <div className="">
                              <FavouritesItem
                                 key={obj.id}
                                 id={obj.id}
                                 title={obj.title}
                                 description={obj.description}
                                 price={obj.price}
                                 img={obj.img}
                                 onAddToCard={onAddToCard}
                                 onPlus={(cartObj) => {
                                 onAddToCard(cartObj);
                                 }}
                                 onFavorite={
                                    (id) => {
                                       onRemoveFavour(id)
                                    }
                                 }
                                 >
                              </FavouritesItem>
                          </div>
                       )
                    })
                 }
              </div>
        </div>
     )
}

export default Favourites