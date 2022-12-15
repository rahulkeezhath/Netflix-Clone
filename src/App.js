import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { action, comedy, horror, originals, romance } from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} name='Netflix Originals'/>
     {/*  isSmall is a size it is default in true state. */}
      <RowPost url={action} name='Action' isSmall/> 
      <RowPost url={horror} name='Horror' isSmall/> 
      <RowPost url={romance} name='Romance' isSmall/> 
      <RowPost url={comedy} name='Comedy' isSmall/> 
    </div>
  );
}

export default App;
