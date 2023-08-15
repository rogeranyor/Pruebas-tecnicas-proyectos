import React from 'react';
import { Books, Book, Author } from '../interfaces/book';

export function addBook(book: Book, setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>, booksSaved: Book[]): void {
    localStorage.setItem('booksSaved', JSON.stringify([...booksSaved, book]));
    setBooksSaved([...booksSaved, book]);
}
export function deleteBook(book: Book, setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>, booksSaved: Book[]): void {
    const booksSavedFiltered = booksSaved.filter(bookSaved => bookSaved.ISBN !== book.ISBN);
    localStorage.setItem('booksSaved', JSON.stringify(booksSavedFiltered));
    setBooksSaved(booksSavedFiltered);
}

export function checkBookSaved(ISBN: string, booksSaved: Book[]): boolean {
    const bookSaved = booksSaved.find(book => book.ISBN === ISBN);
    return bookSaved ? true : false;
}

export function saveBook(book: Book, booksSaved: Book[], setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>): void {
    booksSaved.find(bookSaved => bookSaved.ISBN === book.ISBN) ? deleteBook(book, setBooksSaved, booksSaved) : addBook(book, setBooksSaved, booksSaved);
}

export function getGenres(Books: Book[]): string[] {
    const genres: string[] = [];
    genres.push('Todos');
    Books.forEach(book => {
        if (!genres.includes(book.genre)) genres.push(book.genre);
    })
    return genres;
}

export function selectedBook(book: Book, setSelectedBook: React.Dispatch<React.SetStateAction<Book | null>>): void {
    setSelectedBook(book);
    localStorage.setItem('selectedBook', JSON.stringify(book));
}

export function getBooksSaved(setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>, setFilters: React.Dispatch<React.SetStateAction<{ PAGES: number, GENRE: string }>>, setSelectedBook: React.Dispatch<React.SetStateAction<Book | null>>): void {
    const saved: Book[] = JSON.parse(localStorage.getItem('booksSaved') || '[]');
    setBooksSaved(saved);
    const savedFilters: { PAGES: number, GENRE: string } = JSON.parse(localStorage.getItem('filters') || '{"PAGES":2000,"GENRE":"Todos"}');
    setFilters(savedFilters);
    const selectedBook: Book | null = JSON.parse(localStorage.getItem('selectedBook') || 'null');
    setSelectedBook(selectedBook);
}