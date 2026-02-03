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
          <p>En décembre 2024, « le kick-off » du projet a réuni 35 acteurs et actrices de la formation d’apprenti∙es issu∙es de secteurs d’activité et tailles d’entreprises variées. Il a permis de travailler à l’identification des sujets et des formats prioritaires pour les formateurs et formatrices.</p>
          <p>En 2025, dans la continuité du kick-off, une programmation annuelle co-construite avec les participant·es a vu le jour. Elle aborde des thématiques clés du rôle de formateur·rice : connaissance du public adolescent, posture et mission du formateur·rice, réseaux de soutien, articulation entre production et formation, et se clôture par un temps fort convivial dédié au bilan de l’année et à la projection vers 2026.</p>
        </div>

        <div class="v-index__intro__content__download">
          <a href="https://nextcloud.for-pro.ch/s/6K99YoqKzjDmx27"
             target="_blank"
             class="v-index__download__button app-button app-button--xl"
          >Ressources atelier kick-off</a>
        </div>
      </div>

      <div class="v-index__section v-index__section--color"
      >
        <div class="v-index__section__content">
          <p>
            Pour toute suggestion ou proposition de thématique, ou simplement pour être informé·e de la programmation lors de sa publication, n’hésitez pas à nous contacter par e-mail&nbsp;:
            <br>
            <br>
            <a class="app-button"
               href="mailto:desk@for-pro.ch,event@qualife.ch?subject=Demande%20d%27informations%20ou%20suggestion&body=Bonjour,%0D%0AJe vous contacte depuis le site pour%0D%0A..."
            >desk@for-pro.ch et event@qualife.ch
            </a>
            <br>
            <br>On se réjouit de vous retrouver très bientôt.
          </p>
        </div>
      </div>



      <div class="v-index__section"
           v-if="data?.result.events && data?.result.events.length > 0"
      >
        <div class="v-index__section__header">
          <h2>au Programme</h2>
        </div>

        <div class="v-index__section__content">
          <div class="v-index__section__content__item"
               v-for="event in data.result.events"
          >
            <AppDate
              :date="event.datetime"
              :hour="event.time"
              :location="event.location"
              :subtitle="event.title"
              :link_inscription="event.ticketing_url"
              :link_resources="event.files"
              :is_complete="event.registration === 'true'"
            >
              <div v-html="event.information"/>
            </AppDate>
          </div>
        </div>
      </div>


      <div class="v-index__section v-index__section--archive"
           v-if="data?.result.archive && data?.result.archive.length > 0"
      >
        <div class="v-index__section__header">
          <h2>Archives</h2>
        </div>

        <div class="v-index__section__content">
          <div class="v-index__section__content__toggle"
               v-for="events in data.result.archive"
          >
              <h3>{{events.year}}</h3>
            <div class="v-index__section__content">
              <div class="v-index__section__content__item v-index__section__content__item--full"
                   v-for="event in events.events"
              >
                <AppDate
                  :date="event.datetime"
                  :hour="event.time"
                  :location="event.location"
                  :subtitle="event.title"
                  :link_inscription="event.ticketing_url"
                  :link_resources="event.files"
                  :is_complete="event.registration === 'true'"
                  :is_archives="true"
                >
                  <div v-html="event.information"/>
                </AppDate>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="v-index__section">
        <div class="v-index__section__content">
          <div class="v-index__section__content__item v-index__section__content__item--full">
            <div class="v-index__section__content__item__text">
              <h3>contactez-nous&nbsp;:</h3>

              <p>
                Fondation Qualife :
                <br><a target="_blank" href="tel:+41227008461">022 700 84 61</a>
                <br>ou via <a target="_blank" href="mailto:event@qualife.ch">event@qualife.ch</a>
              </p>
              <p>
                Fondation ForPro :
                <br><a target="_blank" href="tel:+41225522442">+41 22 552 24 42</a>
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
type fetchedEvent = {
  title: string,
  location: string,
  datetime: string,
  time: string,
  registration: string,
  information: string,
  ticketing_url: string,
  files: string,
}

type FetchData = CMS_API_Response & {
  result: {
    events: fetchedEvent[],
    archive: {
      year: string,
      events: fetchedEvent[]
    }[]
  }
}



const { data, status } = await useFetch<FetchData>('/api/CMS_KQLRequest', {
  lazy: true,
  method: 'POST',
  body: {
    query: 'site',
    select: {
      events: {
        query: "site.children()",
        select: {
          title: true,
          location: true,
          datetime: true,
          time: true,
          registration: true,
          information: true,
          ticketing_url: true,
          files: true,
        }
      },
    }
  }
})


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
  z-index: 1000;
  background: white;
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

.v-index__section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  &.v-index__section--archive {
    h3 {
      width: 100%;
      text-align: left;
      font-size: 1.5rem;
      line-height: 1.1em;
      margin-top: 0;
      margin-bottom: 1.1em;
      color: var(--app-color--orange);
    }
  }

  &.v-index__section--color {
    color: var(--app-color--orange);
    border: 2px solid var(--app-color--orange);
    border-radius: 2rem;

    p {
      font-size: 1.5rem;
    }
  }
}

.v-index__section__header {
  width: calc(100% / 14 * 12);
  box-sizing: border-box;
  margin-bottom: 2rem;

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 650px) {
    width: calc(100% / 14 * 14);
  }
}

.v-index__section__content {
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

  .v-index__section--archive & {
    gap: 2rem var(--gap);
  }
}

.v-index__section__content__toggle {
  //height: 10rem;
  //overflow: hidden;
  //position: relative;
  //
  //&:after {
  //  content: '';
  //  position: absolute;
  //  width: 100%;
  //  height: 10rem;
  //  background: linear-gradient(to top, rgba(255,255,255,1) 2rem, rgba(255,255,255,0) 100%);
  //  bottom: 0;
  //  left: 0;
  //}

}
.v-index__section__content__toggle__button {
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.v-index__section__content__item {
  width: calc( (100% - var(--gap)) / 2 );
  box-sizing: border-box;

  @media (max-width: 1150px) {
    width: 100%;
  }

  &.v-index__section__content__item--full {
    width: 100%;
  }
}

.v-index__section__content__item__text {
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
