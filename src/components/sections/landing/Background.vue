<!-- HEALTH:UNKNOWN landing-background -->
<template>
  <div class="landingBackground hidden sm:block pointer-events-none">
    <img class="w-full" :src="data.img.src" :alt="data.img.alt" />
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
// .landingBackground
</style>
