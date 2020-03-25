<template>
	<div class="pop">
		<div class="footer">
			<img src="../assets/img/10.jpg" alt="">
			<img src="../assets/img/11.jpg" alt="">
			<img src="../assets/img/12.jpg" alt="">
		</div>
		<div class="footer-1">
			<div class="footer-1-1">
				<h6>无双</h6>
				<h6>李茶的姑妈</h6>
				<h6>黄飞鸿之怒...</h6>
			</div>
			<div class="footer-1-2">
				<p>影帝联手组假钞</p>
				<p>开心麻花爆笑力作</p>
				<p>赵文卓在演一代</p>
			</div>
		</div>
		<div class="op">
			<div class="op-1">
				<p>查看完整榜单</p>
			</div>
		</div>
	</div>
</template>
<script>
	
	export default {
		name:'swiper',
		props:{},
		data(){
			return {
				
			}
		},
		components:{},
		mounted(){
			
			
		},
		updated(){},
		methods:{}
	}
</script>

<style scoped>
  .footer{
  	width: 100%;
  	height: 3.5rem;
  	/*background:blue;*/
  	display: flex;
  }
  .footer img{
      width: 33.33%;
      height: 3.5rem;
      margin:0  1px;
  }
  .footer-1{
  	width: 100%;
  	height: 0.45rem;
  	background: #ffffff;
  }
  .footer-1-1{
  	width: 100%;
  	height: 0.24rem;
  	/*background: red;*/
  	display:flex;
  	justify-content: space-between;
  	align-items:center;
  
  }
  .footer-1-1 h6{
           font-size: 0.15rem;
           color:#333333;
           padding-left: 5px;
           padding-right: 5px;
           
  }
  .footer-1-2{
  	width: 100%;
  	height: 0.21rem;
  	/*background: blue;*/
  	 display:flex;
  	    justify-content: space-between;
  	    align-items:center;
  
  }
  .footer-1-2 p{
      font-size: 0.15rem;
      color:#a9a9a9; 
      width: 0.85rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 5px;
      padding-right: 5px;
      margin-top: 5px;
  }
  
  .footer-1-2 p:nth-child(2){
	  margin-left: -30px;
  }
  .footer-1-2 p:nth-child(3){
  	  margin-right: 20px;
  }
  .op{
  	width: 100%;
  	height: 0.72rem;
  	background: #ffffff;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  }
  .op-1{
  	height: 0.4rem;
  	width: 3.51rem;
  	background: #f9f9f9;
  	border-radius: 5px;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  }
  .op-1 p{
  	font-size: 0.12rem;
  	color:#666666;
  }
</style>

