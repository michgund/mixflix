import search from "./api";
import { showMovieOverlay, createMovieCard } from "./dom";

let searchedMovies = new Map();

async function handleSearch() {
  const searchInput = document.querySelector("#search").value.toLowerCase();
  const moviesContainer = document.querySelector("#movies-container");
  moviesContainer.innerHTML = ""; // Clear previous search results

  searchedMovies = new Map();

  if (searchInput) {
    let movies = await search(searchInput);
    console.log(movies);

    movies.forEach((movie) => {
      searchedMovies.set(movie.id.toString(), { movie });
      let movieCard = createMovieCard(movie);
      moviesContainer.appendChild(movieCard);
    });
  }
  return searchedMovies;
}

async function handleMovieClick(e, searchedMovies) {
  const movieID =
    e.target.id.length != 0 ? e.target.id : e.target.parentNode.id;
  if (searchedMovies.has(movieID)) {
    const movie = searchedMovies.get(movieID);
    showMovieOverlay(movie.movie);
  }
}

export { handleMovieClick, handleSearch, searchedMovies };
