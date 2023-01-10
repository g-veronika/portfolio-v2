<template>
  <div class="flex flex-col min-h-screen bg-primary text-white font-arial">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
