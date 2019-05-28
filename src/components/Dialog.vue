<template>
<div>
    <el-button type="text" @click="centerDialogVisible = true" v-if="username === ''"  class="login">登录</el-button>
    <el-button type="text" @click="centerDialogVisible = true" v-if="username !== ''" class="login">欢迎!{{username}}</el-button>
    <el-dialog
    title="提示"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <span class="fm">用户名</span>
    <el-input
    placeholder=""
    v-model="username"
    clearable>
    </el-input>
    <span class="fm">密  码</span>
    <el-input
    placeholder=""
    v-model="password"
    type="password"
    clearable>
    </el-input>
    <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onLogin">确 定</el-button>
    </span>
    </el-dialog>
</div>
</template>


<script>
  export default {
    data() {
      return {
        centerDialogVisible: false,
        input10: '',
        username:"",
        password:"",
        

      }
    },
    methods: {
        open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      onLogin(){
          this.centerDialogVisible = false;
          
      }

    },


  };
</script>

<style lang="less" scoped>
@import "./../themes/base.less";
.fm{
  font-family:@font-family;
    
}
.login{
  color: rgb(136, 116, 116);
  font-weight: bold;
  position: absolute;
  top:0px;
  left:@space-large;
}
</style>
