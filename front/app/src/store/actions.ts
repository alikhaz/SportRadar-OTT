import { ActionTree } from "vuex";
import { mapAuthor, mapBook } from "./helpers";
import { Book, State } from "./types";
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
  async addBook(
    { commit, state },
    { authorId, name, releaseDate }: Omit<Book, "id">
  ) {
    commit("setLoading", true);
    commit("emptyErrorMessage");
    try {
      const addedBook = await api.AddBook({
        author_id: authorId,
        name,
        release_date: releaseDate,
      });
      commit("setBooks", [...(state.books || []), mapBook(addedBook)]);
      commit("setLoading", false);
    } catch (error) {
      commit("setErrorMessage", "An error occurred, please try again.");
      commit("setLoading", false);
    }
  },
};
