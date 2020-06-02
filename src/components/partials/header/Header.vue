<!-- HEALTH:UNKNOWN header -->
<template>
  <header id="header" class="header">
    <container>
      <div class="flex justify-between items-center h-20">
        <smart-link href="/">
          <logo-svg class="h-10" />
        </smart-link>
        <header-links class="hidden sm:block" />
      </div>
    </container>
  </header>
</template>

<script>
import HeaderLinks from "~/components/partials/header/Links.vue";

import LogoSvg from "~/assets/img/logo.svg";

export default {
  components: {
    HeaderLinks,

    LogoSvg
  }
};
</script>

<style lang="sass" scoped>
// .headerHeader
</style>
