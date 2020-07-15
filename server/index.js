const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const TvShowAPI = require('./datasources/tvshow');
const UserAPI = require('./datasources/user')
const {createStore} = require("./utils")
const resolvers = require('./resolvers');


const store = createStore()
const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    tvshowAPI: new TvShowAPI(),
    userAPI: new UserAPI({store})
  })
 });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });