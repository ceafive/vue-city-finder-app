<template>
  <div id="app">
    <div class="mx-10">
      <Header></Header>
      <div
        class="contain flex flex-wrap justify-center p-12 border border-gray-400"
      >
        <SearchBar></SearchBar>
        <CityDetails></CityDetails>
      </div>
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

<style scoped>
body {
  font-family: "Raleway", sans-serif;
}

.contain {
  height: 85vh;
}
</style>
