import React from "react";
import s from "./Joke.module.css";
import mems from "../../data/joke"

const Joke = () => {

   const [isUrl, setIsUrl] = React.useState( {
      topText:'',
      bottomText: '',
      randomImage: 'https://cs.pikabu.ru/images/big_size_comm/2013-06_1/13703478506268.jpeg'
   });

   const [allMemeImage, setAllMemeImage] = React.useState(mems)



   let url = "";
   function getMem() {
      let random = Math.floor(Math.random() * ((mems.length+1) - 0)) + 0;
      mems.map(item=> {
         if(item.id == random) {
            url = item.url;
            setIsUrl(prevMem => ({
               ...prevMem,
               randomImage: url
            }))
         }
         
        
      })
   }
   

   const [isMassive, setIsMassive] = React.useState([]);

   function goAhead() {
      setIsMassive(prevMass => [...prevMass, `Item ${isMassive.length + 1}`])
   }

   const mapMassive = isMassive.map(item => {
      return <p>{item}</p>
   })

   
   
   return(
      <div className={s.joke}>
         <div className={s.header}>
            <p>mems generator.</p>  
         </div>
         <div className={s.content}>
            <div className={s.form}>
               <div className={s.input}>
                  <input placeholder="Input text" type="text" />
                  <input placeholder="Input text"  type="text" />
               </div>
               <button onClick={getMem}>Get a new meme image 🖼</button>
            </div>  
            <div className={s.image}>
                <img src={isUrl.randomImage} alt="" />
            </div>
         </div>
         <div className={s.items}>
            <div className={s.form}>
               <button onClick={goAhead}>Add Item</button>
            </div>
            <div className="">
               {mapMassive}
            </div>
         </div>
      </div>
   )
}
export default Joke