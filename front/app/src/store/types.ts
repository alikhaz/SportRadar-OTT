export type Maybe<T> = T | null;

export type Author = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
};

export type Book = {
  id: number;
  name: string;
  releaseDate: string;
  authorId: number;
};

export type State = {
  authors: Maybe<Author[]>;
  books: Maybe<Book[]>;
  loading: Maybe<boolean>;
  errorMessage: Maybe<string>;
};
