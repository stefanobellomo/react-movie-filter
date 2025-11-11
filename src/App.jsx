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
  const [search, setSearch] = useState('')

  useEffect(() => {
    const filtered = films.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
    setFilms(filtered)

    if (search === '') {
      setFilms(listFilms) // perchè voglio che ritorni intero
    }

  }, [films, search])


  return (
    <div className="container">

      <input type="search" title={search} onChange={(e) => setSearch(e.target.value)} />

      <ul>
        {films.map(film => (
          <li key={film.title} className="list-group-item">{film.title}</li>
        ))}
      </ul>

    </div>
  );
}
