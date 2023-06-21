<template>
  <app-card>
    <div>
      <h1 class="mb-3 mt-3 text-xl md:text-2xl xl:text-4xl">{{ fullName }}</h1>
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
    <app-button is-link :to="contactLink">Contact</app-button>
    <router-view></router-view>
  </app-card>
</template>

<script setup>
import { reactive, defineProps, computed, onBeforeMount } from "vue";
import { useCoachesStore } from "../../store/coaches";
import { useRoute } from "vue-router";

const router = useRoute();
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
const contactLink = computed(() => `${router.path}/contact`);
</script>
