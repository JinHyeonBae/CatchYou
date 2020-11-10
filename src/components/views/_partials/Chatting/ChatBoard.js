import React, { createElement, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import SendChat from "./SendChat"
import "./chatContainer.scss";
import { GET_CHAT } from "./gqls";
import { useQuery } from "@apollo/client";
import { InMemoryCache } from "@apollo/react-hooks";
import { gql } from "@apollo/client";


function ChatBoard() {
    const { loading, error, data } = useQuery(GET_CHAT,{ //promise
        onCompleted(){
            if(data){
               const {topic} = data;
               const {topicDes, topicName, topicType} = topic;
               
               topicTitle = topicName;
               const topicAcessType = document.createElement('p');
               const topicDescription = document.createElement('p');
               
               topicAcessType.innerHTML = topicType;
               topicDescription.innerHTML = topicDes;
               titleRef.current.appendChild(topicAcessType);
               titleRef.current.appendChild(topicDescription);
            }
        }
    });
    console.log("loading :", loading);
    console.log("error :", error);
    
    const titleRef = useRef();
    let topicTitle;

    return (
        <div className="content-side col-lg-9 col-md-12 col-sm-12">
            <div className="sec-title" ref={titleRef}>
                <button>즐겨찾기</button>
                <div title={topicTitle}>
                    <h4>{topicTitle}</h4>
                </div>
                <button>토픽설명</button>
            </div> {/*top*/}

            <div className="displayChatting">
            </div>{/*middle*/}

            <div className="featured-section">
                <div className="feature-block-two col-lg-6 col-md-12 col-sm-12">
                    <SendChat />
                </div>
            </div> {/*bottom*/}
        </div>
    )
}

export default ChatBoard;