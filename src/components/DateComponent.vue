<template>
  <div>
    The date is {{dateString}}
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

const today = new Date()
const todaysDate = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`

export default class RealComponent extends Vue {
    dateString: String = todaysDate
}

</script>
