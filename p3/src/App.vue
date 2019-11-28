<template>
  <div id="app">
    <nav class="side-menu">
      <ul>
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
    <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {},
  data: function(){
    return{
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
