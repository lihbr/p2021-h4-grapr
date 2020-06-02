<!-- HEALTH:HIGH aspect-ratio -->
<template>
  <div
    class="aspectRatio"
    :class="{
      relative: !absolute && !fixed,
      absolute,
      fixed
    }"
  >
    <div class="h-full w-full absolute">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    absolute: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
};
</script>
