<template>
  <div class="hobby-container">
    <div class="hobby-images">
      <img :src="require(`@/assets/images/${figure1}`)" alt="First figure for project" v-if="figure1"/>
    </div>
    <div class="hobby-content">
      <h5>{{ title }}</h5>
      <h6> <a :href="link" target="_blank" rel="noopener noreferrer">{{link}}</a> </h6>
      <p v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HobbyCard',
  props:{
    figure1: String,
    figure2: String,
    title: String,
    link: String,
    description: String,
    },
  }

</script>

<style scoped lang="scss">

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

.hobby-container {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0; /* thin gray border */
  border-radius: 4px; /* rounded corners */
  padding: 15px; /* padding inside the box */
  transition: box-shadow 0.3s; /* transition for a hover effect */
}

.hobby-container:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* subtle shadow on hover */
}

.hobby-images {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
}

.hobby-content {
  flex: 2;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
