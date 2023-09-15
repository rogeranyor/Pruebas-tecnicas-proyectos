import React, { useContext} from 'react'
import { IMAGES } from '../assets/images'
import { ALL_FILTER, PAGES, GENRE } from '../consts/filters'
import { deleteFilters, updateFilters } from '../services/filtersLogic'
import '../styles/Filters.css'
import { booksProvider } from '../context/bookscontext'
import { changeSelection } from '../helpers/helpers'

function Filters() {
  const context = useContext(booksProvider);
  const filteredBooks = context?.filteredBooks || [];
  const booksSaved = context?.booksSaved || [];
  const setFilters = context?.setFilters || (() => { });
  const filters = context?.filters || { PAGES: 2000, GENRE: 'Todos' };
  const genres = context?.genres || [];

  const librosDisponibles = document.getElementById('libros-disponibles')
  const librosGuardados = document.getElementById('libros-guardados')
  const bottomLine = document.getElementById('bottom-line')

  librosDisponibles?.addEventListener('click', () => {

    const { left, width, bottom } = librosDisponibles.getBoundingClientRect();
    generateBar({ left, width, bottom })

  })

  librosGuardados?.addEventListener('click', () => {

    const { left, width, bottom } = librosGuardados.getBoundingClientRect();
    generateBar({ left, width, bottom })

  })
 

  function generateBar({ left, width, bottom }) {
    bottomLine?.style.setProperty('--left', `${left}px`)
    bottomLine?.style.setProperty('--top', `${bottom}px`)

    bottomLine?.style.setProperty('--width', `${width}px`)
    bottomLine?.style.setProperty('--opacity', `1`)
  }

  return (
    <main>
      <section className="filters">
        <section style={{ margin: "5px", width: "300px", textAlign: "initial" }} >
          <h4>Filtrar por páginas</h4>
          <div style={{ display: "flex", marginTop: "40px" }}>
            <input type='range' min='0' max='2000' style={{ width: "175px" }}
              onChange={(e) => { updateFilters(setFilters, filters, PAGES, parseInt(e.target.value)) }}
              defaultValue={filters.PAGES} >
            </input>
            <p style={{ color: "white", margin: "0", marginLeft: "10px", width: "100px" }}>Máximo: {filters.PAGES}</p>
          </div>
        </section>
        <section className='filter-genre'  >
          <h4>Filtrar por género</h4>
          {genres?.map((genre) => {
            if (genre === ALL_FILTER) {
              return null
            }
            return (
              <div key={genre} style={{ display: "inline-block" }}>
                <img
                  className='genre-image'
                  src={IMAGES[genre.trim().replace(' ', '_')]}
                  alt={genre}
                  onClick={() => {
                    updateFilters(setFilters, filters, GENRE, genre)
                  }}
                />
              </div>
            );
          })}
          <div style={{ display: "flex", marginTop: "10px" }}>
            <button onClick={() => { deleteFilters(setFilters, filters) }} className='button-filters'>{filters.GENRE}<span className="remove-icon"> × </span></button>
          </div>


        </section>

      </section>
      <div style={{ display: "flex", gap: "15px", justifyContent: "space-around", marginTop: "10px" }}>
        <button onClick={() => changeSelection("libros-disponibles")} id='libros-disponibles' className="change-selection active">Libros disponibles: {filteredBooks.length}</button>
        <button onClick={() => changeSelection("libros-guardados")} id='libros-guardados' className="change-selection">Libros guardados: {booksSaved.length}</button>
        <div className='bottomLine' id='bottom-line'></div>
      </div>


    </main>
  )
}

export default Filters