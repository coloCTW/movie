<template>
  <div id="app">
    <Header/>
    <Search/>
    <Carousel/>
    <div class="main">
      <HotSpot/>
      <Cinema/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import Carousel from './components/Carousel'
import HotSpot from './components/HotSpot'
import Cinema from './components/Cinema'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Carousel,
    HotSpot,
    Cinema
  },
}
</script>

<style>
  body{
    margin: 0;
  }
  a{
    text-decoration: none;
    cursor: pointer;
    color:#000000;
  }
  ul li{
    list-style: none;
  }
  .main{
    margin-top:20px;
    position:relative;
  }
</style>
