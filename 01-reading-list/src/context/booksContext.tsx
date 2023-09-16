import React, { useState, useEffect, createContext, useRef, useMemo } from 'react'
import useGetBooks from '../customHooks/useGetBooks'
import { Book, BooksContextType } from '../interfaces/book'
import { getGenres, getBooksSaved } from '../services/bookLogic'
import { ALL_FILTER } from '../consts/filters'
import { handleStorageChange, filterSavedBooks, filterAvailableBooks } from '../helpers/helpers'
export const booksProvider = createContext<BooksContextType | null>(null);

export function BooksProvider({ children }) {

    const AllBooks = useRef<Book[]>([])

    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [booksSaved, setBooksSaved] = useState<Book[]>([]);
    const [booksSavedISBN, setBooksSavedISBN] = useState<string[]>([]);
    const [filters, setFilters] = useState<{ PAGES: number, GENRE: string }>();
    const [genres, setGenres] = useState<string[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [maxPages, setMaxPages] = useState<number>();

    useEffect(() => {
        async function getBooks() {
            const books: Book[] = await useGetBooks();
            const genres: string[] = getGenres(books);
            setGenres(genres);

            setFilteredBooks(books);

            AllBooks.current = books;

            const { saved, booksISBN } = getBooksSaved()

            const maxPages = books.reduce((acc, book) => book.pages > acc ? book.pages : acc, 0)

            setMaxPages(maxPages)
            setFilters({ PAGES: maxPages, GENRE: ALL_FILTER })
            setBooksSaved(saved)
            setBooksSavedISBN(booksISBN)
        }
        getBooks();


        window.addEventListener('storage', (e) => handleStorageChange(e, setBooksSaved, setFilters, setBooksSavedISBN));

        return () => {
            window.removeEventListener('storage', (e) => handleStorageChange(e, setBooksSaved, setFilters, setBooksSavedISBN));
        }

    }, []);

    useEffect(() => {
        if (filters === undefined) return
        const filteredBooks = filterAvailableBooks(AllBooks.current, filters, booksSavedISBN)
        setFilteredBooks(filteredBooks)
        const booksSaved = filterSavedBooks(AllBooks.current, filters, booksSavedISBN)
        setBooksSaved(booksSaved)
    }, [filters, booksSavedISBN]);

   


    return (
        <booksProvider.Provider
            value={{
                filteredBooks,
                booksSaved,
                setBooksSaved,
                filters,
                setFilters,
                genres,
                selectedBook,
                setSelectedBook,
                booksSavedISBN,
                setBooksSavedISBN,
                maxPages
            }}
        >
            {children}
        </booksProvider.Provider>
    )
}

export default BooksProvider
