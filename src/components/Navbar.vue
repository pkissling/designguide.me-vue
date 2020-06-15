<template>
  <nav
    class="navbar is-uppercase is-fixed-top has-text-centered"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" v-scroll-to="'#hero'">
        <div class="is-size-4-touch is-size-3-desktop brand">
          <strong>DESIGN GUIDE</strong>
        </div>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <a
          class="navbar-item"
          @click="showNav = false"
          v-scroll-to="'#intro'"
        >
          <strong>Intro</strong>
        </a>
        <a
          class="navbar-item"
          @click="showNav = false"
          v-scroll-to="'#package'"
        >
          <strong>Package</strong>
        </a>
        <a
          class="navbar-item"
          @click="showNav = false"
          v-scroll-to="'#about'"
        >
          <strong>About</strong>
        </a>

        <div class="buttons navbar-item">
          <a @click="showNav = false" class="button is-primary" v-scroll-to="'#contact'">
            <span class="icon is-small">
              <i class="far fa-envelope" />
            </span>
            <strong>Work with me</strong>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      showNav: false
    };
  }
};
</script>

<style scoped>
.navbar-menu {
  animation: navAnimOpen 0.2s ease-in-out;
}

@keyframes navAnimOpen {
  0% {
    display: none;
    opacity: 0;
    max-height: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
    max-height: 396px;
  }
}
</style>