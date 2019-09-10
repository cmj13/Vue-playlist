<!-- 模板 html结构 -->
<template>
  <div id="users">
      <ul>
          <li v-for="user in users"  v-on:click="user.show=!user.show">
            <h2>{{user.name}}</h2>
            <h3 v-show="user.show">{{user.position}}</h3>
            <button @click="deleter">删除</button>
          </li>
          
      </ul>
  </div>
</template>
<!-- 行为：行为逻辑 -->
<script>


export default {
  name: 'users',
  // props:["users"],
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  data(){
    return{
    
    }
  },
  methods:{
    deleter:function(){
      this.users.pop();
    }
  }
  }
</script>
<!-- 样式：解决样式 -->
<style>
.user{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid#222;
  margin: 10px;

}

</style>
