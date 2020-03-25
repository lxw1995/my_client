<template>
<div id="cell">
	  <div class="nav">
	  	<div class="nav-1">
	  		<div class="nav-2">
	  
	  			<div class="nav-2-1">
	  				<a href=""><img class="imgs" src="../assets/img/3.jpg" alt=""></a>	
	  				<!-- <a href=""><span>黄金vip会员</span></a>
	  				<a href=""><span>5天后到期</span></a> -->
	  				<a href=""><img class="imgs1" src="../assets/img/18.jpg" alt=""></a>
	  			</div>
	  			<div class="nav-2-2">
	  				  <a href=""><img class="imgs1" src="../assets/img/4.jpg" alt=""><span>V6年</span></a>
	               
	                <a href=""><span>续费</span></a>
	  			</div>
	  
	  			
	             
	  		</div>
	  		<div class="nav-3">
	  			<a href=""><img src="../assets/img/5.jpg" alt=""><span>签到</span></a>
	  			
	  			<a href=""><img src="../assets/img/6.jpg" alt=""><span>资产中心</span></a>
	  			
	  			<a href=""><img src="../assets/img/7.jpg" alt=""><span>领福利</span></a>
	  			
	  			<a href=""><img src="../assets/img/8.jpg" alt=""><span>年卡升级</span></a>
	  
	  		</div>
	  	</div>
	  </div>
	  <div class="banner">
	  	<div class="banner-1">
	  		<a href=""><img src="../assets/img/9.jpg" alt=""><span>VIP热播榜</span></a>
	  		<a href=""><span>壹周观影</span></a>
	  	</div>
	  	<div class="banner-2">
	  		<a href="">电影</a>
	  		<a href="">电视剧</a>
	  		<a href="">综艺</a>
	  		<a href="">动漫</a>
	  		<a href="">儿童</a>
	  		<a href="">演唱会</a>
	  	</div>
	  </div>
</div>
  
</template>

<script>
  export default {
    name:'Cell',
    props:{

    },
 
    components:{},
    mounted(){},
    updated(){},
    methods:{
		
    }
  }
</script>

<style scoped>
 .nav{
 	width:100%; 
 	height:1.36rem;
 	background:#ffffff;
	margin-top: 5px;
 }
 .nav-1{
 	width:6.8rem; 
 	height:1.22rem;
 	background:white;
 	margin-left:13px;
 }
 
 .nav-2-1{
 	width:2.55rem; 
 	height:0.6rem;
 	display: flex;
 	justify-content: space-around;
 	align-items: center ;
 }
 
 .nav-2-1 a{
 	display: flex;
 	text-decoration: none;
 	text-align: center;
 	color: #9f9f9f;
 }
 .nav-2-1 .imgs{
 	width:0.5rem; 
 	height:0.47rem;
 	display: block;
 }
 
 .nav-2-1 .imgs1{
 	width:0.84rem; 
 	height:0.36rem;
 	display: block;
 }
 
 .nav-2-1 span{
 	font-size: 0.13rem;
 	display: block;
 }
 
 .nav-2{
 	width:3.51rem; 
 	height:0.6rem;
 	display: flex;
 	justify-content: space-around;
 	align-items: center;
 }
 .nav-2-2{
 	width:3.96rem; 
 	height:0.6rem;
 	display: flex;
 	justify-content: space-around;
 	align-items: center;
	margin-right: -163px;
 }
 
 .nav-2-2 .imgs1{
 	width:0.21rem; 
 	height:0.17rem;
 }
 
 .nav-2-2 span{
 	font-size: 0.13rem;
 	display: block;
 }
 .nav-2-2 a{
 	display: flex;
 	text-decoration: none;
 	text-align: center;
 	color: #9f9f9f;
 }
 
 .nav-3{
 	width: 100%;
 	display: flex;
 	justify-content: space-between;
 	align-items: center;
 	/*flex-wrap: wrap;
 }
 .nav-3 a{
 	text-decoration: none;
 	/* text-align: center; */
 	color: #9f9f9f;
 
 }
 .nav-3 img{
 	width: 0.23rem;
 	height: 0.19rem;
 	display: block;
 	margin: 0.10rem 0.24rem 0 ;
     margin-bottom:0.13rem;
 }
 .nav-3 span{
 	font-size: 0.13rem;
 	color:#666666;
 	display: block;
     
 }
 .banner{
 	width: 100%;
 	height: 1.09rem;
 	background:#ffffff;
 }
 .banner-1{
 	width: 100%;
 	height: 0.63rem;
 	/*background: pink;*/
 	display: flex;
    justify-content: space-between;
    align-items: center;
 }
 .banner-1 a{
 	display: flex;
 	text-decoration: none;
 }
 .banner-1 a:nth-child(2){
	 padding-right: 10px;
 }
 .banner-1 img{
 	width:0.29rem;
 	height: 0.32rem;
 	margin-left:0.14rem;
 	margin-right: 5px;
 }
 .banner-1 span{
 	color:#333333;
 	font-size: 0.21rem;
 }
 .banner-2{
 	display: flex;
 	justify-content: space-around;
 	align-items: center;
 }
 .banner-2 a{
       font-size: 0.15rem;
       color:#333333;
       padding-top:0.15rem;
 }
</style>
