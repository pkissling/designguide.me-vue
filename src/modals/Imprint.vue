<template>
  <div class="modal" :class="{ 'is-active': show }">
    <div class="modal-background" @click.prevent="close"></div>
    <div class="modal-card is-primary">
      <header class="modal-card-head">
        <p class="modal-card-title">Impressum</p>
        <button class="delete" aria-label="close" @click.prevent="close"></button>
      </header>
      <section class="modal-card-body">
        <p>Sandra Zechmeister</p>
        <p>M.A. Interior Architecture</p>
        <br>
        <p>Faberstraße 6, D – 81373 München</p>
        <br>
        <p>Mobil: 0176 81766793</p>
        <p>Mail: <a href="mailto:sandra@designguide.me">sandra@designguide.me</a></p>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click.prevent="close">Close</button>
      </footer>
    </div>
  </div>
</template>


<script>
export default {
  props: ["show"],

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>