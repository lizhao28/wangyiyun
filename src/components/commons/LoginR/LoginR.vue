<template>
  
    <div class="banner">
        <div class="LoginR">
            <form action="#" method="get">
             
               <!-- <router-view  v-for="a in nav" :key="a.id" :to="a.path"> -->
                <div class="LoginF">
                  <a href="#/PhoneLogin">手机号登录</a> 
                 </div>
              <!-- </router-view> -->
              <div class="registerF">
                <a href="#/PhoneRegister">注册 </a> 
              </div>
            </form> 

        </div>
        <div class="qq">
          <div class="other">
              <div class="line"></div>
              <div class="otherL">其他登录方式</div>
              <div class="line"></div>
          </div>
         <div class="otherWay">
           <ul class="otherUL">
             <li>
               <div class="ic">
                  <i class="iconfont icon-weixin ii"></i>
                 
               </div>
               <em>微信</em>
               
             </li>
             <li>
               <div class="ic">
                  <i class="iconfont icon-qq ii"></i>
                  
               </div>
                <em>QQ</em>
              
             </li>
             <li>
               <div class="ic">
                  <i class="iconfont icon-tubiao214 ii"></i>
                    
               
               </div>
               <em>新浪微博</em>
             </li>
             <li>
               <div class="ic">
                  <i class="ii"><img src="../../../../static/wy.jpg" alt=""></i>
                  
               
               </div>
               <em>网易邮箱</em>
             </li>
           </ul>
         </div>
        </div>
        <!-- <phone-login></phone-login> -->
    </div>
  
</template>
<script>
// import PhoneLogin from '../../containers/PhoneLogin/PhoneLogin'
export default {
  name:'LoginR',


}
</script>
<style lang="scss" scoped>
.banner{
    width:100%;
    height:100%;
  //  background: pink;
  // .LImg{
  //   width: 100%;
  //   height:100px;
  // }
  .LoginR{
    width: 100%;
    height:60%;
  //  background: orange;
    display:flex;
    justify-content:center;
    
    .LoginF{
      margin:50px 0 30px 0;  
      text-align: center;
    //  background: pink;
      width: 3rem;
      line-height: 0.8rem;
      height:0.8rem;
    
      border-radius: 50px;
      color: #ea4848;
      border:1px solid #ea4848;
      a{  font-size: 0.25rem;
         color: #ea4848;
        display: block;
        width: 100%;
        height: 100%
      }
    }
    .registerF{ 
    //  background:#92AB37;
      width:3rem;
      height:0.8rem;
      line-height: 0.8rem;
      font-size: 0.25rem;
      text-align: center;
      border-radius: 50px;
      margin-bottom: 30%;
      color: #ea4848;
      border:1px solid #ea4848;
      a{  font-size: 0.25rem;
         color: #ea4848;
        display: block;
        width: 100%;
        height: 100%
      }
    }
  }
  .qq{
    height:40%;
  //  background: #00FFFF;
    .other{
    //  background: #faa755;
      height:0.4rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      .line{
        width: 0.8rem;
        border-top:1px solid #dcdcdc ;
        margin:0 0.3rem 0 0.3rem
      }
    }
    //其他登录方式
    .otherWay{
       margin: 0.4rem 0 0.41rem 0;
      height:1rem;
     // background: #ed1941;
      .otherUL{
        display:flex;
        justify-content: space-around;
        color: #666;
            
          /// justify-content: center;
       align-items:center;
        li{
           width: 0.7rem;
           height:1rem;
          // display:flex;
          // justify-content: center;
          // align-items:center;
        }
        .ic{
           margin: 0.07rem 0 0 0.08rem;
          display:flex;
          justify-content: center;
          align-items:center;
          border-radius:50%; 
          width: 80%;
          height:50%;
       //   background: #decb00;
          border:1px solid #d0d0d0; 
          .ii{
            //display: block;
            font-size: 0.3rem!important;
            
          
          }
          .icon-weixin{
              color: #67B633
            }
          .icon-qq{
              color: #34A0DF
          }
          .icon-tubiao214{
            color: #EA4848
          }  
          }
        }
        em{
              margin-top: 5px;
              display: block;
              width: 100%;
              height: 0.2rem;
              text-align: center;
              font-size: 0.175rem!important;
              color:#999
            }
    }
  }
}
</style>

