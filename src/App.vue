<template>
  <div class="mx-6">
    <Header></Header>
    <div class="flex flex-wrap border border-gray-400">
      <SearchBar></SearchBar>
      <CityDetails></CityDetails>
    </div>
    <div class="text-center font-thin">
      Coded with
      <span class="text-red-700 text-xl">&hearts;</span> by Castro
      Agbo. 2019 &reg;
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    Header: () =>
      import(/* webpackChunkName: "header" */ "./components/Header"),
    SearchBar: () =>
      import(/* webpackChunkName: "searchbar" */ "./components/SearchBar"),
    CityDetails: () =>
      import(/* webpackChunkName: "citydetails" */ "./components/CityDetails")
  }
};
</script>
