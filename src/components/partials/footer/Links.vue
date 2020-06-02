<!-- HEALTH:UNKNOWN footer-links -->
<template>
  <nav class="footerLinks overflow-hidden w-full sm:w-auto">
    <ul class="flex flex-col sm:flex-row sm:items-center">
      <li v-for="(item, index) in footer_links" :key="`${item.title}-${index}`">
        <smart-link
          :href="item.link.href"
          :blank="item.link.blank"
          class="py-1 text-2xs text-grey-400 uppercase"
        >
          {{ item.title }}
          <external-svg v-if="item.link.blank" class="inline fill-current" />
        </smart-link>
      </li>
    </ul>
    <hr class="mt-4 text-grey-200" />
  </nav>
</template>

<script>
import ExternalSvg from "~/assets/icons/external.svg";

export default {
  components: {
    ExternalSvg
  },
  data() {
    return {
      footer_links: [
        {
          title: "Product Hunt",
          link: {
            href: "https://www.youtube.com/watch?v=bpEmjxobvbY",
            blank: true
          }
        },
        {
          title: "Medium",
          link: {
            href: "https://www.youtube.com/watch?v=_YqzuE-5RE8",
            blank: true
          }
        },
        {
          title: "Spectrum",
          link: {
            href: "https://www.youtube.com/watch?v=PA3P1-aSvKQ",
            blank: true
          }
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.footerLinks
  ul
    margin-left: -30px
    margin-right: -30px

  li
    padding-left: 30px
    padding-right: 30px

  .smart-link
    letter-spacing: .1em
</style>
