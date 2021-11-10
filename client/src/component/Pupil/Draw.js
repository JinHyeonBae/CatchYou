
import React, {useEffect, useState,useRef, Fragment} from 'react'
import './points.css'


export default function DrawPoints(props) {

    console.log(props.ur_data)
    const {left_x, left_y, right_x, right_y} = props.ur_data
 

    return(
        <Fragment>
            <div className="left_point" style={{'left' : left_x, 'top' : left_y}}></div>
    
            <div className="right_point" style={{'left' : right_x, 'top' : right_y}}></div>
        </Fragment>
    )
}