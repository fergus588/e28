<template>
  <div id="app">
    <nav class="side-menu">
      <ul v-on:click='titleCheck'>
        <li>
            <router-link :to='back'>Back</router-link>
        </li>
        <li>
            <router-link to='/'>Home</router-link>
        </li>
        <li>
            <router-link to='/alfa'>Alfa Romeo</router-link>
        </li>
        <li>
            <router-link to='/ferrari'>Ferrari</router-link>
        </li>
      </ul>
    </nav>
    <div class="main-content">
      <h1>{{ title }}</h1>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'app',
  components: {},
  data: function(){
    return{
      "title": "Home",
      "page": "home",
      "back": ""
    }
  },
  mounted: function(){
    this.titleCheck()
  },
  methods:{
    titleCheck: function (){
    localStorage.setItem('backURL', this.page);
    this.back = localStorage.getItem('backURL');
    this.page = window.location.pathname;

    if (this.page == "/" ){
      this.title = "Home";
    }
    axios.get('https://my-json-server.typicode.com/fergus588/e28-p3-api/titles').then(response => {
      window.console.log(response.data[0].id);
      //title = re
      if(response.data[0].id == this.page){
        this.title = response.data[0].name;
      }
      else if(response.data[1].id == this.page){
        this.title = response.data[1].name
      }
    
    });
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.side-menu{
  width:20%;
  position: absolute;
  left: 0;
  background:#dedede;
}
.main-content{
  width: 73%;
  margin-left: 22%;
  right:0;
  padding: 0 20px;
  font-size: 20px;
}
</style>
