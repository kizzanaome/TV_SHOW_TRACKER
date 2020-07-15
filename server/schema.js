const { gql } = require('apollo-server');

const typeDefs = gql`

type Rating{
    average: Float
}

type TvShow{
    id:ID!
    name:String
    genres:[String]
    premiered:String
    rating:Rating
    status:String
}

type Query{
    tvshows:[TvShow]!
    tvshow(id:ID):TvShow
    users:[User]
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