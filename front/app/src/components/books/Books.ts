import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: mapGetters({
    books: "booksWithAuthors",
  }),
})
export default class Books extends Vue {}
