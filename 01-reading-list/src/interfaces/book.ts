export interface Books {
    library: Library[];
}

export interface Library {
    book: Book;
}

export interface Book {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
}

export interface Author {
    name: string;
    otherBooks: string[];
}
export type Filters = {
    PAGES: number;
    GENRE: string;
};

export type BooksContextType = {
    filteredBooks: Book[];
    booksSaved: Book[];
    setBooksSaved: React.Dispatch<React.SetStateAction<Book[]>>;
    filters: Filters | undefined;
    setFilters: React.Dispatch<React.SetStateAction<Filters | undefined>>;
    genres: string[];
    selectedBook: Book | null;
    setSelectedBook: React.Dispatch<React.SetStateAction<Book | null>>;
    booksSavedISBN: string[];
    setBooksSavedISBN: React.Dispatch<React.SetStateAction<string[]>>;
    maxPages: number | undefined;

};