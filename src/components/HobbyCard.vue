<template>
<div class="hobby container">
    <div class="card mb-3">
        <div class="row g-0">

            <div class="col-md-4" v-if="srcimg1"></div>
                <img src="@/assets/images/photos/IMG_3878.jpg" class="img-fluid rounded p-1" alt="name">
            </div>
            <div class="col-md-4" v-if="srcimg1">
                <img src="@/assets/images/photos/IMG_3884.jpg" class="img-fluid rounded p-1" alt="name">
            </div>
            <div class="col-md-4" v-if="srcimg1">
                <img src="@/assets/images/photos/IMG_3888.jpg" class="img-fluid rounded p-1" alt="name">
            </div>

        </div>
    </div> 
</div>
</template>

<script>

export default {
  name: 'HobbyCard',
  props: {
    name: String,
    content: String,
    srcimg1: String,
    srcimg2: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .card {
//     max-width: 800px;
// }
</style>
