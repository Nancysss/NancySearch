<template>
    <div class="home-search-bar">
        <input spellcheck="false" class="input-search" v-model="searchText" @keydown.enter="doSearch">
        <button class="btn-search" @click="doSearch">搜索一下</button>
        
    </div>
</template>

<script>
import Util from '@/common/Util.js'
export default {
    name:"home-search-bar",
    props:{
        choose:''
    },
    data:function(){
        return{
            searchText:""
        }
    },
    methods: {
        doSearch(){
            Util.searchAPIS(this.$router,this.searchText,this.choose)
            // if(this.searchText!=="")
            // this.$router.push(`/search/${this.searchText}`)
        }
    },
}
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.home-search-bar{
    max-width: 500px;
    
}
.input-search{
    outline: none;
    width: 80%;
    height:@home-search-bar-height;
    vertical-align: center;
    font-size:1.2em;
    border: solid 1px @color-border-gray;
    box-sizing: border-box;
    border-top-left-radius: @home-search-bar-border-radius;
    border-bottom-left-radius: @home-search-bar-border-radius;
}
.btn-search{
    display:inline-block;
    outline:none;
    width: 20%;
    height:@home-search-bar-height;
    background-color: @color-primary;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom:solid 1px @color-primary;
    // border: none;
    margin-top: 2px;
    color: white;
    font-size:1.2em;
    box-sizing: border-box;
    border-top-right-radius: @home-search-bar-border-radius;
    border-bottom-right-radius: @home-search-bar-border-radius;
}
</style>

