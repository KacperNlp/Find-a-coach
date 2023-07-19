<template>
  <header class="w-full py-4 md:py-8 bg-slate-800">
    <app-container>
      <div class="flex justify-between items-center">
        <h1 class="font-bold md:text-xl xl:text-2xl 2xl:text-3xl text-rose-500">
          <router-link to="/">Find a Coach</router-link>
        </h1>
        <ul class="flex gap-8">
          <li class="nav-link">
            <router-link to="/coaches" class="link-hover"
              >All coaches</router-link
            >
          </li>
          <li v-if="isLoginOrRegistered" class="nav-link">
            <router-link to="/requests" class="link-hover"
              >Requests</router-link
            >
          </li>
        </ul>
      </div>
    </app-container>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useCoachesStore } from "../store/coaches/index.js";

const coaches = useCoachesStore();

const isLoginOrRegistered = computed(() => coaches.isLogin);
</script>

<style scoped>
.router-link-active {
  color: #f9fafb;
}
</style>
