import { ActionTree } from "vuex";
import { mapAuthor, mapBook } from "./helpers";
import { Author, Book, State } from "./types";
import * as api from "@/api";

export const actions: ActionTree<State, State> = {
  async fetchAuthors(context) {
    const authors = await api.getAuthors();
    context.commit("setAuthors", authors.map(mapAuthor));
  },
  async fetchBooks(context) {
    const books = await api.getBooks();
    context.commit("setBooks", books.map(mapBook));
  },
  async addAuthor(
    { commit, state },
    {
      firstName,
      lastName,
      address,
      books,
      age,
    }: Omit<Author & { books: Omit<Book, "id" | "authorId">[] }, "id">
  ) {
    commit("setLoading", true);
    commit("emptyErrorMessage");
    try {
      const addedAuthor = await api.addAuthor({
        first_name: firstName,
        last_name: lastName,
        address,
        age,
        books: books.map((book) => ({
          name: book.name,
          release_date: book.releaseDate,
        })),
      });
      commit("setAuthors", [...(state.authors || []), mapAuthor(addedAuthor)]);
      commit("setBooks", [
        ...(state.books || []),
        ...addedAuthor.books.map(mapBook),
      ]);
      commit("setLoading", false);
    } catch (error) {
      commit("setErrorMessage", "An error occurred, please try again.");
      commit("setLoading", false);
    }
  },
};
