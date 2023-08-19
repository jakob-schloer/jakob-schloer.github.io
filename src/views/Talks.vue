<template>
  <div class="talks">
    <p>
      I am a Ph.D. student in the 
      <a href="https://machineclimate.de/">Machince Learning for Climate Science Group</a>
      at the 
      <a href="https://uni-tuebingen.de/en/research/core-research/cluster-of-excellence-machine-learning/home/">University of Tübingen</a>
      where I work on understanding and improving El Nino Southern Oscillations forecasts.
    </p>

  </div>
</template>

<script>

export default {
  name: 'Talks'
}
</script>

<style scoped lang="scss">
.home {
  text-align: left;
}
h1 {
  text-align: center
}
.container {
  max-width: 768px;
  margin: auto;
  overflow: auto;
  padding: 20px 10px;
}
a {
  text-decoration: none;
  color: var(--text-navbar);
}
a.hover {
  color: var(--text-highlight);
}
</style>
