<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="cityData"
      class="flex flex-wrap w-full bg-appRed1 items-center text-center sm:mx-4 lg:mx-40 py-4 mb-20 lg:leading-loose"
    >
      <div
        class="w-full font-semibold sm:text-4xl lg:text-6xl"
      >{{ cityData["places"][0]["place name"] }}</div>
      <div class="w-full text-2xl">{{ cityData["places"][0]["state"] }}</div>
      <div class="w-full text-2xl">{{ cityData["places"][0]["state abbreviation"] }}</div>
      <div class="w-full text-2xl">{{ cityData["post code"] }}</div>
      <div class="w-full text-2xl">{{ cityData["country"] }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    cityData() {
      return this.$store.getters.cityData;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


