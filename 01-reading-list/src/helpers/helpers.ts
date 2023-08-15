import { Book } from "../interfaces/book";

export function changeSelection() {
  document.getElementById('libros-disponibles')?.classList.toggle('active');
  document.getElementById('libros-guardados')?.classList.toggle('active');

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


export function handleStorageChange(event, setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>, setFilters: React.Dispatch<React.SetStateAction<{ PAGES: number, GENRE: string }>>, setSelectedBook: React.Dispatch<React.SetStateAction<Book | null>>) {
  if (event.key === 'booksSaved') {
    setBooksSaved(JSON.parse(event.newValue || '[]'));
  }
  else if (event.key === 'filters') {
    setFilters(JSON.parse(event.newValue || '{"PAGES":2000,"GENRE":"Todos"}'));
  }
  else if (event.key === 'selectedBook') {
    setSelectedBook(JSON.parse(event.newValue || 'null'));
  }
};