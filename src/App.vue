<template>
  <div id="app">

    <navbar></navbar>

    <hero></hero>
    <one></one>
    <two></two>
    <three></three>
    <contact></contact>

    <foot></foot>

  </div>
</template>

<script>
  import navbar from './components/navbar.vue'
  import hero from './components/hero.vue'
  import one from './components/one.vue'
  import two from './components/two.vue'
  import three from './components/three.vue'
  import contact from './components/contact.vue'
  import foot from './components/footer.vue'

  export default {
    components: {
      navbar,
      hero,
      one,
      two,
      three,
      contact,
      foot
    }
  }
</script>

<style lang="scss">
  @import "./assets/mystyles.scss"
</style>
