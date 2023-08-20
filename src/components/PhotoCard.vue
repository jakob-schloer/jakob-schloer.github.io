<template>
  <div class="photo container">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4" v-if="figure1">
          <img :src="figure1" class="img-fluid rounded p-1" alt="Fig1">
        </div>
        <div class="col-md-4" v-if="figure2">
          <img :src="figure2" class="img-fluid rounded p-1" alt="Fig2">
        </div>
        <div class="col-md-4" v-if="figure3">
          <img :src="figure3" class="img-fluid rounded p-1" alt="Fig3">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PhotoCard',
  props: {
    figure1: String,
    figure2: String,
    figure3: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .card {
//     max-width: 800px;
// }
</style>
