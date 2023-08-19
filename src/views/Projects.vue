<template>
  <div class="Projects">

    <h2>Projects</h2>
    <!-- <p class="m-4">A list of talks I have presented.</p>  -->

    <project-card
      name="ISS Tracker"
      link="https://iss-tracker.live"
      content="Webapp which shows the current location of the International Space Station
      and some other statistics."
      source_image_1="iss_space.jpg"
      source_image_2="iss_world.jpg"
    />


  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    "project-card": ProjectCard
  }
}
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  padding: 20px;
}

.projects {
  text-align: left;
}

.container {
  max-width: 768px;
  margin: auto;
  overflow: auto;
}
</style>
