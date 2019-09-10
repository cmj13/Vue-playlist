var vm = new Vue({
	el:"#app",
	data:{
		seen:true,
		url:"http://www.baidu.com",
	},
	methods:{
		click1:function(){
			console.log("click1……");
		},
		click2:function(){
			console.log("click2……");
		}
	}
})