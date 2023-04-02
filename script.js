var movies = [
  {
    name: "Ghostbusters",
    director: "Ivan Reitman",
    year: 1984,
    posterImage: "images/ghostBusters.jpg",
    synopsis:
      "Three parapsychologists forced out of their university funding setup shop as a unique ghost removal service in New York City, attracting frightened yet skeptical customers.",
  },
  {
    name: "Back to the Future",
    director: "Robert Zemeckis",
    year: 1985,
    posterImage: "images/backToTheFuture.webp",
    synopsis:
      "A teenager is sent back in time to the 1950s by a time-traveling DeLorean car invented by his eccentric scientist friend. He must make sure his parents fall in love in order to return to his own time.",
  },
  {
    name: "Titanic",
    director: "images/James Cameron",
    year: 1997,
    posterImage: "images/titanic.jpg",
    synopsis:
      "A young woman falls in love with a poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  },
];

function displayMovie(index) {
  // Get the HTML elements to update
  const titleEl = document.getElementById('title');
  const yearEl = document.getElementById('year');
  const directorEl = document.getElementById('director');
  const synopsisEl = document.getElementById('synopsis');
  const posterImgEl = document.getElementById('posterImage');

  // Get the movie object from the array
  const movie = movies[index];

  // Update the HTML elements with the movie data
  titleEl.textContent = movie.name;
  yearEl.textContent = movie.year;
  directorEl.textContent = movie.director;
  synopsisEl.textContent = movie.synopsis;
  posterImgEl.setAttribute('src', movie.posterImage);
  posterImgEl.setAttribute('alt', movie.name);

  // Find the currently selected item, and remove the selected CSS
  const selectedItems = document.getElementsByClassName("selected")
  const currentMovieEl = selectedItems[0]
  currentMovieEl.classList.remove("selected")

  // Add the selected class to the clicked li element
  const clickedLi = document.getElementById(`movie${index}`);
  clickedLi.classList.add('selected');
}

displayMovie(0)