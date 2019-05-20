import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world"
  }
};

export default ({ introspection = false, playground = false } = {}) =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection,
    playground
  });
