<template>
  <div class="home">
    <Dialog />
    <div class="home-search-panel">
    <SelectHomeCheckbox class="select-home-checkbox"/>
    </div>
    <h2 class="today-news">今日资讯</h2>
    <PictureShow    class="picture-shows"/>
    <div class="skin"></div>
  </div>
  
</template>

<script>
// @ is an alias to /src

import SelectHomeCheckbox from '@/components/SelectHomeCheckbox.vue'
import Dialog from './../components/Dialog'
import PictureShow from './../components/PictureShow'


export default {
  name: 'home',
  data(){
    return{
      
    }
  },
  components: {
    SelectHomeCheckbox,
    Dialog,
    PictureShow
  },
  methods: {
    showusr(password){
      console.log("密码-->",password);
    }
  },
}
</script>
<style lang="less" scoped>
.home-search-panel{
  width:1150px;
  margin: 0px auto;
}
.select-home-checkbox{
  position: relative;
  top:50px;
}

.today-news{
  position: relative;
  top: 40px;
}
.picture-shows{
  position: relative;
  top: 30px;
}
.skin{
    position: absolute;
    top: 0px;
    left: 0px;
    background:url("http://img4.imgtn.bdimg.com/it/u=355378550,1341852272&fm=15&gp=0.jpg" ) ;
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>

