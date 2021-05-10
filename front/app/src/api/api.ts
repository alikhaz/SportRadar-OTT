import { apiEndpoint } from "@/constants.ts";

export type Author = {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  address: string;
};

export type Book = {
  id: number;
  name: string;
  release_date: string;
  author_id: number;
};

type BookInput = Omit<Book, "id">;

type WithData<T> = {
  data: T;
};

const headers: RequestInit["headers"] = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const handleError = (response: Response) => {
  if (!response.ok)
    throw new Error(response.statusText || String(response.status));
  return response;
};

const getData = <T>({ data }: WithData<T>) => data;

export const getAuthors = (): Promise<Author[]> =>
  fetch(apiEndpoint + "/authors", { method: "get" })
    .then(handleError)
    .then((response): Promise<WithData<Author[]>> => response.json())
    .then(getData);

export const getBooks = (): Promise<Book[]> =>
  fetch(apiEndpoint + "/books", { method: "get" })
    .then(handleError)
    .then((response): Promise<WithData<Book[]>> => response.json())
    .then(getData);

export const AddBook = (book: BookInput): Promise<Book> =>
  fetch(apiEndpoint + "/books", {
    method: "post",
    headers,
    body: JSON.stringify(book),
  })
    .then(handleError)
    .then((response): Promise<WithData<Book>> => response.json())
    .then(getData);
