<!-- HEALTH:UNKNOWN landing-newsletter -->
<template>
  <div class="landingNewsletter">
    <container>
      <section class="text-center">
        <div class="mb-16">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="heading-h4 text-grey-400 pb-px" v-html="data.headline" />
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h3 class="heading-h1 pt-px" v-html="data.title" />
        </div>
        <simple-form
          v-slot="form"
          :form-data="newsletterForm"
          action="/api/v1/subscribe"
          :can-submit="canSubmit"
          assume-no-error
          class="mx-auto"
        >
          <transition name="fade" mode="out-in">
            <div
              v-if="form.status === 'pending'"
              key="pending"
              class="pending sm:flex justify-between items-center bg-blue-200 border border-grey-200 px-3 pb-2 sm:pl-0 sm:pb-0"
            >
              <input
                v-model="newsletterForm.email"
                type="email"
                name="email"
                class="sm:px-5 w-full text-xl sm:text-2xl bg-none h-full"
                required
                :placeholder="data.placeholder"
              />
              <input
                type="submit"
                :value="data.label"
                class="button h-10 flex justify-center items-center px-10 bg-blue text-white cursor-pointer w-full sm:w-auto mt-2 sm:mt-0"
              />
            </div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-else key="success" class="success" v-html="data.success" />
          </transition>
        </simple-form>
      </section>
    </container>
  </div>
</template>

<script>
import SimpleForm from "~/components/controls/SimpleForm.vue";

export default {
  components: {
    SimpleForm
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newsletterForm: {
        email: "",
        ref: "Company"
      }
    };
  },
  computed: {
    canSubmit() {
      if (
        !this.newsletterForm.email ||
        !this.newsletterForm.email.includes("@")
      ) {
        return false;
      }

      return true;
    }
  }
};
</script>

<style lang="sass" scoped>
.landingNewsletter
  .fade-enter-active, .fade-leave-active
    will-change: opacity
    @apply transition-opacity duration-1/2 ease-base

  .fade-enter, .fade-leave-to
    @apply opacity-0

  .simpleForm
    max-width: 540px

  .success
    height: 62px

  input[type="email"]
    height: 60px
    line-height: 26px
    letter-spacing: 0.02em
</style>
