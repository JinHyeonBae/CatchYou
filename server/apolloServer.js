const { ApolloServer, gql } = require("apollo-server-express");
const Mongoose = require('mongoose');
const express = require('express');

const PORT = 4000;
const app = express();
const path = '/graphql';

const typeDefs = require('./graphQL/chatSchema');
const Resolvers = require('./graphQL/resolver');
const Connectors = require('./graphQL/connector');
const GraphQLJSON = require('graphql-type-json');

Mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true, useUnifiedTopology: true });
let db = Mongoose.connection;

//app.use("/graphql", graphqlExpress({schema, context :{topic : test} }))

db.on('error', console.error.bind(console, 'connection err'));
db.once('open', function (callback) {
    console.log('db 열림');
})

console.log(Resolvers.Query)

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: Resolvers
});

server.applyMiddleware({ app, path });
//instance to integrate with apollo Server, listen on path

app.listen(PORT, () => {
    console.log(`graphQL server is now running`);
})
