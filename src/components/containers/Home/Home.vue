<template>

   <main>
      <app-tmusic>1</app-tmusic>
   </main>

</template>
<script>
import  AppTmusic from "./tMusic-hot"
export default {
  name:'home',
  components: {
    AppTmusic
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

