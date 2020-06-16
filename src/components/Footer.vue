<template>
  <div id="footer">
    <div class="box has-background-grey-lighter has-text-centered">
      <div class="is-uppercase">
        <a class="nav-item" @click.prevent="toggleImprint()">Impressum</a>
        |
        <a class="nav-item" @click.prevent="togglePrivacyStatement()">Datenschutzerklärung</a>
        </div>
        <p>Copyright 2020 - Sandra Zechmeister</p>
         Schriftarten von <a href="http://www.onlinewebfonts.com" target="_blank">oNline Web Fonts</a>
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

.box {
  margin: 0 !important
}
</style>