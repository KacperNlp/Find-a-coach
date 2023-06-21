<template>
  <section>Filter</section>
  <section>
    <app-card>
      <div class="flex justify-between mt-4 mb-12">
        <app-button type="btn-outline">Refresh</app-button>
        <app-button is-link to="/register">Register as Coach</app-button>
      </div>
      <ul v-if="hasCoaches" class="grid gap-8">
        <app-coach-item
          v-for="coach in coaches.getCoaches"
          :key="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :id="coach.id"
          :hourly-rate="coach.hourlyRate"
          :areas="coach.areas"
        >
        </app-coach-item>
      </ul>
      <div v-else><p>Sorry, we cannot find any coach! :/</p></div>
    </app-card>
  </section>
</template>

<script setup>
import { useCoachesStore } from "../../store/coaches/index";
import { computed } from "vue";

//components
import AppCoachItem from "../../components/coaches/AppCoachItem.vue";

const coaches = useCoachesStore();

const hasCoaches = computed(() => coaches.hasCoaches);
</script>
