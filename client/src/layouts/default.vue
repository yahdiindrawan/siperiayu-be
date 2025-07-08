<template>
  <div>
    <!-- <TheHeader/> -->
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/partials/TheHeader.vue";
import TheNavbar from "@/components/partials/TheNavbar.vue";
import TheFooter from "@/components/partials/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheNavbar,
    TheFooter,
  },
};
</script>
