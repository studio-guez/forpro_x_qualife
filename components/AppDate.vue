<template>
    <section class="v-app-date"
             :class="{'v-app-date--archives': is_archives}"
    >
      <div class="v-app-date__header">
        <div class="v-app-date__header__date">
          <div>
            <span v-html="date"/>
            <span v-if="!is_archives && is_complete" style="color: var(--app-color--orange)">&emsp;COMPLET!</span>
          </div>
          <div v-if="!is_archives"
               v-html="hour"
          />
        </div>
        <div class="v-app-date__header__text">
          <h3 class="v-app-date__header__text__title" v-html="location"/>
          <div v-if="subtitle"
               class="v-app-date__header__text__subtitle"
               v-html="subtitle"
          />
        </div>
      </div>

      <div class="v-app-date__content">
        <slot/>
      </div>

      <div class="v-app-date__links">
        <a v-if="link_inscription"  target="_blank" class="app-button app-button--blue" :href="link_inscription" >Inscription</a>
        <a v-if="link_resources"    target="_blank" class="app-button app-button--green" :href="link_resources"   >Ressources</a>
      </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    date: string
    hour: string
    location: string

    subtitle?: string
    link_inscription?: string
    link_resources?: string
    is_complete?: boolean
    is_archives?: boolean
}>()
</script>





<style lang="scss" scoped >
.v-app-date {
  width: 100%;
  max-width: 30rem;

  &.v-app-date--archives {
    max-width: 40rem;
  }
}

.v-app-date__header {
  position: relative;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;

  &:before {
    content: '';
    background: var(--app-color--orange);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1rem;
  }

  .v-app-date--archives & {
    padding-left: 1rem;

    &:before {
      width: .4rem;
    }
  }
}

.v-app-date__header__date {
  font-size: 1.5rem;
  line-height: 1.1em;

  .v-app-date--archives & {
    order: 3;
    font-size: 1rem;
  }
}

.v-app-date__header__text {
  padding-top: 1em;

  .v-app-date--archives & {
    padding-top: 0;
  }

  > *:first-child {
    margin-top: 0;
  }
}

.v-app-date__header__text__title {
  .v-app-date--archives & {
    margin-bottom: 0;
    font-size: 1.25rem;
  }
}

.v-app-date__header__text__subtitle {
  color: var(--app-color--orange);
 }

.v-app-date__links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 650px) {
    justify-content: center;
  }
}

:global(.v-app-date--archives .v-app-date__content p) {
  font-size: .9rem;
  margin-top:     .5em;
  margin-bottom:  .5em;
}

.v-app-date--archives {
  .app-button {
    font-size: .8rem;
    padding: .3rem .75rem .5rem;
  }
}
</style>
