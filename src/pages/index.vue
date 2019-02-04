<template>
  <web-index></web-index>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WebIndex from '@/components/index.vue'

@Component({
  components: {
    WebIndex
  }
})
export default class Index extends Vue {}
</script>
