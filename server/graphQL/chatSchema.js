//import { gql } from "apollo-server";
const { graphQLResultHasError } = require("@apollo/client/utilities");
const { gql } = require("apollo-server");
const {buildSchema} = require('graphql');

const typeDefs = `
    type chatContent {
        content : String
        createdAt : String
    }

    type topicInfo {
        topicName: String
        topicType: String
        topicDes : String
        nickName : String!
        chatInfo : [chatContent]
    }
    type Query{
        topic: topicInfo
    }

    type Mutation{
        addChat(content : String, createdAt : String) : topicInfo       
    }

    schema{
        query:Query
        mutation : Mutation
    }
`;
//schema는 모든 쿼리의 진입점(entry point)

module.exports = typeDefs;
//replyComment는 비어있을 수 있음