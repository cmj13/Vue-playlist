<template>
	<header v-on:click="changeTitle">
		<h1>{{title1}}{{title}}</h1>	
	</header>
</template>

<script>
	export default{
		name:"app-header",
		props:{
			title:{
				type:String
			}
		},
		data(){
			return{
				title1:"Vue.js Demo"
			}
		},
		methods:{
			changeTitle:function(){
				//组件名，传递的值
				this.$emit("titleChanged","子向父传递的值")
			}
		}
	}
</script>

<style scoped>
    header{
	background:lightgreen; 
	padding:10px;
    }
	h1{
		color: #222;
        text-align: center;
	}
</style>