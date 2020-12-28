<template>
  <div class="carousel">
    <div class="carouselChild">
      <el-carousel trigger="click" height="360px">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img :src="require('../img/carousel/'+item+'.jpg')"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                imgs:['082519.10753424_o','091321.10341101_o',
                '094225.80536111_o','102536.77586724_o',
                '102927.34747584_o']
            }
        }
    }
</script>

<style type="text/css">
  .carousel{
    text-align: center;
    margin-top:30px;
    position: relative;
  }
  .carouselChild{
    position: relative;
    width: 1200px;
    display: inline-block;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
