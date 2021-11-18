import React, {useEffect, useState, useRef, Fragment} from 'react'
import axios from 'axios'
import '../cheating_system.css'

import CheatingWord from './CheatingKeyword'
import UserSaying from './UserSaying'

export default function Sound(){

    const [userData, setUserData] = useState({
        error : "",
        success : false,
        transcription : "",
        cheat_word : []
    })

    useEffect(()=>{
        axios.get("http://localhost:5000/sound",{
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
                setUserData({
                    transcription : data['transcription'],
                    success       : data['success'],
                    error         : data['error'],
                    cheat_word    : data['cheating_word']
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
            <UserSaying className="saying_word" word={userData.transcription}/>
            <CheatingWord className="cheating_word" cheat_word={userData.cheat_word}/>
        </div>
    )

}