<!-- 模板 html结构 -->
<template>
  <div id="app">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title "></app-footer>


    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>
<!-- 行为：行为逻辑 -->
<script>
//这里import组件路径表示在该页面调用组件
// import HelloWorld from './components/HelloWorld.vue'

import Users from "./components/Users"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: 'app',
  data(){
    return{
        title:"这是我的传递的一个值" ,
        users:[
        {name:"Harry",position:"web开发",show:false},
        {name:"Harry",position:"web开发",show:false},
        {name:"Harry",position:"web开发",show:false},
        {name:"Harry",position:"web开发",show:false},
        {name:"Harry",position:"web开发",show:false},
        {name:"Harry",position:"web开发",show:false},
        {name:"Harry",position:"web开发",show:false},
      ]
    }
  },
  methods:{
    updateTitle:function(title){
        this.title= title;
    }
  },
  //调用组件对象
  components: {
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  }
  }
</script>
<!-- 样式：解决样式 -->
<style>
h1{
  color: blueviolet;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
