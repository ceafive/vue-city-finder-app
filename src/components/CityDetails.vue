<template>
  <div
    v-if="cityData"
    class="flex flex-wrap sm:w-full lg:w-2/3 items-center animated zoomIn text-center leading-none"
    style="backgroundColor:#f81e1d;"
  >
    <div class="w-full font-semibold text-6xl">
      {{ cityData["places"][0]["place name"] }}
    </div>
    <div class="w-full text-4xl">
      {{ cityData["places"][0]["state"] }}
    </div>
    <div class="w-full text-4xl">
      {{ cityData["places"][0]["state abbreviation"] }}
    </div>
    <div class="w-full text-4xl">
      {{ cityData["post code"] }}
    </div>
    <div class="w-full text-4xl">
      {{ cityData["country"] }}
    </div>
  </div>
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

<style></style>
