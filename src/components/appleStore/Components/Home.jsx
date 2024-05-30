import Banner from './banner/Banner';
import Text from './text/Text';
import Shop from './shop/Shop';

const Home = (props) => {
    return(
        <div className="">
                <Banner></Banner>
               <Text></Text>
               <Shop items={props.items}
                     cartItems={props.cartItems}
                     setCartItems={props.setCartItems}
                     search={props.search}
                     setSearch={props.setSearch}
                     favouriteItems={props.favouriteItems}   
                     setFavouriteItems={props.setFavouriteItems}
                     
                     >
               </Shop>
        </div>
    )
}

export default Home