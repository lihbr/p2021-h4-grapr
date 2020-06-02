<!-- HEALTH:UNKNOWN __page__home -->
<template>
  <div class="__page__home">
    <div class="content">
      <div class="bg-blue-200">
        <landing-hero :data="data.sections.hero" />
        <landing-background :data="data.sections.background" />
        <landing-advantage :data="data.sections.advantage" class="mb-32" />
        <landing-features :data="data.sections.features" class="mb-8" />
        <landing-path :data="data.sections.path" />
      </div>
      <div class="bgSwitch" />
      <landing-why :data="data.sections.why" class="mb-40" />
      <landing-newsletter :data="data.sections.newsletter" />
    </div>
  </div>
</template>

<script>
import data from "./index.json";

import LandingHero from "~/components/sections/landing/Hero.vue";
import LandingBackground from "~/components/sections/landing/Background.vue";
import LandingAdvantage from "~/components/sections/landing/Advantage.vue";
import LandingFeatures from "~/components/sections/landing/Features.vue";
import LandingPath from "~/components/sections/landing/Path.vue";
import LandingWhy from "~/components/sections/landing/Why.vue";
import LandingNewsletter from "~/components/sections/landing/Newsletter.vue";

export default {
  components: {
    LandingHero,
    LandingBackground,
    LandingAdvantage,
    LandingFeatures,
    LandingPath,
    LandingWhy,
    LandingNewsletter
  },
  async asyncData(context) {
    return { data };
  },
  mounted() {
    this.$store.dispatch("pageChanged");
  },
  head() {
    const { meta_title, meta_description, meta_image } = this.data;
    return this.$buildHead({
      title: meta_title || "💐",
      description: meta_description,
      metaImage: {
        og: undefined /* meta_image.url */,
        tw: undefined /* meta_image.twitter_variant.url */
      },
      path: this.$route.path
    });
  }
};
</script>

<style lang="sass" scoped>
.__page__home
  .bgSwitch
    @apply h-40
    background: linear-gradient(180deg, #F5F8FF 0%, #FFFFFE 90%, #FFFFFE 100%)
</style>
