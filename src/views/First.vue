<template>
	<div class="main">
		<div class="left">
			<Left />
		</div>
		<div class="right">
			<div class="top">
				<img src="img/title.png" alt="图片">
			</div>
			<div class="buttom">
				
			</div>
		</div>
	</div>
</template>
<script  type="text/javascript">
	import Left from '../components/Left.vue'
	export default{
		components:{
			Left
		}
	}
</script>

<style type="text/css" media="screen">
	*{
		padding: 0;
		margin: 0;
	}
	.main{
		width: 1200px;
		margin: 20px auto;
	}
	.left{
		width: 100px;
		float: left;
		margin-right: 10px;
	}
	.right{
		width: 1000px;
		float: left;
		margin-left: 10px; 
	}
	.top img{
		height: 200px;
		width: 1000px;
	}
	.left,.right{
		background-color: white;
		
	}
</style>