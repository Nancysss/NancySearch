<template>
<div class="picture-shows">
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in items" :key="item.id" >
        <a :href="item.url" class="news-title">
        <p>{{item.title}}</p>
        <img :src="item.img" 
            height="300px"
            class="img"
        />
        </a>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
    data() {
        return {
            bannerHeight:"",
            items:[
                {
                    id:1,
                    title:"创业板井喷暗示A股临近变盘窗口 翻倍牛股或来自这些板块",
                    img:'https://inews.gtimg.com/newsapp_bt/0/8908201460/1000',
                    url:'https://new.qq.com/omn/20190527/20190527A0EG8O.html'
                    },
                   {
                    id:2,
                    title:"华为高管：我们5G专利全球第一 方案领先友商至少一年？",
                    img:'https://inews.gtimg.com/newsapp_bt/0/9116607594/1000',
                    url:'https://new.qq.com/omn/20190527/20190527A0FKGZ.html#p=1'
                    },
                        {
                    id:3,
                    title:"男团斥音悦台私吞专辑销售额，发声明追讨千万款项",
                    img:'https://inews.gtimg.com/newsapp_bt/0/9120717673/1000',
                    url:'https://new.qq.com/omn/20190527/20190527A0RNTP.html'
                    },

            ]
        }
    },

}
</script>
<style>
.picture-shows{
    width: 500px;
    margin: 0px auto;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  
}

.el-carousel__item:nth-child(2n) {
    background-color: lightblue
   
}

.el-carousel__item:nth-child(2n+1) {
    background-color:rgba(255, 255, 255, 0.575);
}
.news-title{
    text-decoration: none;
    color:white;
    font-weight: bold;
    font-size: 15px;
}

.img{
    position: absolute;
    top: 0px;
    z-index: -1;
    width: 600px;
    height: 300px;
    
}
</style>