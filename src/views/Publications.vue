<template>
  <div class="publications">
    <h2>Publications</h2>
    <!-- <p class="m-4">A List of publications which I have authored.</p> -->

    <publication-card
      title="A Hybrid Deep Learning Model for El Niño Southern Oscillation Dynamics "
      link=""
      authors="Jakob Schlör et al."
      year="2023"
      journal="In preparation"
    />

    <publication-card
      title="A multi-modal representation of El Niño Southern Oscillation Diversity"
      link="https://arxiv.org/abs/2307.11552"
      authors="Jakob Schlör, Felix Strnad, Antonietta Capotondi, Bedartha Goswami"
      year="2023"
      journal="Preprint"
    />

    <publication-card
      title="Propagation pathways of Indo-Pacific rainfall extremes are modulated by Pacific sea surface temperatures"
      link="https://doi.org/10.1038/s41467-023-41400-9"
      authors="Felix M. Strnad, Jakob Schloer, Ruth Geen, Niklas Boers, Bedartha Goswami"
      year="2023"
      journal="Nature Communication"
    />

    <publication-card
      title="Teleconnection patterns of different El Nino types revealed by climate network curvature"
      link="https://doi.org/10.1029/2022GL098571"
      authors="Felix M. Strnad, Jakob Schlör, Christian Fröhlich, Bedartha Goswami"
      year="2022"
      journal="Geophys. Res. Lett."
    />

    <publication-card
      title="Reorganization energy and polaronic effects of pentacene on NaCl films"
      link="https://doi.org/10.1103/PhysRevB.102.115419"
      authors="Daniel Hernangómez-Pérez, Jakob Schlör, David A. Egger, Laerte L. Patera, Jascha Repp, and Ferdinand Evers"
      year="2020"
      journal="Phys. Rev. B"
    />

  </div>
</template>

<script>
import PublicationCard from '@/components/PublicationCard.vue'

export default {
  name: 'Publications',
  components: {
    "publication-card": PublicationCard,
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
