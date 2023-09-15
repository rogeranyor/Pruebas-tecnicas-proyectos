import React, { useState, useContext, useEffect } from 'react'
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
                <h2 style={{ flexBasis: "0", flexGrow: "0.5",marginLeft:"5vw" }}>Selecciona un libro para ver su información</h2>
            </div>
        )
    }
    return (
        <div className="info-book">
            <h2>{selectedBook.title}</h2>
            <main className='section-cover'>
                <img className={`${animate ? 'animated-image info-book-img' : 'info-book-img'}`}
                    src={selectedBook.cover} alt={selectedBook.title} />
                <aside
                    className={`${animate ? 'animated-text' : ''}` + ' info-book-aside'}
                >
                    <h5 className='info-book-text' >Autor: {selectedBook.author.name}</h5>
                    <div className='description-book'>
                        <h5 className='info-book-text'>Descripción:</h5>
                        <h5 className='info-book-text'>{selectedBook.synopsis}</h5>
                    </div>
                    <section >
                        <h5 className='info-book-text'>Género: {selectedBook.genre}</h5>
                        <h5 className='info-book-text'>Número total de páginas: {selectedBook.pages}</h5>
                    </section>
                </aside >
            </main>

        </div >
    )
}

export default infoBook