import logo from './logo.svg';
import './App.css';


import axios from 'axios'
import React, {useEffect, useState, useRef, Fragment, Suspense, lazy} from 'react'
import Header from './component/Header';
import SystemButton from './component/SystemButton'
import {BrowserRouter, Route, Switch,Routes} from 'react-router-dom'

import Pupil from './component/Pupil/PupilPage';
import Sound from './component/Sound/SoundPage'
import Yolo from './component/Yolo/YoloPage'


const componentStyle={

}


function App(){
  return(
    <div className="top">
      <Header/>
      <SystemButton />
      <div className="component">
        <BrowserRouter>
          <Routes>
            <Route path="/pupil" element={<Pupil/>}/>
            <Route path="/Sound" element={<Sound/>}/> 
            <Route path="/yolo" element={<Yolo/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  </div>
  )
}
export default App;
