<template>
  <div id="app">
    <Header/>
    <!-- <Home/> -->
	  <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  
import Header from './Header.vue';
// import Home from '../pages/Home.vue';
import Footer from './Footer.vue';


export default {
  name: 'App',
  components: {
    Header,Footer
  },
  
}
</script>

<style>

</style>
