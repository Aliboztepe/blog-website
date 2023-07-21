<template>
  <div id="app">
    <nav>
      <router-link to="/">BLOG</router-link> |
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/links">LINKS</router-link>
      <router-link to="/projects">PROJECTS</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  
}
</style>
