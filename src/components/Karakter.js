import React, { useState } from "react";
import Accordeon from "./Accordeon";

const Karakter = ({ char, films }) => {
  return (
    <Accordeon title={char.name}>
      <div className="char-card">
        <ul>
          <li>Height: {char.height}</li>
          <li>Mass: {char.mass}</li>
          <li>Hair Color: {char.hair_color}</li>
          <li>Skin Color: {char.skin_color}</li>
          <li>Eye Color: {char.eye_color}</li>
          <li>Birth Year: {char.birth_year}</li>
          <li>Gender: {char.gender}</li>
          <li>Appears in: {char.films.length} movies</li>
        </ul>
        {films.length > 0 &&
          char.films.map((f, i) => {
            const theFilm = films.find((film) => film.title === f);
            return (
              <Accordeon key={i} title={theFilm.title}>
                <ul>
                  <li>{films.find((m) => m.title === f).release_date}</li>
                  <li>{films.find((m) => m.title === f).opening_crawl}</li>
                </ul>
              </Accordeon>
            );
          })}
      </div>
    </Accordeon>
  );
};

export default Karakter;
