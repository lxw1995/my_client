<template>
	<div class="selection">
		<!-- <img src="../assets/img/2.jpg" alt=""> -->
		<video  class='video' controls  autoplay poster="../assets/img/2.jpg" loop>
			<source src="../assets/move/v4.mp4" type="video/mp4" />
			
		</video>
	</div>
</template>

<script>
	export default {
	  name:'Button',
	  props:{
		  
	  },
	  data(){
	    return {
	     
	    }
	  },
	  components:{},
	  mounted(){
		 
	  },
	  updated(){}
	 
	}
</script>

<style scoped>
	.selection{
		width:100%; 
		height:5rem;
		/* background:green; */
	}
	.video{
		width: 100%;
		height: 4.4rem;
		margin-top: 30px;
	}
</style>
