import Vue from "vue";
import Component from "vue-class-component";
@Component({
  beforeMount() {
    this.$store.dispatch("fetchAuthors");
    this.$store.dispatch("fetchBooks");
  },
})
export default class App extends Vue {}
