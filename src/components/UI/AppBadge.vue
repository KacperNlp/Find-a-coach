<template>
  <li
    class="py-2 px-4 bg-rose-600 rounded-xl cursor-default text-sm"
    :class="mode"
  >
    <slot></slot>
  </li>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  mode: String,
});
</script>

<style scoped>
.frontend {
  background: #f0db4f;
  color: #323330;
}

.backend {
  background: #787cb5;
}

.career {
  background: #99cc99;
  color: #323330;
}
</style>
