<template>
	<div class="header">
		<div class="header-1">
			<a href="" class="vip">VIP会员</a>
			<a href="">网球会员</a>
			<a href=""><img src="../assets/img/1.jpg" alt=""></a>
		</div>
		<div class="header-2">
			<!-- <a href="">精选</a>
			<a href="">vip俱乐部</a>
			<a href="">电影</a>
			<a href="">电视剧</a>
			<a href="">综艺</a>
			<a href="">动漫</a> -->
			<router-link
			  to="/home"
			  exact-active-class="active"
			>
			  <a href="javascript:;" 
			  v-for="(item,index) of header"
			  :key="item._id"
			  :data="item"
			  :index="index"
			  >{{item.title}}</a>
			</router-link>
			
			<router-link
			  to="/move"
			  exact-active-class="active"
			>
			  <a href="javascript:;" 
			  v-for="(item,index) of header"
			  :key="item._id"
			  :data="item"
			  :index="index"
			  >{{item.des}}</a>
			</router-link>
			
			<router-link
			  to="/numn"
			  exact-active-class="active"
			>
			  <a href="javascript:;" 
			  v-for="(item,index) of header"
			  :key="item._id"
			  :data="item"
			  :index="index"
			  >{{item.op}}</a>
			</router-link>
			
			<router-link
			  to="/app"
			 exact-active-class="active"
			>
			  <a href="javascript:;" 
			  v-for="(item,index) of header"
			  :key="item._id"
			  :data="item"
			  :index="index"
			  >{{item.jk}}</a>
			</router-link>
			
			<router-link
			  to="/opo"
			  exact-active-class="active"
			>
			  <a href="javascript:;" 
			  v-for="(item,index) of header"
			  :key="item._id"
			  :data="item"
			  :index="index"
			  >{{item.kl}}</a>
			</router-link>
			
			<router-link
			  to="/paa"
			  exact-active-class="active"
			>
			  <a href="javascript:;" 
			  v-for="(item,index) of header"
			  :key="item._id"
			  :data="item"
			  :index="index"
			  >{{item.gh}}</a>
			</router-link>
		</div>
	</div>
</template>

<script>
	import axios from '../plugins/axios.js';
	export default {
	  name:'Header',
	  props:{},
	  data(){
	    return {
	      header:[]
	    }
	  },
	  components:{},
	  mounted(){
		  axios({
		    url:'/api/goods/hom',
		    headers:{
		      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imx4dyIsIl9pZCI6IjVlNjYxZGQxOTk5NGM2MzI1Y2MzZjNjNCIsImlhdCI6MTU4NDg4NzA4MywiZXhwIjoxNTg0OTczNDgzfQ.3AwujSNU8s2QHBq4YVlxkMXJqxPEXWZzmfqXIkImdXg'
		    }
		  }).then(
		     res=>this.header = res.data.data
			// res=>console.log(res.data)
		  )
	  },
	  updated(){},
	  methods:{}
	}
</script>

<style scoped>
  .header{
  	width:100%; 
  	height:0.85rem;
  	background: #161618;
	position: fixed;
	left: 0;
	top: 0;
  }
  .header-1{
  	width:100%; 
  	height:0.3rem;
  /*	background:yellow;*/
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
  }
  .header-1 a{
  	font-size: 0.18rem;
  	text-decoration: none;
  	text-align: center;
  	color: #999999;
  	
  }
  .header-1 img{
  	width: 0.22rem;
  	height: 0.22rem;
  	padding-right: 30px;
  	padding-top:5px;
  }
  .vip{
  	padding-left: 90px;
  }
  .header-2{
  	width:100%; 
  	height:0.45rem;
  	/*background:green;*/
  	display: flex;
  	justify-content: space-around;
  	align-items: center;
  }
  .header-2 a{
      font-size: 0.17rem;
  	text-decoration: none;
  	text-align: center;
  	color: #999999;
  }
  .active{
	  background: orangered;
  }
</style>