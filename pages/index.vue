<template>
    <main class="v-index"
    >
      <div class="v-index__header">
        <img class="v-index__header__logo"
             src="/images/logo.svg" alt="logo">
      </div>





      <div class="v-index__dates">
        <div class="v-index__dates-1">
          <div class="v-index__dates-1__bar">
            <div class="v-index__rect"
                 style="background: var(--app-color--green)"
            />
          </div>
          <div class="v-index__dates-1__date">
            <img class="v-index__date-image"
                 src="/images/date_1.svg">
          </div>
        </div>

        <div class="v-index__dates-2">
          <div class="v-index__dates-2__date">
            <img class="v-index__date-image"
                 src="/images/date_2.svg">
          </div>
          <div class="v-index__dates-2__bar">
            <div class="v-index__rect"
                 style="background: var(--app-color--blue)"
            />
          </div>
        </div>

      </div>




      <div class="v-index__intro">
        <div class="v-index__intro__content">
          <p>Initiation sur le thème «gestion des conflits avec les adolescents» Claudine Gachet, directrice et fondatrice de l’Association Face à Face.</p>
        </div>
      </div>


      <div class="v-index__prog">
        <div class="v-index__prog__header">
          <h2>au Programme</h2>
        </div>

        <div class="v-index__prog__content">
          <div class="v-index__prog__content__item">
            <AppDate
                    date="Lundi 14 avril 2025"
                    hour="08h00 10h00 – 10h00 12h00"
                    location="Fondation ForPro - Route de la Galaise 23A, 1228 Plan-les-Ouates"
                    subtitle='Thème : «Connaissance du public adolescent»'
            >
              <p>Animé par Soizic de Montalier, psychologue clinicienne et du travail, spécialisée dans l’accompagnement des adolescents et l’analyse des pratiques professionnelles.</p>
            </AppDate>
          </div>
          <div class="v-index__prog__content__item">
            <AppDate
                    date="Mardi 3 juin 2025"
                    hour="16h30 - 18h30"
                    location="Fondation Qualife - Rue Adrien-Lachenal 18 1207 Genève"
                    subtitle="Thème : «Le rôle des formateur.rices d'apprenti.es - Partage d'expériences & Apports théoriques»"
            >
              <p>Former un.e apprenti.e, transmettre et évaluer, comment et avec quels outils ?"</p>
            </AppDate>
          </div>
          <div class="v-index__prog__content__item">
            <AppDate
                    date="Mercredi 28 août"
                    hour="17h00 – 19h00 – date et horaire à confirmer"
                    location="Fondation ForPro – Chemin de la Galaise 23A 1228 Plan-les-Ouates"
                    subtitle="Thème : «Réseaux et partenaires soutien pour les formateur.rices d’apprenties»"
            >
              <p>Kiosques et temps d’échanges autour de l’offre de soutien pour les formateurs et apprenti.es dual»</p>
            </AppDate>
          </div>
          <div class="v-index__prog__content__item">
            <AppDate
                    date="3ème semaine d’octobre 2025"
                    hour="date et horaire à venir"
                    location="Fondation Qualife - Rue Adrien-Lachenal 18 1207 Genève"
                    subtitle="Thème : «Gestion du temps»"
            >
              <p>«Gérer son temps et l’optimiser,  entre transmission et tâches inhérentes à la profession»</p>
            </AppDate>
          </div>
          <div class="v-index__prog__content__item">
            <AppDate
                    date="Clôture de la programmation en décembre 2025"
                    hour="date et horaire à venir"
                    location="Fondation ForPro – Chemin de la Galaise 23A 1228 Plan-les-Ouates"
            >
              <p>Evénement festif pour réunir la communauté, conférence, réseautage et apéritif dinatoire</p>
            </AppDate>
          </div>
        </div>
      </div>


      <div class="v-index__download">
        <a class="v-index__download__button">
          Press Kit
        </a>
      </div>

    </main>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    message?: string
}>()
</script>





<style lang="scss" scoped >
.v-index {
  box-sizing: border-box;
  max-width: 65rem;
  margin: auto;
  padding: 1rem;

  @media (max-width: 650px) {
    padding: .5rem;
  }
}

.v-index__header {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}

.v-index__header__logo {
  display: block;
  width: calc( 100% / 14 * 12 );
  box-sizing: border-box;

  @media (max-width: 650px) {
    width: calc( 100% / 14 * 14 );
  }
}

.v-index__dates {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: self-start;
}

.v-index__rect {
  width: 100%;
  background: black;
  height: 100%;
}

.v-index__date-image {
  display: block;
  width: 100%;
  height: auto;
}

.v-index__dates-1 {
  margin-top: 5vw;
  width: 50%;
  display: flex;

  @media (max-width: 880px) {
    width: calc(100% / 14 * 9);
    margin-right: calc(100% / 14 * 5);
  }

  @media (max-width: 650px) {
    width: calc( 100% / 14 * 10 );
    margin-right: calc(100% / 14 * 4);
  }
}

.v-index__dates-1__bar {
  width: calc(100% / 7 * 1);
  box-sizing: border-box;
  padding-right: var(--app-gutter-half);
}

.v-index__dates-1__date {
  width: calc(100% / 7 * 6);
  box-sizing: border-box;
  padding-left: var(--app-gutter-half);
  padding-right: var(--app-gutter-half);
}

.v-index__dates-2 {
  margin-top: 25vw;
  width: 50%;
  display: flex;

  @media (max-width: 880px) {
    margin-top: 5vw;
    width: calc(100% / 14 * 9);
    margin-left: calc(100% / 14 * 5);
  }

  @media (max-width: 650px) {
    width: calc( 100% / 14 * 10 );
    margin-left: calc(100% / 14 * 4);
  }
}

.v-index__dates-2__date {
  width: calc(100% / 7 * 6);
  box-sizing: border-box;
  padding-left: var(--app-gutter-half);
  padding-right: var(--app-gutter-half);

}

.v-index__dates-2__bar {
  width: calc(100% / 7 * 1);
  box-sizing: border-box;
  padding-left: var(--app-gutter-half);
}

.v-index__intro {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  margin-top: 7rem;
  margin-bottom: 5rem;
}

.v-index__intro__content {
  width: calc(100% / 14 * 12);
  box-sizing: border-box;

  > p {
    font-size: 2rem;

    @media (max-width: 650px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 650px) {
    width: calc(100% / 14 * 14);
  }
}

.v-index__prog {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
}

.v-index__prog__header {
  width: calc(100% / 14 * 12);
  box-sizing: border-box;

  @media (max-width: 650px) {
    width: calc(100% / 14 * 14);
  }
}

.v-index__prog__content {
  --gap: 2rem;

  width: calc(100% / 14 * 12);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem var(--gap);

  @media (max-width: 1150px) {
    gap: 2rem;
  }

  @media (max-width: 650px) {
    width: calc(100% / 14 * 14);
  }
}

.v-index__prog__content__item {
  width: calc( (100% - var(--gap)) / 2 );
  box-sizing: border-box;

  @media (max-width: 1150px) {
    width: 100%;
  }
}

.v-index__download {
  display: flex;
}

.v-index__download__button {
  color: var(--app-color--blue);
  font-size: 2rem;
  font-weight: 600;
  padding: 1.8rem 2rem 2.2rem;
  line-height: 1ex;
  border-radius: 4rem;
  background: var(--app-color--green);
  margin: auto;
  margin-bottom: 5rem;
}

</style>
