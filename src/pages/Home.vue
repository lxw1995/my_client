<template>
	<div class="Home">
	  
	  <!-- <swiper> -->
	  <selcction/>
	  <Cell/>
	  <swiper/>
	</div>
</template>

<script>
	// 引入组件
	
	import selcction from '../components/selcction.vue'
	import Cell from '../components/Cell.vue'
	import swiper from '../components/swiper.vue'
	
	
	export default {
		name:'Home',
		props:{},
		data(){
			return {
				
			}
		},
		components:{
			// 注册组件
		  selcction,Cell,swiper
		},
		mounted(){},
		updated(){},
		methods:{}
	}
</script>

<style>
 
</style>

