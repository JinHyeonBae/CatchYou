import React from "react";
import { withRouter } from "react-router-dom";
import SendChat from "./SendChat"
import "./chatContainer.scss";
import { GET_CHAT } from "./gqls";
import { useQuery } from "@apollo/client";



function ChatBoard(props) {

    const { loading, error, data } = useQuery(GET_CHAT);
    //error occurs
    if (loading) { alert("로딩 중.."); }
    if (error) { alert("에러 발생"); }

    //const { chats } = data;
    let isAcceptChat;

    if (data != undefined) {
        const { chats } = data;
        isAcceptChat = chats.map(({ id, content }) => (
            <li key={id}>{content}</li>));
    }

    const toolbarTitle = "공지사항"
    return (
        <div className="content-side col-lg-9 col-md-12 col-sm-12">
            <div className="sec-title">
            <button>즐겨찾기</button>
                <div title={toolbarTitle}>
                    <h4>{toolbarTitle}</h4>
                </div>
                <button>토픽설명</button>
            </div> {/*top*/}

            <div className="displayChatting">
            </div>{/*middle*/}

            <div className="featured-section">
                <div className="feature-block-two col-lg-6 col-md-12 col-sm-12">
                    {isAcceptChat ? isAcceptChat : ''}
                    <SendChat />
                </div>
            </div> {/*bottom*/}
        </div>
    )
}

export default ChatBoard;