<!-- HEALTH:UNKNOWN header-links -->
<template>
  <nav class="headerLinks">
    <ul class="flex flex-wrap justify-end items-center">
      <li v-for="(item, index) in header_links" :key="`${item.title}-${index}`">
        <smart-link
          :href="item.link.href"
          :blank="item.link.blank"
          class="py-1 button"
        >
          <div
            class="soon"
            :class="{
              'h-10 flex justify-center items-center px-10 bg-blue text-white':
                item.isButton
            }"
          >
            {{ item.title }}
          </div>
        </smart-link>
      </li>
    </ul>
  </nav>
</template>

<script>
// import Component from "~/components/Component.vue";

export default {
  components: {
    // Component
  },
  data() {
    return {
      header_links: [
        {
          title: "Pricing",
          link: {
            href: "",
            blank: false
          },
          isButton: false
        },
        {
          title: "About us",
          link: {
            href: "",
            blank: false
          },
          isButton: false
        },
        {
          title: "Get started",
          link: {
            href: "",
            blank: false
          },
          isButton: true
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.headerLinks
  ul
    margin-left: -30px
    margin-right: -30px

  li
    padding-left: 30px
    padding-right: 30px
</style>
