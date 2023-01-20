<template>
  <ul
    class="flex gap-x-4 text-[15px] justify-center lg:flex lg:justify-end lg:gap-x-8 pt-8 items-center lg:text-lg"
  >
    <li @click="scrollToTop">Accueil</li>
    <li @click="scrollTo">Expériences</li>
    <li @click="scrollToFormations">Formations</li>
    <li
      @click="scrollToContact"
      class="w-[100px] text-center lg:mr-8 border-2 border-secondary rounded px-4 py-3 text-secondary animate-pulse"
    >
      Contact
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const mobileMenuVisible = ref(false);
const scrollTo = () => {
  mobileMenuVisible.value = false;
  document
    .querySelector(".exp-container")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const scrollToTop = () => {
  mobileMenuVisible.value = false;

  document
    .querySelector(".home-container ")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const scrollToFormations = () => {
  mobileMenuVisible.value = false;

  document
    .querySelector(".formation-container")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const scrollToContact = () => {
  mobileMenuVisible.value = false;
  document
    .querySelector(".contact-container")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

watch(
  () => mobileMenuVisible.value,
  () => {
    if (mobileMenuVisible.value === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);
</script>

<style scoped lang="scss">
ul {
  li {
    cursor: pointer;
    transition-duration: 0.2s;
    &:hover {
      transition-duration: 0.2s;
      color: theme("colors.secondary");
      transform: translateY(-3px);
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
