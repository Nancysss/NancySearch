<template>
    <div class="round_search_bar">
    
        <input spellcheck="false" v-model="handlesearch" class="input_search" @keydown.enter="doSearch">
        <button class="btn_search" @click="doSearch">
            <img class="icon-search" src="./../assets/icon_search.png">
        </button>
    </div>
</template>

<script>
import Util from '@/common/Util.js'
export default {
    name:"round_search_bar",
    props:["search"],
    data() {
        return {
            handlesearch:this.search
        }
    },
    methods: {
        doSearch(){
            // Util.searchAPI(this.$router,this.handlesearch)
             if(this.handlesearch!=="")
            this.$router.push(`/search/${this.handlesearch}/${this.$route.params.choose}`)
        }
    },
}
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.round_search_bar{
    display: inline-block;
    width: 400px;
    position: relative;
}
.input_search{
    width: 100%;
    height:@round-search-bar-height;
    border-radius: @round-search-bar-border-radius;
    border: 1px solid @color-border-gray;
    padding: 20px;
    box-sizing: border-box;
    outline: none;
    font-size: 1.2em;
}
.btn_search{
    height:@round-search-bar-height;
    position: absolute;
    right: 0px;
    top:0px;
    background: none;
    outline: none;
    border: none;
}
.icon-search{
    width: 30px;
    height: 30px;
    margin-right: 15px;
}
</style>
