<template>
  <div class="flex flex-1 p-36 min-h-screen">
    <div class="flex flex-col w-9/12 m-auto">
      <h1 class="text-secondary font-bold text-3xl">Bonjour, je m'appelle</h1>
      <h2 class="text-4xl font-bold text-smooth-white">Veronika.</h2>
      <h3 class="opacity-60 font-bold mt-6 mb-6 text-4xl">
        Je crée des choses pour le web.
      </h3>
      <p class="text-xl">
        Je m'épanouis en résolvant des problèmes et en apprenant de nouvelles
        choses.
      </p>
      <button
        class="self-baseline mt-6 font-bold border-2 border-secondary rounded px-4 py-3 text-secondary"
      >
        Expérience
      </button>
      <div class="flex justify-center mt-12">
        <img
          src="@/images/homepage-img.svg"
          alt="homepage image"
          class="w-2/4"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
button {
  transition-duration: 0.25s;
  &:hover {
    transition-duration: 0.25s;
    background-color: theme("colors.secondary");
    color: theme("colors.primary");
  }
}
</style>
