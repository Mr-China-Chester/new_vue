<template>
  <div id="app">
  <tou-bu></tou-bu>
  <!-- <router-link :to="{ name: 'ceshidiaoyong', params: {name:'dddd'} }">11</router-link> -->
  <router-view name='main'></router-view>
  <router-view name='sidebar'></router-view>
  </div>
</template>

<script>
import touBu from './components/toubu'
export default {
  name: 'App',
  components:{
    touBu,
  },
}
</script>
<style>
html {
  background-color: #DDDDDD;
}
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}
body,div,span,a,p,ul,li {
margin: 0;
padding: 0;
}
</style>
