import { State } from "@/store";

export const state: State = {
  authors: [
    {
      id: 1,
      firstName: "firstName",
      lastName: "lastName",
      address: "address",
      age: 45,
    },
    {
      id: 5,
      firstName: "firstName",
      lastName: "lastName",
      address: "address",
      age: 45,
    },
  ],
  books: [
    {
      authorId: 1,
      id: 2,
      name: "name of the book",
      releaseDate: "2020-10-12",
    },
    {
      authorId: 5,
      id: 1,
      name: "name of the book",
      releaseDate: "",
    },
  ],
  errorMessage: null,
  loading: null,
};
