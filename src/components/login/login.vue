<template>
  <div class="webindex">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>登录</span>
        </div>
        <div>账号：<el-input v-model="account" placeholder="请输入账号" size="small" style="width:362px;"></el-input></div>
        <div style="margin-top:15px;">密码：<el-input type="password" v-model="password" placeholder="请输入密码" size="small" style="width:362px;"></el-input></div>
        <div style="margin-top:15px;text-align:right;"><el-button type="primary" size="small" @click="userLogin">登录</el-button></div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Login extends Vue {
    public account: string = '';
    public password: string = '';
    created () {
        
    }
    mounted () {

    }
    userLogin () {
        this.$router.push('/admin/default');
    }
}
</script>

<style scoped>
.webindex{ position:fixed; left:0; right:0;top:0;bottom:0; background:#409EFF;color:#fff; }
.webindex .title{padding:150px 0 20px 0;}
.webindex a{color:#ff0;}
.box-card{ width:450px;margin:200px auto;}
</style>
