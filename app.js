let currentSlide = 0;
let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
let watched = JSON.parse(localStorage.getItem('watched') || '[]');
let userRatings = JSON.parse(localStorage.getItem('userRatings') || '{}');
let filteredMovies = [...MOVIES_DATA.popular];
let searchTimeout;

document.addEventListener("DOMContentLoaded", () => {
  initializeHeroSlider();
  renderPopularMovies();
  renderWatchedMovies();
  renderWatchlistMovies();
  updateCounts();
  
  setInterval(() => {
    nextSlide();
  }, 5000);
});

// ========== HERO SLIDER FUNCTIONS ==========
function initializeHeroSlider() {
  const slider = document.querySelector(".hero-slider");
  slider.innerHTML = '';
  
  MOVIES_DATA.featured.forEach((movie, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");
    
    slide.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('${movie.image}')`;
    
    slide.innerHTML = `
      <div class="slide-info">
        <h2>${movie.title}</h2>
        <p class="genre">${movie.genre} • ${movie.type} • ${movie.date}</p>
        <p class="desc">${movie.description}</p>
        <div class="slide-buttons">
          <button class="btn btn-primary" onclick="showMovieModal(${movie.id})">
            ▶ View Details
          </button>
          <button class="btn btn-secondary" onclick="toggleWatchlist(${movie.id})">
            🔖 ${watchlist.includes(movie.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </button>
        </div>
      </div>
    `;
    
    slider.appendChild(slide);
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".hero-slider .slide");
  if (slides.length === 0) return;
  
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// ========== MOVIE RENDERING FUNCTIONS ==========

function createMovieCard(movie) {
  const isInWatchlist = watchlist.includes(movie.id);
  const isWatched = watched.includes(movie.id);
  const userRating = userRatings[movie.id] || 0;
  
  return `
    <div class="movie-card" data-id="${movie.id}">
      <div class="movie-poster" style="background-image: url('${movie.image}')">
        <div class="movie-actions">
          <button class="icon-btn ${isInWatchlist ? 'active' : ''}" 
                  onclick="toggleWatchlist(${movie.id})">
            ${isInWatchlist ? '🔖' : '📋'}
          </button>
          <button class="icon-btn ${isWatched ? 'active' : ''}" 
                  onclick="toggleWatched(${movie.id})">
            ${isWatched ? '✔️' : '👁️'}
          </button>
        </div>
        ${isWatched ? `
          <div class="user-rating-badge">
            ${userRating > 0 ? `★ ${userRating}` : 'Watched'}
          </div>
        ` : ''}
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
          <span class="movie-genre" style="color: ${getGenreColor(movie.genre)}">
            ${movie.genre}
          </span>
          <span class="movie-year">${movie.date}</span>
          <span class="movie-rating">${generateStars(movie.rating)}</span>
        </div>
        <p class="movie-desc">${movie.description.substring(0, 100)}...</p>
        <button class="btn-details" onclick="showMovieModal(${movie.id})">
          View Details
        </button>
      </div>
    </div>
  `;
}

function renderPopularMovies() {
  const grid = document.getElementById('popular-grid');
  grid.innerHTML = filteredMovies.map(movie => {
    const isInWatchlist = watchlist.includes(movie.id);
    const isWatched = watched.includes(movie.id);
    const userRating = userRatings[movie.id] || 0;
    
    return `
      <div class="movie-card" data-id="${movie.id}">
        <div class="movie-poster" style="background-image: url('${movie.image}')">
          <div class="movie-actions">
            <button class="icon-btn ${isInWatchlist ? 'active' : ''}" 
                    onclick="toggleWatchlist(${movie.id})">
              ${isInWatchlist ? '🔖' : '📋'}
            </button>
            <button class="icon-btn ${isWatched ? 'active' : ''}" 
                    onclick="toggleWatched(${movie.id})">
              ${isWatched ? '✔️' : '👁️'}
            </button>
          </div>
          ${isWatched ? `
            <div class="user-rating-badge">
              ${userRating > 0 ? `★ ${userRating}` : 'Watched'}
            </div>
          ` : ''}
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${movie.title}</h3>
          <div class="movie-meta">
            <span class="movie-genre" style="color: ${getGenreColor(movie.genre)}">
              ${movie.genre}
            </span>
            <span class="movie-year">${movie.date}</span>
            <span class="movie-rating">${generateStars(movie.rating)}</span>
          </div>
          <p class="movie-desc">${movie.description.substring(0, 100)}...</p>
          <button class="btn-details" onclick="showMovieModal(${movie.id})">
            View Details
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderWatchedMovies() {
  const grid = document.getElementById('watched-grid');
  const empty = document.getElementById('watched-empty');
  const watchedMovies = ALL_MOVIES.filter(movie => watched.includes(movie.id));
  
  if (watchedMovies.length === 0) {
    grid.style.display = 'none';  
    empty.style.display = 'block';
  } else {
    grid.style.display = 'grid';
    empty.style.display = 'none';
    grid.innerHTML = watchedMovies.map(movie => createMovieCard(movie)).join('');
  }
}

function renderWatchlistMovies() {
  const grid = document.getElementById('watchlist-grid');
  const empty = document.getElementById('watchlist-empty');
  const watchlistMovies = ALL_MOVIES.filter(movie => watchlist.includes(movie.id));
  
  if (watchlistMovies.length === 0) {
    grid.style.display = 'none';
    empty.style.display = 'block';
  } else {
    grid.style.display = 'grid';
    empty.style.display = 'none';
    grid.innerHTML = watchlistMovies.map(movie => createMovieCard(movie)).join('');
  }
}

// ========== UTILITY FUNCTIONS ==========
function generateStars(rating) {
  let stars = '';
  let fullStars = parseInt(rating);
  let hasHalf = rating - fullStars >= 0.5;
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  if (hasHalf) {
    stars += '☆';
  }
  return stars + ' ' + rating;
}

function getGenreColor(genre) {
  let colors = {
    Action: "#e74c3c",
    Drama: "#3498db",
    Comedy: "#f1c40f",
    Horror: "#8e44ad",
    Romance: "#e84393",
    SciFi: "#1abc9c",
    Thriller: "#e67e22",
    Mystery: "#9b59b6",
  };
  return colors[genre] || "#ccc";
}

function updateCounts() {
  document.getElementById('watched-count').innerText = watched.length + ' movies';
  document.getElementById('watchlist-count').innerText = watchlist.length + ' movies';
}

function saveToLocalStorage() {
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
  localStorage.setItem('watched', JSON.stringify(watched));
  localStorage.setItem('userRatings', JSON.stringify(userRatings));
}

// ========== WATCHLIST AND WATCHED FUNCTIONS ==========
function toggleWatchlist(movieId) {
  if (watchlist.includes(movieId)) {
    watchlist = watchlist.filter(id => id !== movieId);
    showNotification('Removed from watchlist');
  } else {
    watchlist.push(movieId);
    showNotification('Added to watchlist');
  }
  
  saveToLocalStorage();
  updateCounts();
  renderWatchlistMovies();
  renderWatchedMovies();
  renderPopularMovies();
  initializeHeroSlider();
}

function toggleWatched(movieId) {
  if (watched.includes(movieId)) {
    watched = watched.filter(id => id !== movieId);
    delete userRatings[movieId];
    showNotification('Removed from watched list');
  } else {
    watched.push(movieId);
    showNotification('Added to watched list');
  }
  
  saveToLocalStorage();
  updateCounts();
  renderWatchedMovies();
  renderWatchlistMovies();
  renderPopularMovies();
}

function rateMovie(movieId, rating) {
  userRatings[movieId] = rating;
  saveToLocalStorage();
  renderWatchedMovies();
  renderPopularMovies();
  showNotification('Rated ' + rating + ' stars');
}

// ========== MODAL FUNCTIONS ==========
function showMovieModal(movieId) {
  const movie = ALL_MOVIES.find(m => m.id === movieId);
  if (!movie) return;

  const inWatchlist = watchlist.includes(movieId);
  const inWatched = watched.includes(movieId);
  const rating = userRatings[movieId] || 0;

  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    starsHTML += `<span class="star ${i <= rating ? 'filled' : ''}" 
                 onclick="rateMovie(${movieId}, ${i}); showMovieModal(${movieId})">★</span>`;
  }

  document.getElementById('modalBody').innerHTML = `
    <div class="movie-modal-content">
      <img src="${movie.image}" alt="${movie.title}" class="movie-poster">
      <div class="movie-info">
        <h2>${movie.title}</h2>
        <div class="movie-meta">
          <span>${movie.genre}</span>
          <span>${movie.type}</span>
          <span>${movie.date}</span>
          <span>${movie.length}</span>
          <span>★ ${movie.rating}</span>
        </div>
        <p class="movie-description">${movie.description}</p>
        <div class="modal-actions">
          <button class="btn ${inWatchlist ? 'btn-primary' : 'btn-secondary'}" 
                  onclick="toggleWatchlist(${movieId}); showMovieModal(${movieId})">
            ${inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </button>
          <button class="btn ${inWatched ? 'btn-primary' : 'btn-secondary'}" 
                  onclick="toggleWatched(${movieId}); showMovieModal(${movieId})">
            ${inWatched ? 'Mark as Unwatched' : 'Mark as Watched'}
          </button>
        </div>
        ${inWatched ? `
          <div class="user-rating">
            <h4>Your Rating</h4>
            <div class="star-rating">${starsHTML}</div>
            ${rating > 0 ? `<p>You rated this ${rating} out of 5 stars</p>` : ''}
          </div>
        ` : ''}
      </div>
    </div>
  `;

  document.getElementById('movieModal').classList.add('open');
}

function closeModal() {
  document.getElementById('movieModal').classList.remove('open');
}

//==== Contact Page ====
function validateContactForm() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let formMessage = document.getElementById("formMessage");

  if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
    formMessage.textContent = "All fields are required!";
    formMessage.style.color = "red";
    return false;
  }

  let namePattern = /^[A-Za-z]{1,100}$/;
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!name.value.match(namePattern)) {
    formMessage.textContent = "Please enter a valid name.";
    formMessage.style.color = "red";
    return false;
  }
  if (!email.value.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return false;
  }

  formMessage.textContent = "✅ Message sent successfully!";
  formMessage.style.color = "green";
  formMessage.style.opacity = 1;

  setTimeout(() => {
    formMessage.style.opacity = 0;
  }, 3000);

  name.value = "";
  email.value = "";
  message.value = "";

  return false; 
}



// ========== SEARCH FUNCTION ==========
function handleSearch(event) {
  event.preventDefault();
  let query = document.getElementById('searchInput').value.trim();
  
  if (query.length === 0) {
    closeSearch();
  } else {
    performSearch(query);
  }
}

function performSearch(query) {
  let lowerQuery = query.toLowerCase();
  let results = ALL_MOVIES.filter(movie =>
    movie.title.toLowerCase().includes(lowerQuery) ||
    movie.genre.toLowerCase().includes(lowerQuery) ||
    movie.description.toLowerCase().includes(lowerQuery)
  )
  showSearchResults(results, query);
}

function showSearchResults(results, query) {
  let searchBody = document.getElementById('searchBody');
  
  if (!results.length) {
    searchBody.innerHTML = `
      <div class="no-results">
        <div>🔍</div>
        <p>No movies found for "${query}"</p>
      </div>
    `;
  } else {
    searchBody.innerHTML = '';
    results.forEach(movie => {
      searchBody.innerHTML += `
        <div class="search-item" onclick="showMovieModal(${movie.id}); closeSearch();">
          <img src="${movie.image}" alt="${movie.title}">
          <div>
            <h4>${movie.title}</h4>
            <p>${movie.genre} / ${movie.date} / ${movie.type}</p>
            <div>★ ${movie.rating}</div>
          </div>
        </div>
      `;
    });
  }
  
  document.getElementById('searchResults').style.display = 'block';
}
function closeSearch() {
  document.getElementById('searchResults').style.display = 'none';
  document.getElementById('searchInput').value = '';
}
document.addEventListener('DOMContentLoaded', () => {
  let searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    let query = searchInput.value.trim(); 
    if (query.length === 0) {
      closeSearch();
    } else {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        performSearch(query);
      }, 500);
    }
  });
});

// ========== NAVIGATION FUNCTIONS ==========
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollMovieGrid(gridId, direction) {
  const grid = document.getElementById(gridId);
  if (grid) {
    const scrollAmount = 300;
    grid.scrollBy({ 
      left: direction * scrollAmount, 
      behavior: 'smooth' 
    });
  }
}

// ========== NOTIFICATION FUNCTION ==========
function showNotification(message) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}