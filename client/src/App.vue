<script setup lang="ts">
import {RouterView } from 'vue-router'
import Navbar from './components/navbar.vue';


</script>

<template>
  <Navbar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
