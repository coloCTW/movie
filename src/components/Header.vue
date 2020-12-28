<template>
  <div class="headbar">
    <ul class="headbar-left">
      <li><a href="index.html" style="color:#fff;font-weight: 700;line-height:60px;display: inline-block">首页<i></i></a></li>
      <li><a href="index.html">购票</a></li>
      <li><a href="#">正版商城</a></li>
      <li><a href="#">新闻</a></li>
      <li><a href="#">视频<em></em></a></li>
      <li><a href="#">直播</a></li>
      <li><a href="#">发现</a></li>
      <li><a href="#">社区</a></li>
      <li><a href="#">会员</a></li>
    </ul>
    <div id="logo"><a href="index.html" style="width: 100%;height:100%;display: inline-block"></a></div>
    <div id="headbar-right">
      <div class="app">
        <i class="line" style="left: 0"></i>
        <a href="#">
          <div class="app-download" @mouseover="codeShow()" @mouseout="codeShow()"><i></i>App下载<em></em></div>
        </a>
        <i class="triangle" @mouseover="codeShow()" @mouseout="codeShow()"></i>
        <i class="line" style="right: 0"></i>
      </div>
      <div id="login">
        <a href="#">登录</a><i></i><a href="#">注册</a>
      </div>
      <a href="#">
        <div id="shoppingcart" @mouseover="cartShow()" @mouseout="cartShow()">
          <i></i>
        </div>
      </a>
      <div class="code"><img src="../img/162837.89453330_o.jpg" @mouseover="codeShow()" @mouseout="codeShow()"></div>
      <div class="cartConetent" @mouseover="cartShow()" @mouseout="cartShow()">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      methods:{
        codeShow(){
          var triangle = document.getElementsByClassName('triangle')[0];
          var code = document.getElementsByClassName('code')[0]
          if(triangle.style.display=='inline-block'){
            triangle.style.display='none'
            code.style.display='none'
          }else{
            triangle.style.display='inline-block'
            code.style.display='block'
          }
        },
        cartShow(){
          var cartConetent = document.getElementsByClassName('cartConetent')[0];
          if(cartConetent.style.display=='block'){
            cartConetent.style.display='none'
          }else{
            cartConetent.style.display='block'
          }
        }
      }
    }
</script>

<style type="text/css">

  .headbar{
    height: 60px;
    background-color: #192332;
    position: fixed;
    width:100%;
    min-width:1250px;
    z-index: 10;
  }
  .headbar-left{
    margin: 0;
    line-height: 60px;
    padding-left: 20px;
    min-width: 570px;
    height:60px;
    float:left;
  }
  .headbar-left li{
    margin-right:30px;
    color:#c8c8c8;
    font-size:14px;
    float:left;
  }
  .headbar-left li a{
    color:#c8c8c8;
    text-decoration:none;
    cursor: pointer;
    position:relative;
    height:100%
  }
  .headbar-left li a:hover{
    color:#fff;
  }
  .headbar-left li a i{
    width: 0;
    height: 0;
    position:absolute;
    border-bottom: 5px solid #fff;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    bottom:0;
    left:50%;
    margin-left:-7px;
  }
  .headbar-left li a em{
    width: 35px;
    height: 15px;
    background: url('../img/head.png') -165px -28px;
    position: absolute;
    top:-5px
  }
  #logo{
    width: 140px;
    height: 45px;
    background: url('../img/head.png');
    position: absolute;
    left:50%;
    top:50%;
    margin: -22.5px 0 0 -75px;
  }
  #headbar-right{
    color:#c8c8c8;
    float:right;
    line-height: 60px;

  }
  .app{
    display: inline-block;
    position: relative;
    padding: 0 18px;
  }
  .app-download{
    font-size:14px;
    color:#fff;
    line-height: 60px;
  }
  .line{
    height: 58px;
    width: 0;
    position: absolute;
    top: 0;
    border-left: 1px solid #141c28;
    border-right: 1px solid #303947;
    overflow: hidden;
  }
  .app-download i{
    display: inline-block;
    background: url('../img/head.png') -50px -45px;
    width:20px;
    height:20px;
    margin: 0 2px -4px 0;
  }
  .app-download em{
    display: inline-block;
    background: url('../img/head.png') -150px 0;
    width:13px;
    height:8px;
    margin: 0  0 0 4px;
  }
  #login{
    display: inline-block;
    padding: 0 30px;
  }
  #login a{
    text-decoration: none;
    font-size:14px;
    color:#c8c8c8;
  }
  #login a:hover{
    color:white;
  }
  #login i{
    display: inline-block;
    width: 0;
    height: 20px;
    border-left: 1px solid #141c28;
    border-right: 1px solid #303947;
    margin: 0 20px -4px;
  }
  #shoppingcart{
    position:relative;
    display: inline-block;
    height:63px;
    width:60px;
    background-color:  #e83729;
    float:right;
    margin-right: 30px;
  }
  #shoppingcart i{
    position: absolute;
    display: inline-block;
    left:50%;
    top:50%;
    margin:-13px 0 0 -15px;
    width:30px;
    height:25px;
    background: url('../img/head.png') 0 -42px;
  }
  .triangle{
    position:absolute;
    width: 0;
    height:0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 5px solid white;
    bottom: 0;
    left:50%;
    margin-left: -7px;
    display: none;
  }
  .code{
    display: none;
    margin-left:-22px;
  }
  .cartConetent{
    width:350px;
    height:300px;
    border-top: red 3px solid;
    margin-top: -1px;
    margin-left:3px;
    box-shadow: 0 3px 10px rgba(136,136,136,0.25);
    display:none;
    background-color: #ffffff;
  }
</style>
