import { useState, useEffect } from "react";

export default function App() {

  const listFilms = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [films, setFilms] = useState(listFilms)

  return (
    <div className="container">
      <input type="search" />

      <ul>
        {films.map(film => (
          <li key={film.title} className="list-group-item">{film.title}</li>
        ))}
      </ul>

    </div>
  );
}
