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
  const [newFilms, setNewFilms] = useState('')
  const [newGenre, setNewGenre] = useState('')
  const [stateFilms, setStateFilms] = useState(films)
  const [genre, setGenre] = useState('')

  useEffect(() => {
    const filtered = listFilms.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
    setStateFilms(filtered)

    if (search === '') {
      setStateFilms(films) // perchè voglio che ritorni intero
    }

  }, [films, search])

  useEffect(() => {
    if (genre === '') {
      setFilms(listFilms)
    } else {
      const filtered = listFilms.filter(film => film.genre === genre)
      setFilms(filtered)
    }
  }, [genre])


  const genres = []
  for (let i = 0; i < listFilms.length; i++) {
    const film = listFilms[i];

    if (!genres.includes(film.genre)) {
      genres.push(film.genre)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (newFilms.length < 4 && newGenre.length < 4) {
      setNewFilms('')
      setNewGenre('')
    } else {
      const film = {
        title: newFilms,
        genre: newGenre,
      }
      const addNewFilm = [...listFilms, film]
      setFilms(addNewFilm)
      setNewFilms('')
      setNewGenre('')
    }
  }


  return (
    <div className="container">


      <form onSubmit={handleSubmit}>
        <input type="text" value={newFilms} placeholder="add new title film" onChange={(e) => setNewFilms(e.target.value)} />
        <button className="badge bg-success my-4 mx-4" type="submit">Add</button>
        <input type="text" value={newGenre} placeholder="add genre film" onChange={(e) => setNewGenre(e.target.value)} />
        <button className="badge bg-success my-4 mx-4" type="submit">Add</button>
      </form>


      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />

      <div className="py-3">
        <select className="form-select" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value=''>scegli un genere</option>

          {genres.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}

        </select>
      </div>


      <ul>
        {stateFilms.map(film => (
          <li key={film.title} className="list-group-item">{film.title}</li>
        ))}
      </ul>

    </div>
  );
}
