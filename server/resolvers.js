const {paginateResults} = require("./utils")

module.exports = {
    Query: {
      // tvshows: (_, __, { dataSources }) =>
      //   dataSources.tvshowAPI.getAllTvShows(),
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
    }
  };
