<template>
  <div class="webindex">
    <h1 class="title">vue+Typescript+ElementUi 后台管理系统</h1>
    <div><router-link to="/login">登录</router-link></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class WebIndex extends Vue {}
</script>

<style scoped>
.webindex{ position:fixed; left:0; right:0;top:0;bottom:0; background:#409EFF;color:#fff; text-align:center;}
.webindex .title{padding:150px 0 20px 0;}
.webindex a{color:#ff0;}
</style>
