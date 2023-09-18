import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { MovieCard } from './components/movie-card/Moviecard';


function App() {
  const [movies,setMovies]=useState([])
  const getMovies = async ()=>{
    try{
      const { data }= await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
      setMovies(data);
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div className="App">
      <h1>movies</h1>
      <main className='main'>
      {
        movies && movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
      }
      </main>

     </div>
  );
}

export default App;
