<template>
  <div class="flex flex-col min-h-screen bg-primary text-white font-arial">
    <Header class="hidden lg:block" />
    <HeaderMobile class="block lg:hidden" />
    <HomeView />
    <FormationsView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import HomeView from "./views/HomeView.vue";
import FormationsView from "./views/FormationsView.vue";
import HeaderMobile from "./components/HeaderMobile.vue";
</script>
