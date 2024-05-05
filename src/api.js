import { API_KEY, APP_ID } from "../apikey";

// Import algoliasearch
const algoliasearch = require("algoliasearch");

// Connect and authenticate with the Algolia app
const client = algoliasearch(APP_ID, API_KEY);

// Find sample index of movies
const index = client.initIndex("movies_index");

// Add function to search the index and console.log the results
function search() {
  index.search("frozen").then(({ hits }) =>
    hits.forEach((element) => {
      console.log(element.title);
    })
  );
}

export default search;
