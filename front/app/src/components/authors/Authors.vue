
<template>
  <div class="row">
    <div class="col-12">
      <p>Authors:</p>
      <table class="table table-striped table-bordered authors-list">
        <thead>
          <tr>
            <td>Name: Age</td>
            <td>Book: Release date</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="author in authors" :key="author.id">
            <td>
              {{ author.firstName }} {{ author.lastName }}: {{ author.age }}
            </td>
            <td>
              <table class="books-list">
                <tr v-for="book in author.books" :key="book.id">
                  <td>{{ book.name }}: {{ book.releaseDate }}</td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" src="./Authors.ts"></script>

<style scoped lang="scss" src="./Authors.scss" />
