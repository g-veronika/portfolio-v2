<template>
  <div>
    <ul
      class="flex gap-x-4 justify-center lg:flex lg:justify-end lg:ap-x-8 pt-8 items-center"
    >
      <li class="">Accueil</li>
      <li class="">Expériences</li>
      <li class="">Projets</li>
      <li
        class="w-[100px] text-center lg:mr-8 border-2 border-secondary rounded px-4 py-3 text-secondary animate-pulse"
      >
        Contact
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

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
