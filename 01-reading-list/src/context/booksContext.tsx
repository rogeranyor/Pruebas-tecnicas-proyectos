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
    const [filters, setFilters] = useState<{ PAGES: number, GENRE: string }>({ PAGES: 2000, GENRE: 'Todos' });
    const [genres, setGenres] = useState<string[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    useEffect(() => {
        async function getBooks() {
            const books: Book[] = await useGetBooks();
            const genres: string[] = getGenres(books);
            setGenres(genres);
            setFilteredBooks(books);

            AllBooks.current = books;
            
            const { saved, savedFilters, booksISBN } = getBooksSaved()

            setBooksSaved(saved)
            setFilters(savedFilters)
            setBooksSavedISBN(booksISBN)
        }
        getBooks();


        window.addEventListener('storage', (e) => handleStorageChange(e, setBooksSaved, setFilters, setBooksSavedISBN));

        return () => {
            window.removeEventListener('storage', (e) => handleStorageChange(e, setBooksSaved, setFilters, setBooksSavedISBN));
        }

    }, []);

    useEffect(() => {
        const filteredBooks = filterAvailableBooks(AllBooks, filters, booksSavedISBN, ALL_FILTER)
        setFilteredBooks(filteredBooks)
        const booksSaved = filterSavedBooks(AllBooks, filters, booksSavedISBN, ALL_FILTER)
        setBooksSaved(booksSaved)
    }, [filters, booksSavedISBN]);



    ;

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
                setBooksSavedISBN
            }}
        >
            {children}
        </booksProvider.Provider>
    )
}