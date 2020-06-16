<template>
  <div id="app">
    <!-- nav -->
    <navbar></navbar>

    <!-- content -->
    <hero></hero>
    <intro></intro>
    <pckg></pckg>
    <contact></contact>
    <about></about>

    <!-- footer -->
    <foot></foot>

    <!-- popup -->
    <cookieConsent></cookieConsent>
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
import CookieConsent from "./modals/CookieConsent.vue";

export default {
  components: {
    Navbar,
    Hero,
    Intro,
    Pckg,
    Contact,
    About,
    Foot,
    CookieConsent
  }
};
</script>

<style lang="scss">
@import "./assets/mystyles.scss";
</style>
