<template>
  <login></login>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Login from '@/components/loginreg/login.vue'

@Component({
  components: {
    Login
  }
})
export default class Index extends Vue {}
</script>
