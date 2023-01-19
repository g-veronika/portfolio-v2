<template>
  <div class="home-container flex flex-1 min-h-screen lg:p-36">
    <div class="flex flex-col w-9/12 m-auto">
      <h1 class="text-secondary font-bold text-xl lg:text-3xl">
        Bonjour, je m'appelle
      </h1>
      <h2 class="text-2xl font-bold text-smooth-white lg:text-4xl">
        Veronika.
      </h2>
      <h3 class="opacity-60 font-bold mt-6 mb-6 text-xl lg:text-4xl">
        Je crée des choses pour le web.
      </h3>
      <p class="lg:text-xl">
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
          class="w-[400px]"
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
