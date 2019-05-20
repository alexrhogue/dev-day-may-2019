/* eslint-disable no-unused-vars `*/
import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    console.log(error);
    return error;
  },
  formatResponse: response => {
    console.log("resp", response);
    return response;
  },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  }),
  playground: {
    endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT
      ? process.env.REACT_APP_GRAPHQL_ENDPOINT
      : "/production/graphql"
  },
  tracing: true,
  introspection: true
});

const handler = server.createHandler({
  cors: {
    origin: "*"
  }
});

export const graphqlHandler = handler;
