<template>
  <section class="wrap-indexbox">
    <div class="loginbox"> 
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>登录</span>
            </div>
            <div>
                <div>账号：<el-input v-model="account" placeholder="请输入账号" size="small" style="width:350px;"></el-input></div>
                <div class="mtop">密码：<el-input type="password" v-model="password" placeholder="请输入密码" size="small" style="width:350px;"></el-input></div>
                <div class="mtop" style="padding-left:50px;"><el-button type="primary" size="small" @click="login">登录</el-button></div>
            </div>
        </el-card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
    public account: string = ''; 
    public password: string = ''; 
    
    mounted () {

    }

    login () {
        this.$router.push('/admin/home');
    }
}
</script>

<style scoped>
.wrap-indexbox{ position: fixed; top: 0; right: 0; left: 0; bottom: 0; background: #409EFF;}
.loginbox{ position: absolute; width:450px; height: 250px;left:50%;top:50%;margin-top: -125px;margin-left: -225px;}
.mtop{ margin-top: 10px;}
</style>
