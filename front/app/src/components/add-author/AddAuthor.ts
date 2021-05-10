import Vue from "vue";
import Component from "vue-class-component";
import { mapState } from "vuex";
import { Author, Book, Maybe } from "@/store";

type AddAuthorData = {
  author: {
    firstName: Maybe<Author["firstName"]>;
    lastName: Maybe<Author["lastName"]>;
    age: Maybe<Author["age"]>;
    address: Maybe<Author["address"]>;
    book: {
      name: Maybe<Book["name"]>;
      releaseDate: Maybe<Book["releaseDate"]>;
    };
  };
  errors: {
    firstName: Maybe<string>;
    lastName: Maybe<string>;
    age: Maybe<string>;
    address: Maybe<string>;
    bookName: Maybe<string>;
    bookReleaseDate: Maybe<string>;
  };
};
@Component({
  computed: mapState({
    authors: "authors",
  }),
  filters: {
    age(ageString: string) {
      return Number(ageString);
    },
  },
})
export default class AddAuthor extends Vue {
  author: AddAuthorData["author"] = {
    firstName: null,
    lastName: null,
    age: null,
    address: null,
    book: { name: null, releaseDate: null },
  };

  get errors(): AddAuthorData["errors"] {
    return {
      firstName: this.validateString(this.author.firstName),
      lastName: this.validateString(this.author.lastName),
      age: this.validateAge(),
      address: this.validateString(this.author.address),
      bookName: this.validateString(this.author.book.name),
      bookReleaseDate: this.validateReleaseDate(),
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
    if (this.author.firstName === null) this.author.firstName = "";
    if (this.author.lastName === null) this.author.lastName = "";
    if (this.author.address === null) this.author.address = "";
    if (this.author.age === null) this.author.age = -1;
    if (this.author.book.releaseDate === null)
      this.author.book.releaseDate = "";
    if (this.author.book.name === null) this.author.book.name = "";
  }

  submitForm(e: Event) {
    e.preventDefault();
    this.validateForm();
    if (this.isValid)
      this.$store.dispatch("addAuthor", {
        ...this.author,
        books: [this.author.book],
      });
  }

  validateForm() {
    this.isValid =
      [
        this.author.firstName,
        this.author.lastName,
        this.author.address,
        this.author.book.name,
      ].every((field) => !!this.validateString(field)) ||
      !!this.validateAge() ||
      !!this.validateReleaseDate();
  }

  validateString(field: Maybe<string>) {
    return field === null
      ? null
      : !field || typeof field !== "string"
      ? "Field is required"
      : null;
  }

  validateReleaseDate() {
    const releaseDate = this.author.book.releaseDate;
    return releaseDate === null
      ? null
      : !releaseDate ||
        typeof releaseDate !== "string" ||
        !Date.parse(releaseDate)
      ? "Please enter a valid release date"
      : null;
  }

  validateAge() {
    const age = this.author.age;
    return age === null
      ? null
      : age === undefined || typeof age !== "number" || age < 0 || age % 1 !== 0
      ? "A valid age amount is required"
      : null;
  }
}
