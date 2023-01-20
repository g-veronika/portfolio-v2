<template>
  <ul
    class="flex gap-x-4 text-[15px] justify-center lg:flex lg:justify-end lg:gap-x-8 pt-8 items-center lg:text-lg"
  >
    <div
      :class="
        dropButton1 ? 'translate-y-0 opacity-100' : ' opacity-0 -translate-y-4'
      "
    >
      <li @click="scrollToTop">Accueil</li>
    </div>
    <div
      :class="
        dropButton2 ? 'translate-y-0 opacity-100' : ' opacity-0 -translate-y-4'
      "
    >
      <li
        @click="scrollTo"
        class="transition-opacity duration-700"
        :class="dropButton2 ? 'translate-y-0 opacity-100' : ' opacity-0'"
      >
        Expériences
      </li>
    </div>
    <div
      :class="
        dropButton3 ? 'translate-y-0 opacity-100' : ' opacity-0 -translate-y-4'
      "
    >
      <li
        @click="scrollToFormations"
        class="transition-opacity duration-700"
        :class="dropButton3 ? 'translate-y-0 opacity-100' : ' opacity-0'"
      >
        Formations
      </li>
    </div>
    <div
      class="transition-opacity duration-700"
      :class="
        dropButton4 ? 'translate-y-0 opacity-100' : ' opacity-0 -translate-y-8'
      "
    >
      <li
        @click="scrollToContact"
        class="w-[100px] text-center lg:mr-8 border-2 border-secondary rounded px-4 py-3 text-secondary animate-pulse"
      >
        Contact
      </li>
    </div>
  </ul>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

const dropButton1 = ref(false);
const dropButton2 = ref(false);
const dropButton3 = ref(false);
const dropButton4 = ref(false);

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

onMounted(() => {
  setTimeout(() => {
    dropButton1.value = true;
  }, 400);
  setTimeout(() => {
    dropButton2.value = true;
  }, 500);
  setTimeout(() => {
    dropButton3.value = true;
  }, 600);
  setTimeout(() => {
    dropButton4.value = true;
  }, 700);
});
</script>

<style scoped lang="scss">
ul {
  div {
    transition: opacity 0.8s ease, transform 0.4s ease;
  }
  li {
    cursor: pointer;
    transition: transform 0.2s ease;
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
