import { Book as APIBook, Author as APiAuthor } from "@/api";
import { Author, Book } from "./types";

export const mapBook = ({
  author_id,
  name,
  id,
  release_date,
}: APIBook): Book => ({
  authorId: author_id,
  id,
  name,
  releaseDate: release_date,
});

export const mapAuthor = ({
  first_name,
  last_name,
  id,
  age,
  address,
}: APiAuthor): Author => ({
  id,
  firstName: first_name,
  lastName: last_name,
  age,
  address,
});
