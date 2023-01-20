<template>
  <Transition>
    <div
      class="fixed w-screen top-0 left-0 h-screen flex justify-center items-center bg-primary z-40"
    >
      <div class="box flex justify-center items-center">
        <div class="loader"></div>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  padding: 1em;
  position: relative;
}

.loader {
  position: relative;
  &:before,
  &:after {
    content: "";
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background-color: white;
    opacity: 0.6;
    position: absolute;
    top: -1.5em;
    left: -1.5em;
    animation: loader 2s infinite ease-in-out;
  }
  &:after {
    animation-delay: -1s;
  }
}

@keyframes loader {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
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
