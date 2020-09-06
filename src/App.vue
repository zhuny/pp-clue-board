<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">인원</router-link> |
      <router-link to="/result">표시</router-link> |
      <router-link to="/answer">답변</router-link>
    </div>
    <router-view class="router-view" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-view {
  max-width: 480px;
  margin: 0 auto;
}

table {
  width: 100%;
}

table thead th {
  background: #42b983;
}

table tbody th {
  background: #48f0b0;
}
</style>
