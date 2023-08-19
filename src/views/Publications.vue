<template>
  <div class="publications">
    <h2>Publications</h2>
    <!-- <p class="m-4">A List of publications which I have authored.</p> -->

    <publication-card
      name="Data-Driven Set-Based Estimation using Matrix Zonotopes with Set Containment Guarantees"
      link="https://arxiv.org/abs/2101.10784"
      authors="Alexander Berndt, Amr Alanwar, Karl Henrik Johansson, Henrik Sandberg"
      abstract="We propose a method to perform set-based state estimation 
                of an unknown dynamical system using a data-driven set propagation function.
                Our method has proven set-containment guarantees given bounds on the 
                observed input signals."
      source_image="IMG_3747.jpg"
    />


    <h2>Talks</h2>
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
import PublicationCard from '@/components/PublicationCard.vue'

export default {
  name: 'Publications',
  components: {
    "publication-card": PublicationCard,
    "project-card": ProjectCard
  }
}
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  padding: 20px;
}

.publications {
  text-align: left;
}

.container {
  max-width: 768px;
  margin: auto;
  overflow: auto;
}
</style>
