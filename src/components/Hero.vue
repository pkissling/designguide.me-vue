<template>
  <div id="hero">
    <div class="is-hidden-touch">
      <img class="hero-img" loading="lazy" src="../assets/img/hero.png" />
    </div>
    <div class="is-hidden-desktop">
      <img class="hero-img" loading="lazy" src="../assets/img/hero_small.png" />
    </div>
  </div>
</template>

<style scoped>
.hero-img {
  width: 100%
}

#hero {
  padding-top: 3.5rem;
}
</style>