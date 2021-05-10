<template>
  <div id="app" class="container">
    <div id="nav" class="row col-md">
      <div class="col-md">
        <router-link to="/">Home</router-link> |
        <router-link to="/bookList">Book List</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script src="./App.ts" />

<style lang="scss" src="./App.scss" />