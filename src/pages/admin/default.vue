<template>
  <admin-default></admin-default>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AdminDefault from '@/components/admin/default.vue'; 

@Component({
  components: {
    AdminDefault,
  },
})
export default class PagesAdminDefault extends Vue {}
</script>
