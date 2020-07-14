const fetch = require("node-fetch")

const url  = "http://api.tvmaze.com/shows"
fetch(url)
  
  .then(function(response){
      return response.json();
  })
  .then(function(showdata){
      const customshow = {
          id :showdata.id,
          name: showdata.name,
          genres:showdata.genres,
          premiered:showdata.premiered,
          status: showdata.status
      }
      console.log(showdata);
  });