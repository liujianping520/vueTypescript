<template>
  <admin-home></admin-home>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AdminHome from '@/components/admin/home.vue'

@Component({
  components: {
    AdminHome
  }
})
export default class Home extends Vue {}
</script>
