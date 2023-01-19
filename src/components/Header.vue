<template>
  <div>
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
  </div>
</template>

<script setup lang="ts">
const scrollTo = () => {
  document
    .querySelector(".exp-container")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const scrollToTop = () => {
  document
    .querySelector(".home-container ")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const scrollToFormations = () => {
  document
    .querySelector(".formation-container")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};

const scrollToContact = () => {
  document
    .querySelector(".contact-container")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
};
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
</style>
