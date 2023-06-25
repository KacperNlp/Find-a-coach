<template>
  <ul>
    <li v-for="area in areasList">
      <input type="checkbox" :id="area.value" :value="area.value" /><label
        :for="area.value"
        >{{ area.label }}</label
      >
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
  areasList: Array,
});
</script>
