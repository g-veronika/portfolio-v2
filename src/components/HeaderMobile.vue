<template>
  <Transition>
    <div
      class="fixed top-4 right-4 z-30 block lg:hidden"
      v-if="menuIconVisible"
      @click="mobileMenuVisible = !mobileMenuVisible"
    >
      <div class="relative menu-icon w-[50px] h-[32px]">
        <div
          class="bunTop w-full"
          :class="mobileMenuVisible ? 'w-[50%] top-[14px] rotate-45' : 'top-0'"
        ></div>
        <div
          class="bunMiddle"
          :class="mobileMenuVisible ? 'w-[50%] -rotate-45' : 'w-[65%]'"
        ></div>
        <div
          class="bunBottom"
          :class="mobileMenuVisible ? 'opacity-0' : 'opacity-100'"
        ></div>
      </div>
    </div>
  </Transition>
  <div
    class="fixed w-screen h-[40vh] bg-[#00040a] text-white duration-200 z-20"
    :class="mobileMenuVisible ? 'translate-y-0' : '-translate-y-full'"
  >
    <ul class="flex justify-center flex-col gap-4 pt-8 items-center">
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
  <Transition>
    <div
      class="fixed w-screen h-screen bg-black z-10 opacity-70"
      v-if="mobileMenuVisible"
      @click="mobileMenuVisible = false"
    ></div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";

const mobileMenuVisible = ref(false);
const menuIconVisible = ref(true);
const scrollValue = ref(0);

const scrollTo = () => {
  mobileMenuVisible.value = false;
  document
    .querySelector(".exp-container")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const scrollToTop = () => {
  mobileMenuVisible.value = false;

  document
    .querySelector(".home-container ")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const scrollToFormations = () => {
  mobileMenuVisible.value = false;

  document
    .querySelector(".formation-container")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const scrollToContact = () => {
  mobileMenuVisible.value = false;
  document
    .querySelector(".contact-container")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
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

const handleScroll = () => {
  {
    const newValue = window.scrollY;

    if (newValue === 0) {
      menuIconVisible.value = true;
    } else if (newValue < scrollValue.value) {
      menuIconVisible.value = true;
    } else {
      menuIconVisible.value = false;
    }
    setTimeout(() => {
      scrollValue.value = newValue;
    }, 100);
  }
};

onMounted(() => {
  window.addEventListener("mousewheel", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("mousewheel", handleScroll);
});
</script>

<style scoped lang="scss">
ul {
  text-align: center;
  padding: 2rem;
  justify-content: space-evenly;
  height: 100%;
  font-size: 18px;
  li {
    cursor: pointer;
    transition-duration: 0.2s;
    width: 100%;
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

.menu-icon > div {
  background-color: white;
  height: 4px;
  position: absolute;
  transition: 0.24s all;
  -webkit-transition: 0.24s all;
  -moz-transition: 0.24s all;
  border-radius: 50px;
  right: 0;

  &:nth-child(2) {
    top: 14px;
  }
  &:nth-child(3) {
    width: 30%;
    bottom: 0;
  }
}
</style>
