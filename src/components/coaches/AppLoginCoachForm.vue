<template>
  <form>
    <app-form-input
      v-mode="firstName"
      label-text="First name:"
      input-id="firstName"
      error-text="First name is required"
      :is-not-valid="isFirtNameNotValid"
    ></app-form-input>
    <app-form-input
      v-mode="password"
      label-text="Password:"
      input-id="password"
      error-text="Password name is required"
      input-type="password"
      :is-not-valid="isFirtNameNotValid"
    ></app-form-input>
    <app-button class="center-btn">Login</app-button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import AppFormInput from "./AppFormInput.vue";

const firstName = ref("");
const password = ref("");
</script>
