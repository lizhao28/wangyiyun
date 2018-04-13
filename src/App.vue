<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
<script>
import AppHeader from './components/commons/Header/Header'
import Home from './components/containers/Home/Home' 
export default {
  name:'App',
   components: {
    Home,AppHeader
  }
}
</script>
<style lang="sass" scoped>

</style>

