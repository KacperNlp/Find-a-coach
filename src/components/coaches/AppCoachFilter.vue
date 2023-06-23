<template>
  <div>
    <h2 class="mb-4 text-xl">All Roles:</h2>
    <ul class="flex gap-8">
      <li v-for="filter in coaches.getFilters" :key="filter.id">
        <app-filter-checkbox
          :checkbox-id="filter.id"
          :checkbox-label="filter.text"
          :is-checked="filter.checked"
          @change-filter="updateFilter"
        ></app-filter-checkbox>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useCoachesStore } from "../../store/coaches/index";

import AppFilterCheckbox from "../UI/AppFilterCheckbox.vue";

const coaches = useCoachesStore();

const updateFilter = (filterId) => {
  const filterAfterUpdate = [...coaches.getFilters];
  filterAfterUpdate.forEach((filter) => {
    if (filter.id === filterId) filter.checked = !filter.checked;
  });

  coaches.updateFilters(filterAfterUpdate);
};
</script>
