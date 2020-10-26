<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <RealComponent adjective="amazing"/>
    <DateComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import RealComponent from '@/components/RealComponent.vue'
import DateComponent from '@/components/DateComponent.vue'

@Options({
  components: {
    HelloWorld,
    RealComponent,
    DateComponent
  }
})
export default class Home extends Vue {}
</script>
