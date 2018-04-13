<template>

   <main>
      <app-tmusic></app-tmusic>
      <new-music></new-music>
   </main>

</template>
<script>
import  AppTmusic from "./tMusic-hot"
import NewMusic from "./newMusic"
// import HotMusic from "../HotMusic/HotMusic"
export default {
  name:'home',
  components: {
    AppTmusic,NewMusic
  }
}
</script>
<style lang="scss" scoped>
   main{
     width: 100%;
     height: 100%;
     padding-top: 20px;
     background: transparent;
   }
</style>

