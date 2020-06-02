<!-- HEALTH:UNKNOWN landing-path -->
<template>
  <div class="landingPath">
    <container>
      <div class="sm:px-16">
        <div class="card">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="heading-h3" v-html="data.waypoints[0].title" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="data.waypoints[0].description" />
        </div>
        <div class="card">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="heading-h3" v-html="data.waypoints[1].title" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="data.waypoints[1].description" />
        </div>
        <div class="card card--left">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="heading-h3" v-html="data.waypoints[2].title" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="data.waypoints[2].description" />
        </div>
        <div class="card card--left">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="heading-h3" v-html="data.waypoints[3].title" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="data.waypoints[3].description" />
        </div>
        <div class="card">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="heading-h3" v-html="data.waypoints[4].title" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="data.waypoints[4].description" />
        </div>
        <div class="card">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="heading-h3" v-html="data.waypoints[5].title" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="data.waypoints[5].description" />
        </div>
      </div>
    </container>
  </div>
</template>

<script>
// import Component from "~/components/Component.vue";

export default {
  components: {
    // Component
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
.landingPath
  .card
    @apply bg-white pt-8 pr-16 pb-6 pl-20 mt-16
    box-shadow: -1px -1px 23px rgba(10, 52, 255, 0.08)
    border-radius: 30px

    @screen lg
      @apply w-60p

    &--left
      @apply py-8 px-16 ml-auto
</style>
