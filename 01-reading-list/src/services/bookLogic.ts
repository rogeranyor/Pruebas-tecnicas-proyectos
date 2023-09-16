import React from 'react';
import { Book } from '../interfaces/book';

export function addBook(book: Book, setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>, setBooksSavedISBN: React.Dispatch<React.SetStateAction<string[]>>, booksSaved: Book[], booksSavedISBN: string[]): void {
    localStorage.setItem('booksSaved', JSON.stringify([...booksSaved, book]));
    setBooksSavedISBN([...booksSavedISBN, book.ISBN]);
    setBooksSaved([...booksSaved, book]);
}
export function deleteBook(book: Book, setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>, booksSaved: Book[], setBooksSavedISBN: React.Dispatch<React.SetStateAction<string[]>>): void {
    const booksSavedFiltered = booksSaved.filter(bookSaved => bookSaved.ISBN !== book.ISBN);
    const booksSavedISBNFiltered = booksSavedFiltered.map(book => book.ISBN);

    localStorage.setItem('booksSaved', JSON.stringify(booksSavedFiltered));
    setBooksSavedISBN(booksSavedISBNFiltered);
    setBooksSaved(booksSavedFiltered);
}

export function checkBookSaved(ISBN: string, booksSaved: Book[]): boolean {
    const bookSaved = booksSaved.find(book => book.ISBN === ISBN);
    return bookSaved ? true : false;
}

export function saveBook(book: Book, booksSaved: Book[], setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>, setBooksSavedISBN: React.Dispatch<React.SetStateAction<string[]>>, booksSavedISBN: string[]): void {
    booksSaved.find(bookSaved => bookSaved.ISBN === book.ISBN) ? deleteBook(book, setBooksSaved, booksSaved, setBooksSavedISBN) : addBook(book, setBooksSaved, setBooksSavedISBN, booksSaved, booksSavedISBN);
}

export function getGenres(Books: Book[]): string[] {
    const genres: string[] = [];
    genres.push('Todos');
    Books.forEach(book => {
        if (!genres.includes(book.genre)) genres.push(book.genre);
    })
    return genres;
}


export function getBooksSaved(): { saved: Book[], booksISBN: string[] } {
    const saved: Book[] = JSON.parse(localStorage.getItem('booksSaved') || '[]');
    const booksISBN = saved.map(book => book.ISBN);
    return { saved, booksISBN };

}