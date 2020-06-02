<!-- HEALTH:UNKNOWN footer -->
<template>
  <div id="footer" class="footer">
    <container>
      <div class="my-40 flex flex-col items-center">
        <footer-links class="mb-5" />
        <footer-footnote />
      </div>
    </container>
  </div>
</template>

<script>
import FooterLinks from "~/components/partials/footer/Links.vue";
import FooterFootnote from "~/components/partials/footer/Footnote.vue";

export default {
  components: {
    FooterLinks,
    FooterFootnote
  }
};
</script>

<style lang="sass" scoped>
// .footerFooter
</style>
