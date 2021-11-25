
import React, {useEffect, useState,useRef, Fragment} from 'react'
import './points.css'


export default function DrawPoints(props) {

    console.log(props)
    const { ur_data  } = props
    console.log(ur_data)

    const width = window.screen.width
    const height = window.screen.height

    const canvasStyle = {
        'width' : width / 2.5,
        'height' : height /2.5,
        'margin' : 0,
        'border': '4px solid black'
    }



    return(
        <div className="points">
            <h4 className="explain_header">
                <div className="left_point" ></div> <h2>: 왼쪽 눈</h2> 
                <div className="right_point"></div> <h2>: 오른쪽 눈</h2>
            </h4>
            <div className="points_canvas" style={canvasStyle}>
                {ur_data? ur_data.map((ur, index)=>{
                    console.log(ur)
                    if(index == 0) return;
                    return(
                        <Fragment>
                            <div className="left_point" style={{'left' : ur.left_x /2, 'top' : ur.left_y/2}}></div>
                            <div className="right_point" style={{'left' : ur.right_x/2, 'top' : ur.right_y/2}}></div>
                        </Fragment>
                    )
                }) : ''}
            </div>
        </div>
    )
}