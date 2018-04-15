<template>
  <div class="page bofang">
    <div v-if="film.id">
      {{film.id}}
    </div>
   {{num}}
  </div>
</template>
<script>
export default {
  name:'bofang',
  props: ['id'],
  data(){
    return{
      film:{},
      num:0
    }
  },
  methods:{
    getbf(){
      this.$http.get('../../../../static/json/ms.json'+this.id
      ).then(res=>{
        console.log(res);
      })
    }
  },
   created () {
    this.getbf()
  }
}
</script>
<style lang="scss" scoped>

</style>
