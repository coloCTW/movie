<template>
  <div class="cinema">
    <div class="cinema-header">
      <p>院线热映</p>
      <a><p>北京</p><i></i></a>
      <City/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import City from './City'

    export default {
      components: {
        City
      },
    }
</script>

<style type="text/css">
  .cinema{
    margin-top:50px;
    width:100%;
    text-align: center;
  }
  .cinema div{
    display: inline-block;
    border-top:1px #CCCCCC solid;
    width: 1200px;
    height:500px;
    text-align: left;
  }
  .cinema-header p{
    color:#6e6e6e;
    font-size: 22px;
    display: inline-block;
  }
  .cinema-header a{
    margin-left: 25px;
  }
  .cinema-header i{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url('../img/index24.png') -60px 0;
    margin-left: 10px;

  }
</style>
