<template>
  <div class="min-h-screen">
    <Experience />
    <div class="mt-20">
      <h1 class="flex justify-start w-4/5 m-auto text-3xl font-bold">
        Formations
      </h1>

      <div class="w-4/5 mr-auto ml-auto">
        <div class="flex space-x-24 mt-10">
          <div class="flex flex-col w-2/5">
            <div class="text-secondary text-xl font-bold">
              Titre Professionnel de Développeur Web et Web Mobile, niveau 5
              (BAC+2)
            </div>
            <p class="opacity-60">O'clock | février 2021 - août 2021 | Paris</p>
          </div>
          <div class="text-smooth-white">
            <ul class="leading-8 list-disc">
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
        <div class="flex space-x-24 mt-10">
          <div class="flex flex-col w-2/5">
            <div class="text-secondary text-xl font-bold">
              BTS Opticien Lunetier
            </div>
            <p class="opacity-60">
              Institut Supérieur d'Optique (ISO) | septembre 2016 - juillet 2018
              | Lyon
            </p>
          </div>
          <div class="text-smooth-white">
            <ul class="leading-8 list-disc">
              <li>Mathématique et Optique Physique et Géométrique</li>
              <li>Management et économie</li>
              <li>Examen de vue, montage des verres, prise de mesures</li>
            </ul>
          </div>
        </div>
        <div class="flex space-x-24 mt-10">
          <div class="flex flex-col w-2/5">
            <div class="text-secondary text-xl font-bold">
              Bachelor Marketing et Relations Publiques
            </div>
            <p class="opacity-60">
              Université d'État de l'aviation civile | septembre 2011 - juillet
              2015 | Saint-Pétersbourg, Russie
            </p>
          </div>
          <div class="text-smooth-white">
            <ul class="leading-8 list-disc">
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

<style scoped lang="scss">
ul {
  li {
    font-size: 1.1rem;
  }
}
</style>
