<template>
<div>
  <div class="collapse-icon"><i class="el-icon-menu" style="cursor: pointer;" @click="asideCollapse"></i></div>
  <el-menu 
    default-active="1-4-1" 
    class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class AdminAside extends Vue {
    public isCollapse: boolean = false;
    created () {
        
    }
    mounted () {

    }

    handleOpen (key: any, keyPath: any) {
    }

    handleClose (key: any, keyPath: any) {
    }

    asideCollapse () {
      this.isCollapse = !this.isCollapse;
      this.$emit('evtCollapse',this.isCollapse);
    }
    
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {width: 204px;min-height: 400px;}
.collapse-icon{ text-align:center; font-size:25px; padding:5px 0; }
.el-menu{border-right:0;}
</style>
