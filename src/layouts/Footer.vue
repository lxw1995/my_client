<template>
	<div class="kl">
		<!-- <a href=""><img class="imgs" src="../assets/img/13.jpg" alt=""><span>推荐</span></a>
		<a href=""><img class="imgs"  src="../assets/img/14.jpg" alt=""><span>热点</span></a>
		<a href=""><img class="imgs1" src="../assets/img/17.jpg" alt=""><span>VIP会员</span></a>
		<a href=""><img class="imgs" src="../assets/img/15.jpg" alt=""><span>我的</span></a>
		<a href=""><img class="imgs" src="../assets/img/16.jpg" alt=""><span>泡泡</span></a>
		 -->
		
		<router-link
		  to="/home"
		  tag="a"
		>
		  <img class="imgs" src="../assets/img/13.jpg" alt="">
		  <span>推荐</span>
		</router-link>
		
		<router-link
		  to="/paa"
		  tag="a"
		>
		  <img class="imgs"  src="../assets/img/14.jpg" alt="">
		  <span>热点</span>
		</router-link>
		
		<router-link
		  to="/opo"
		  tag="a"
		>
		 <img class="imgs1" src="../assets/img/17.jpg" alt="">
		 <span>VIP会员</span>
		</router-link>
		
		<router-link
		  to="/Reg"
		  tag="a"
		>
		<img class="imgs" src="../assets/img/15.jpg" alt="">
		 <span>我的</span>
		</router-link>
		
		<router-link
		  to="/Login"
		  tag="a"
		>
		<img class="imgs" src="../assets/img/16.jpg" alt="">
		 <span>泡泡</span>
		</router-link>
	</div>
</template>

<script>
  export default{
	  name:'Footer',
	  props:{
		  
	  },
	  data(){
		  return {
			  
		  }
	  },
	  components:{},
	  mounted(){},
	  updated(){},
	  methods:{}
  }
</script>

<style scoped>
  .kl{
  	width: 100%;
  	height: 0.8rem;
  	background: #f4f4f3;
  	display: flex;
  	justify-content: space-around;
  	align-items: center;
	/* margin-top: 8rem; */
	position: fixed;
	bottom: 0;
	left: 0;
  }
  .kl .imgs{ 
  	width: 0.27rem;
  	height: 0.28rem;
  	display: block;
  
  }
  .kl .imgs1{ 
  	width: 0.68rem;
  	height: 0.30rem;
  	display: block;
  
  }
  .kl span{
  	color:#666666;
  	font-size: 8px;
  	display: block;
  	text-align: center;
	margin-left: -4px;
  }
</style>