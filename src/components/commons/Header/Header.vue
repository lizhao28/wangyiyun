<template>

 <header>
      <div class="logo">
            <h1>
                <div @click = " xianshi =!xianshi">
                    <router-link v-for="geren in gerens" :key="geren.id" :to = "geren.path" class="fa fa-user-circle" ></router-link>
                </div>
            </h1>
        </div>
          <!-- <div class="header_li" v-if="xianshi">
              <router-link v-for = "nav in navs" :key = "nav.id"  :to = "nav.path"><span><p>{{nav.title}}</p></span></router-link> 
            
          </div> 
         <div class="header_li" v-else >
                     <i class="fa fa-arrow-left" @click="xianshi"></i>         
          </div>   -->
           <div class="header_li"  v-if="xianshi" >
               <router-link to = "/home"> <i class="fa fa-arrow-left" @click="xs = !xs"></i></router-link> 
                          
          </div>  
            <div class="header_li" v-else v-show="xs">
              <router-link v-for = "nav in navs" :key = "nav.id"  :to = "nav.path"><span><p>{{nav.title}}</p></span></router-link> 
            
          </div> 
        
          
 </header>
</template>
<script>
export default {
  name:'AppHeader',
    data(){
        return{
            xianshi :false,
            xs:true,
            navs:[
                {id:'1',title:'推荐音乐',path:'/home'},
                {id:'2',title:'热歌榜',path:'/hotmusic'},
                {id:'3',title:'搜索',path:'/ss'}
            ],
            gerens:[
                {id:'4',path:'/geren'}
            ],
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
          z-index: 1000;
         h1{
             margin-left: 10px;  
           background: url(../../../assets/logo1.png );
           position: relative;
            width: 160px;
            height: 100%;
            a{
                position: absolute;
                right: -100%;
                top: 30%;
                div{
                    width: 28px;
                    height: 28px;
                    
                }
            }
            a.router-link-active{
                color: hotpink;
            }
           
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
        background: #fff;
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
         i{
             display: block;
                height: 40px;
                width: 40px;
                font-size: 12px;
                line-height: 40px;
                text-align: center;
                color: #333;
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
