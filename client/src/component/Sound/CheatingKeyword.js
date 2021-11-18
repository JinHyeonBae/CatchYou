
import React, {useEffect, useState,useRef, Fragment} from 'react'




export default function CheatingWord({className, cheat_word}){


    console.log(cheat_word)
    return(
        <div className="cheating_word">
            <h2>현재 부정행위로 의심될 수 있는 단어는</h2>
            {
                cheat_word.map((line)=>{
                    return <h3>{line},</h3>
                })
            }
        </div>
    )

}