import React from 'react';
import ReactDOM from 'react-dom'; 
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { resolvers, typeDefs } from './schema';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import App from './App';
import Login from './pages/login'
import './index.css';
import gql from 'graphql-tag';



const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <App /> : <Login />;
}


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  headers: {
    authorization: localStorage.getItem('token'),
  }, 
});

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    cartItems: [],
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <IsLoggedIn/>
  </ApolloProvider>, 
  document.getElementById('root')
);
