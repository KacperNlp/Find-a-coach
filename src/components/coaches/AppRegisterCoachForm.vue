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
      <label for="rate">Your horuly rate in dollars $:</label>
      <strong v-if="isFree" class="text-xs uppercase text-rose-400"
        >Right now you don't take any money for you work, are you sure!</strong
      >
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
    <app-button class="center-btn">Submit</app-button>
  </form>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useCoachesStore } from "../../store/coaches/index";
import { useRouter } from "vue-router";

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

const coaches = useCoachesStore();
const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const description = ref("");
const hourRate = ref(0);
const areas = ref([]);

const isFirtNameNotValid = ref(false);
const isLastNameNotValid = ref(false);
const isDesciptionNotValid = ref(false);
const isAreasNotValid = ref(false);

const isFree = computed(() => !hourRate.value);

//switch valid value when user type something
watch(firstName, (newValue, __) => {
  if (isFirtNameNotValid.value && newValue.length > 0) {
    isFirtNameNotValid.value = false;
  }
});

watch(lastName, (newValue, __) => {
  if (isLastNameNotValid.value && newValue.length > 0) {
    isLastNameNotValid.value = false;
  }
});

watch(description, (newValue, __) => {
  if (isDesciptionNotValid.value && newValue.length > 0) {
    isDesciptionNotValid.value = false;
  }
});

watch(areas, (newValue, __) => {
  if (isAreasNotValid.value && newValue.length > 0) {
    isAreasNotValid.value = false;
  }
});

const onSubmitForm = () => {
  const idOfNewCoach = coaches.getCurrentUserId;
  const areasArray = [...areas.value];

  const newCoach = {
    id: idOfNewCoach,
    firstName: firstName.value,
    lastName: lastName.value,
    areas: areasArray,
    description: description.value,
    hourlyRate: hourRate.value,
  };

  if (isFormValid(newCoach)) {
    resetAllFormValue();
    coaches.createNewCoach(newCoach);
    redirectToCoachesPage();
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

const redirectToCoachesPage = () => {
  router.replace("/coaches");
};
</script>
