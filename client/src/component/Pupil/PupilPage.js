
import Percentage from "./Percentage"
import DrawPoints from "./Draw"

import React, {useEffect, useState,useRef, Fragment} from 'react'
import './points.css'
import './cheating_system.css'
import axios from "axios"




export default function Pupil(){

    console.log("pip")

    const [userState, setUserState] = useState({
        isLoaded : false,
        ur_data : [{
          "width" : 0,
          "height" : 0,
          "left_x" : -50,
          "left_y" : 0,
          "right_x" : -70,
          "right_y" : 0,
          "cheat_percentage" : 0
        }]
      })

    // mount 이후
    useEffect(()=>{
      console.log("herhere")
      axios.get("http://localhost:5000/pupil",{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
          'Access-Control-Max-Age' : 3600,
          'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization'
          }
      })
      //.then(r => r.json())
      .then(
          (result) => {
            const { data  }= result;
            console.log("result :", result)
            setUserState(prev=> {return {
              isLoaded : true,
              ur_data : [...prev.ur_data, data]
            }})

          },
          (error) => {
            console.error(error)
            setUserState({
              isLoaded: true,
              error
            });
          }
        )
        
      })
  
    const updateState = (newState) =>{
      console.log("newState: ", newState)
      console.log("Server side event received at",new Date())
      setUserState(Object.assign({}, { data: newState }));
    }
  
      return(
        <Fragment>
          <div id="system-container">
            <DrawPoints className="points" ur_data={userState.ur_data}/>
            <Percentage className="percentage" percent={userState.ur_data} />
          </div>
        </Fragment>
      )
  }
