const { gql } = require('apollo-server');

const typeDefs = gql`
type Show{
    id:ID!
    name:String
    genre:String
    Rating:Int
    Date:Int
    Status:Boolean!
}

type Query{
    shows:[Show]!
    show(id:ID):Show
    me:User
}

type User{
    id:ID!
    username:String
    password: String!
    shows:[Show]!
} 

type Mutation{
    #if false, saving show failed-- errors
     addShow(showid:ID ):ShowUpdateResponse!

     login(email:String):String 
}

type ShowUpdateResponse{
    success:Boolean!
    message:String
    shows:[Show]
}
`;
  
module.exports = typeDefs;