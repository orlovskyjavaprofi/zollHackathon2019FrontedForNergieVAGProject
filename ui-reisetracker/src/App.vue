<template>
  <div id="app">
    <IndexPage msg="Welcome to router planer for Nuremberg public metropolitan mass transit"/>
  </div>
</template>

<script>
import IndexPage from './components/IndexPage';

export default {
  name: 'app',
  components: {
    IndexPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
