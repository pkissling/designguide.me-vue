<template>
  <div id="hero" class="hero-img">

    <!-- vue-concise-slider -->
    <slider ref="slider" :options="options">
      <slideritem>
        <img class="hero-img" loading="lazy" :src='require("../assets/img/banner1.png")'/>
      </slideritem>
      <slideritem>
        <img class="hero-img" loading="lazy" :src='require("../assets/img/banner2.png")'/>
      </slideritem>
      <slideritem>
        <img class="hero-img" loading="lazy" :src='require("../assets/img/banner3.png")'/>
      </slideritem>
    </slider>

  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
export default {

  components: {
    slider,
    slideritem,
  },

  data: () => {
    return {
      options: {
        autoplay: 3000, // next after 3 sec
        speed: 1000, // 1 sec transition
        loop: true,
        pagination: false
      }
    };
  }
};
</script>
<style scoped>
.hero-img {
  width: 100%;
}

#hero {
  padding-top: 3.5rem;
}
</style>