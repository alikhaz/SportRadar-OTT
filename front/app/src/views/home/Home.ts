import Vue from "vue";
import Component from "vue-class-component";
import Authors from "@/components/authors/Authors.vue";
import AddAuthor from "@/components/add-author/AddAuthor.vue";
import { mapState } from "vuex";

@Component({
  components: {
    AddAuthor,
    Authors,
  },
  computed: mapState({
    authors: "authors",
  }),
})
export default class Home extends Vue {}
