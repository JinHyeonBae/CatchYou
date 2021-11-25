
import Percentage from "./Percentage"
import DrawPoints from "./Draw"

import React, {useEffect, useState,useRef, Fragment} from 'react'
import './points.css'
import axios from "axios"




export default function Pupil(){

    const [userState, setUserState] = useState({
        isLoaded : false,
        cheat_percentage : 0,
        ur_data : [{
          "width" : 0,
          "height" : 0,
          "left_x" : -50,
          "left_y" : 0,
          "right_x" : -70,
          "right_y" : 0,
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
            console.log("result :", result)
            const { data  }= result;
            const {cheat_percentage, ...other} = data
            console.log(cheat_percentage)
            console.log("c :", typeof(other))
            // setUserState(prev => {
            //   console.log(prev.ur_data)
            //   return {
            //     isLoaded : true,
            //     ur_data : [...prev.ur_data, other],
            //     cheat_percentage : cheat_percentage
            //   }
            // })
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

  
    return(
        <Fragment>
          <div id="system-container">
            <DrawPoints className="points" ur_data={userState.ur_data}/>
            <Percentage className="percentage" percentage={userState.cheat_percentage} />
          </div>
        </Fragment>
      )
  }
