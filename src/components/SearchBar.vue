<template>
  <div
    class="flex flex-wrap w-full sm:px-16 lg:px-40"
    :class="[marginLogic ? 'sm:mt-48 sm:mb-24 lg:mt-48 lg:mb-10' : 'my-80']"
  >
    <div class="flex w-full justify-center text-xl font-thin">
      <label class="w-1/10 sm:text-xl lg:text-2xl">Zipcode:</label>
      <input
        v-model="zip"
        class="w-2/3 appearance-none focus:outline-none bg-transparent text-gray-400 pl-2 border-b border-green-500"
        type="number"
        placeholder="eg: 90210"
      />
    </div>

    <div class="flex w-full justify-center sm:text-sm lg:text-lg mt-2">
      <button
        @click="searchZip"
        class="bg-green-500 focus:outline-none hover:bg-green-700 text-white sm:px-2 lg:px-12 py-2 sm:mr-2"
      >
        Submit
      </button>
      <button
        @click="randomCity"
        class="bg-blue-500 focus:outline-none hover:bg-blue-700 text-white sm:px-2 lg:px-12 py-2"
      >
        Randomize
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zip: "",
      zips: [90210],
    };
  },
  computed: {
    zipcodes() {
      return Object.freeze(this.zips);
    },
    marginLogic() {
      return this.$store.getters.cityData;
    },
  },
  methods: {
    searchZip() {
      this.$store.dispatch("fetchCity", this.zip);
      this.zip = "";
    },
    randomCity() {
      this.zip = "";
      (async () => {
        const module = await import("../data/zipcodes");
        const zipcodes = module.default;
        const rando = Math.floor(Math.random() * zipcodes.length);
        const randomZip = Object.freeze(zipcodes)[rando];
        this.$store.dispatch("fetchCity", randomZip);
      })();
    },
  },
};
</script>
