import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import { Book, Maybe } from "@/store";

type AddBookData = {
  book: {
    name: Maybe<Book["name"]>;
    authorId: Maybe<Book["authorId"]>;
    releaseDate: Maybe<Book["releaseDate"]>;
  };
  errors: {
    name: Maybe<string>;
    releaseDate: Maybe<string>;
    authorId: Maybe<string>;
  };
};
@Component({
  computed: mapState({
    authors: "authors",
  }),
})
export default class AddBook extends Vue {
  book: AddBookData["book"] = { name: null, releaseDate: null, authorId: null };

  get errors(): AddBookData["errors"] {
    return {
      name: this.validateName(),
      releaseDate: this.validateReleaseDate(),
      authorId: this.validateAuthorId(),
    };
  }

  get loading(): Maybe<boolean> {
    return this.$store.state.loading;
  }

  get errorMessage() {
    return this.$store.state.errorMessage;
  }

  get isValid() {
    return Object.values(this.errors).every((error) => !error);
  }

  set isValid(valid: boolean) {
    if (this.book.name === null) this.book.name = "";
    if (this.book.releaseDate === null) this.book.releaseDate = "";
    if (this.book.authorId === null) this.book.authorId = -1;
  }

  submitForm(e: Event) {
    e.preventDefault();
    this.validateForm();
    if (this.isValid) this.$store.dispatch("addBook", this.$data.book);
  }

  validateForm() {
    this.isValid =
      !!this.validateName() ||
      !!this.validateAuthorId() ||
      !!this.validateReleaseDate();
  }

  validateName() {
    const name = this.book.name;

    return name === null
      ? null
      : !name || typeof name !== "string"
      ? "Name is required"
      : null;
  }

  validateReleaseDate() {
    const releaseDate = this.book.releaseDate;
    return releaseDate === null
      ? null
      : !releaseDate ||
        typeof releaseDate !== "string" ||
        !Date.parse(releaseDate)
      ? "Please enter a valid release date"
      : null;
  }

  validateAuthorId() {
    const authorId = this.book.authorId;
    return authorId === null
      ? null
      : authorId === undefined ||
        typeof authorId !== "number" ||
        authorId < 0 ||
        authorId % 1 !== 0
      ? "An author for the book is required"
      : null;
  }
}
