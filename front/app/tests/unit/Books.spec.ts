import { mount } from "@vue/test-utils";
import Books from "@/components/books/Books.vue";
import { Store } from "vuex";
import { State, getters } from "@/store";
import { state } from "./mock-state";

describe("Books.vue", () => {
  it("creates table of books with 2 rows", () => {
    const msg = "new message";
    const wrapper = mount(Books, {
      store: new Store<State>({ state, getters }),
    });
    const tableRows = wrapper.findAll("table tbody tr");
    expect(tableRows.length).toEqual(2);
  });

  it("First row has the right values", () => {
    const msg = "new message";
    const wrapper = mount(Books, {
      store: new Store<State>({ state, getters }),
    });
    const firstRowCells = wrapper.findAll("table tbody > tr td");
    expect(firstRowCells.at(0).text()).toEqual(state.books![0].name);
    expect(firstRowCells.at(2).text()).toEqual(
      `${state.authors![0].firstName} ${state.authors![0].lastName}`
    );
  });
});
