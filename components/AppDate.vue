<template>
    <section class="v-app-date"
    >
      <div class="v-app-date__header">
        <div class="v-app-date__header__date">
          <div>{{date}}</div>
          <div>{{hour}}</div>
        </div>
        <div class="v-app-date__header__text">
          <div class="v-app-date__header__text__title">{{ location }}</div>
          <div v-if="subtitle"
               class="v-app-date__header__text__subtitle"
          >{{subtitle}}</div>
        </div>
      </div>

      <div class="v-app-date__content">
        <slot/>
      </div>

      <div class="v-app-date__links">
        <a class="app-button app-button--blue" :href="link_inscription" >Inscription</a>
        <a class="app-button app-button--green" :href="link_resources"   >Ressources</a>
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
}>()
</script>





<style lang="scss" scoped >
.v-app-date {
  width: 100%;
  max-width: 30rem;
}

.v-app-date__header {
  position: relative;
  padding-left: 2rem;

  &:before {
    content: '';
    background: var(--app-color--blue);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1rem;
  }
}

.v-app-date__header__date {
  font-size: 1.5rem;
  line-height: 1.1em;
}

.v-app-date__header__text {
  padding-top: 1em;
}

.v-app-date__header__text__title {
  font-weight: 700;
}

.v-app-date__header__text__subtitle {
  color: var(--app-color--orange);
 }

.v-app-date__links {
  display: flex;
  gap: 1rem;
}
</style>
