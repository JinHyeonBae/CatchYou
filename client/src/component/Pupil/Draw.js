
import React, {useEffect, useState,useRef, Fragment} from 'react'
import './points.css'


export default function DrawPoints(props) {

    const {left_x, left_y, right_x, right_y} = props.ur_data
 

    return(
        <div className="points">
            초록색 : 왼쪽 눈, 보라색 : 오른쪽 눈
            <div className="points_canvas">
                <div className="left_point" style={{'left' : left_x, 'top' : left_y}}></div>
                <div className="right_point" style={{'left' : right_x, 'top' : right_y}}></div>
            </div>
        </div>
    )
}