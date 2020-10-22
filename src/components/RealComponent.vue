<template>
  <div>This component is {{ adjective }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    adjective: String
  }
})
export default class RealComponent extends Vue {
    adjective!: string
}

</script>
