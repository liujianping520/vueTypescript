<template>
  <admin-index></admin-index>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdminIndex from '@/components/admin/index.vue'; 

@Component({
  components: {
    AdminIndex,
  },
})
export default class PagesAdminIndex extends Vue {}
</script>
