<template>
  <div id="hero" class="hero-img">


       <slider class="is-hidden-touch" ref="slider" :options="options">
        <slideritem>
          <img class="hero-img" loading="lazy" :src='require("../assets/img/banner1.png")'/>
        </slideritem>
        <slideritem>
          <img class="hero-img" loading="lazy" :src='require("../assets/img/banner2.png")'/>
        </slideritem>
        <slideritem>
          <img class="hero-img" loading="lazy" :src='require("../assets/img/banner3.png")'/>
        </slideritem>
        <slideritem>
          <img class="hero-img" loading="lazy" :src='require("../assets/img/banner4.png")'/>
        </slideritem>
      </slider>

        <slider class="is-hidden-desktop" ref="slider" :options="options">
          <slideritem>
            <img class="hero-img" loading="lazy" :src='require("../assets/img/banner1_small.png")'/>
          </slideritem>
          <slideritem>
            <img class="hero-img" loading="lazy" :src='require("../assets/img/banner2_small.png")'/>
          </slideritem>
          <slideritem>
            <img class="hero-img" loading="lazy" :src='require("../assets/img/banner3_small.png")'/>
          </slideritem>
          <slideritem>
            <img class="hero-img" loading="lazy" :src='require("../assets/img/banner4_small.png")'/>
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
        autoplay: 5000, // next after 5 sec
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
  padding-top: 3.7rem;
  margin-bottom: 2rem !important;
}
</style>