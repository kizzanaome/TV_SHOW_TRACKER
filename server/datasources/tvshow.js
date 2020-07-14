const { RESTDataSource } = require('apollo-datasource-rest');

class TvShowAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = ' http://api.tvmaze.com/';
  }
}

module.exports = TvShowAPI;