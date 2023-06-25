<template>
  <div class="form-input-container">
    <label :for="inputId">{{ labelText }}</label>
    <input
      :name="inputId"
      :id="inputId"
      :value="modelValue"
      @input="onChange"
      type="text"
      class="form-input"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  labelText: String,
  inputId: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>
