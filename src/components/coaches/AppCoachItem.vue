<template>
  <li class="border border-slate-500 py-4 md:py-8 px-2 sm:px-4 md:px-8">
    <h3 class="mb-2 text-xl font-bold">{{ fullName }}</h3>
    <p class="mb-3">
      <strong>${{ hourlyRate }}/h</strong>
    </p>
    <ul class="flex flex-wrap gap-x-5 gap-y-2 mb-4">
      <app-badge v-for="area in areas" :key="area" :mode="area">
        {{ area }}
      </app-badge>
    </ul>
    <div class="flex justify-end gap-4">
      <app-button is-link :to="getContactUrl" type="btn-outline"
        >Contact</app-button
      >
      <app-button is-link :to="getDetailsUrl">Details</app-button>
    </div>
  </li>
</template>
<script setup>
import { defineProps, computed } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();

const props = defineProps({
  firstName: String,
  lastName: String,
  id: String,
  areas: Array,
  hourlyRate: Number,
});

const fullName = computed(() => `${props.firstName} ${props.lastName}`);
const getContactUrl = computed(() => `${router.path}/${props.id}/contact`);
const getDetailsUrl = computed(() => `${router.path}/${props.id}`);
</script>
