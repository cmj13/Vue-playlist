<template>
	<footer>
		<p>{{title1}}{{title}}</p>
	</footer>
</template>

<script>
	export default{
		name:"app-footer",
		props:{
			title:{
				type:String
			}
		},
		data(){
			return{
				title1:"Copyright Vue demo"
			}
		}
	}
</script>

<style scoped>
footer{
	background: #000;
	color: lightblue;
	padding: 8px;
	text-align: center; 	
}
</style>