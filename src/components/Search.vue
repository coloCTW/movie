<template>
  <div class="searchBox">
    <div class="search">
      <div id="searchCategory" @mouseover="dropdown=!dropdown" @mouseout="dropdown=!dropdown">
        <a href="#">全部<i></i></a>
        <em></em>
      </div>
      <input id="searchContent" type="text" placeholder="搜索电影、影院、影人、商品、新闻" @blur="searchBlur()" @focus="searchFocus()">
      <a href="#" id="searchIcon" @mouseover="colorBlue()" @mouseout="colorWhite()">
        <i id="searchIcon2"></i>
      </a>
      <ul id="searchCategoryDropdown" v-show="dropdown"  @mouseover="dropdown=!dropdown" @mouseout="dropdown=!dropdown">
        <li>全部</li>
        <li>电影</li>
        <li>影人</li>
        <li>影院</li>
        <li>商品</li>
        <li>新闻</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return{
              dropdown:false
            }
        },
        methods:{
          colorBlue(){
            var searchIcon = document.getElementById('searchIcon');
            searchIcon.style.backgroundColor = "#1E7DD7"
            var searchIcon2 = document.getElementById('searchIcon2');
            searchIcon2.style.background ='url('+require('../img/head.png')+') -134px -45px'
          },
          colorWhite(){
            var searchIcon = document.getElementById('searchIcon');
            searchIcon.style.backgroundColor = "white"
            var searchIcon2 = document.getElementById('searchIcon2');
            searchIcon2.style.background ='url('+require('../img/head.png')+')  -115px -45px'
          },
          searchBlur(){
            var searchContent = document.getElementById('searchContent');
            searchContent.placeholder = searchContent.value
            searchContent.value = ''
            this.colorWhite()
          },
          searchFocus(){
            if(this.placeholder != '搜索电影、影院、影人、商品、新闻'){
              this.value = this.placeholder
            }
            this.placeholder = ''
            this.colorBlue()
          }
        }
    }
</script>

<style type="text/css">
  .searchBox{
    min-width:1250px
  }
  .search{
    display: inline-block;
    width:500px;
    height:40px;
    position:relative;
    left:50%;
    margin: 90px 0 0 -250px;
    border: 1px #a5a5a5a8 solid;
    border-radius: 30px;
  }
  #searchCategory{
    width:100px;
    height:100%;
    text-align: center;
    display: inline-block;
    padding-bottom:4px ;
  }
  #searchCategory a{
    display: inline-block;
    color:#999999;
    font-size: 14px;
    margin-top:10px;
  }
  #searchCategory a i{
    display: inline-block;
    background: url('../img/head.png') -152px 0;
    width:13px;
    height:7px;
    margin: 0 4px 1px 8px;
  }
  #searchCategory em{
    display: inline-block;
    width:0;
    height:15px;
    border-right: 1px #c8c8c8 solid;
    margin: 0 0 -2px 2px;
    color:black;
  }
  .search input{
    border:0;
    outline:none;
    width:300px;
    height:24px;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #c8c8c8;
  }
  #searchIcon{
    width:55px;
    height:32px;
    float:right;
    border-radius: 30px;
    margin:4px 5px 0 0;
  }
  #searchIcon i{
    display: inline-block;
    width:19px;
    height:20px;
    background: url("../img/head.png") -115px -45px;
    margin:6px 0 0 18px;
  }
  #searchCategoryDropdown{
    position: relative;
    float:left;
    width:100px;
    padding: 0;
    text-align: center;
    box-shadow: 0 3px 3px rgba(0,0,0,.3);
    margin:0;
    z-index:5;
  }
  #searchCategoryDropdown li{
    border-top: 1px solid #eee;
    padding: 6px;
    font-size: 14px;
    color:black;
    cursor: pointer;
    background-color: #fff;
  }
  #searchCategoryDropdown li:hover{
    background: #E5F2FC;
    color:#267DD7;
  }
</style>
