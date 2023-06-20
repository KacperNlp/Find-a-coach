<template>
  <the-header />
  <app-container class="my-8">
    <router-view></router-view>
  </app-container>
</template>

<script setup>
import TheHeader from "./layouts/TheHeader.vue";
</script>
