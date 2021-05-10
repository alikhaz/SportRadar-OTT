<template>
  <div>
    <form action="#" method="post" v-on:submit.prevent="submitForm">
      <label for="author-first-name">Author's first name</label>
      <input
        type="text"
        :class="`form-control ${!!errors['firstName'] ? 'is-invalid' : ''}`"
        id="author-first-name"
        v-model="author.firstName"
        placeholder="First name"
      />
      <div class="invalid-feedback" v-show="!!errors['firstName']">
        {{ errors["firstName"] }}
      </div>

      <label for="author-last-name">Author's last name</label>
      <input
        type="text"
        :class="`form-control ${!!errors['lastName'] ? 'is-invalid' : ''}`"
        id="author-last-name"
        v-model="author.lastName"
        placeholder="Last name"
      />
      <div class="invalid-feedback" v-show="!!errors['lastName']">
        {{ errors["lastName"] }}
      </div>

      <label for="author-age">Author's age</label>
      <input
        type="number"
        :class="`form-control ${!!errors['age'] ? 'is-invalid' : ''}`"
        id="author-age"
        @input="author.age = Number($event.target.value)"
        placeholder="Age"
      />
      <div class="invalid-feedback" v-show="!!errors['age']">
        {{ errors["age"] }}
      </div>

      <label for="author-address">Author's address</label>
      <input
        type="text"
        :class="`form-control ${!!errors['address'] ? 'is-invalid' : ''}`"
        id="author-address"
        v-model="author.address"
        placeholder="Address"
      />
      <div class="invalid-feedback" v-show="!!errors['address']">
        {{ errors["address"] }}
      </div>

      <label for="book-name">Book name</label>
      <input
        type="text"
        :class="`form-control ${!!errors['bookName'] ? 'is-invalid' : ''}`"
        id="book-name"
        v-model="author.book.name"
        placeholder="Book name"
      />
      <div class="invalid-feedback" v-show="!!errors['bookName']">
        {{ errors["bookName"] }}
      </div>

      <label for="book-release-date">Release date</label>
      <input
        type="date"
        :class="`form-control ${
          !!errors['bookReleaseDate'] ? 'is-invalid' : ''
        }`"
        id="book-release-date"
        v-model="author.book.releaseDate"
        placeholder="00-00-0000 00:00:00"
      />
      <div class="invalid-feedback" v-show="!!errors['bookReleaseDate']">
        {{ errors["bookReleaseDate"] }}
      </div>
      <!-- <label for="book-author">Author</label>
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
      </div> -->
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

<script src="./AddAuthor.ts" />

<style scoped lang="scss" src="./AddAuthor.scss" />