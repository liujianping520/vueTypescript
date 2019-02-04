<template>
<el-container>
    <el-header>Header</el-header>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main></el-main>
    </el-container>
</el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
      
}
</script>

<style scoped>
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;

    line-height: 50px;
  }
  
  .el-aside {
    position: fixed; top: 60px; bottom:0;  
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  

  
</style>
