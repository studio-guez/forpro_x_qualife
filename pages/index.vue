<template>
    <main class="v-index"
    >
      <div class="v-index__top-bar">
        <div class="v-index__top-bar__wrap">
          <img class="v-index__top-bar__wrap__img"
               src="/images/header.svg" alt="logo">
        </div>
      </div>

      <div class="v-index__header">
        <div class="v-index__header__padding-top"/>
        <img class="v-index__header__logo-text"
             src="/images/logo-text.svg" alt="logo">
      </div>





      <div class="v-index__dates">
        <div class="v-index__dates-1">
          <div class="v-index__dates-1__bar">
            <div class="v-index__rect"
                 style="background: var(--app-color--orange)"
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
          <p>Les rendez-vous des formateurs et formatrices d’apprenti·es sont des espaces collaboratifs pensés pour créer une communauté active de professionnel·les en charge des apprenti·es. L’objectif est de valoriser le rôle des formateur·rices, d’offrir un lieu d’échange et de développer des ressources concrètes pour soutenir leur quotidien.</p>
          <p>En décembre 2024, le&nbsp;kick-off des rendez-vous des formateur et formatrices d’apprenti∙es a réuni 35 acteurs et actrices de la formation d’apprenti∙es issu∙es de secteurs d’activité et tailles d’entreprises variées. Il a permis de travailler à l’identification des sujets et des formats prioritaires pour les formateurs et&nbsp;formatrices.</p>
        </div>

        <div class="v-index__intro__content__download">
          <a href="https://nextcloud.for-pro.ch/s/sgJGmnJGMLSkf33"
             target="_blank"
             class="v-index__download__button app-button app-button--xl"
          >Ressources atelier kick-off</a>
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
                    subtitle='Thème&nbsp;: Connaissance du public adolescent'
                    link_resources="https://nextcloud.for-pro.ch/s/XXQxCXP9XHdeiZL"
            >
              <p>Animé par Soizic de Montalier, psychologue clinicienne et du travail, spécialisée dans l’accompagnement des adolescents et l’analyse des pratiques professionnelles.</p>
            </AppDate>
          </div>
          <div class="v-index__prog__content__item">
            <AppDate
                    date="Mardi 10 juin 2025"
                    hour="16h30 - 18h30"
                    :is_complete="true"
                    location="Fondation Qualife - Rue Adrien-Lachenal 18 1207 Genève"
                    subtitle="Thème&nbsp;: Le rôle des formateur.rices d'apprenti.es - Partage d'expériences & Apports théoriques"
                    link_resources="https://nextcloud.for-pro.ch/s/mX6rdDB5jjNKcxb"
            >
              <p>Former un.e apprenti.e, transmettre et évaluer, comment et avec quels outils&nbsp;?</p>
            </AppDate>
          </div>
          <div class="v-index__prog__content__item">
            <AppDate
                    date="Mercredi 27 août 2025"
                    hour="8h - 10h"
                    location="Fondation ForPro – Chemin de la Galaise 23A 1228 Plan-les-Ouates"
                    subtitle="Thème&nbsp;: réseaux et partenaires, onboarding apprenti.e"
                    link_inscription="https://framaforms.org/rendez-vous-des-formateurrices-mercredi-27-aout-2025-1745313882"
            >
              <p>
                « C’est la rentrée&nbsp;! Développez vos connaissances des offres de soutien (réseaux et partenaires) pour les formateur-rices et créez / renforcez le lien avec votre apprenti·e pour bien démarrer l’année... en douceur(s). »
              </p>
              <p>
                Attention évènement en duo, merci de venir accompagné de votre apprenti·e (si possible)
                <br>Le cas échéant, aucun problème, des jeunes apprenti.es seront également présents pour vous permettre le même niveau d’aventure&nbsp;!
              </p>
            </AppDate>
          </div>
          <div class="v-index__prog__content__item">
            <AppDate
                    date="3ème semaine d’octobre 2025"
                    hour="date et horaire à venir"
                    location="Fondation Qualife - Rue Adrien-Lachenal 18 1207 Genève"
                    subtitle="Thème&nbsp;: Produire et former"
                    link_inscription="https://framaforms.org/rendez-vous-des-formateurrices-octobre-2025-1745314190"
            >
              <p>Gérer son temps et l’optimiser,  entre transmission et tâches inhérentes à la&nbsp;profession</p>
            </AppDate>
          </div>
          <div class="v-index__prog__content__item">
            <AppDate
                    date="Clôture de la programmation en décembre 2025"
                    hour="date et horaire à venir"
                    location="Fondation ForPro – Chemin de la Galaise 23A 1228 Plan-les-Ouates"
                    link_inscription="https://framaforms.org/rendez-vous-des-formateurrices-decembre-2025-1745314433"
            >
              <p>Evénement festif pour réunir la communauté, conférence, réseautage et apéritif dinatoire</p>
            </AppDate>
          </div>

          <div class="v-index__prog__content__item">
            <div class="v-index__prog__content__item__text">
              <h3>contactez-nous&nbsp;:</h3>

              <p>
                Fondation Qualife :
                <br><a target="_blank" href="tel:+41227008461">022 700 84 61</a>
                <br>ou via <a target="_blank" href="mailto:event@qualife.ch">event@qualife.ch</a>
              </p>
              <p>
                Fondation ForPro :
                <br><a target="_blank" href="tel:+410763761061">076 376 10 61</a>
                <br>ou <a target="_blank" href="mailto:desk@for-pro.ch">desk@for-pro.ch</a>
              </p>
            </div>


          </div>
        </div>
      </div>

      <footer class="v-index__footer">
        <div class="v-index__footer__content">
          <a target="_blank" href="https://www.for-pro.ch/entreprises">for-pro.ch</a> |
          <a target="_blank" href="https://www.qualife.ch/actualites/">qualife.ch</a>

        </div>

        <div class="v-index__footer__content">
          <img src="/images/logo_forpro.svg" alt="logo forpro">
          <img src="/images/logo_qualife.svg" alt="logo qualife">
        </div>
      </footer>
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
  padding: 0 1rem;

  @media (max-width: 650px) {
    padding: 0 .5rem;
  }
}

.v-index__top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1000;
}

.v-index__top-bar__wrap {
  width: 100%;
  max-width: 65rem;
  margin: auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (max-width: 650px) {
    padding: 0 .5rem;
  }
}

.v-index__top-bar__wrap__img {
  width: calc(100% / 14 * 12);
  display: block;

  @media (max-width: 650px) {
    width: calc( 100% / 14 * 14 );
  }
}

.v-index__header {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
}

.v-index__header__padding-top {
  height: auto;
  aspect-ratio: 1080/89;
  width: calc(100% / 14 * 12);

  @media (max-width: 650px) {
    width: calc( 100% / 14 * 14 );
  }
}

.v-index__header__logo-text {
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
  margin-top: 20rem;
  width: 50%;
  display: flex;

  @media (max-width: 1300px) {
    margin-top: 25vw;
  }

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
  align-items: center;
  margin-top: 7rem;
  margin-bottom: 5rem;
  flex-direction: column;
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

.v-index__prog__content__item__text {
  h3 {
    font-size: 1.5rem;
    line-height: 1.1em;
    margin-top: 0;
    margin-bottom: 1.1em;
    color: var(--app-color--blue);
  }
}

.v-index__intro__content__download {
  display: flex;
  justify-content: flex-start;
  width: calc(100% / 14 * 12);

  @media (max-width: 650px) {
    width: calc(100% / 14 * 14);
  }
}

.v-index__download__button {
  margin-bottom: 5rem;
  background: var(--app-color--blue);
  color: var(--app-color--green);

  &:hover {
    background: var(--app-color--green);
    color: var(--app-color--blue);
  }
}

.v-index__footer {
  display: flex;
  width: 100%;
  justify-content: space-between;

  a {
    color: black;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
  }
}

.v-index__footer__content {
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding-bottom: 1rem;

  &:nth-child(1) {
    justify-content: flex-start;
    padding-left: calc(100% / 14 * 1);

    @media (max-width: 800px) {
      padding: 0 ;
      justify-content: center;
    }
  }

  &:nth-child(2) {
    justify-content: flex-end;
    padding-right: calc(100% / 14 * 1);

    @media (max-width: 800px) {
      padding: 0 ;
      justify-content: center;
    }
  }


  img {
    display: block;
    height: 2rem;
  }
}


</style>
