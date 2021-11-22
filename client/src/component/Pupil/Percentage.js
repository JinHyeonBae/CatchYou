import React, {useEffect, useState, useRef, Fragment} from 'react'


export default function Percentage(props){

    const {percentage, className} = props
    console.log(percentage)
    return(
        <div className={className}>
            <h2>사용자님의 부정행위 확률은</h2>
            <h3>{percentage}</h3>
        </div>

    )
}