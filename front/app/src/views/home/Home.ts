import Vue from "vue";
import Component from "vue-class-component";
import Authors from "@/components/authors/Authors.vue";
import Books from "@/components/books/Books.vue";
import AddBook from "@/components/add-book/AddBook.vue";
import { mapState } from "vuex";

@Component({
  components: {
    AddBook,
    Authors,
  },
  computed: mapState({
    authors: "authors",
  }),
})
export default class Home extends Vue {}
