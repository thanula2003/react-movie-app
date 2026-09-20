import Navbar from "../components/Navbar";
import "../css/Favorites.css";

function Favorites() {
  return (
    <>
    <Navbar/>
    <div className="favorites">
      <div className="favorites-empty">
        <h2>No favorites yet</h2>
        <p>Start adding movies to your favorites and they will appear here.</p>
      </div>
    </div>
    </>
  );
}

export default Favorites;