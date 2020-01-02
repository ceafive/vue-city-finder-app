<template>
  <div class="flex flex-wrap text-center sm:w-1/2 px-6">
    <div
      class="sm:w-full text-center flex items-end justify-start border-b border-green-500 py-2 my-4"
    >
      <label for="">Zipcode:</label>
      <input
        v-model="zip"
        class="w-full appearance-none focus:outline-none bg-transparent font-thin text-gray-400 text-xl pl-2"
        type="number"
        placeholder="eg: 90210"
      />
    </div>
    <div class="sm:w-full flex items-start sm:justify-center mt-6">
      <button
        @click="searchZip"
        class="bg-green-500 focus:outline-none hover:bg-green-700 text-white px-12 py-2 sm:mr-2"
      >
        Submit
      </button>
      <button
        @click="randomCity"
        class="bg-blue-500 focus:outline-none hover:bg-blue-700 text-white px-12 py-2"
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
  methods: {
    searchZip() {
      this.$store.dispatch("fetchCity", this.zip);
      this.zip = "";
    },
    randomCity() {
      this.zip = "";
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
