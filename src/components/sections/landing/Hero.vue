<!-- HEALTH:UNKNOWN landing-hero -->
<template>
  <div class="landingHero">
    <container>
      <section class="sm:px-20 md:px-24 min-h-60vh pt-20 sm:pt-40 relative">
        <!-- eslint-disable vue/no-v-html -->
        <h1
          class="font-extrabold text-6xl sm:text-7xl mb-8"
          v-html="data.title"
        />
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="heading-h3 text-grey-400 mb-16" v-html="data.description" />
        <ul class="-m-2 sm:flex">
          <li
            v-for="(item, index) in data.actions"
            :key="`${item.label}-${index}`"
            class="p-2"
          >
            <div
              class="h-full flex items-center justify-center button px-10 soon"
              :class="{
                'bg-blue text-white': !item.outlined,
                'border border-blue bg-blue-200 text-blue': item.outlined
              }"
            >
              {{ item.label }}
            </div>
          </li>
        </ul>
        <img
          class="hidden lg:block absolute top-10p right-0 h-full"
          :src="data.img.src"
          :alt="data.img.alt"
        />
      </section>
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
.landingHero
  section
    z-index: 1

  h1
    line-height: 48px

    @screen sm
      line-height: 59px

  p::v-deep strong
    @apply font-semibold text-blue

  li > div
    height: 60px

  img
    z-index: -1
</style>
