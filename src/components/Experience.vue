<template>
  <div class="exp-container">
    <h1
      class="flex justify-center items-center w-4/5 m-auto text-2xl font-bold lg:text-3xl"
    >
      Expérience
    </h1>
    <div class="m-auto lg:w-4/5">
      <div class="flex flex-col mt-10 lg:flex lg:flex-row lg:space-x-24">
        <div class="flex items-center flex-col lg:w-2/5 lg:items-start">
          <div
            class="text-secondary px-4 text-center font-bold lg:text-xl lg:text-left lg:px-0"
          >
            Ingénieur développement front - SafeCloudBox
          </div>
          <p class="opacity-60">septembre 2021 - octobre 2022</p>
        </div>
        <div class="lg:w-[50%] text-smooth-white flex flex-col m-8 lg:m-0">
          <ul class="leading-8 list-disc lg:text-lg">
            <li>Conception et développement du site de l'entreprise</li>
            <li>
              Echanges avec le client pour définir ses besoins et la conformité
              avec le cahier des charges
            </li>
            <li>
              Migration du projet d'un framework Seafile en JavaScript natif
            </li>
            <li>
              Développement du responsive design afin de rendre l'outil
              utilisable sur tous types d'appareils
            </li>
            <li>Application des normes d'accessibilité et de SEO</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  &::before {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-right: 20px;
    background-color: theme("colors.smooth-white");
    opacity: 0.3;
  }
  &::after {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: theme("colors.smooth-white");
    opacity: 0.3;
  }
}
</style>
