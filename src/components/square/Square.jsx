import React from "react";
import s from "./Square.module.css";
import squareData from "../../data/square"
import ItemSquare from "./item/ItemSquare";

const Square = () => {

   const [squareMass, setSquereMass] = React.useState(squareData);

   const squareElem = squareMass.map(item => (
      <ItemSquare 
            toggle={() => toggle(item.id)} 
            key={item.id} 
            on={item.on}
            />
   ))

  function toggle(id) {
   setSquereMass(prevMas => {
      return prevMas.map((item) => {
         return item.id == id ? {...item, on: !item.on} : item
      })
   })
  }

  //Работа с инпутами

  const [inputName, setInputName] = React.useState({
   firstName: "",
   lastName: "",
   email: "",
   comments: "",
   isFriendly: false,
   status: "",
   favColour:"",
   secondEmail: "",
   secondPass: "",
   confirmPass: "",
   onNews: false

  });

  function myName(event)  {
   const {name, value, type, checked} = event.target;
   setInputName(prevForm => {
      return {
         ...prevForm,
         [name] : type ==="checkbox" ? checked : value
      }
   })
  }


  function onClickSubmit(event) {
   event.preventDefault();
   if(event.target.secondPass.value == event.target.confirmPass.value) {
      console.log("success")
   }else {
      console.log("password to not match")
   }

   if(inputName.onNews == true) {
      console.log("thank you ")
   }
  }

   return(
     <div className={s.square}>
         {squareElem}
         <div className={s.form}>
            <form action="">
               <input value={inputName.firstName} name="firstName" type="text" placeholder="Input name" onChange={myName} /> Input Your Name
               <input value={inputName.lastName} name="lastName" type="text" placeholder="Input LastName" onChange={myName} /> Input Your Last Name
               <input value={inputName.email} name="email" type="text" placeholder="Input Email" onChange={myName} /> Input Your Email
               <textarea value={inputName.comments} name="comments" placeholder="Input comments" onChange={myName} />
               <input type="checkbox" checked={inputName.isFriendly} id="isFriendly" name="isFriendly" onChange={myName} />
               <label htmlFor="isFriendly">Are you guy?</label>
               <fieldset>
                  <legend>Choose your employement status</legend>

                  <input checked={inputName.status === "unemployed"} type="radio" id="unemployed" name="status" value="unemployed" onChange={myName} />
                  <label htmlFor="unemployed">Unemployed</label>

                  <input checked={inputName.status === "part-time"} type="radio" id="part-time" name="status" value="part-time" onChange={myName} />
                  <label htmlFor="part-time">Part-time</label>

                  <input checked={inputName.status === "full-time"} type="radio" id="full-time" name="status" value="full-time" onChange={myName}/>
                  <label htmlFor="full-time">Full-time</label>
               </fieldset>
               <label htmlFor="favColour">What's your fav favColour?</label>
               <select name="favColour" value={inputName.favColour} id="favColour" onChange={myName}>
                  <option value="">---Choose---</option>
                  <option value="red">red</option>
                  <option value="blue">blue</option>
                  <option value="dark">dark</option>
                  <option value="green">green</option>
                  <option value="pink">pink</option>
               </select>
            </form>
         </div>  
         <form className={s.form} onSubmit={onClickSubmit}>
            <label htmlFor="secondName">Input your email</label>
            <input type="text" placeholder="email" id="secondEmail" name="secondEmail" onChange={myName} value={inputName.secondEmail} />
            <label htmlFor="secondPass">Input your pass</label>
            <input type="text" placeholder="password" id="secondPass" name="secondPass" onChange={myName} value={inputName.secondPass} />
            <label htmlFor="confirmPass">Confirm your password</label>
            <input type="text" placeholder="Confirm password" id="confirmPass" name="confirmPass" onChange={myName} value={inputName.confirmPass} />
            <input type="checkbox" id="onNews" name="onNews" checked={inputName.onNews} onChange={myName} />
            <label htmlFor="onNews">Do you want get a news?</label>
            <button>Sign Up</button>

         </form>
     </div>
   )
}
export default Square