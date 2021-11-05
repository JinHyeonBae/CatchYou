import logo from './logo.svg';
import './App.css';

import './component/css/Page.scss'

import axios from 'axios'
import React, {useEffect, useState, useRef} from 'react'

import kefir from 'kefir'

import DrawPoints from './Draw'





function App(){

  const canvasRef = useRef()
  const [userState, setUserState] = useState({
      isLoaded : false,
      ur_data : [{
        "width" : 0,
        "height" : 0,
        "left_x" : -10,
        "left_y" : 0,
        "right_x" : -10,
        "right_y" : 0
      }]
    })


  // mount 이후
  useEffect(()=>{

    axios.get("http://localhost:5000",{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Max-Age' : 3600,
        'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization'
        }
    })
      .then(
        (result) => {
          const { data  }= result;
          console.log("result :", result)
          console.log("result _ data :", data)
          console.log("useState :", userState.ur_data)
          setUserState(prev=> {return {
            isLoaded : true,
            ur_data : [...prev.ur_data, data]
          }})
        },
        (error) => {
          setUserState({
            isLoaded: true,
            error
          });
        }
      )
    })

  const updateState = (newState) =>{
    console.log("newState: ", newState)
    console.log("Server side event recieved at",new Date())
    setUserState(Object.assign({}, { data: newState }));
  }

    return(
      <div>
        <div id="pupil-canvas" ref = {canvasRef} style={{'border' : '5px solid black', 'width' :480, 'height' :720 }}>
          {userState.ur_data.map((ur, index)=>{
              console.log(ur)
              return <DrawPoints key={index} ur_data={ur} ></DrawPoints>
          })}
        </div>
      </div>
    )
}


export default App;
