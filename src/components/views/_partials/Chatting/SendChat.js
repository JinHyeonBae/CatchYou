import React, { useRef, useState, useLayoutEffect, useMutation } from "react";
import { withRouter } from "react-router-dom";
import "./chatContainer.scss";
import { ADD_CHAT } from './gqls';

function SendChat(props) {

    const [chatContent, setChatContent] = useState("");
    // const [addChat, {loading, error}] = useMutation(ADD_CHAT);
    //loading은 mutation 실행 중 버튼을 사용할 수 없도록 disabled 처리
    //useMutation은 tuple을 받아와야함
    const [ReadySubmit, IsReadySubmit] = useState(false);
    const inputRef = useRef();

    //if(loading) return <p>로딩 중</p>
    //if(error) return <p>에러:(</p>
    const handleClick = () => {
        //addChat({variables : {chatContent}});
        setChatContent("");
    }

    return (
        <div className="row clearfix">
            <button className="uploadBtn">+</button>
            <div className="chatWritingPartBorder">
                <textarea ref={inputRef} value={chatContent} onChange={({ target: { value } }) => setChatContent(value)}
                    placeholder="메세지를 입력하세요(shift + Enter로 줄바꿈이 가능합니다)">
                </textarea> {/*문자가 두 줄 이상 늘어나는 경우 height를 동적으로 조정해야함 */}
                <div className="Btns">
                    <button>스티커</button>&emsp;
                    <button>멘션</button>&emsp;
                    <button>메시지효과</button>&emsp;
                    <button>화면캡처</button>
                    <button className="submitBtn" onClick={handleClick}>전송</button>
                </div>
            </div>
        </div>
    )
}

export default SendChat;
