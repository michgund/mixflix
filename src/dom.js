import { handleMovieClick, searchedMovies } from "./handlers.js";

function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie");
  movieCard.setAttribute("id", movie.id);

  const image = document.createElement("img");
  image.src = movie.backdrop_path;
  image.alt = movie.title;
  movieCard.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = movie.title;
  movieCard.appendChild(title);

  movieCard.addEventListener("click", function (e) {
    handleMovieClick(e, searchedMovies);
  });

  return movieCard;
}

function showMovieOverlay(movie) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const overlayContent = document.createElement("div");
  overlayContent.classList.add("overlay-content");

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    overlay.remove();
  });

  const image = document.createElement("img");
  image.src = movie.backdrop_path;
  image.alt = movie.title;

  const title = document.createElement("h2");
  title.textContent = movie.title;

  const description = document.createElement("p");
  description.textContent = movie.overview;

  overlayContent.appendChild(closeButton);
  overlayContent.appendChild(image);
  overlayContent.appendChild(title);
  overlayContent.appendChild(description);

  overlay.appendChild(overlayContent);
  document.body.appendChild(overlay);
}

export { createMovieCard, showMovieOverlay };
