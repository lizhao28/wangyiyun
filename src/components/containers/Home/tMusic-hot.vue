<template>

   <div class="tmus">
     <i>
       
     </i>
      <h2>推荐歌单</h2>
    <!-- <div class="gd">
        <li>
            <img src="http://p1.music.126.net/siOi29a_RM84pk8qoMrdAg==/109951163237718433.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
            <span>342万</span>
            <p>
                华语 | 我没有很想你，只是经常梦见你
            </p>
        </li>
    </div> -->
   </div>

</template>
<script>
export default {
  name :"Tmusic"
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
        left: 0;
        top: 20%;
        margin-top: -9px;
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
   .bg{
       
   }
</style>

