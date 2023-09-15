import { Book } from "../interfaces/book";
import React from "react";


export function changeSelection(clicked: string) {

  if (clicked === 'libros-disponibles' && document.getElementById('libros-disponibles')?.classList.contains('active')) return
  if (clicked === 'libros-guardados' && document.getElementById('libros-guardados')?.classList.contains('active')) return

  const librosDisponibles = document.getElementById('libros-disponibles')
  const librosGuardados = document.getElementById('libros-guardados')


  if (librosDisponibles && librosGuardados) {
    librosDisponibles.classList.toggle('active');
    librosGuardados.classList.toggle('active');
  }

 
  const booksSavedElement = document.getElementById('booksSaved');
  const filteredBooks = document.getElementById('filteredBooks');
  const booksContainer = document.getElementById('books-container');


  if (booksSavedElement && filteredBooks && booksContainer) {
    if (booksContainer.classList.contains('slide-out')) {
      booksContainer.classList.remove('slide-out');
      booksContainer.classList.add('slide-in');
    }
    else {
      booksContainer.classList.remove('slide-in');
      booksContainer.classList.add('slide-out');

    }

  }

}


export function handleStorageChange(event,
  setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>,
  setFilters: React.Dispatch<React.SetStateAction<{ PAGES: number, GENRE: string }>>,
  setBooksSavedISBN: React.Dispatch<React.SetStateAction<string[]>>) {
  if (event.key === 'booksSaved') {
    setBooksSaved(JSON.parse(event.newValue || '[]'));
    const booksSavedISBN = JSON.parse(event.newValue || '[]').map(book => book.ISBN);
    setBooksSavedISBN(booksSavedISBN);

  }
  else if (event.key === 'filters') {
    setFilters(JSON.parse(event.newValue || '{"PAGES":2000,"GENRE":"Todos"}'));
  }
};

export function filterSavedBooks(AllBooks: { current: Book[] }, filters: { PAGES: number, GENRE: string }, booksSavedISBN: string[], ALL_FILTER: string) {
  return AllBooks.current.filter((book) => {
    return (
      book.pages <= filters.PAGES &&
      (book.genre === filters.GENRE || filters.GENRE === ALL_FILTER) && booksSavedISBN.some(savedBook => savedBook === book.ISBN)
    );
  })
}

export function filterAvailableBooks(AllBooks: { current: Book[] }, filters: { PAGES: number, GENRE: string }, booksSavedISBN: string[], ALL_FILTER: string) {
  return AllBooks.current.filter((book) => {
    return (
      book.pages <= filters.PAGES &&
      (book.genre === filters.GENRE || filters.GENRE === ALL_FILTER) && !booksSavedISBN.some(savedBook => savedBook === book.ISBN)
    );
  })
}