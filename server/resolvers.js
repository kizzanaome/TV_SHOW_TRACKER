module.exports = {
    Query: {
      tvshows: (_, __, { dataSources }) =>
        dataSources.tvshowAPI.getAllTvShows(),
    //   tvshows: (_, { id }, { dataSources }) =>
    //     dataSources.tvshowsAPI.gettvshowById({ tvshowId: id })
      users:(_,__, {dataSources}) =>
        dataSources.userAPI.getUsers()
    }
  };