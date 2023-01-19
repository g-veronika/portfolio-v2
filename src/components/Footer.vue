<template>
  <footer class="self-center pb-4">
    <div
      class="footer-links flex justify-center gap-x-4 lg:fixed lg:bottom-0 lg:left-0 lg:ml-6 lg:block"
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
      <div class="linkedin mb-8">
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

    <div class="mail-container fixed right-0 mr-6 lg:bottom-0">
      <div class="hidden mail cursor-pointer text-smooth-white lg:block">
        <a class="cursor-pointer" href="mailto:gveronikaa@hotmail.com">
          gveronikaa@hotmail.com
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

.mail-container {
  @media screen and (min-width: 768px) {
    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 15vh;
      margin: 2rem auto 0;
      background-color: theme("colors.smooth-white");
    }
  }
}

.footer-links {
  @media screen and (min-width: 768px) {
    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 25vh;
      margin: 0px auto;
      background-color: theme("colors.smooth-white");
    }
  }
}
</style>
