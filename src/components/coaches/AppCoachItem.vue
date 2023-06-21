<template>
  <li class="border border-slate-500 py-4 md:py-8 px-2 sm:px-4 md:px-8">
    <h3 class="mb-2 text-xl font-bold">{{ fullName }}</h3>
    <p class="mb-3">
      <strong>${{ hourlyRate }}/h</strong>
    </p>
    <ul class="flex gap-5 mb-4">
      <li
        v-for="area in areas"
        :key="area"
        class="p-2 bg-rose-600 rounded-xl cursor-default"
      >
        {{ area }}
      </li>
    </ul>
    <div class="flex gap-4">
      <router-link :to="getContactUrl" class="link-hover">Contact</router-link>
      <router-link :to="getDetailsUrl" class="link-hover">Details</router-link>
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
