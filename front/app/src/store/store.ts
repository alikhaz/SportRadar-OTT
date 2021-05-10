import * as api from "@/api";
import Vue from "vue";
import Vuex from "vuex";
import { Book, State } from "./types";
import { mapAuthor, mapBook } from "./helpers";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

const initialState = {
  authors: null,
  books: null,
  loading: null,
  errorMessage: null,
};

Vue.use(Vuex);

export const store = new Vuex.Store<State>({
  state: initialState,
  mutations,
  getters,
  actions,
});
