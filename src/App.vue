<template>
  <div id="app">
    <router-link to="/">
      <nav class="navbar">
        Home
      </nav>
    </router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  box-sizing: border-box;
}

nav {
  padding: 10px;
  width: 10%;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  background: #42b983;
  border-radius: 30px;
  cursor: pointer;
}

.navbar {
  transition: all 0.5s;
}

.navbar:hover {
  color: white;
  width: 15%;
}

nav a {
  font-weight: 600;
}

nav a.router-link-exact-active {
  color: black;
}
</style>
