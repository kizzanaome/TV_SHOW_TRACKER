const { RESTDataSource } = require('apollo-datasource-rest');

class TvShowAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ' http://api.tvmaze.com';
  }
  async getAllTvShows() {
      const query =" /shows"
    const response = await this.get(query);
    return Array.isArray(response)
    
      ? response.map(tvshow => this.tvshowReducer(tvshow))
      : [];
  }

  tvshowReducer(tvshow) {
    return {
        id :tvshow.id,
        name: tvshow.name,
        genres:tvshow.genres,
        rating:tvshow.rating,
        premiered:tvshow.premiered,
        status: tvshow.status
    };
  }
}

module.exports = TvShowAPI;