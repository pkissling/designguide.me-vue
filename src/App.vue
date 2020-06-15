<template>
  <div id="app">
    <navbar></navbar>

    <hero></hero>
    <intro></intro>
    <pckg></pckg>
    <contact></contact>
    <about></about>

    <Foot></Foot>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Intro from "./components/Intro.vue";
import Pckg from "./components/Package.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";
import Foot from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Hero,
    Intro,
    Pckg,
    Contact,
    About,
    Foot
  }
};
</script>

<style lang="scss">
@import "./assets/mystyles.scss";
</style>
