<template>
  <div class="search-page">
    
    <div class="gray-line">
      <div class="img-logo-masearch" v-if="chooseId == 3" >
      <img  src="./../assets/mysearch_logo_small.png" width="120px" @click="goHome">
    </div>
    <div class="img-logo-baidu" v-if="chooseId == 6" >
      <img src="./../assets/baidu.png" width="120px" @click="goHome"/>
    </div>
    <div class="img-logo-google" v-if="chooseId == 9">
      <img src="./../assets/google.jpg"  width="120px" @click="goHome"/>
    </div>
    <RoundSearchBar class="round-search-bar" :search="search"/>
    </div>
      <div v-for="info in searchResultList" :key="info.id">
          <SearchResultItem :info="info"/>
      </div>
  
  </div>
</template>

<script>
import RoundSearchBar from '@/components/RoundSearchBar.vue'
import SearchResultItem from '@/components/SearchResultItem.vue'

const DB=require("./../data/search.json")

export default {
  name: 'search',
  components: {
      RoundSearchBar,
      SearchResultItem
  },
  data(){
    return{
      searchResultList:[],
    }
  },
computed: {
  search(){
    console.log("从路由传过来的值 this.$route-->",this.$route.params)
      return this.$route.params.searchText
    },
    chooseId(){
      return this.$route.params.choose
    }
  },
  created(){
    this.doSearchResult()
  },
  beforeDestroy(){
    this.bus.$emit('change',this.chooseId)
      this.$router.push("/")
  },
  beforeRouteUpdate(to,from,next){
    next()
    this.doSearchResult()
  },
  methods: {
    doSearchResult(){
      const {searchText}=this.$route.params;
      if(DB.hasOwnProperty(searchText)){
        this.searchResultList=DB[searchText]
      }else{
        this.searchResultList=[]
      }
    console.log("doSearchResult==>",searchText,this.searchResultList)
    },
    goHome(){
      this.bus.$emit('change',this.chooseId)
      this.$router.push("/")
      
  }
  },

}
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.gray-line{
  width: 100%;
  height: 100px;
  border-bottom: solid 1px @color-border-gray;
}
.img-logo-masearch{
  display: inline-block;
  position: absolute;
  top:45px;
  left:20px;
}
.img-logo-baidu{
  display: inline-block;
  position: absolute;
  top:45px;
  left:20px;
}
.img-logo-google{
  display: inline-block;
  position: absolute;
  top:35px;
  left:17px;
}
.round-search-bar{
  display: inline-block;
  position: absolute;
  top:35px;
  left:153px;

}

</style>

