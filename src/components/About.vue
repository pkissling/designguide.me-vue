<template>
  <div id="about">
    <div class="hero">
      <img class="hero-img" />
    </div>

    <div class="content">
      <h1 class="title">Sandra Zechmeister</h1>
      <h6 class="subtitle is-6">M.A. Interior Architecture</h6>
      <figure class="image">
        <img class="portrait is-rounded" src="../assets/img/portrait.jpg" />
      </figure>

      <i>"Simplicity is the ultimate form of sophistication"</i>

      <br />
      <br />

      <div class="has-text-left-touch has-text-centered-desktop">
        <p>Ich bin Sandra, 30 Jahre & lebe und arbeite im wunderschönen München. Wenn es mich nicht gerade in die Berge zieht, beschäftige ich mich mit so gut wie allem rund ums das Thema Design. Mit großer Leidenschaft aktuell für die eigenen vier Wände & zukünftig auch für dein Projekt?</p>
        <p>Ich bin Innenarchitektin, habe mein Masterstudium an der Hochschule für Technik in Stuttgart abgeschlossen. Im Anschluss habe ich verschiedene spannende Innenarchitektur Projekte als Projektmanager betreuet. Zwischenzeitlich steht beruflich statt dem operativen, der strategische Ansatz im Fokus.</p>
        <p>Der Designguide ist mein persönliches Herzensprojekt und die Möglichkeit, nebenberuflich meiner Passion zu folgen & wieder ein wenig kreativ zu sein. Ich freue mich dich kennenzulernen und für dein Projekt ein individuelles Designkonzept zu entwickeln!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portrait {
  max-width: 220px;
  height: auto;
}

.hero-img {
  content: url("../assets/img/about.png");
}

@media screen and (max-width: 1024px) {
  .hero-img {
    content: url("../assets/img/about_small.png");
  }
}
</style>