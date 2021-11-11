import React, {useEffect, useState, useRef, Fragment} from 'react'


export default function Percentage(props){

    const [ch_per, set_ch_per] = useState(0)
    const [index, set_index] = useState(0)
    const {percent} = props

    useEffect(()=>{
        console.log(percent.length)
        set_index(percent.length-1)
        console.log(percent)
        console.log("length :" , index)
        console.log(percent[index].cheat_percentage)

        set_ch_per(percent[index].cheat_percentage)
    })

    return(
        <div>
            사용자님의 부정행위 확률은
            {ch_per}
        </div>

    )
}