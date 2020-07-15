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
    cursor:String
}

type Query{
    tvshows(
        """
        The number of results to show. Must be >= 1. Default = 20
        """
        pageSize: Int
        """
        If you add a cursor here, it will only return results _after_ this cursor
        """
        after: String
      ): TvShowConnection!
    tvshow(id:ID):TvShow
    users:[User]
    me:User
}

"""
Simple wrapper around our list of tvshows that contains a cursor to the
last item in the list. Pass this cursor to the tvshows query to fetch results
after these.
"""
type TvShowConnection { # add this below the Query type as an additional type.
  cursor: String!
  hasMore: Boolean!
  tvshows: [TvShow]!
}

type User{
    id:ID!
    username:String
    email:String!
    password: String!
    tvshows:[TvShow]!
} 

type Mutation{
    #if false, saving show failed-- errors
     addTvShow(tvshowId:ID! ):ShowUpdateResponse!

     login(email:String):String 
}

type ShowUpdateResponse{
    success:Boolean!
    message:String
    tvshows:[TvShow]
}
`;

module.exports = typeDefs;