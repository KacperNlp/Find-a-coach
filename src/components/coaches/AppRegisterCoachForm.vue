<template>
  <form @submit.prevent="onSubmitForm">
    <app-form-input
      label-text="First name:"
      input-id="firstName"
    ></app-form-input>
    <app-form-input
      label-text="Last name:"
      input-id="lastName"
    ></app-form-input>
    <div>
      <label for="description">Please tell somethign about you:</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        v-model="description"
      ></textarea>
    </div>
    <div>
      <label for="rate">Your horuly rate (in dollars $):</label>
      <input type="number" name="rate" id="rate" v-model.number="hourRate" />
    </div>
    <div>
      <app-form-areas :areas-list="AREAS_LIST"></app-form-areas>
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

const firstName = ref("");
const lastName = ref("");
const description = ref("");
const hourRate = ref(0);
const areas = ref([]);

const onSubmitForm = () => {
  console.log(firstName.value);
};
</script>
