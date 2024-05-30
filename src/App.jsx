import './App.css';
import React from 'react';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Messages from './components/messages/Messages';
import Airbnb from './components/airbnb/Airbnb';
import Travel from './components/travelJournal/Travel'
import Joke from './components/jokeMems/Joke'
import CardState from './components/cardState/CardState';
import Square from './components/square/Square';
import Store from './components/appleStore/Store';
import Preview from './components/preview/Preview';
import Java from './components/java/Java';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <Header/>
          <div className="middle">
            <Sidebar />
            <Routes>
              <Route path='/' element={
                  <Preview/>
                }/>  
                <Route path='/messages' element={
                  <Messages/> 
                }/>  
                <Route path='/airbnb' element={
                  <Airbnb/> 
                }/>    
                <Route path='/travel' element={
                  <Travel/> 
                }/>  
                <Route path='/joke' element={
                  <Joke/> 
                }/>   
                <Route path='/state' element={
                  <CardState/> 
                }/>    
                <Route path='/square' element={
                  <Square/> 
                }/> 
                <Route path='/store' element={
                  <Store/>
                }/>   
                <Route path='/content' element={
                  <Content />
                }/>  
                <Route path='/java' element={
                  <Java />
                }/>    
            </Routes>  

          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
