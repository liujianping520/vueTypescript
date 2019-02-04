<template>
  <div class="wrap-indexbox">
     <h1 class="title">VUE+Typescript后台管理系统</h1>
     <div class="txtlink"><router-link to="/login">登录<i class="el-icon-arrow-right"></i></router-link></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class WebIndex extends Vue {
  
}
</script>

<style scoped>
.wrap-indexbox{ position: fixed; top: 0; right: 0; left: 0; bottom: 0; background: #409EFF;}
.title{ text-align: center; padding: 200px 0 0 0; color: #fff; font-size: 30px;}
.txtlink{ text-align: center; color:#fff;}
.txtlink a{color:#ff0;font-size: 20px;}
</style>
