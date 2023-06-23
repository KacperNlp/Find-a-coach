<template lang="">
  <input
    :id="checkboxId"
    :checked="isChecked"
    @change="changeFilter"
    type="checkbox"
    class="mr-1"
  />
  <label :for="checkboxId">{{ checkboxLabel }}</label>
</template>

<script setup>
const props = defineProps({
  checkboxId: String,
  checkboxLabel: String,
  isChecked: Boolean,
});

const emit = defineEmits(["changeFilter"]);

const changeFilter = () => {
  emit("changeFilter", props.checkboxId);
};
</script>
