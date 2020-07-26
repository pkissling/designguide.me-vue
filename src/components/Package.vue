<template>
  <div id="package">
    <div class="hero">
      <img class="hero-img" />
    </div>

    <div class="content has-text-left-touch has-text-centered-desktop">
      <h1 class="title">Leistungsumfang</h1>

      <p>Mit dem Designguide Basic Package erhältst du ein professionelles Interior Konzept - zum vorher vereinbarten Festpreis. Diesen legen wir auf Basis des Projektumfangs fest.</p>
      <p>Dabei gilt: Alles ist möglich! Das Designkonzept kann für einen einzelnen Raum erstellt werden, dem du einen neuen Look verleihen möchtest. Das Designkonzept kann aber auch für eine gesamte Gastronomie, mehrgeschossige Büroflächen, den neuen VW-Bulli für die Skandinavienreise oder das Ferienhaus in Italien erstellt werden.</p>
      <p>Die Idee des Designguide Basic Packages ist es, auf Grundlage des gemeinsamen Briefings, dir Ideen & Inspirationen an die Hand zu geben, sodass du dein Projekt eigenständig umsetzen kannst.</p>

      <p></p>

      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="has-text-left">
              <strong class="is-uppercase is-size-5">Basic package</strong>
              <div class="divider"></div>

              <ul class="dashed">
                <li>
                  <span>Kick-Off-Call mit Briefing</span>
                </li>
                <li>
                  <span>Look & Feel Moodboard</span>
                </li>
                <li>
                  <span>Material- und Farbkonzept</span>
                </li>
                <li>
                  <span>Schematischer Grundriss</span>
                </li>
                <li>
                  <span>Möbel- und Leuchtenkonzept</span>
                </li>
              </ul>

              <p>All das erhältst du in Form einer digitalen Präsentation (PDF-Format).</p>
            </div>
          </div>
        </article>
      </div>

      <div>Falls gewünscht, können zum Basic Package auch noch weitere Services abgerufen werden, die dich bei der Umsetzung des Projektes unterstützen.</div>

      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="has-text-left">
              <strong class="is-uppercase is-size-5">Add - on's</strong>
              <div class="divider"></div>
              <ul class="dashed">
                <li>
                  <span>Möbelzeichnungen für Individualmöbel</span>
                </li>
                <li>
                  <span>Einkaufsliste für Möbel & Leuchten</span>
                </li>
                <li>
                  <span>Fotorealistische 3D - Visualisierung</span>
                </li>
                <li>
                  <span>Kostenschätzung für Ausbau und Möbel</span>
                </li>
                <li>
                  <span>Grafikdesign & Logoentwicklung</span>
                </li>
                <li>
                  <span>Entwicklung Homepage</span>
                </li>
              </ul>

              <p>Den Designguide gibt es auf Wunsch auch in A4 - Printform, gebunden.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin-top: 2rem;
  margin-bottom: 2rem !important;
}

.divider {
  width: 100%;
  border-bottom: 1.5px solid;
}

ul > li {
  text-indent: -1.8rem;
}

ul {
  margin: 0;
}

ul.dashed {
  list-style-type: none;
}

ul.dashed > li:before {
  content: "-  ";
  text-indent: -5px;
}

li span {
  position: relative;
  left: 2.5rem;
}

.hero-img {
  content: url("../assets/img/package.png");
}

@media screen and (max-width: 1024px) {
  .hero-img {
    content: url("../assets/img/package.png");
  }
}
</style>