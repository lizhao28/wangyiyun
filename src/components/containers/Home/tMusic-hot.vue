<template>

   <div class="tmus">
     <i>
       
     </i>
      <h2>推荐歌单</h2>
    <div class="gd">
       <ul>
          <li v-for = "tmus in tmuss" :key = "tmus.id">
             <img width="100%" :src="tmus.img" alt=""> 
             <span class="fa fa-music">{{tmus.title}}万</span>
           <p>
              {{tmus.txt}}
            </p>
          </li>
       </ul>
        <ul class="gd2">
          <li v-for = "tmus in tmuss" :key = "tmus.id">
             <img width="100%" :src="tmus.img" alt=""> 
             <span class="fa fa-music">{{tmus.title}}万</span>
           <p>
              {{tmus.txt}}
            </p>
          </li>
       </ul>
    </div>
   </div>

</template>
<script>
export default {
  name :"Tmusic",
  data(){
    return{
      tmuss:[
        {id:"1",img:"http://p1.music.126.net/siOi29a_RM84pk8qoMrdAg==/109951163237718433.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",title:"111",txt:" 「想在春天和你一起做的事」"},
        {id:"2",img:"http://p1.music.126.net/DIXHBC2EGZUvN-eKRPdPYw==/109951163231104268.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",title:"42.2",txt:" 抓住春天的尾巴 | 来一场24小时的摇滚聚会"},
        {id:"3",img:"http://p1.music.126.net/e3rdBspQ6J9NC487oTn3Bw==/18867619533099984.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",title:"76875",txt:" Nowhereman"}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
   main{
      display: flex;
     padding-top:20;
       width: 100%;
       height: 100%;
        background: red;
        .tmus{
        flex: 1;
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
   }
   .gd{
     width: 100%;
     
     ul{
      display: flex;
      padding-bottom: 16px;
        li{
          justify-content: space-around;
          padding-right: 2px;
         display: block;
          width:33.3%;
          position: relative;
        img{
          width: 100%;
        }
        span{
            position: absolute;
            right: 5px;
            top: 2px;
        }
        p{
           overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
            padding: 6px 2px 0 6px;
            line-height: 1.2;
            font-size: 13px;
        }
      }   
     }
   }

</style>

