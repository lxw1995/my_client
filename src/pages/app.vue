<template>
	<div class="mov">
		<video controls class='video'
		>
			<source src="../assets/move/4.mp4" type="video/mp4" />
			
		</video>
		<video controls class='video'>
			<source src="../assets/move/5.mp4" type="video/mp4" />
			
		</video> 
	</div>
</template>

<script>
	export default {
	  name:'mov',
	  props:{
		  
	  },
	  data(){
	    return {
	      banner:[]
	    }
	  },
	  components:{},
	  mounted(){
	
	  },
	  updated(){}
	 
	}
</script>

<style scoped>
	.mov{
		
	}
	.video{
		width: 100%;
		height: 100%;
		margin-top: 40px;
	}
</style>

