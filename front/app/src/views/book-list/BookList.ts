import Vue from "vue";
import Component from "vue-class-component";
import Books from "@/components/books/Books.vue";

@Component({
  components: {
    Books,
  },
})
export default class BookList extends Vue {}
