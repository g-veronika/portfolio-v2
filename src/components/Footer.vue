<template>
  <footer class="self-center pb-4">
    <div class="opacity-50">Designed & Built by Veronika</div>
    <div
      class="mail cursor-pointer right-0 fixed bottom-16 mr-6 text-smooth-white"
    >
      <a class="" href="mailto:gveronikaa@hotmail.com">
        gveronikaa@hotmail.com
      </a>
    </div>
    <div class="fixed bottom-20 left-0 ml-6">
      <div class="git mb-6">
        <a href="https://github.com/g-veronika">
          <img src="../images/github-logo.svg" alt="github logo" />
        </a>
      </div>
      <div class="linkedin">
        <a
          href="https://www.linkedin.com/in/veronika-grebenshchikova-735ba8214/"
        >
          <img src="../images/linkedin-logo.svg" alt="linkedin logo" />
        </a>
      </div>
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

div {
  a {
    cursor: pointer;
  }
  img {
    width: 1.5rem;
  }
}
</style>
