<template>
  <div>
    <p class="text-sm">{{ textAboveMessage }}</p>
    <p class="ml-4 mt-2">{{ message }}</p>
  </div>
</template>

<script>
import { defineProps } from "vue";

defineProps({
  textAboveMessage: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
</script>
