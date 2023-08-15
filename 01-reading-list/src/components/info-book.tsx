import React, { useState, useContext, useEffect } from 'react'
import { Book } from '../interfaces/book'
import '../styles/info-book.css'
import { booksProvider } from '../context/bookscontext'

function infoBook() {

    const [animate, setAnimate] = useState(false);
    const context = useContext(booksProvider);
    const selectedBook = context?.selectedBook || null;


    useEffect(() => {
        if (selectedBook) {
            setAnimate(true);
            const animationTimeout = setTimeout(() => {
                setAnimate(false);
            }, 500);
            return () => clearTimeout(animationTimeout);
        }
    }, [selectedBook]);


    if (selectedBook === null) {
        return (
            <div className="info-no-book">
                <h2 style={{ flexBasis: "0", flexGrow: "0.5" }}>Selecciona un libro para ver su información</h2>
            </div>
        )
    }
    return (
        <div className="info-book">
            <h2>{selectedBook.title}</h2>
            <main className='section-cover'>
                <section style={{ width: "50%" }}>
                    <img className={`${animate ? 'animated-image' : ''}`}
                        style={{
                            height: "auto",
                            width: "20vw",
                            minWidth: "153px",
                            minHeight: "230px",
                            marginBlockEnd:"5%"
                        }}
                        src={selectedBook.cover} alt={selectedBook.title} />
                </section>
                <aside
                    className={`${animate ? 'animated-text' : ''}` + ' info-book-aside'}
                >
                    <h3 className='info-book-text' >Autor: {selectedBook.author.name}</h3>
                    <div className='description-book'>
                        <h3 className='info-book-text'>Descripción:</h3>
                        <h4 className='info-book-text'>{selectedBook.synopsis}</h4>
                    </div>
                    <section >
                        <h4 className='info-book-text'>Género:</h4>
                        <h5 className='info-book-text'>{selectedBook.genre}</h5>
                        <h4 className='info-book-text'>Numero total de páginas:</h4>
                        <h5 className='info-book-text'>{selectedBook.pages} páginas</h5>
                    </section>
                </aside >
            </main>

        </div >
    )
}

export default infoBook