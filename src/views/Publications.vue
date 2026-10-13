<template>
  <div class="publications">
    <h2>Publications</h2>
    <!-- <p class="m-4">A List of publications which I have authored.</p> -->
    <p class="scholar-link">
      Full list on <a href="https://scholar.google.com/citations?user=CfaAuUIAAAAJ&hl=en">Google Scholar</a>
    </p>

    <publication-card
      title="Representing the Surface Ocean in ECMWF's data-driven forecasting system AIFS"
      link="https://arxiv.org/abs/2604.25559"
      authors="Sara Hahner, Lorenzo Zampieri, Jean-Raymond Bidlot, …, Jakob Schloer, …, Hao Zuo"
      year="2026"
      journal="arXiv preprint"
    />

    <publication-card
      title="Enhancing AI and Dynamical Subseasonal Forecasts with Probabilistic Bias Correction"
      link="https://arxiv.org/abs/2604.16238"
      authors="Hannah Guan, Soukayna Mouatadid, Paulo Orenstein, …, Jakob Schloer, …, Lester Mackey"
      year="2026"
      journal="arXiv preprint"
    />

    <publication-card
      title="Using deep learning to identify initial error sensitivity for interpretable ENSO forecasts"
      link="https://doi.org/10.1175/AIES-D-24-0045.1"
      authors="Kinya Toride, Matthew Newman, Andrew Hoell, Antonietta Capotondi, Jakob Schlör, Dillon J. Amaya"
      year="2025"
      journal="Artif. Intell. Earth Syst."
    />

    <publication-card
      title="A Hybrid Deep-Learning Model for El Niño Southern Oscillation in the Low-Data Regime"
      link="https://arxiv.org/abs/2412.03743"
      authors="Jakob Schloer, Matthew Newman, Jannik Thuemmel, Antonietta Capotondi, Bedartha Goswami"
      year="2024"
      journal="arXiv preprint"
    />

    <publication-card
      title="RUFCO: A deep learning framework to postprocess subseasonal precipitation accumulation forecasts"
      link="https://doi.org/10.1175/AIES-D-24-0020.1"
      authors="Rochelle P. Worsnop, Michael Scheuerer, Thomas M. Hamill, Timothy A. Smith, Jakob Schlör"
      year="2024"
      journal="Artif. Intell. Earth Syst."
    />

    <publication-card
      title="Contribution of El Niño Southern Oscillation (ENSO) diversity to low-frequency changes in ENSO variance"
      link="https://doi.org/10.1029/2024GL109179"
      authors="Jakob Schlör, Felix Strnad, Antonietta Capotondi, Bedartha Goswami"
      year="2024"
      journal="Geophys. Res. Lett."
    />

    <publication-card
      title="Propagation pathways of Indo-Pacific rainfall extremes are modulated by Pacific sea surface temperatures"
      link="https://doi.org/10.1038/s41467-023-41400-9"
      authors="Felix M. Strnad, Jakob Schloer, Ruth Geen, Niklas Boers, Bedartha Goswami"
      year="2023"
      journal="Nat. Commun."
    />

    <publication-card
      title="Teleconnection patterns of different El Niño types revealed by climate network curvature"
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

.scholar-link {
  text-align: center;
  margin-top: -10px;
}

.scholar-link a {
  text-decoration: none;
  color: var(--text-navbar);
}

.container {
  max-width: 768px;
  margin: auto;
  overflow: auto;
}
</style>
