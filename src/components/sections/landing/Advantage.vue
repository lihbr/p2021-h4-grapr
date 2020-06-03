<!-- HEALTH:UNKNOWN landing-advantage -->
<template>
  <div class="landingAdvantage">
    <container>
      <div class="text-center">
        <img
          :src="data.img.src"
          :alt="data.img.alt"
          class="w-col-3 xl:w-col-4 max-w-full mx-auto pointer-events-none"
        />
        <div class="w-col-5 max-w-full mx-auto">
          <!-- eslint-disable vue/no-v-html -->
          <h2
            class="mb-8 text-6xl sm:text-10xl font-extrabold"
            v-html="data.title"
          />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p class="heading-h3 text-grey-400" v-html="data.description" />
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
.landingAdvantage
  h2
    line-height: 48px

    @screen sm
      line-height: 92px

  p
    @apply font-medium #{!important}

    &::v-deep
      strong
        @apply font-medium text-blue
</style>
