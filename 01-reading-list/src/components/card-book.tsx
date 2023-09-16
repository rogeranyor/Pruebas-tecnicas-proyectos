import React, { useContext } from 'react';
import { checkBookSaved, saveBook } from '../services/bookLogic';
import { BsBookmark, BsBookmarkCheckFill } from 'react-icons/bs'
import { Book } from '../interfaces/book';
import '../styles/card-book.css'
import { booksProvider } from '../context/bookscontext';
function CardBook({ book }: { book: Book }) {

    const context = useContext(booksProvider);
    const booksSaved = context?.booksSaved || [];
    const setBooksSaved = context?.setBooksSaved || (() => { });
    const setSelectedBook = context?.setSelectedBook || (() => { });
    const setBooksISBN = context?.setBooksSavedISBN || (() => { });
    const booksSavedISBN = context?.booksSavedISBN || [];

    function goUp() {
        window.scrollTo({
            top: -50,
            behavior: 'smooth'
        });
    }

    return (
        <main key={book.ISBN} className="card-book">
            <div className='img-container'>
                <div onClick={() => { setSelectedBook(book); goUp() }} className="img-cover" style={{ backgroundImage: `url(${book.cover})` }} id={book.ISBN}> </div>
                <div onClick={() => saveBook(book, booksSaved, setBooksSaved, setBooksISBN, booksSavedISBN)} className="save-icon">
                    {checkBookSaved(book.ISBN, booksSaved) ? <BsBookmarkCheckFill fontSize={"25px"} /> : <BsBookmark fontSize={"25px"} />}
                </div>

            </div>
        </main>
    )
}


export default CardBook