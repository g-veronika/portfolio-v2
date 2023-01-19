<template>
  <footer class="self-center pb-4">
    <div
      class="flex justify-center gap-x-4 lg:fixed lg:bottom-20 lg:left-0 lg:ml-6 lg:block"
    >
      <div class="git mb-6">
        <a class="cursor-pointer" href="https://github.com/g-veronika">
          <img
            class="w-[20px]"
            src="../images/github-logo.svg"
            alt="github logo"
          />
        </a>
      </div>
      <div class="linkedin">
        <a
          class="cursor-pointer"
          href="https://www.linkedin.com/in/veronika-grebenshchikova-735ba8214/"
        >
          <img
            class="w-[20px]"
            src="../images/linkedin-logo.svg"
            alt="linkedin logo"
          />
        </a>
      </div>
    </div>
    <div class="opacity-50">Built by Veronika</div>
    <div
      class="hidden mail cursor-pointer right-0 fixed bottom-16 mr-6 text-smooth-white lg:block"
    >
      <a class="cursor-pointer" href="mailto:gveronikaa@hotmail.com">
        gveronikaa@hotmail.com
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.mail,
.git,
.linkedin {
  writing-mode: vertical-rl;
  transition-duration: 0.2s;
  &:hover {
    transition-duration: 0.2s;
    color: theme("colors.secondary");
    transform: translateY(-3px);
  }
}
</style>
