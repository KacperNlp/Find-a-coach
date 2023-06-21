<template>
  <section>Filter</section>
  <section>
    <div>
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in coaches.getCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <div v-else><p>Sorry, we cannot find any coach! :/</p></div>
  </section>
</template>

<script setup>
import { useCoachesStore } from "../../store/coaches/index";
import { computed } from "vue";

const coaches = useCoachesStore();

const hasCoaches = computed(() => coaches.hasCoaches);
</script>
