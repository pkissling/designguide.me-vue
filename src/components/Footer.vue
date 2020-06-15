<template>
  <div id="footer">
    <div class="hero hero-image has-text-centered">
      <div class="hero-body"></div>
      <div class="hero-foot">
        <a class="nav-item is-uppercase" @click.prevent="toggleImprint()">Impressum</a>
        |
        <a class="nav-item is-uppercase" @click.prevent="togglePrivacyStatement()">Datenschutzerklärung</a>
        <p>Copyright 2020 - Sandra Zechmeister</p>
      </div>
    </div>

    <PrivacyStatement :show="this.showPrivacyStatement" @close="togglePrivacyStatement()"></PrivacyStatement>

    <Imprint :show="this.showImprint" @close="toggleImprint()"></Imprint>
  </div>
</template>

<script>
import PrivacyStatement from "../modals/PrivacyStatement.vue";
import Imprint from "../modals/Imprint.vue";

export default {
  components: {
    PrivacyStatement,
    Imprint
  },

  data: () => {
    return {
      showPrivacyStatement: false,
      showImprint: false
    };
  },

  methods: {
    toggleImprint() {
      this.showImprint = !this.showImprint;
    },

    togglePrivacyStatement() {
      this.showPrivacyStatement = !this.showPrivacyStatement;
    }
  }
};
</script>
<style scoped>
.hero-image {
  background-image: url("../assets/img/footer.jpg");
  background-position: 0% 80%;
}

.hero-foot {
  margin-bottom: 1rem;
}
</style>