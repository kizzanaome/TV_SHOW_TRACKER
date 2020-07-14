const { gql } = require('apollo-server');

const typeDefs = gql`




type TvShow{
    id:ID!
    name:String
    genres:[String]
    premiered:String
    status:String
}



type Query{
    tvshows:[TvShow]!
    tvshow(id:ID):TvShow
    me:User
}



type User{
    id:ID!
    username:String
    password: String!
    tvshows:[TvShow]!
} 

type Mutation{
    #if false, saving show failed-- errors
     addShow(showid:ID ):ShowUpdateResponse!

     login(email:String):String 
}

type ShowUpdateResponse{
    success:Boolean!
    message:String
    tvshows:[TvShow]
}
`;
  
module.exports = typeDefs;