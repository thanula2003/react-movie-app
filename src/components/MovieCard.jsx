import "../css/MovieCard.css";

function Moviecard({ movie }) {
  function onLike() {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favs.some((m) => m.id === movie.id)) {
      favs.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favs));
    }
  }

  return (
    <div className="movie-card-container">
      <div className="movie-poster">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn"onClick={onLike}>
                    ♥
                </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default Moviecard;