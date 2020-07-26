<template>
  <div class="hero">
    <img class="hero-img" />
  </div>
</template>

<style scoped>
.hero-img {
  padding-top: 54px;
  content: url("../assets/img/hero.png");
}

@media screen and (max-width: 1024px) {
  .hero-img {
    content: url("../assets/img/hero.png");
  }
}
</style>