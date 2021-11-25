
import React, {useEffect, useState,useRef, Fragment} from 'react'
import axios from "axios"
import PersonLocation from "./PersonLocation"
import '../cheating_system.css'
import PersonCounting from './PersonCounting'




export default function Yolo(){

    console.log("I am Enter!")

    const [userLocation, setUserLocation] = useState({
        x : 0,
        y : 0,
        w : 0,
        h : 0,
        number_of_person : 0
    })

    useEffect(()=>{
        axios.get("http://localhost:5000/person",{
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            'Access-Control-Max-Age' : 3600,
            'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization'
            }
        })
        .then(
            (result) => {
                const { x,y,h,w, number_of_person  }= result.data;
                console.log("result :", result)
        
                setUserLocation({
                    x : x,
                    y : y,
                    w : w,
                    h : h,
                    number_of_person : number_of_person
                })
            },
            (error) => {
              console.error(error)
            //   setUserState({
            //     isLoaded: true,
            //     error
            //   });
            }
          )
        })
    

    return(
        <div id="system-container">
            <PersonLocation detectionSize={userLocation}/>
            <PersonCounting personDetection={userLocation}/>
        </div>
    )
}