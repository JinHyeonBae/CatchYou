
import React, {useEffect, useState,useRef, Fragment} from 'react'
import './points.css'


export default function DrawPoints(props) {

    console.log(props)
    const { ur_data  } = props
    console.log(ur_data)

    return(
        <div className="points">
             <div className="left_point"></div> : 왼쪽 눈 <div className="right_point"></div> : 오른쪽 눈
            <div className="points_canvas">
                {ur_data.map((ur, index)=>{
                    console.log(ur)
                    if(index == 0) return;
                    return( 
                        <Fragment>
                            <div className="left_point" style={{'left' : ur.left_x, 'top' : ur.left_y}}></div>
                            <div className="right_point" style={{'left' : ur.right_x, 'top' : ur.right_y}}></div>
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}