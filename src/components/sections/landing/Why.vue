<!-- HEALTH:UNKNOWN landing-why -->
<template>
  <div class="landingWhy">
    <container>
      <section class="sm:px-12 text-center">
        <div class="mb-16">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h3 class="heading-h2 pb-px" v-html="data.title" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="heading-h4 text-grey-400 pt-px" v-html="data.headline" />
        </div>
        <ul class="sm:flex sm:flex-wrap -m-4">
          <li
            v-for="(item, index) in data.cards"
            :key="`${item.title}-${index}`"
            class="p-4 flex-1"
          >
            <aspect-ratio class="pb-100p">
              <div
                class="h-full card relative text-center text-white p-4 flex flex-col items-center justify-center"
                :class="`card--${item.color}`"
              >
                <img
                  :src="item.img.src"
                  :alt="item.img.alt"
                  class="w-24 sm:w-32 mx-auto"
                />
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="heading-h3" v-html="item.title" />
                <!-- eslint-disable vue/no-v-html -->
                <div
                  class="mt-4 text-s sm:text-xl opacity-80 font-light"
                  v-html="item.description"
                />
              </div>
            </aspect-ratio>
          </li>
        </ul>
      </section>
    </container>
  </div>
</template>

<script>
import AspectRatio from "~/components/layouts/AspectRatio.vue";

export default {
  components: {
    AspectRatio
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
.landingWhy
  li
    @screen sm
      min-width: 320px

  .card
    border-radius: 40px

    &::after
      @apply block absolute w-70p h-70p left-15p
      content: ""
      bottom: -15px
      z-index: -1

    /* purgecss start ignore */

    &--blue
      background: linear-gradient(141.72deg, #709BFF 21.63%, #5B8AF5 87.24%)

      &::after
        background: linear-gradient(141.77deg, rgba(112, 155, 255, 0.6) 21.63%, rgba(91, 138, 245, 0.6) 87.24%)
        filter: blur(100px)
        border-radius: 40px

    &--orange
      background: linear-gradient(140.91deg, #FEB472 16.26%, #F2A159 93.34%)

      &::after
        background: #C77D3C
        opacity: 0.6
        filter: blur(100px)
        border-radius: 40px

    &--pink
      background: linear-gradient(151.95deg, #FA81C3 -1.17%, #DF60A5 103.58%)

      &::after
        background: #F67CBE
        opacity: 0.6
        filter: blur(100px)
        border-radius: 40px

    /* purgecss end ignore */
</style>
