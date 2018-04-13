<template>
  <div class="newmus">
   <span>
        <i></i>
      <h2>最新音乐</h2>
   </span>
    <div class="new-list">
        <!-- <router-linker> -->
                <div class="new-li" v-for="film in films" :key="film.id">
                <div class="lleft">
                        <h3>{{film.name}}</h3>
                        <p v-for="singer in film.song.artists" :key="singer.id">{{singer.name}}</p>
                </div>
                <div class="rright">
                    <span class="fa fa-music"></span>
                </div>
                </div>
         <!-- </router-linker> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:"newmusic",
  data(){
      return{
          films: []
      }
  },
 methods:{
     //https://c.y.qq.com
     getnews(){
         this.$http.get('../../../../static/json/ms.json',{
            //  params:{
            //      __t:Date.now()
            //  }
         }).then(res =>{
             console.log(res);
             this.films = res.data.result
         }).catch(err => {
            //  console.log(arguments);
             
         })
     }
 },
 created(){
    this.getnews()
 }

}
</script>
<style lang="scss" scoped>
    .newmus{
        padding-top: 20px;
          i{  
        position: absolute;
        width: 2px;
        height: 16px;
        background-color: #d33a31;
        }
          h2{
                padding-left: 9px;
                margin-bottom: 14px;
                font-size: 17px;
                height: 20px;
                line-height: 20px;
          }
    }
    .new-list{
        display: flex;
        flex-direction:column;
        padding-left: 10px;
        .new-li{
            display: flex;
            flex: 1 1 auto;
            padding: 6px 0;
            font-size: 12px;
             align-content:center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            .lleft{
                width: 90%;
                h3{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                }
                p{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                }
            }
            .rright{
                span{
                    display: inline-block;
                    width: 22px;
                    height: 35px;
                    text-align: center;
                    line-height: 35px;
                    font-size: 20px;
                }
            }
        }
    }
</style>

