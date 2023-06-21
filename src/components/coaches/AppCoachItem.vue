<template>
  <li>
    <h3>{{ fullName }}</h3>
    <p>
      <strong>${{ hourlyRate }}</strong>
    </p>
    <ul>
      <li v-for="area in areas" :key="area">{{ area }}</li>
    </ul>
    <div>
      <router-link :to="getContactUrl">Contact</router-link>
      <router-link :to="getDetailsUrl">Details</router-link>
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
