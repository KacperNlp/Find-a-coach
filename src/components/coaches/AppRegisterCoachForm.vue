<template>
  <form @submit.prevent="onSubmitForm">
    <app-form-input
      label-text="First name:"
      input-id="firstName"
      v-model="firstName"
    ></app-form-input>
    <app-form-input
      label-text="Last name:"
      input-id="lastName"
      v-model="lastName"
    ></app-form-input>
    <div class="form-input-container">
      <label for="description">Please tell somethign about you:</label>
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
      />
    </div>
    <div class="flex flex-col gap-2 mb-8">
      <p>Chose your experince (tech stack.)</p>
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

const firstName = ref("");
const lastName = ref("");
const description = ref("");
const hourRate = ref(0);
const areas = ref([]);

const onSubmitForm = () => {
  console.log("Submit");
};
</script>
