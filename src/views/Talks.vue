<template>
  <div class="talks">
    <h1>Talks</h1>
    Add talks here.
    <p>
    </p>

  </div>
</template>

<script>

export default {
  name: 'Talks'
}
</script>

<style scoped lang="scss">

.talks {
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
