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

  useEffect(() => {
    const filtered = films.filter(film => film.title.toLowerCase().includes(search.toLowerCase()))
    setStateFilms(filtered)

    if (search === '') {
      setStateFilms(listFilms) // perchè voglio che ritorni intero
    }

  }, [films, search])


  const filteredGenre = []
  for (let i = 0; i < listFilms.length; i++) {
    const film = listFilms[i];

    if (!filteredGenre.includes(film.genre)) {
      filteredGenre.push(film.genre)
    }
  }

  // function handleSubmit(e) {
  //   e.preventDefault()

  //   if (newFilms.length < 4 && newGenre.length < 4) {
  //     setNewFilms('')
  //     setNewGenre('')
  //   } else {
  //     const film = {
  //       title: newFilms,
  //       genre: newGenre,
  //     }
  //     console.log(film);

  //   }
  // }


  return (
    <div className="container">

      {/* 
      <form onSubmit={handleSubmit}>
        <input type="text" value={newFilms} placeholder="add new title film" onChange={(e) => setNewFilms(e.target.value)} />
        <button className="badge bg-success my-4 mx-4" type="submit">Add</button> 
        <input type="text" value={newGenre} placeholder="add genre film" onChange={(e) => setNewGenre(e.target.value)} />
        <button className="badge bg-success my-4 mx-4" type="submit">Add</button>
      </form>
      */}

      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />

      <select className="form-select" aria-label="Default select example">

        <option value='genre'>Genere</option>
        {filteredGenre.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}

      </select>

      <ul>
        {stateFilms.map(film => (
          <li key={film.title} className="list-group-item">{film.title}</li>
        ))}
      </ul>

    </div>
  );
}
