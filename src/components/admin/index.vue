<template>
  <div>
    <section class="admin-head"><admin-head></admin-head></section>
    <section class="admin-aside" v-bind:style="{ width: asideWidth }"><admin-aside @evtCollapse="collapseAside"></admin-aside></section>
    <section class="admin-body" v-bind:style="{ left: bodyLeft }"><router-view></router-view></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdminHead from '@/components/layouts/head.vue'; 
import AdminAside from '@/components/layouts/aside.vue'; 

@Component({
  components: {AdminHead, AdminAside}
})
export default class AdminIndex extends Vue {
    public asideWidth: string = '204px'
    public bodyLeft: string = '205px'
    created () {
        
    }
    mounted () {

    }

    collapseAside (isCollapse) {
        if(isCollapse) {
            this.asideWidth = '64px';
            this.bodyLeft = '65px';
        }else{
            this.asideWidth = '204px';
            this.bodyLeft = '205px';
        }
        
    }
    
}
</script>

<style scoped>

</style>
