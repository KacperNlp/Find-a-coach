<template>
  <form @submit.prevent="onSubmitForm">
    <app-form-input
      v-model="firstName"
      label-text="First name:"
      input-id="firstName"
      error-text="First name is required"
      :is-not-valid="isFirtNameNotValid"
    ></app-form-input>
    <app-form-input
      v-model="password"
      label-text="Password:"
      input-id="password"
      error-text="Password name is required"
      input-type="password"
      :is-not-valid="isPasswordNotValid"
    ></app-form-input>
    <app-button class="center-btn">Login</app-button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
import { useCoachesStore } from "../../store/coaches/index";

//components
import AppFormInput from "./AppFormInput.vue";

//hooks
import { useRedirect } from "../../hooks/useRedirect.js";

const coaches = useCoachesStore();
const { redirectToCoachesPage } = useRedirect();

const firstName = ref("");
const password = ref("");
const isFirtNameNotValid = ref(false);
const isPasswordNotValid = ref(false);

watch(firstName, (newValue, __) => {
  if (isFirtNameNotValid.value && newValue.length > 0) {
    isFirtNameNotValid.value = false;
  }
});

watch(password, (newValue, __) => {
  if (isPasswordNotValid.value && newValue.length > 0) {
    isPasswordNotValid.value = false;
  }
});

const onSubmitForm = () => {
  if (isFormValid(firstName.value, password.value)) {
    coaches.loginUser(firstName.value, password.value);
    redirectToCoachesPage();
  }

  console.log("Valid not pass!");
};

const isFormValid = (firstName, password) => {
  resetValidation();

  if (!firstName && firstName.length < 3) isFirtNameNotValid.value = true;
  if (!password && password.length < 3) isPasswordNotValid.value = true;

  return !(isFirtNameNotValid.value || isPasswordNotValid.value);
};

const resetValidation = () => {
  isFirtNameNotValid.value = false;
  isPasswordNotValid.value = false;
};
</script>
