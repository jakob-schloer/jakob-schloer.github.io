<template>
  <div class="router">
    <div id="nav">
      <router-link to="/">Home</router-link> -
      <router-link to="/cv">CV</router-link> - 
      <!-- <router-link to="/about">About</router-link> - -->
      <router-link to="/publications">Publications</router-link> - 
      <!-- <router-link to="/projects">Projects</router-link> -  -->
      <router-link to="/talks">Talks</router-link> - 
      <router-link to="/hobbies">Other</router-link> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'Router'
}
</script>

<style scoped lang="scss">
#nav {
  top: -105px;
  position: relative;
  a {
    font-weight: bold;
    color: var(--text-navbar); 
    &.router-link-exact-active {
      color: var(--text-navbar-highlight); 
    }
    text-decoration: none;
  }
}
</style>