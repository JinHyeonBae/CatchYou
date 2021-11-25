import { useState } from "react"

import './sound.css'




export default function UserSaying({className, word}){

    return(
        <div className="saying_word">
            <h2>현재 인식된 말소리는</h2>
            {word}
        </div>
    )

}