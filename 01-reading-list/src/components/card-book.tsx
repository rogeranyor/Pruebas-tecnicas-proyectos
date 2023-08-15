import React, { useContext } from 'react';
import { checkBookSaved, saveBook, selectedBook } from '../services/bookLogic';
import { BsBookmark, BsBookmarkCheckFill } from 'react-icons/bs'
import { Book } from '../interfaces/book';
import '../styles/card-book.css'
import { booksProvider } from '../context/bookscontext';
function CardBook({ book }: { book: Book }) {

    const context = useContext(booksProvider);
    const booksSaved = context?.booksSaved || [];
    const setBooksSaved = context?.setBooksSaved || (() => { });
    const setSelectedBook = context?.setSelectedBook || (() => { });



    return (
        <main key={book.ISBN} className="card-book">
            <image className='img-container'>
                <img onClick={() => selectedBook(book, setSelectedBook)} className="img-cover" src={book.cover} alt={book.title} id={book.ISBN} />
                <div onClick={() => saveBook(book, booksSaved, setBooksSaved)} className="save-icon">
                    {checkBookSaved(book.ISBN, booksSaved) ? <BsBookmarkCheckFill fontSize={"25px"} /> : <BsBookmark fontSize={"25px"} />}
                </div>
            </image>


        </main>
    )
}


export default CardBook