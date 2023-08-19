<template>
  <div class="talks">
      <h2>Talks</h2>

        <talk-card 
          institute="Dashmote B.V." 
          title="Machine Learning Engineer" 
          location="Amsterdam, The Netherlands"
          date="May 2021 - present"
          content="Designing and implementing various ML-pipeline 
                    components. This includes python-based 
                    algorithm design using scikit-learn, PyTorch and DVC; 
                    productization using Docker, Amazon Web Services and Jenkins;
                    and improving the dataset creation process 
                    using FastAPI, Vue.js and Terraform."
          id="1"
        />
        <talk-card 
          institute="KTH Royal Institute of Technology" 
          title="Thesis Supervisor on Reinforcement Learning" 
          location="Stockholm, Sweden"
          date="Nov 2020 - Apr 2021"
          content="Supervised the final-year thesis of Joel Kärn
                    on the topic of reinforcement learning and data-driven
                    control of an inverse pendulum in Python using PyTorch,
                    Open AI Gym."
          id="2"
        />

  </div>
</template>

<script>
import TalkCard from '@/components/TalkCard.vue'

export default {
  name: 'Talks',
  components: {
    "talk-card": TalkCard
  }
}
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
}

.talks {
  text-align: left;
}

.container {
  max-width: 768px;
  margin: auto;
  overflow: auto;
}
</style>
