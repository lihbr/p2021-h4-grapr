<!-- HEALTH:UNKNOWN landing-path -->
<template>
  <div class="landingPath">
    <container>
      <div class="sm:px-20 md:px-24 pt-col-2">
        <div class="section">
          <div class="img">
            <img :src="data.imgs[0].src" :alt="data.imgs[0].alt" />
          </div>
          <div class="content">
            <div class="card">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="heading-h3" v-html="data.waypoints[0].title" />
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="data.waypoints[0].description" />
            </div>
            <div class="card mt-12">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="heading-h3" v-html="data.waypoints[1].title" />
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="data.waypoints[1].description" />
            </div>
          </div>
        </div>
        <div class="section section--reversed mt-40">
          <div class="img">
            <img :src="data.imgs[1].src" :alt="data.imgs[1].alt" />
          </div>
          <div class="content">
            <div class="card">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="heading-h3" v-html="data.waypoints[2].title" />
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="data.waypoints[2].description" />
            </div>
            <div class="card mt-12">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="heading-h3" v-html="data.waypoints[3].title" />
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="data.waypoints[3].description" />
            </div>
          </div>
        </div>
        <div class="section mt-40">
          <div class="img">
            <img :src="data.imgs[2].src" :alt="data.imgs[2].alt" />
          </div>
          <div class="content">
            <div class="card">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="heading-h3" v-html="data.waypoints[4].title" />
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="data.waypoints[4].description" />
            </div>
            <div class="card mt-12">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="heading-h3" v-html="data.waypoints[5].title" />
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="data.waypoints[5].description" />
            </div>
          </div>
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
  .container
    @screen lg
      background: url("/assets/img/path.svg")
      background-repeat: no-repeat
      background-position: center
      background-size: contain

  .card
    @apply bg-white py-8 px-4
    box-shadow: -1px -1px 23px rgba(10, 52, 255, 0.08)
    border-radius: 30px

    @screen lg
      @apply pt-8 pr-16 pb-6 pl-20

    .heading-h3
      @apply mb-5

  .section
    @screen lg
      @apply flex flex-row-reverse items-center justify-between

    .content
      @screen lg
        width: 52%

    .img
      @apply pl-8 pointer-events-none

      img
        @apply mx-auto mb-16
        max-height: 360px

        @screen lg
          @apply mt-0

    &--reversed
      @screen lg
        @apply flex-row

      .img
        @apply flex-1 pl-0 pr-8

      .card
        @screen lg
          @apply py-8 px-16
</style>
