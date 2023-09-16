import React, { useContext, useEffect, useRef } from 'react'
import { booksProvider } from '../../context/bookscontext'
import { ALL_FILTER, GENRE } from '../../consts/filters'
import { IMAGES } from '../../consts/images'
import { deleteFilters, updateFilters } from '../../services/filtersLogic'

function GenreFilter() {
    const context = useContext(booksProvider);
    const setFilters = context?.setFilters || (() => { });
    const filters = context?.filters
    const genres = context?.genres || [];
    return (
        <section className='filter-genre'>
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
                <button onClick={() => { deleteFilters(setFilters, filters) }} className='button-filters'>{filters?.GENRE}<span className="remove-icon"> × </span></button>
            </div>


        </section>
    )
}

export default GenreFilter