<template>
  <ul class="flex flex-col gap-4">
    <li v-for="area in areasList" class="flex gap-2 text-sm">
      <input
        type="checkbox"
        :id="area.value"
        :value="area.value"
        v-model="areas"
        @change="onChange"
      /><label :for="area.value">{{ area.label }}</label>
    </li>
  </ul>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  areasList: Array,
  modelValue: String | Array,
});
const emit = defineEmits(["update:modelValue"]);
const areas = ref([]);

const onChange = (e) => {
  emit("update:modelValue", areas.value);
};
</script>
