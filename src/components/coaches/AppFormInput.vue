<template>
  <div class="form-input-container">
    <label :for="inputId">{{ labelText }}</label>
    <app-form-validation v-if="isNotValid">{{ errorText }}</app-form-validation>
    <input
      :name="inputId"
      :id="inputId"
      :value="modelValue"
      :type="inputType"
      @input="onChange"
      class="form-input"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  labelText: String,
  inputId: String,
  modelValue: String,
  errorText: String,
  isNotValid: Boolean,
  inputType: {
    type: String,
    required: false,
    default: "text",
  },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>
