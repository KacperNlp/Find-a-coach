<template>
  <div>
    <label :for="inputId">{{ labelText }}</label>
    <input type="text" :name="inputId" :id="inputId" />
  </div>
</template>

<script setup>
const props = defineProps({
  labelText: String,
  inputId: String,
});
</script>
