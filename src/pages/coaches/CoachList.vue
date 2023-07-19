<template>
  <section class="mb-12">
    <app-card>
      <app-coach-filter></app-coach-filter>
    </app-card>
  </section>
  <section>
    <app-card>
      <div class="flex justify-between mt-4 mb-12">
        <app-button type="btn-outline">Refresh</app-button>
        <div>
          <app-button
            v-if="isNotLoginOrRegistered"
            is-link
            to="/login"
            type="btn-outline"
            class="mr-2"
            >Login as Coach</app-button
          >
          <app-button v-if="isNotLoginOrRegistered" is-link to="/register"
            >Register as Coach</app-button
          >
          <app-button v-if="isLoginOrRegistered" @click="logoutUser"
            >Logout</app-button
          >
        </div>
      </div>
      <ul v-if="hasCoaches" class="list-grid">
        <app-coach-item
          v-for="coach in coachesList"
          :key="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :id="coach.id"
          :hourly-rate="coach.hourlyRate"
          :areas="coach.areas"
        >
        </app-coach-item>
      </ul>
      <div v-else class="flex justify-center">
        <p class="py-8 font-semibold">Sorry, we cannot find any coach! :/</p>
      </div>
    </app-card>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useCoachesStore } from "../../store/coaches/index";

//components
import AppCoachFilter from "../../components/coaches/AppCoachFilter.vue";
import AppCoachItem from "../../components/coaches/AppCoachItem.vue";

const coaches = useCoachesStore();

const hasCoaches = computed(() => coaches.getCoaches.length > 0);
const coachesList = computed(() => coaches.getCoaches);
const isLoginOrRegistered = computed(() => coaches.isLogin);
const isNotLoginOrRegistered = computed(() => !coaches.isLogin);

const logoutUser = () => {
  coaches.logoutUser();
};
</script>
