import Moviecard from "../components/MovieCard";
import { useState,useEffect } from "react";
import "../css/Home.css";
import Navbar from "../components/Navbar";
import { getPopularMovies,searchMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);
  
  // const movies = [
  //   { id: 1, title: "Batman", posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZnqwQwjLGxD6fbEJHXbqOaqSSY7HE9fKtgOhL0elOg&s=10", release_date: "2026 March 14" },
  //   { id: 2, title: "Superman", posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AkNFG_OSdL4lgGsJCKCqhrSdCzcPorgGXHTI-RN89A&s=10", release_date: "2025 June 20" },
  //   { id: 3, title: "Spiderman", posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60XGAhLvbTNizR5qGF8BDFMbJqbMcrZQl-_KnqrS-yQ&s", release_date: "2024 December 5" },
  // ];

  useEffect(() => {
    const loadPopularMovies = async () =>{
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      }catch(err){
        console.log(err)
        setError("Failed to load movies...")
      }
      finally{
        setLoading(false)
      }
    }

    loadPopularMovies()
    searchMovies()
  })
 

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className="home">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Search for a movie..."
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

    {loading?<div className="Loading">Loading...</div>:<div className="movies-grid">
        {filteredMovies.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>}
      
    </div>
    </>
  );
}

export default Home;