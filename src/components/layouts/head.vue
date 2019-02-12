<template>
  <div class="tablehead">
    <div class="cell cl1">
      <p class="logo">VUE后台管理系统</p>
    </div>
    <div class="cell">
      <router-link to="/login">菜单一</router-link>
      <router-link to="/login">菜单二</router-link>
      <router-link to="/login">菜单三</router-link>
      <router-link to="/login">菜单四</router-link>
    </div>
    <div class="cell cl2">
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-setting" style="color:#fff;font-size:18px;"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户管理</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class AdminHead extends Vue {
    created () {
        
    }
    mounted () {

    }
    
}
</script>

<style scoped>
.tablehead{ display:table;width:100%;}
.tablehead .cell{display:table-cell;vertical-align: middle;height:50px;}
.tablehead .cell.cl1{width:205px;}
.tablehead .cell.cl2{width:205px;text-align:right; padding:0 15px 0 0;}
.tablehead a{ color:#fff;margin:0 20px 0 0;}
.tablehead a:hover{ color:#ff0;}
.logo{padding:0 0 0 20px;}
</style>
