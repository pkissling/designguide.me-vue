<template>
  <div id="package">
    <section class="hero hero-image">
      <div class="hero-body">Package</div>
    </section>

    <div class="content has-text-left-touch has-text-centered-desktop">
      <h1 class="title">Leistungsumfang</h1>

      <p>Mit dem Designguide Basic Package erhältst du ein professionelles Interior Konzept - zum vorher vereinbarten Festpreis. Diesen legen wir auf Basis des Projektumfangs fest.</p>
      <p>Dabei gilt: Alles ist möglich! Das Designkonzept kann für einen einzelnen Raum erstellt werden, dem du einen neuen Look verleihen möchtest. Das Designkonzept kann aber auch für eine gesamte Gastronomie, mehrgeschossige Büroflächen, den neuen VW-Bully für die Skandinavienreise oder das Ferienhaus in Italien erstellt werden.</p>
      <p>Die Idee des Designguide Basic Packages ist es, auf Grundlage des gemeinsamen Briefings, dir Ideen & Inspirationen an die Hand zu geben, sodass du dein Projekt eigenständig umsetzen kannst.</p>

      <p></p>

      <div class="box">
        <article class="media">
          <div class="media-left">
            <div class="sign">
              <div class="horiztonal-line"></div>
            </div>
          </div>
          <div class="media-content">
            <div class="has-text-left">
              <strong class="is-uppercase brand is-size-5">Basic package</strong>
              <div class="divider"></div>

              <ul class="dashed">
                <li>
                  <span>Kick-Off-Call mit gemeinsamen Briefing</span>
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

      <p>Falls gewünscht, können zum Basic Package auch noch weitere Services zusätzlich abgerufen werden, die dich bei der Umsetzung des Projektes unterstützen.</p>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <div class="sign">
              <div class="horiztonal-line"></div>
              <div class="vertical-line"></div>
            </div>
          </div>
          <div class="media-content">
            <div class="has-text-left">
              <strong class="is-uppercase brand is-size-5">ADD - ON`S</strong>
              <div class="divider"></div>

              <ul class="dashed">
                <li>
                  <span>Möbelzeichnungen für Individualmöbel durch Schreiner</span>
                </li>
                <li>
                  <span>Einkaufsliste für Möbel & Leuchten mit Herstellerangaben</span>
                </li>
                <li>
                  <span>Fotorealistische 3D - Visualisierung</span>
                </li>
                <li>
                  <span>Kostenschätzung der anfallenden Ausbau- und Möbelkosten</span>
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
.media-left {
  margin-top: 0rem;
  margin-left: 1rem;
}

.divider {
  width: 100%;
  border-bottom: 1.5px solid;
}

.sign {
  position: relative;
  width: 5rem;
  height: 5rem;
}

.sign div {
  position: absolute;
  background: #293133;
}

.vertical-line {
  height: 100%;
  left: 33%;
  width: 33%;
}

.horiztonal-line {
  width: 100%;
  top: 33%;
  height: 33%;
}

.hero-image {
  background-image: url("../assets/img/package.jpg");
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
</style>