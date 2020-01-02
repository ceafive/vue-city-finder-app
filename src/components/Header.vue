<template>
  <div class="flex justify-between items-center sm:my-6 lg:my-4">
    <div class="flex-shrink text-3xl">
      <span class="font-thin">City Finder App</span>
    </div>
    <div class="flex-shrink sm:text-sm">
      <span
        >Your IP: <span class="text-green-500 mr-1">{{ ipData.ip }}</span></span
      >
      <span
        >ISP: <span class="text-green-500 mr-1">{{ ipData.isp }}</span></span
      >
      <span
        >City: <span class="text-green-500 mr-1">{{ ipData.city }}</span></span
      >
      <span
        >Country:
        <span class="text-green-500 mr-1">{{ ipData.country_name }}</span></span
      >
      <img class="inline h-4" :src="ipData.country_flag" alt="country_flag" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiKey: "afb1b8fb45474d1f99275ae65e30037e"
    };
  },
  computed: {
    ipData() {
      return this.$store.getters.ipData;
    }
  },
  created() {
    this.$store.dispatch("ipInfo", this.apiKey);
  }
};
</script>
