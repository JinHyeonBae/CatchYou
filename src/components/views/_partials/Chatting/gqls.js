import {gql} from "@apollo/client";

export const GET_CHAT = gql`
query getChat{
    chat_record{
        nickname
        chat_comment
        reComment
        createdAt
    }
}`;


export const ADD_CHAT = gql`
mutation addChatContent($content : string!){
    addChat(content : $content){
        nickname
        chat_comment
        recomment
        createdAt
    }
}`; //useMutation으로 호출 가능

