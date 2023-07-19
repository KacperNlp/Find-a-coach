<template>
  <div>
    <p class="text-sm">{{ textAboveMessage }}</p>
    <p class="ml-4 mt-2">{{ message }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  textAboveMessage: String,
  message: String,
});
</script>
