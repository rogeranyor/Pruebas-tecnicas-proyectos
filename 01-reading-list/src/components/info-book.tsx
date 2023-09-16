import React, { useState, useContext, useEffect } from 'react'
import '../styles/info-book.css'
import { booksProvider } from '../context/bookscontext'

function infoBook() {

    const context = useContext(booksProvider);
    const selectedBook = context?.selectedBook || null;


    if (selectedBook === null) {
        return (
            <div className="info-no-book">
                <h2 style={{ flexBasis: "0", flexGrow: "0.5", marginLeft: "5vw" }}>Selecciona un libro para ver su información</h2>
            </div>
        )
    }
    return (
        <div className="info-book">
            <h2>{selectedBook.title}</h2>
            <img key={selectedBook.ISBN} className={'animated-image info-book-img'}
                src={selectedBook.cover} alt={selectedBook.title} />
            <aside key={selectedBook.ISBN + "text"} className={'animated-text info-book-aside'}>
                <h6 className='info-book-text' >Autor: {selectedBook.author.name}</h6>
                <div className='description-book'>
                    <h6 className='info-book-text'>Descripción:</h6>
                    <h6 className='info-book-text'>- {selectedBook.synopsis}</h6>
                </div>
                <section >
                    <h6 className='info-book-text'>Género: {selectedBook.genre}</h6>
                    <h6 className='info-book-text'>Número total de páginas: {selectedBook.pages}</h6>
                </section>
            </aside >

        </div >
    )
}

export default infoBook