<template>
  <div id="hero" class="hero-img">

    <slider class="is-hidden-touch" ref="slider" :options="options">
      <slideritem v-for="(url,index) in banners" :key="index">
        <img class="hero-img" loading="lazy" :src="url" />
      </slideritem>
    </slider>

    <slider class="is-hidden-desktop" ref="slider" :options="options">
      <slideritem v-for="(url,index) in smallBanners" :key="index">
        <img class="hero-img" loading="lazy" :src="url" />
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
      smallBanners: [
        require("../assets/img/banner1_small.png"),
        require("../assets/img/banner2_small.png"),
        require("../assets/img/banner3_small.png"),
        require("../assets/img/banner4_small.png"),
      ],
      banners: [
        require("../assets/img/banner1.png"),
        require("../assets/img/banner2.png"),
        require("../assets/img/banner3.png"),
        require("../assets/img/banner4.png"),
      ],
      options: {
        autoplay: 5000, // next after 5 sec
        speed: 1000, // 1 sec transition
        loop: true
      },
    };
  },
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

.swiper-container-horizontal >>> .slider-pagination-bullet-active {
  background: black !important
}
</style>