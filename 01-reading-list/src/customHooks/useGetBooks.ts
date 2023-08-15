import books from '../mookUps/books.json';
import { Books, Book, Author } from '../interfaces/book';

async function getBooks(): Promise<Book[]> {

    const data: Books = books;

    return data.library.map((libraryItem) => {

        const book: Book = libraryItem.book;

        const author: Author = {
            name: book.author.name,
            otherBooks: [...book.author.otherBooks]
        }

        return {
            ISBN: book.ISBN,
            author: author,
            cover: book.cover,
            genre: book.genre,
            pages: book.pages,
            synopsis: book.synopsis,
            title: book.title,
            year: book.year
        } as Book

    })
}

export default getBooks;
