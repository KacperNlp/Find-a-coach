<template>
  <app-card>
    <div>
      <h2 class="headline mt-3">{{ fullName }}</h2>
      <p class="mb-4 md:text-xl">
        <strong>${{ hourlyRate }}/h</strong>
      </p>
      <p class="mb-8 text-sm text-slate-300">{{ description }}</p>
    </div>
    <div class="mb-8 xl:mb-12">
      <p class="mb-4 text-sm md:text-base font-semibold">Tech. Stack:</p>
      <ul class="badges-list">
        <app-badge v-for="area in areas" :key="area" :mode="area">{{
          area
        }}</app-badge>
      </ul>
    </div>
    <app-button v-if="isContactVisible" is-link :to="userLink"
      >Close Contact</app-button
    >
    <app-button v-else is-link :to="contactLink">Contact</app-button>
  </app-card>

  <app-card v-if="isContactVisible" class="mt-12 lg:mt-16 mb-24 smaller-card">
    <router-view></router-view>
  </app-card>
</template>

<script setup>
import { reactive, defineProps, computed, onBeforeMount } from "vue";
import { useCoachesStore } from "../../store/coaches";
import { useRoute } from "vue-router";

const route = useRoute();
const coaches = useCoachesStore();

const props = defineProps(["id"]);
let coach = reactive({});

onBeforeMount(() => {
  coach = coaches.getCoaches.find(({ id }) => id === props.id);
});

const fullName = computed(() => `${coach.firstName} ${coach.lastName}`);
const hourlyRate = computed(() => coach.hourlyRate);
const description = computed(() => coach.description);
const areas = computed(() => coach.areas);
const contactLink = computed(() => `${route.path}/contact`);
const userLink = computed(() => `/coaches/${props.id}`);

const isContactVisible = computed(() => {
  const urlParts = route.path.split("/");
  const lastElementOfUrl = urlParts.pop(-1);

  return lastElementOfUrl === "contact";
});
</script>
