<!-- HEALTH:UNKNOWN landing-features -->
<template>
  <div class="landingFeatures">
    <container>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h3 class="heading-h2 pb-px text-center mb-8" v-html="data.title" />
      <div class="bg-white box px-8 py-10 lg:px-16 md:py-20">
        <ul class="-mx-4 -my-12 md:-my-4 md:flex">
          <li
            v-for="(item, index) in data.features"
            :key="`${item.title}-${index}`"
            class="px-4 py-12 md:py-4 flex-1 flex flex-col xl:flex-row justify-between text-center md:text-left"
          >
            <img
              class="w-32 h-32 object-contain self-center xl:mx-auto"
              :src="item.img.src"
              :alt="item.img.alt"
            />
            <div class="mt-4 md:mt-0 xl:pl-6">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="heading-h2 mb-2" v-html="item.title" />
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p class="text-l text-grey-400" v-html="item.description" />
            </div>
          </li>
        </ul>
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
.landingFeatures
  .box
    border-radius: 40px
    box-shadow: -1px -1px 23px rgba(10, 52, 255, 0.08)
</style>
