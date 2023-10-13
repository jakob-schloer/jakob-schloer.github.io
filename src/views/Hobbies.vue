<template>
  <div class="hobbies">

    <h2> Science communication</h2>

    <hobby-card
      title="KI macht Schule"
      link="https://ki-macht-schule.de/"
      description='
        KI macht Schule is an organization dedicated to educating 
        students about AI concepts, tools, and ethics. 
        I voluntarily teach AI classes in schools around Tübingen. 
        Its rewarding to see students fascination when introduced to
        topics like stable diffusion and their engagement in discussions
        about its societal and intellectual property implications.
        '
      figure1="hobby/kims_tuebingen.jpeg"
    />

    <hobby-card
      title="Wie können wir mit neuronalen Netzen Klimavorhersagen verbessern?"
      link="https://te.ma/art/ndtoia/rasp-neuronale-netze-klimavorhersagen/"
      description='
        In my first science-comm article, I describe how we can improve
        the accuracy of climate projections using Neural Network parametrizations. 
        '
      figure1="hobby/tema.jpeg"
    />
    

    <h2>Photos</h2>
    <photo-card
      :figure1="img1"
      :figure2="img2"
      :figure3="img3"
    />
  </div>

</template>

<script>
import HobbyCard from '@/components/HobbyCard.vue'
import PhotoCard from '@/components/PhotoCard.vue'

import img1 from '@/assets/images/hobby/backcountry_skiing.jpeg'
import img2 from '@/assets/images/hobby/climbing.jpg'
import img3 from '@/assets/images/hobby/camping.jpg'

export default {
  name: 'Hobbies',
  components: {
    "hobby-card": HobbyCard,
    "photo-card": PhotoCard
  },
  data() {
    return {
      img1,
      img2,
      img3,
    }
  }
}

</script>

<style scoped lang="scss">

.container {
  max-width: 768px;
  margin: auto;
  overflow: auto;
  padding: 20px 10px;
}
.hobbies {
  text-align: left;
}

h2 {
  text-align: center;
  padding: 20px;
}

a {
  text-decoration: none;
  color: var(--text-navbar);
}

</style>
