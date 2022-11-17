import React, { useEffect } from 'react';
import './App.css'; 
import searchIcon from './search.svg';

//b7750b45

const API_URL = "http://www.omdbapi.com?apikey=b7750b45";


const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
} 

function App() {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);  
    }


    useEffect(() => {
        searchMovies('batman');
    }, [])
    

    return (
        <div className='app'>
            <h1>MovieLand!</h1>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value = 'Superman'
                    onChange={()=> {}}
                    />

                <img src={searchIcon}
                    alt='Search'
                    onClick={() => {}}   
                />
  
            </div>
            <div className='container'>
                <div className='movie'>
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
