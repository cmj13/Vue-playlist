//我们的数据对象
var data={a:1}

//该对象被加入到一个Vue实例中
var vm =new Vue({
	data:data
})
// 获得这个实例的属性
// 返回源数据中对应的字段
vm.a==data.a

vm.a=2
data.a

var obj={
	foo:"bar"
}

Object.freeze(obj)

new Vue({
	el:"#app",
	data:obj
})

vm.$data === data;
vm.$el === document.getElementById("example")
vm.$watch("a",function(newValue,oldValue){

})