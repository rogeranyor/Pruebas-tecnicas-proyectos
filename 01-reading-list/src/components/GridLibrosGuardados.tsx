import React, { useContext } from 'react'
import { Book } from '../interfaces/book'
import CardBook from './card-book'
import { booksProvider } from '../context/bookscontext'

function GridLibrosGuardados() {
    const context = useContext(booksProvider);
    const booksSaved = context?.booksSaved || [];

    return (
        <main id='booksSaved' className="grid-container display-none">
            {booksSaved.map((book) => {
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

export default GridLibrosGuardados