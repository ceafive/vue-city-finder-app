<template>
  <div class="mx-10">
    <Header></Header>
    <div class="flex flex-wrap border border-gray-400">
      <SearchBar></SearchBar>
      <CityDetails></CityDetails>
    </div>
    <div class="text-center my-2 font-thin">
      Coded with <span class="text-red-700 text-xl">&hearts;</span> by Castro
      Agbo. 2019 &reg;
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CityDetails from "./components/CityDetails";

export default {
  name: "app",
  components: {
    Header,
    SearchBar,
    CityDetails
  }
};
</script>
