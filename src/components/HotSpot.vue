<template>
  <div class="hotSpot-recommand">
    <div class="hotSpot">
      <div class="hotSpot-header">
        <p>今日热点</p>
        <a href="#" style="border-left: none"><span>全球拾趣</span></a><a href="#"><span>时光对话</span></a><a href="#"><span>产业聚焦</span></a><a href="#"><span>电视情报</span></a>
        <a href="#" class="more">更多</a>
      </div>
      <div class="hotSpot-content">
        <div>
          <a href="#">
            <i class="single"><span style="vertical-align: middle;">独家</span></i>
            <img src="../img/hotSpot/085720.83630661_285X160X4.jpg">
          </a>
          <h3><a href="#">"梅姨"新片《畅所欲言》曝中字预告</a></h3>
          <p><a href="#">史蒂文索德伯格导演 12月10日上线HBO Max</a></p>
        </div>
        <div>
          <a href="#">
            <img src="../img/hotSpot/140704.32265863_285X160X4.jpg">
            <em class="album"></em>
          </a>
          <h3><a href="#">扎导剪辑版"正联" 补拍镜头仅4分钟</a></h3>
          <p><a href="#">求助"神奇动物"在伦敦剧组帮拍闪电侠戏份</a></p>
        </div>
        <div>
          <a href="#">
            <img src="../img/hotSpot/122906.28886862_285X160X4.jpg">
          </a>
          <h3><a href="#">迪士尼将翻拍真人版"星际宝贝"</a></h3>
          <p><a href="#">与"摘金奇缘"朱浩伟洽谈 不确定是否上院线</a></p>
        </div>
        <div>
          <a href="#">
            <img src="../img/hotSpot/113151.50508010_285X160X4.jpg">
            <em class="video"></em>
          </a>
          <h3><a href="#">"星爵"将加盟"雷神4:爱与雷电"</a></h3>
          <p><a href="#">雷神在"复联4"最后登上"银护"宇宙飞船</a></p>
        </div>
        <div>
          <a href="#">
            <img src="../img/hotSpot/095432.36380939_285X160X4.jpg">
          </a>
          <h3><a href="#">《温蒂妮》开幕第八届德国电影节</a></h3>
          <p><a href="#">"元首偷了粉兔子"等展映 王学兵任宣传大使</a></p>
        </div>
        <div>
          <a href="#">
            <img src="../img/hotSpot/170217.46608097_285X160X4.jpg">
            <em class="video"></em>
          </a>
          <h3><a href="#">沈腾扇巴掌抢救晕厥的常远</a></h3>
          <p><a href="#">喜剧《温暖的抱抱》曝拥抱2021预告</a></p>
        </div>
      </div>
    </div>
    <div class="recommend">
      <h2>今日推荐</h2>
      <div class="recommend-content">
        <img class="big" src="../img/recommend/162907.34271489_o.jpg">
        <div class="recommend-title">
          <a href="#">飞奔去月球</a><i>7.0</i>
          <p>爱的人不在，但爱还在</p>
        </div>
        <img class="small" src="../img/recommend/095138.42232802_1280X720X2.jpg">
        <div>
          <i class="quote"></i>会蹦迪的嫦娥依旧很痴情
          <p class="signature">——  时光鉴片室</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style type="text/css">
  .hotSpot-recommand{
    position:relative;
    text-align: center;
    min-width: 1222px;
  }
  .hotSpot-recommand a:hover{
    color:#1f7dd7;
  }
  .hotSpot{
    display: inline-block;
    width:895px;
    height:490px;
    text-align: left;
  }
  .hotSpot-header p{
    font-size:22px;
    color:#6e6e6e;
    display: inline-block;
    margin-right:10px;
  }
  .hotSpot-header a{
    color:black;
    padding:0 16px;
    border-left:1px solid #999999;
    font-size: 16px;
    display: inline-block;
    height: 17px;
    margin-top: -10px;
  }
  .hotSpot-header a span{
    margin-top: -3px;
    display: block;
  }
  .hotSpot-header a:hover{
    color:#1f7dd7;
  }
  .hotSpot-header .more{
    float:right;
    margin-top:28px;
    border-left: none;
  }
  .more::after {
    width:10px;
    height:10px;
    display: inline-block;
    border: 1px solid #000000;
    content: '';
    transform: rotate(-45deg);
    border-left: none;
    border-top: none;
  }
  .hotSpot-content div{
    width: 295px;
    display: inline-block;
    position: relative;
  }
  .hotSpot-content div h3{
    font-size:16px;
    margin:5px 0;
  }
  .hotSpot-content div p{
    font-size:14px;
    margin-top:5px;
  }
  .hotSpot-content div p a{
    color: #999999;
  }
  .single{
    position: absolute;
    display: inline-block;
    width: 36px;
    height:22px;
    background-color: #e83729;
    left:5px;
    margin-top:5px;
    color:#ffffff;
    font-size: 10px;
    text-align: center;
    font-style: normal;
  }
  .album{
    display: inline-block;
    position: absolute;
    width: 32px;
    height: 28px;
    bottom:70px;
    left:5px;
    background: url('../img/newspic.png') 0 -158px;
  }
  .video{
    display: inline-block;
    position: absolute;
    width: 32px;
    height: 32px;
    bottom:72px;
    left:5px;
    background: url('../img/index24.png') 0 -103px;
  }
  .recommend{
    position: relative;
    display: inline-block;
    height: 490px;
    width: 305px;
    vertical-align: top;
  }
  .recommend h2{
    color:#999999;
    font-weight: 500;
  }
  .recommend-content{
    height: 450px;
    width: 100%;
    box-shadow: 0px 0px 5px #a5a5a5 ;
    text-align: left;
  }
  .big{
    width: 100%;
  }
  .small{
    margin-top:-130px;
    margin-left: 210px;
    width: 25%;
    border: 2px solid #ffffff;
    vertical-align: top;
  }
  .recommend-title{
    display: inline-block;
    margin-left: 15px;
    margin-top: 10px;
  }
  .recommend-title a{
    letter-spacing:1px;
  }
  .recommend-title i{
    display: inline-block;
    width: 28px;
    height:18px;
    background-color: #76aa3c;
    margin-left: 4px;
    color: #ffffff;
    font-size: 12px;
    font-style: normal;
    line-height: 1.5;
    text-align: center;
  }
  .recommend-title p{
    font-size: 14px;
  }
  .quote{
    display: inline-block;
    position: relative;
    width:25px;
    height:20px;
    background: url('../img/index24.png') -316px 0;
    margin-left: 15px;
    margin-right: 15px;
    top:4px;
  }
  .signature{
    float: right;
    margin-right:10px;
    color:#999999;
  }

</style>
