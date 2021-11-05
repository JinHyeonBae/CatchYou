
import React, {useEffect, useState,useRef, Fragment} from 'react'
import './points.css'


export default function DrawPoints(props) {

    console.log(props.ur_data)
    const {left_x, left_y, right_x, right_y} = props.ur_data
    
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     console.log("canvas :", canvas)
    //     if (!canvas) return;
        
    //     let context_l = canvas.getContext('2d');
    //     let context_r = canvas.getContext('2d');

    //     // to increase smoothing for numbers with decimal part
    //     let point_l_x = Math.round(left_x)/10;
    //     let point_l_y = Math.round(left_y)/10;
        
    //     let point_r_x = Math.round(right_x)/10;
    //     let point_r_y = Math.round(right_y)/10;

    //     let size = 5;
    //     console.log(typeof(point_l_x))
    
    //     context_l.beginPath();
    //     context_l.fillStyle = 'green';
    //     context_l.arc(point_l_x, point_l_y, size, 0 * Math.PI, 2 * Math.PI);
    //     context_l.fill();
    
    //     context_r.beginPath();
    //     context_r.fillStyle = 'red';
    //     context_r.arc(point_r_x, point_r_y, size, 0 * Math.PI, 2 * Math.PI);
    //     context_r.fill();

    //     // use this to draw something on every redraw of the component
    //   });


    return(
        <Fragment>
            <div className="left_point" style={{'left' : left_x, 'top' : left_y}}></div>
    
            <div className="right_point" style={{'left' : right_x, 'top' : right_y}}></div>
        </Fragment>
    )
}