<template>
  <div>
    <ul class="flex justify-end gap-x-8 pt-8 items-center">
      <li class="">Accueil</li>
      <li class="">Expériences</li>
      <li class="">Projets</li>
      <li
        class="mr-8 border-2 border-secondary rounded px-4 py-3 text-secondary animate-pulse"
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
    &:hover {
      color: theme("colors.secondary");
    }
  }
}
</style>
