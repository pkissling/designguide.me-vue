<template>
  <div id="intro">
    <div class="content has-text-left-touch has-text-centered-desktop">
      <h1 class="title">Willkommen beim Designguide!</h1>
      <p>Mit dem Designguide erhältst du ein individuell gestaltetes, starkes Designkonzept für dein Projekt.</p>

      <p>Du planst gerade deine Privatwohnung, dein Homeoffice, Cafè oder das Büro für dein Start - Up? Dann bist du hier richtig: Ich möchte dich bei der Planung deines Konzeptes professionell unterstützen - Gestaltung & Funktionalität stehen dabei gleichermaßen im Fokus.</p>
      <p>Mit dem Designkonzept erhältst du ein Look & Feel Board, einen schematischen Grundriss, Material- und Farbvorschläge, wie auch ersten Ideen zu Möbel- und Leuchtenvorschlägen - in Form einer digitalen Präsentation oder wenn gewünscht, gibt es den Designguide auch in hochwertiger Printform.</p>
      <p>Der Designguide ist perfekt, wenn du noch auf der Suche nach Inspiration für dein neues Projekt bist und professionelle Unterstützung gebrauchen kannst.</p>
      <p>Schnell, individuell & perfekt für eine eigenständige Umsetzung!</p>

      <br />

      <a @click="showNav = false" class="button is-primary" v-scroll-to="'#contact'">
        <span class="icon is-small">
          <i class="far fa-envelope" />
        </span>
        <strong class="is-uppercase">Erzähl mir von Deinem Projekt!</strong>
      </a>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin-top: 0 !important;
}
</style>