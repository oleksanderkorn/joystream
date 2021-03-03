<template>
  <div id="app">
    <img width="50" height="50" alt="Vue logo" src="./assets/joystream.svg">
    <Joystream/>
  </div>
</template>

<script>
import Joystream from './components/Joystream.vue'

export default {
  name: 'App',
  components: {
    Joystream
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  border-radius: 25px;
}
</style>
