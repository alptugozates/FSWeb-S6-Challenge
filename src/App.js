import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");


  const fetchPeople = () => {
    return axios.get("https://swapi.dev/api/people/");
    /* .then(function (response) {
        // handle success
        console.log("people", response);
        setCharacters(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }); */
  };

  const fetchMovies = () => {
    return axios.get("https://swapi.dev/api/films/");
    /* .then(function (response) {
        // handle success
        console.log("films", response);
        setMovies(response.data[0].results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }); */
  };



  useEffect(() => {
    Promise.all([fetchPeople(), fetchMovies()])
      .then(([peopleResp, filmsResp]) => {
        setLoading(false);

        console.log("people", peopleResp);
        setCharacters(peopleResp.data);

        console.log("films", filmsResp);
        setMovies(filmsResp.data[0].results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {!loading && characters.length > 0 && (
        <>
          <h1 className="Header">STARWARS CHARACTERS</h1>
          <input className="search-input"
            type="search"
            placeholder="Search character..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {filteredCharacters.map((c, ind) => {
            return <Karakter key={ind} char={c} films={movies} />;
          })}
        </>
      )}
    </div>
  );
};

export default App;
