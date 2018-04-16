<template>
<div class="phone-rog">
    <form action="" method="get">
        <div class="phoneRF">
            <div class="phoneInput">
                <div class="phonex">
                    <div class="code">
                        <i class="fa fa-mobile-phone"></i>
                        <i class="china-code">+86</i>
                        <i class="fa fa-caret-down"></i>
                    </div>
                    <div class="codeInput">
                        <input placeholder="请输入手机号"  class="codeI" type="text">
                      
                    </div>
                </div>
                <div class="pwd">
                    <div class="lock">
                        <i class="fa fa-lock"></i>
                    </div>
                    <div class="lockInput">
                        <input placeholder="设置登录密码,不少于6位" class="lockI" type="text">
                    </div>
                 
                </div>
           
            <div class="phonebtn">
                <button class="btn">注册</button>
            </div>

                 <div class="qq">
          <div class="other">
              <div class="line"></div>
              <div class="otherL">其他注册方式</div>
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
        </div>
        </div>

    </form>
</div>
</template>
<script>

export default {
  name:'PhoneRegister',

}
</script>

<style lang="scss" scoped>
.phone-rog{
    overflow: hidden;
    width: 100%;
    height:100%;
   // background: pink;
    .phoneRF{
        margin: 0.5rem 0 0.5rem 0;
        width: 100%;
        height: 3.5rem;
      //  background: #fedcbd;
        display:flex;justify-content: center;
        // justify-content:center;
        align-items:e;
        .phoneInput{
            width: 80%;
            height:1rem;
          //  background: #bed742;
            .phonex{//手机号
                width: 100%;
                height: 50%;
            //    background: #00ae9d;
                display:flex;
                justify-content:space-between;
                border: 1px solid #d8d8d8;
                .code{
                     display:flex;
                    justify-content:space-around;
                    align-items:center;
                    width: 30%;
                    height:100%;
                //    background: #f36c21;
                    .fa-mobile-phone{
                        font-size: 0.3rem
                    }
                    .china-code{
                        font-size: 0.15rem
                    }
                    .fa-caret-down{
                         font-size: 0.15rem
                    }
                }
                .codeInput{
                    border-left:1px solid #d8d8d8; 
                    width: 70%;
                    height: 100%;
                 //   background: #90d7ec;
                    .codeI{
                        width: 100%;
                        height: 100%;
                        outline: none;
                        border: 0;
                        line-height: 100%;

                    }
                }
              
            }
            .pwd{//密码
                height: 50%;
             //   background: #ffe600;
             color:#a9a9a9!important;
                display:flex;
                justify-content:space-between;
                border:1px solid #d8d8d8;
                .lock{
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    width: 9%;
                    height:100%;
                //    background: #c85d44;
                    .fa-lock{
                        font-size: 0.2rem
                    }
                }
                .lockInput{
                     width: 100%;
                     height:100%;
                   
                 //   background: #afdfe4;
                    .lockI{
                        width: 100%;
                        height: 100%;
                        outline: none;
                        border: 0;
                        line-height: 100%;
                    }


                }
             
            }
        }

        .phonebtn{
            margin-top: 0.4rem;
            width: 100%;
            height: 0.5rem;
            //background: #78331e;
            // margin-top: 0.1rem;
            .btn{
                width: 100%;
                height: 100%;
                border: 0;
                border-radius:15px ;
                font-size: 0.2rem;
                background: #ea4848;
                color: #fff
            }
        
        }
    }
    //qq
    .qq{
     height:40%;
      margin-top: 0.34rem;
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
