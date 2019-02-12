<template>
  <login></login>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/login/login.vue'; 

@Component({
  components: {
    Login,
  },
})
export default class PagesLogin extends Vue {}
</script>
