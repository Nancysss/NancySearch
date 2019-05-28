<template>
  <div class="search-result-tool-bar">
    <RoundSearchBar :search="search"/>
  </div>
</template>

<script>
import RoundSearchBar from '@/components/RoundSearchBar.vue'  
export default {
  name: 'search-result-tool-bar',
  props:["search"],
  methods: {
      goHome(){
          this.$router.push("/")
      }
  },
  components: {
  RoundSearchBar
  }
}
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.search-result-tool-bar{
    text-align: left;
    padding: @space-large;
    
}

</style>
