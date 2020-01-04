<template>
  <div
    class="flex flex-wrap w-full sm:px-16 lg:px-40"
    :class="[marginLogic ? 'mt-40 mb-20' : 'my-80']"
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
import zipcodes from "zipcodes";
export default {
  data() {
    return {
      zip: "",
      randomZip: ""
    };
  },
  computed: {
    marginLogic() {
      if (typeof this.$store.getters.cityData === "object") {
        return true;
      }
    }
  },
  methods: {
    searchZip() {
      this.$store.dispatch("fetchCity", this.zip);
      this.zip = null;
    },
    randomCity() {
      this.zip = null;
      let zipObj = zipcodes.random();
      this.randomZip = zipObj.zip;
      if (this.randomZip.length < 5) {
        zipObj = zipcodes.random();
        this.randomZip = zipObj.zip;
      }

      this.$store.dispatch("fetchCity", this.randomZip);
    }
  }
};
</script>
