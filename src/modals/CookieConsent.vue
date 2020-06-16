<template>
  <div>
    <div v-if="show" class="notification">
      <div class="columns is-vcentered">
        <div class="column is-three-quarters">
          Diese Website verwendet Cookies.
          <br />Wir können damit die Seitennutzung auswerten, um nutzungsbasiert Inhalte und Werbung anzuzeigen. Weitere Informationen zu Cookies und insbesondere dazu, wie Sie deren Verwendung widersprechen können, finden Sie in unseren
          <a @click.prevent="showPrivacyStatement = true">Datenschutzhinweisen</a>.
        </div>

        <div class="column buttons is-centered is-one-quarters">
          <a class="button is-primary" @click.prevent="acceptTracking()">OK</a>
        </div>
      </div>
    </div>
    <PrivacyStatement
      id="privacyStatement"
      :show="this.showPrivacyStatement"
      @close="showPrivacyStatement = false"
    ></PrivacyStatement>
  </div>
</template>

<script>
import VueCookies from "vue-cookies";
import { bootstrap } from "vue-gtag";
import PrivacyStatement from "./PrivacyStatement.vue";

export default {
  components: {
    PrivacyStatement
  },
  data: () => {
    return {
      show: !VueCookies.isKey("tc"),
      showPrivacyStatement: false
    };
  },

  methods: {
    acceptTracking() {
      VueCookies.set("tc", null, "365d");
      bootstrap();
      this.show = false;
    }
  }
};
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
}

#privacyStatment {
  margin-top: 20rem;
}
</style>