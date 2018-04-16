<template>
<div>
     <div class="search-Keyword">
      <form class="m-input" action="#" method="get">
          <div class="inputcover">
              <i class="fa fa-search fa-i"></i>
              <input type="search" name="search" class="input"  placeholder="搜素歌曲、歌手、专辑" value autocomplete="off">
              <!-- <label class="holder">搜素歌曲、歌手、专辑</label> -->
              <figure class="close">
                <i class="fa-figurn-i fa fa-close"></i>
              </figure>

          </div>
      </form>
       
  </div>
  <hots></hots>
</div>
 
</template>


<script>
import Hots from '../HotSearch/HotSearch'
export default {
  name: 'SearchInput',
  components:{
      Hots
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
.search-Keyword{
    width: 100%;
    height: 100%;
    display: flex;
    background: #fbfcfd;
     border-top:1px solid #A3A3A3;
    .m-input{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 15px 10px;
        .inputcover{
            display:flex;
            justify-content:space-between;
            align-items: center;
            width: 100%;
            height: 30px;
            box-sizing: border-box;
            background: #ebecec;
            border-radius: 30px;
            .fa-i{
               color: #cdcdce;
                padding: 0 8px;
                vertical-align: middle;
                display: inline-block;
                vertical-align: middle;
                background-position: 0 0;
                background-size: contain;
                background-repeat: no-repeat;
                width: 13px;
            }
            input::-webkit-input-placeholder{
                color: #cecece
            }
            .input{
                width: 100%;
                height: 30px;
                line-height: 18px;
                background: transparent;
                font-size: 14px;
                color: #333;
                outline: 0;
                -webkit-appearance: none;
                border-radius: 0;
                border: 0;
            }
          
            .close{
              
                margin:0; 
                width: 0.3rem;
                height: 30px;
                line-height: 28px;
                text-align: center;
                justify-content:space-between;
                .close-i{
                    color:#BCBDBD!important;
                    display: none;
                    vertical-align: middle;
                    background-position: 0 0;
                    background-size: contain;
                    background-repeat: no-repeat;
                    width: 14px;
                    height: 14px;
                    
                }
            }
            
        }
    }
}
</style>
