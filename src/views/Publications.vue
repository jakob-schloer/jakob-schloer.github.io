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

    <publication-card
      name="A Feedback Scheme to Reorder a Multi-Agent Execution 
              Schedule by Persistently Optimizing a Switchable 
              Action Dependency Graph"
      link="https://arxiv.org/abs/2010.05254"
      authors="Alexander Berndt, Niels Van Duijkeren, Luigi 
              Palmieri, Tamas Keviczky"
      abstract="We consider multiple Automated Guided Vehicles 
                (AGVs) navigating a common workspace to fulfill 
                various intralogistics tasks. We propose a novel, 
                online persistent optimization scheme to reduce route 
                completion times when AGVs are subject to delays.
                "
      conference="ICAPS 2020 Nancy, France"
      source_image="IMG_3747.jpg"
    />

    <publication-card
      name="Investigating Different Vehicle Velocity Estimators and an Adaptive Kalman Filter for Anti-Lock Braking Systems for Off-Road Vehicles"
      link="/publications/Berndt_Penny_Els_ISTVS2017.pdf"
      authors="Alexander Berndt, Wietsche Penny, Pieter Els"
      abstract="An adaptive Kalman filter is proposed to increase the accuracy of the vehicle’s
velocity estimation, especially on rough terrains."
      conference="ISTVS 2017 Budapest, Hungary"
      source_image="IMG_3747.jpg"
    />


  </div>
</template>

<script>
import PublicationCard from '@/components/PublicationCard.vue'

export default {
  name: 'Publications',
  components: {
    "publication-card": PublicationCard
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
