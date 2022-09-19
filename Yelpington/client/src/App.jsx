import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Description from './components/Description';
import { useState, useEffect} from "react"


function App() {
  
  let url = "http://localhost:4000/"
  const [resturaunts, setResturaunts] = useState([])
  async function grabAPI(){
    const response = await fetch (url)
    const data = await response.json()
    setResturaunts(data)
  }
  useEffect((e) => {
    grabAPI()
}, []);
  
  return (
  <>
  <Header />
  <div id = "wrapper-map">
      <div id = "rest-list"><Navbar resturaunts = {resturaunts}/></div>
      <div id = "description"><Description resturaunts = {resturaunts}/></div>
      <Map resturaunts = {resturaunts} />
  </div>
  <Footer />
  </>
  );
}

export default App;
