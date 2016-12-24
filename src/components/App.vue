<template>
  <div id="app">
    <search-bar></search-bar>
    <div class="mui-content">
      <search-result></search-result>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'
import SearchResult from './SearchResult.vue'

export default {
  components:{
    SearchBar,
    SearchResult
  },
}
</script>

