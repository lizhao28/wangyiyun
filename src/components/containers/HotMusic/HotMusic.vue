<template>
  <div>
      <div class="banner-img">
        <h1></h1>
      </div>
      <div class="hotmusic">
        <div class="hot-li" v-for="hot in hots" :key="hot.id">
          <div class="left">
            <!-- {{num++}} -->
          </div>
          <div class="cent">
            <p>{{hot.name}}</p>
            <span v-for="singer in hot.ar" :key="singer.id">{{singer.name}} - {{hot.name}}</span>
          </div>
          <div class="right">
           <i class="fa fa-music"></i>
          </div>
        </div>
      </div>
  </div>
  
</template>
<script>
export default {
  name:'HotMusic',
  data(){
    return{
      // num:0,
      hots:[]
    }
  },
  methods:{
    getHost(){
    //   this.$http.get('/mz/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1772330006&uin=1019610093&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=26&_=1523621548686',{
		// //   params:{
		// // 	  __t:Date.now()
		// //   }
	  // }).then(res=>{
		//   console.log(res);
		//   this.hots = res.data.songlist
	  // }).catch(err=>{
		//   console.log(err);  
	  // })
      this.$http.get('../../../../static/json/hot.json').then(res=>{
        console.log(res);
        this.hots = res.data.playlist.tracks

      }).catch(err=>{
        console.log(err);
      })
    }
  },
  created(){
	  this.getHost()
  }
}
</script>
<style lang="scss" scoped>
  .banner-img{
      position: relative;
    padding-top: 38.9%;
    background: url(../../../assets/hot_music_bg_21.jpg) no-repeat;
    background-size:contain;
    h1{
        position: absolute;
        top: 30px;
        left: 20px;
        width: 200px;
        height: 80%;
        background: url(../../../assets/index_icon_2x.png) no-repeat -24px -30px;
        background-size: 166px 97px;
    }
  }
  .hot-li{
    padding-left: 10px;
    display: flex;
    font-size: 17px;
    height: 0.55rem;
    .left{
          align-items: center;
          width: 7%;
          line-height: 0.55rem;
          text-align: center;
          font-size: 17px;
    }
    .cent{
          padding: 6px 0;
          width: 87%;
    }
    .right{
          width: 8%;
        i{
          line-height: 0.55rem;
          text-align: center;
          font-size: 17px;
        }
    }
  }
</style>


