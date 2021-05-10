import { MutationTree } from "vuex";
import { State } from "./types";

export const mutations: MutationTree<State> = {
  setAuthors(state, authors: State["authors"]) {
    state.authors = authors;
  },
  setBooks(state, books: State["books"]) {
    state.books = books;
  },
  setLoading(state, loading: boolean) {
    if (state.loading !== loading) state.loading = loading;
  },
  setErrorMessage(state, errorMessage: string) {
    state.errorMessage = errorMessage;
  },
  emptyErrorMessage(state) {
    state.errorMessage = null;
  },
};
