import React, { useRef, useState, useLayoutEffect, useMutation } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import "./chatContainer.scss";
import { ADD_CHAT } from './gqls';

function SendChat() {

    const [chatContent, setChatContent] = useState({
        content: '',
        createdAt: ''
    });

    const inputRef = useRef();
    const subBntRef = useRef();

    //const [addChat, {loading, error}] = useMutation(ADD_CHAT)
    //if(loading) return <p>로딩 중</p>
    //if(error) return <p>에러:(</p>

    const onChanging = e => {
        const { name, value } = e.target;
        setChatContent({
            ...chatContent,
            [name]: value,
        });

        value == ''
            ? subBntRef.current.style.backgroundColor = "grey"
            : subBntRef.current.style.backgroundColor = "pink";
    }

    const handleClick = () => {
        inputRef.current.blur();
        setChatContent({
            ...chatContent,
            content: '',
            createdAt: ''
        })
    }

    //if문 안에 넣으니까 첫 렌딩에는 값이 안 들어감
    const onEnterPress = (e) => {
        let date = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
        setChatContent({ ...chatContent, createdAt: date });
        if (e.keyCode == 13 && e.shiftKey == false) {
            handleClick();
        }
    }

    return (
        <div className="row clearfix">
            <button className="uploadBtn">+</button>
            <div className="chatWritingPartBorder">
                <textarea ref={inputRef} value={chatContent.content} onChange={onChanging} name="content"
                    onKeyDown={onEnterPress} placeholder='메세지를 입력하세요(shift + Enter로 줄바꿈이 가능합니다)'
                    onFocus={() => "placeholder=''"}
                    onBlur={() => "placeholder = '메세지를 입력하세요(shift + Enter로 줄바꿈이 가능합니다)'"}>
                </textarea> {/*문자가 두 줄 이상 늘어나는 경우 height를 동적으로 조정해야함 */}
                <div className="Btns">
                    <button>스티커</button>&emsp;
                    <button>멘션</button>&emsp;
                    <button>메시지효과</button>&emsp;
                    <button>화면캡처</button>
                    <button className="submitBtn" ref={subBntRef} onClick={handleClick}>전송</button>
                </div>
            </div>
        </div>
    )
}

export default SendChat;
