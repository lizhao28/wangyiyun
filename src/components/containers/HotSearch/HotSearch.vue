<template>
  <div class="search-Keyword">
      <div class="hot-search">
        <section class="hot-list">
            <h3 class="hot-title">热门搜索</h3>
            <ul class="hot-ul">
                <li v-for="hotM in hotMusic" :key="hotM.id"><a>{{hotM.first}}</a></li>
                

            </ul>
        </section> 
      </div>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'HotS',
  data (){
      return{
          hotMusic:[
            {"id":1, "first":"没有理由","second": 1, "third": null, "iconType": 0 },
            {"id":2, "first": "我们", "second": 1, "third": null, "iconType": 0},              
            {"id":3,"first": "渺小却伟大","second": 1, "third": null, "iconType": 0 },
            {"id":4,"first": "田馥甄","second": 1,"third": null,"iconType": 0},
            {"id":5, "first": "谢春花","second": 1,"third": null,"iconType": 0},
            {"id":6,"first": "炎亚纶", "second": 1,"third": null, "iconType": 0},
            {"id":7, "first": "偶像练习生","second": 1, "third": null, "iconType": 0},
            {"id":8,"first": "慢慢喜欢你","second": 1,"third": null,"iconType": 0},  
            {"id":9,"first": "林宥嘉","second": 1,"third": null, "iconType": 0},
            {"id":10, "first": "小幸运", "second": 1,"third": null, "iconType": 0 }  
          ]
      }
   }// ,
//     methods:{
//           getHotMusic(){
//               //http://music.163.com   目标   不写或者http://localhost:8080,相当与和本地服务器请求
//               //请求接口前的/mz只是一个暗号
//               axios.post('/mz/weapi/search/hot',{}).then(res=>{
//                   console.log(res.data)
//               })
//           }
//     },
//     created(){
//         this.getHotMusic()
//     }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.search-Keywor{
    width: 100%;
    height:100vh;
 
   
}
.hot-list{
   // border-top:1px solid #A3A3A3;
    padding: 15px 10px 0;
   //background: pink;
    .hot-title{
        font-size: 12px;
        line-height: 12px;
        color: #666;
        font-weight: 400;
        display: block;
    } 
    .hot-ul{
         -webkit-tap-highlight-color: rgba(0,0,0,0);
        margin: 10px 0 7px;
        li{
            display: inline-block;
            height: 32px;
            margin-right: 4px;
            margin-bottom: 8px;
            padding: 0 14px;
            font-size: 14px;
            line-height: 32px;
            color: #333;
            border-radius:0.2rem; 
            border: 1px solid #A3A3A3;
            a{
                color: #333;
                  font-size: 14px;
            }
        }
    }
}

</style>
