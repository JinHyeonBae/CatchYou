import logo from './logo.svg';
import './App.css';


import axios from 'axios'
import React, {useEffect, useState, useRef, Fragment} from 'react'
import Header from './component/Header';
import SystemButton from './component/SystemButton'



function App(){
  return(
    <div>
      <Header/>
      <SystemButton />
      
  </div>
  )
}
export default App;
