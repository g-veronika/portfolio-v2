<template>
  <Transition>
    <Loader v-if="isLoading" />
    <div
      v-else
      class="flex flex-col min-h-screen bg-primary text-white font-arial"
    >
      <Header class="hidden lg:block" />
      <HeaderMobile class="block lg:hidden" />
      <HomeView />
      <FormationsView />
      <Footer />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import HomeView from "./views/HomeView.vue";
import FormationsView from "./views/FormationsView.vue";
import HeaderMobile from "./components/HeaderMobile.vue";
import Loader from "./components/Loader.vue";
import { onMounted, ref } from "vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
