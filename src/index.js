import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider, withApollo } from "@apollo/react-hooks"
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from '@apollo/client';
import gql from "graphql-tag"         // 수정


const httpLink = createHttpLink({                       // 수정
  uri: 'http://localhost:4000/graphql'                          // 수정
})                                                      // 수정
//httpLink 옵션 

// 호출할 graphql api 접속 정보 설정
const client = new ApolloClient({
  link: httpLink,                                       // 수정
  cache: new InMemoryCache()                            // 수정
}); 


ReactDOM.render(
  // StrictMode는 잠재적 문제를 식별해서 경고를 제공해주는 역할을 하고 있다.
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ ApolloProvider>,
  document.getElementById("root"),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//export default withApollo(provideClient);