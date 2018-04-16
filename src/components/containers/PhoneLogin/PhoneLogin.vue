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
                        <input placeholder="请输入密码" class="lockI" type="text">
                    </div>
                    <div class="chongzhi">
                      <a href="">重置密码</a>
                    </div>
                </div>
           
            <div class="automatic">
                <input type="checkbox"><label class="aut">自动登录</label>
            </div> 
            <div class="phonebtn">
                <button class="btn">登录</button>
            </div>
        </div>
           
        </div>
    </form>
</div>
</template>
<script>

export default {
  name:'PhoneLogin',

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
                     width: 70%;
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
                  .chongzhi{
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    width: 21%;
                    height:100%;
                //    background: #ea66a6;
                 
                    a{
                        color:#a9a9a9;
                         font-size: 0.15rem;
                         font-size: 0.15rem;
                        text-align:center
                    }
                }
            }
        }
        .automatic{
            width: 100%;
            height: 0.3rem;
          //  background: #65c294;
            margin-top:0.1rem;line-height:0.3rem;
            .aut{
                padding-left:10px;
            }
        }
        .phonebtn{
            width: 100%;
            height: 0.5rem;
            //background: #78331e;
            margin-top: 0.1rem;
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
}
</style>
