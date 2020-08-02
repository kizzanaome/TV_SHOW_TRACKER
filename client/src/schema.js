import gql from 'graphql-tag';


export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [ID!]!
  }
`;

export const resolvers = {};