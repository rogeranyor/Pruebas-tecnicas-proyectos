import getBooks from "../customHooks/useGetBooks"
import { getGenres } from "../services/bookLogic";
import { filterAvailableBooks, filterSavedBooks } from "../helpers/helpers";
import { ALL_FILTER } from "../consts/filters";
import { IMAGES } from "../consts/images";

describe("Book", () => {
    test("save a book", async () => {
        const book = await getBooks()
        expect(Array.isArray(book)).toBe(true)
    }),
        test("get genres", async () => {
            const book = await getBooks()
            const genres = getGenres(book)
            expect(genres).toStrictEqual(['Todos', 'Fantasía', 'Ciencia ficción', 'Zombies', 'Terror'])

        }),
        test("filter available books", async () => {
            const book = await getBooks()
            const filters = { PAGES: 1200, GENRE: 'Todos' }
            const booksSavedISBN = [book[0].ISBN, book[1].ISBN]
            const availableBooks = filterAvailableBooks(book, filters, booksSavedISBN)
            const booksAvailable = book.filter((book) => !booksSavedISBN.includes(book.ISBN) && book.pages <= filters.PAGES && (book.genre === filters.GENRE || filters.GENRE === ALL_FILTER))
            expect(availableBooks).toStrictEqual(booksAvailable)

        }),
        test("filter saved books", async () => {
            const book = await getBooks()
            const filters = { PAGES: 1200, GENRE: 'Todos' }
            const booksSavedISBN = [book[0].ISBN, book[1].ISBN]
            const savedBooks = filterSavedBooks(book, filters, booksSavedISBN)
            const booksSaved = book.filter((book) => booksSavedISBN.includes(book.ISBN) && book.pages <= filters.PAGES && (book.genre === filters.GENRE || filters.GENRE === ALL_FILTER))
            expect(savedBooks).toStrictEqual(booksSaved)
        })

});
