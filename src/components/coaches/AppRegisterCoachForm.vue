<template>
  <form @submit.prevent="onSubmitForm">
    <app-form-input
      label-text="First name:"
      input-id="firstName"
      v-model="firstName"
      error-text="First name is required"
      :is-not-valid="isFirtNameNotValid"
    ></app-form-input>
    <app-form-input
      label-text="Last name:"
      input-id="lastName"
      v-model="lastName"
      error-text="Last name is required"
      :is-not-valid="isLastNameNotValid"
    ></app-form-input>
    <div class="form-input-container">
      <label for="description">Please tell somethign about you:</label>
      <app-form-validation v-if="isDesciptionNotValid"
        >You have to tell something about yourself</app-form-validation
      >
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        class="form-input resize-none"
        v-model="description"
      ></textarea>
    </div>
    <div class="form-input-container">
      <label for="rate">Your horuly rate (in dollars $):</label>
      <input
        type="number"
        name="rate"
        id="rate"
        v-model.number="hourRate"
        class="form-input"
        min="0"
      />
    </div>
    <div class="flex flex-col gap-2 mb-8">
      <p>Chose your experince (tech stack.)</p>
      <app-form-validation v-if="isAreasNotValid"
        >You have to pick at least min. 1 element from list
        below</app-form-validation
      >
      <app-form-areas :areas-list="AREAS_LIST" v-model="areas"></app-form-areas>
    </div>
    <app-button>Submit</app-button>
  </form>
</template>

<script setup>
import { ref } from "vue";

import AppFormAreas from "./AppFormAreas.vue";
import AppFormInput from "./AppFormInput.vue";

const AREAS_LIST = [
  {
    value: "frontend",
    label: "Frontend Developer",
  },
  {
    value: "backend",
    label: "Backend Developer",
  },
  {
    value: "career",
    label: "IT Rectuiter (Career)",
  },
];
const MAX_ID_NUMBER = 99999999;

const firstName = ref("");
const lastName = ref("");
const description = ref("");
const hourRate = ref(0);
const areas = ref([]);

const isFirtNameNotValid = ref(false);
const isLastNameNotValid = ref(false);
const isDesciptionNotValid = ref(false);
const isAreasNotValid = ref(false);

const onSubmitForm = () => {
  const idOfNewCoach = Math.floor(Math.random() * MAX_ID_NUMBER);
  const newCoach = {
    id: idOfNewCoach,
    firstName: firstName.value,
    lastName: lastName.value,
    areas: areas.value,
    description: description.value,
    hourlyRate: hourRate.value,
  };

  if (isFormValid(newCoach)) {
    resetAllFormValue();
  }
};

const isFormValid = ({ firstName, lastName, areas, description }) => {
  resetValidation();

  if (!firstName && firstName.length < 3) isFirtNameNotValid.value = true;
  if (!lastName && lastName.length < 3) isLastNameNotValid.value = true;
  if (!description && description.length < 3) isDesciptionNotValid.value = true;
  if (areas.length === 0) isAreasNotValid.value = true;

  return !(
    isFirtNameNotValid.value ||
    isLastNameNotValid.value ||
    isDesciptionNotValid.value ||
    isAreasNotValid.value
  );
};

const resetValidation = () => {
  isFirtNameNotValid.value = false;
  isLastNameNotValid.value = false;
  isDesciptionNotValid.value = false;
  isAreasNotValid.value = false;
};

const resetAllFormValue = () => {
  firstName.value = "";
  lastName.value = "";
  description.value = "";
  hourRate.value = 0;
  areas.value.length = 0;
};
</script>
