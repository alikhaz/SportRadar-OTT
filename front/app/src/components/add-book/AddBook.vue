<template>
  <div>
    <form action="#" method="post" v-on:submit.prevent="submitForm">
      <label for="book-name">Book name</label>
      <input
        type="text"
        :class="`form-control ${!!errors['name'] ? 'is-invalid' : ''}`"
        id="book-name"
        v-model="book.name"
        placeholder="Book name"
      />
      <div class="invalid-feedback" v-show="!!errors['name']">
        {{ errors["name"] }}
      </div>
      <label for="book-release-date">Release date</label>
      <input
        type="date"
        :class="`form-control ${!!errors['releaseDate'] ? 'is-invalid' : ''}`"
        id="book-release-date"
        v-model="book.releaseDate"
        placeholder="00-00-0000 00:00:00"
      />
      <div class="invalid-feedback" v-show="!!errors['releaseDate']">
        {{ errors["releaseDate"] }}
      </div>
      <label for="book-author">Author</label>
      <select
        v-model="book.authorId"
        :class="`form-select ${!!errors['authorId'] ? 'is-invalid' : ''}`"
        id="book-author"
      >
        <option v-for="author in authors" :key="author.id" :value="author.id">
          {{ author.firstName }}
        </option>
      </select>
      <div class="invalid-feedback" v-show="!!errors['authorId']">
        {{ errors["authorId"] }}
      </div>
      <div class="submit-button">
        <button
          class="btn btn-primary"
          type="submit"
          :disabled="loading || !isValid"
        >
          <span class="spinner-border spinner-border-sm" v-show="loading" />
          Save
        </button>
      </div>
      <div class="alert alert-danger" v-show="!!errorMessage">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script src="./AddBook.ts" />

<style scoped lang="scss" src="./AddBook.scss" />