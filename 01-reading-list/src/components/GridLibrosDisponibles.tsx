import React, { useContext } from 'react'
import { Book } from '../interfaces/book'
import CardBook from './card-book'
import { booksProvider } from '../context/bookscontext'
function GridLibrosDisponibles() {

    const context = useContext(booksProvider);
    const filteredBooks = context?.filteredBooks || [];

    return (
        <main id='filteredBooks' className="grid-container display ">
            {filteredBooks.map((book) => {
                return (
                    <CardBook
                        key={book.ISBN}
                        book={book}

                    />
                )
            })}
        </main>
    )
}

export default GridLibrosDisponibles