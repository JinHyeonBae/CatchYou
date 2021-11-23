
import React, {useEffect, useState,useRef, Fragment} from 'react'
import './yolo.css'
import '../cheating_system.css'

import {
    geometry,
    Image,
    Surface,
    Path,
    Text,
    Group
} from '@progress/kendo-drawing';
 
const {
   Rect,
   Point,
   Size,
   transform
} = geometry;

export default function PersonLocation(props){
    
    const recRef = useRef()
    let ctx = null;
    
    console.log(props)

    
    const width = window.screen.width
    const height = window.screen.height

    const canvasStyle = {
        'width' : width / 2.5,
        'height' : height /2.5,
        'margin' : 0,
        'border': '4px solid black'
    }


    useEffect(() => {

      // dynamically assign the width and height to canvas
      const canvasEle = recRef.current;
      canvasEle.width = canvasEle.clientWidth;
      canvasEle.height = canvasEle.clientHeight;
   
      // get context of the canvas
      ctx = canvasEle.getContext("2d");
      drawRect()
    });

    const drawRect = (style = {}) => {
        const { x, y, w, h } = props.detectionSize;
        console.log(x)
        const { borderColor = 'red', borderWidth = 5 } = style;
       
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.rect(x, y, w, h);
        ctx.stroke();
    }

    return(
        <div className="person_detection">
            현재 인식된 사람의 위치
            <canvas className="yolo_canvas" ref={recRef} style={canvasStyle}>
            </canvas>
        </div>
    )

}