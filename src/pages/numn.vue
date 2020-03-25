<template>
	<div class="mov">
		<video controls class='video' autoplay>
			<source src="../assets/move/3.mp4" type="video/mp4" />
		</video>
		<video controls class='videor'>
			<source src="../assets/move/4.mp4" type="video/mp4" />
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
	      
	    }
	  },
	  components:{},
	  mounted(){},
	  updated(){}
	 
	}
</script>

<style scoped>
	.mov{
		
	}
	.video{
		width: 100%;
		height: 100%;
		padding-top: 40px;
	}
	.videor{
		width: 100%;
		height: 100%;
		margin-top: 20px;
	}
</style>

