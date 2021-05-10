import { GetterTree } from "vuex";
import { State } from "./types";

export const getters: GetterTree<State, State> = {
  booksWithAuthors(state) {
    return state.books?.map((book) => ({
      ...book,
      author: state.authors?.find(({ id }) => id == book.authorId),
    }));
  },
  authorsWithBooks(state) {
    return state.authors?.map((author) => ({
      ...author,
      books: state.books?.filter(({ authorId }) => authorId == author.id),
    }));
  },
};
