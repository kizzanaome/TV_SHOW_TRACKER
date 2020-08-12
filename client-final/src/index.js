import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {HttpLink} from 'apollo-link-http'
import {ApolloProvider, useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import LoginHandler from './components/Login/loginHandler';
import {typeDefs, resolvers} from './schema'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/home';


const IS_LOGGED_IN = gql`
  query IsUserLoggedIn{
    isLoggedIn @client
  }
`


const cache = new InMemoryCache();

const link = new HttpLink({
  headers:{
    authorization: localStorage.getItem('token')
  },
  uri:'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers
});

cache.writeData({
  data :{
    isLoggedIn :!!localStorage.getItem('token'),
  },
})

function IsLoggedIn (){
  const {data} = useQuery(IS_LOGGED_IN)
  console.log(data.isLoggedIn)
  return data.IsLoggedIn ? <Home/> : <LoginHandler/>
}


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ApolloProvider client={client}>
    {/* <App /> */}
    <IsLoggedIn/>
    </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
