<template>
<div>
    <div class="select-home-checkbox"> 
        
        <div class="logo-div" v-if="show==3">
        <img src="./../assets/mysearch_home.png"   class=" first-img" />
        </div>
        <div class="logo-div" v-if="show==6">
        <img src="./../assets/baidu_home.png"   class=" " />
        </div>
        <div class="logo-div" v-if="show==9">
        <img src="./../assets/google_home.png"   class=" " />
        </div>
        
        
        <el-radio-group v-model="radios" class="el-radio-group">
        <el-radio :label="3" id="one" value="mysearch" v-model="radios" @change="doMySearchChange" name="rbox">mysearch</el-radio>
        <el-radio :label="6" id="two" value="baidu" v-model="radios" @change="doBaiduChange" name="rbox">百度</el-radio>
        <el-radio :label="9" id="three" value="guge" v-model="radios" @change="doGugeChange" name="rbox">谷歌</el-radio>
        </el-radio-group>
        <HomeSearchBar :choose="radios" class="home-search-bar"/>

        
    </div>
    
    </div>
</template>

<script>
import HomeSearchBar from '@/components/HomeSearchBar.vue'

export default {
    name:"select-home-checkbox",
    data(){
        return{
             show:3,
             radios:3
        }
       
    },
    methods: {
        doMySearchChange(){
            this.show=3
           

        },
        doBaiduChange(){
            this.show=6
            
        },
        doGugeChange(){
            this.show=9
            
        }

      // doChangeaitaobao(){
        // var logodiv=document.getElementsByClassName("logo-div")[0]
        // var img=document.getElementsByClassName("my-search-logo")[0]
        // logodiv.removeChild(img)
        
        //  var changedlogo=document.createElement("img")
        //     changedlogo.setAttribute("src","https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3255674462,2027240185&fm=58&bpow=1240&bpoh=1240")
        //     changedlogo.setAttribute("class","my-search-logo")
        //     logodiv.appendChild(changedlogo)
        
            
        // }
    },

    components:{
        HomeSearchBar
    },
    mounted:function(){
        var that=this
    this.bus.$on('change',(msg=>{
        that.show=msg  
        console.log("msg==>",msg)
        console.log("this.show==>",this.show)
    }))
  }

    
}
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.select-home-checkbox{
    width: 1150px;
    margin: 0px auto;
    
}
.logo-div{
    width:700px;
    height: 150px;
    margin: 0px auto;
}
.first-img{
    padding-top: 40px;
}

.my-search-logo{
  margin-top:60px;
  margin-bottom: 30px;
}
.home-search-bar{
  margin: auto;
}
.el-radio-group{
    position: relative;
    top: -20px;
}

</style>
