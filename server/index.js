const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const TvShowAPI = require('./datasources/tvshow');
const resolvers = require('./resolvers');


const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    tvshowAPI: new TvShowAPI()
  })
 });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });