<template>
  <div class="flex flex-wrap justify-between items-center my-2">
    <div class="sm:w-full lg:w-1/3">
      <span class="font-thin sm:text-sm lg:text-3xl">City Finder App</span>
    </div>
    <div
      class="flex flex-wrap sm:w-full lg:w-2/3 lg:justify-end items-center sm:text-xs lg:text-base"
    >
      <span>
        IP: <span class="text-green-500 mr-1">{{ ipData.ip }}</span>
      </span>
      <span
        >ISP: <span class="text-green-500 mr-1">{{ ipData.isp }}</span></span
      >

      <span
        >Country:
        <span class="text-green-500 mr-1">{{ ipData.country_name }}</span></span
      >
      <img
        class="inline h-4"
        :src="ipData.country_flag"
        :alt="ipData.country_name"
      />
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
