<template>

 <header>
      <div class="logo">
            <h1></h1>
        </div>
          <div class="header_li">
              <router-link v-for = "nav in navs" :key = "nav.id"  :to = "nav.path"><span><p>{{nav.title}}</p></span></router-link>
          </div>  
 </header>
</template>
<script>
// export default {
//   name:"AppHeader",
  
// }
export default {
  name:'AppHeader',
    data(){
        return{
            navs:[
                {id:'1',title:'推荐音乐',path:'/tMusic'},
                {id:'2',title:'热歌榜',path:'/HotMusic'},
                {id:'3',title:'搜索',path:'/ss'}
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
*{margin: 0;padding: 0}
   header{
       height: 104px;
     .logo{
         width: 100%;
         height: 64px;
             position: fixed;
          background-color: #242424;
         h1{
             margin-left: 10px;
             
           background: url(../../../assets/logo1.png );
           position: relative;
            width: 160px;
            height: 100%;
         }
     }
   }
   .header_li{
       display: flex;
        height: 40px;
        width: 100%;
       position: fixed;
        top: 64px;
        left: 0;
        z-index: 100;
        height: 40px;
        border: 1px solid rgba(0,0,0,.1);
        a{
            line-height: 40px;
            width: 33.3%;
            height: 40px;
            color: #333;
            text-align: center;
            font-size: 15px;
            span{
             display: inline-block;
                height: 100%;
                padding: 0 5px;
            }
        }
   }
   a.router-link-active {
       span{
           border-bottom: 2px solid #d33a31;
       }
       p{
            color: #d33a31
       }
}
</style>
