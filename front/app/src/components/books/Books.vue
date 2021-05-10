
<template>
  <div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <td>Name</td>
          <td>Release Date</td>
          <td>Author</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.name }}</td>
          <td>{{ book.releaseDate }}</td>
          <td>
            {{
              book && book.author
                ? `${book.author.firstName} ${book.author.lastName}`
                : ""
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" src="./Books.ts"></script>

<style scoped lang="scss" src="./Books.scss" />
