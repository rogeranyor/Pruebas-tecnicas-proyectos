import React, { useState, useEffect, createContext, useRef } from 'react'
import useGetBooks from '../customHooks/useGetBooks'
import { Book, BooksContextType } from '../interfaces/book'
import { getGenres, getBooksSaved } from '../services/bookLogic'
import { ALL_FILTER } from '../consts/filters'
import { handleStorageChange } from '../helpers/helpers'

export const booksProvider = createContext<BooksContextType | null>(null);


export function BooksProvider({ children }) {

    const AllBooks = useRef<Book[]>([])

    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [booksSaved, setBooksSaved] = useState<Book[]>([]);
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
        }
        getBooks();
        getBooksSaved(setBooksSaved, setFilters, setSelectedBook);

        window.addEventListener('storage', (e) => handleStorageChange(e, setBooksSaved, setFilters, setSelectedBook));

        return () => { window.removeEventListener('storage', (e) => handleStorageChange(e, setBooksSaved, setFilters, setSelectedBook)) };

    }, []);

    useEffect(() => {
        setFilteredBooks(
            AllBooks.current.filter((book) => {
                return (book.pages <= filters.PAGES) &&
                    (book.genre === filters.GENRE || filters.GENRE === ALL_FILTER) &&
                    !booksSaved.some(savedBook => savedBook.ISBN === book.ISBN)
            }))

    }, [filters.GENRE, filters.PAGES, booksSaved]);




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
            }}
        >
            {children}
        </booksProvider.Provider>
    )
}