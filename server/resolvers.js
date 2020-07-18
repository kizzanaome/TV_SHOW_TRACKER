const {paginateResults} = require("./utils")
const jwt = require("jsonwebtoken")


module.exports = {
    Query: {
    //   tvshows: (_, { id }, { dataSources }) =>
    //     dataSources.tvshowsAPI.gettvshowById({ tvshowId: id })

    tvshows: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allTvShows = await dataSources.tvshowAPI.getAllTvShows();
      // we want these in reverse chronological order
      allTvShows.reverse();
      const tvshows = paginateResults({
        after,
        pageSize,
        results: allTvShows
      });
      return {
        tvshows,
        cursor: tvshows.length ? tvshows[tvshows.length - 1].cursor : null,
        // if the cursor at the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: tvshows.length
          ? tvshows[tvshows.length - 1].cursor !==
          allTvShows[allTvShows.length - 1].cursor
          : false
      };
    },
      users:(_,__, {dataSources}) =>
        dataSources.userAPI.getUsers()
    },
    Mutation:{
      login: async (_, { email }, { dataSources }) => {
        const user = await dataSources.userAPI.getUser({ email });
        if (user){
          const token = jwt.sign({id:user.id,email:user.email}, 'secret_key', { expiresIn: 60 * 60 });
          console.log("it works")
          return token
        }
        if(!user){
          console.log("user not in database.")
        }
      },
      addTvShow : async(_,{tvshowId}, {dataSources}) =>{
        const results = await dataSources.userAPI.addTvShow({tvshowId})
        return{
          success :results.length ? true :false,
          message :results.length ? "Tvshow data succesfully saved" :"Tvshow data NOT saved",
          tvshows:results

        }
      }
    }
  };
