<template>
  <form @submit.prevent="onFormSubmit">
    <app-form-input
      :is-not-valid="isEmailNotValid"
      v-model="userEmail"
      input-id="user-email"
      label-text="Type your e-mail:"
      error-text="Email is required and need to contain @, . and at least minimum 5 characters"
    ></app-form-input>
    <div class="form-input-container">
      <label for="message">Message to coach:</label>
      <app-form-validation v-if="isMessageNotValid"
        >You have write something to your message</app-form-validation
      >
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        class="form-input resize-none"
        v-model="message"
      ></textarea>
    </div>

    <app-button class="center-btn">Submit</app-button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import AppFormInput from "../../components/coaches/AppFormInput.vue";

const userEmail = ref("");
const message = ref("");

const isEmailNotValid = ref(false);
const isMessageNotValid = ref(false);

const onFormSubmit = () => {
  if (checkEmailValidation() && checkMessageValidation()) {
    return;
  }

  console.log("submit");
};

const checkEmailValidation = () => {
  if (
    userEmail.value.includes("@") &&
    userEmail.value.includes(".") &&
    userEmail.value.length > 5
  ) {
    isEmailNotValid.value = false;
    return false;
  }

  isEmailNotValid.value = true;
  return true;
};

const checkMessageValidation = () => {
  if (message.value.length > 3) {
    isMessageNotValid.value = false;
    return false;
  }

  isMessageNotValid.value = true;
  return true;
};
</script>
