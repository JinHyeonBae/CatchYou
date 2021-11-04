import logo from './logo.svg';
import './App.css';

import './component/css/Page.scss'

import axios from 'axios'
import React, {useEffect, useState} from 'react'

import kefir from 'kefir'



function App(){

    const [userState, setUserState] = useState({
      isLoaded : false,
      ur_data : [{
        "width" : 0,
        "height" : 0,
        "vertical" : 0,
        "horizental" : 0
      }]
    })


  // mount 이후
  useEffect(()=>{

    axios.get("http://localhost:5000",
    {headers: {'Access-Control-Allow-Origin': '*'}
    })
      .then(
        (result) => {
          console.log("userState :", userState)
          const { data  }= result;
          console.log("result _ data :", data)
          
          setUserState({
            isLoaded : true,
            ur_data : userState.ur_data.concat(data)
          })
        },
        (error) => {
          setUserState({
            isLoaded: true,
            error
          });
        }
      )
    },[])

  const updateState = (newState) =>{
    console.log("newState: ", newState)
    console.log("Server side event recieved at",new Date())
    setUserState(Object.assign({}, { data: newState }));
  }

    return(
      <div>{userState.ur_data.map((line, index)=>{
          console.log(line)
          return <div>{index} : {line.vertical}</div>
        })}
      </div>
    )
}


export default App;
