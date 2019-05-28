<template>
    <div class="search-result-item" :info="info">
         <a class="search-result-link" :href="info.url">
        <div class="title"> {{ info.title}}</div>
        <div class="img-block"><img class="info-img"  :src="info.img"></div>
        <div class="desc">{{info.date}}-{{info.desc}}<div class="url"> {{info.url}}</div></div>
         </a>
    </div>
</template>

<script>
export default {
    name:"search-result-item",
    props:["info"],
}
</script>

<style lang="less" scoped>
.search-result-item{
    // border:solid 1px red;
    position: relative;
    text-align: left;
    padding:20px;
    width: 700px;
    
}
.search-result-link{
    text-decoration: none;
}
.title{
    color:#190DAA;
    font-size: 1.25em;
    text-decoration: underline;
}
.url{
    color:#006620;
    font-weight: bold;
}
.img-block{
    display: inline-block;
    height: 50px;
    padding: 5px;
    
}
.info-img{
  width: 90px;
}
.desc{
    position: absolute;
    display: inline-block;
    color:#545454;
    padding: 10px;
}

</style>
