<template>
  <app-card class="smaller-card">
    <h2 class="mb-8 md:mb-12 text-base md:text-xl font-semibold text-center">
      Login as Coach!
    </h2>
    <app-login-coach-form></app-login-coach-form>
  </app-card>
</template>

<script setup>
import AppLoginCoachForm from "../../components/coaches/AppLoginCoachForm.vue";
</script>
