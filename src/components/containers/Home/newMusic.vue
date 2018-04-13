<template>
  <div class="newmus">
   <span>
        <i></i>
      <h2>最新音乐</h2>
   </span>
    <div class="new-list">
        <div class="new-li" v-for="film in films" :key="film.cur_count">
           <div class="lleft">
                <h3>{{film.data.albumname}}</h3>
                <p  v-for="singers in film.data.singer" :key="singers.id">{{singers.name}}</p>
           </div>
           <div class="rright">
               <span class="fa fa-music"></span>
           </div>
        </div>
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
         this.$http.get('/mz/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1523534860555',{
             params:{
                 __t:Date.now()
             }
         }).then(res =>{
             console.log(res);
             this.films = res.data.songlist
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

