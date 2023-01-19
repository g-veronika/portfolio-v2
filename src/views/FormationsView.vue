<template>
  <div class="min-h-screen">
    <Experience />
    <div class="mt-20">
      <h1
        class="flex justify-center w-4/5 m-auto text-2xl font-bold lg:text-3xl lg:justify-start"
      >
        Formations
      </h1>

      <div class="m-auto lg:w-4/5">
        <div class="flex flex-col mt-10 lg:flex lg:flex-row lg:space-x-24">
          <div class="flex items-center flex-col lg:w-2/5 lg:items-start">
            <div
              class="text-secondary px-4 text-center font-bold lg:text-xl lg:text-left lg:px-0"
            >
              Titre Professionnel de Développeur Web et Web Mobile, niveau 5
              (BAC+2)
            </div>
            <p class="opacity-60 text-center px-4 lg:text-left lg:px-0">
              O'clock | février 2021 - août 2021 | Paris
            </p>
          </div>
          <div class="text-smooth-white flex flex-col m-8 lg:w-1/4 lg:m-0">
            <ul class="leading-8 list-disc lg:text-lg">
              <li>Réalisation de sites web dynamiques et responsives</li>
              <li>Construction d'API sécurisée</li>
              <li>Manipulation de BDD</li>
              <li>
                Développement du responsive design afin de rendre l'outil
                utilisable sur tous types d'appareils
              </li>
              <li>Travail en équipe</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col mt-10 lg:flex lg:flex-row lg:space-x-24">
          <div class="flex items-center flex-col lg:w-2/5 lg:items-start">
            <div
              class="text-secondary px-4 text-center font-bold lg:text-xl lg:text-left lg:px-0"
            >
              BTS Opticien Lunetier
            </div>
            <p class="opacity-60 text-center px-4 lg:text-left lg:px-0">
              Institut Supérieur d'Optique (ISO) | septembre 2016 - juillet 2018
              | Lyon
            </p>
          </div>
          <div class="text-smooth-white flex flex-col m-8 lg:w-1/4 lg:m-0">
            <ul class="leading-8 list-disc lg:text-lg">
              <li>Mathématique et Optique Physique et Géométrique</li>
              <li>Management et économie</li>
              <li>Examen de vue, montage des verres, prise de mesures</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col mt-10 lg:flex lg:flex-row lg:space-x-24">
          <div class="flex items-center flex-col lg:w-2/5 lg:items-start">
            <div
              class="text-secondary px-4 text-center font-bold lg:text-xl lg:text-left lg:px-0"
            >
              Bachelor Marketing et Relations Publiques
            </div>
            <p class="opacity-60 text-center px-4 lg:text-left lg:px-0">
              Université d'État de l'aviation civile | septembre 2011 - juillet
              2015 | Saint-Pétersbourg, Russie
            </p>
          </div>
          <div class="text-smooth-white flex flex-col m-8 lg:w-1/4 lg:m-0">
            <ul class="leading-8 list-disc lg:text-lg">
              <li>Mathématiques et statistiques</li>
              <li>Technologies modernes du traitement de l'information</li>
              <li>Management de communication, marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Contact />
  </div>
</template>

<script setup lang="ts">
import Contact from "@/components/Contact.vue";
import Experience from "@/components/Experience.vue";
</script>
