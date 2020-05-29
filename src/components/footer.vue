<template>
  <div id="footer">
    <div class="hero is-bold has-text-centered is-primary">
      <div class="hero-body">
          <a class='nav-item' @click.prevent="impressum()">Impressum</a>
             |
          <a class='nav-item' @click.prevent="privacyStatement()">Privacy Statement</a>
          <br>
          <br>
          Created by <a href="https://github.com/pkissling">pkissling</a> with <i class="far fa-heart"></i>.
      </div>
    </div>

    <modal
      :show="this.modalContent != null"
      :title="this.modalContent ? this.modalContent.title : null"
      :body="this.modalContent ? this.modalContent.body : null"
      @close="closeModal()"
    >
    </modal>

  </div>
</template>

<script>
import modal from '../widgets/modal.vue'

export default {
  components: {
    modal
  },

  data: () => {
    return {
      modalContent: null
    }
  },

  methods: {
    closeModal() {
      this.modalContent = null;
    },

    impressum() {
      this.modalContent = {
        title: "Impressum",
        body: "b"
      }
    },

    privacyStatement() {
      this.modalContent = {
        title: "Pricacy",
        body: "body"
      }
    }
  }
}
</script>