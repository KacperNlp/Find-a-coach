<template>
  <router-link v-if="isLink" :to="url" :class="type"><slot></slot></router-link>
  <button v-else :class="type"><slot></slot></button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isLink: {
    type: Boolean,
    required: false,
    default: false,
  },
  url: {
    type: String,
    required: false,
    default: null,
  },
  type: {
    type: String,
    required: false,
    default: "btn",
  },
});
</script>
