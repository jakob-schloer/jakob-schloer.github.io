<template>
  <div class="talks">
      <h2>Poster and Talks</h2>

        <talk-card 
          institute="EGU General Assembly 2023" 
          title="Poster: A multi-modal representation of El-Niño Southern Oscillation Diversity" 
          location="Vienna, Austria"
          date="Apr. 2023"
          link="https://doi.org/10.5194/egusphere-egu23-2136"
          content=""
          id="7"
        />
        <talk-card 
          institute="CESM Working Group Meeting" 
          title="Characterizing Nonlinearities in CESM2 ENSO Dynamics using Machine Learning Technique " 
          location="NCAR, Boulder, USA"
          date="Feb. 2023"
          link="https://www.cesm.ucar.edu/events/working-groups/2023/climate"
          content='A recording of the talk is available 
            <a href="https://www.youtube.com/live/6swOAzV4W18?feature=share&t=2687">here</a>.'
          id="6"
        />
        <talk-card 
          institute="AMS Annual Meeting 2023" 
          title="Poster: Teleconnection Patterns of Different El Niño Types Revealed By Climate Network Curvature" 
          location="Denver, CO, USA"
          date="Jan. 2023"
          link="https://ams.confex.com/ams/103ANNUAL/meetingapp.cgi/Paper/417578"
          content=""
          id="5"
        />
        <talk-card 
          institute="3rd Summer School on ENSO" 
          title="A multi-modal representation of El Nino Southern Oscillation Diversity" 
          location="ICTP, Trieste, Italy"
          date="Jul. 2022"
          link="https://indico.ictp.it/event/9817/other-view?view=ictptimetable"
          content=""
          id="4"
        />
        <talk-card 
          institute="EGU General Assembly 2022" 
          title="Identifying patterns of teleconnections, a curvature-based network analysis" 
          location="Vienna, Austria"
          date="May 2022"
          link="https://doi.org/10.5194/egusphere-egu22-7256"
          content=""
          id="3"
        />
        <talk-card 
          institute="IMPRS-IS annual Boot Camp" 
          title="Poster: A data-driven generative model for sea surface temperature fields in the tropical Pacific" 
          location="Tübingen, Germany"
          date="Jun. 2021"
          link="https://uni-tuebingen.de/en/research/core-research/cluster-of-excellence-machine-learning/news/newsfullview-news/article/awards-for-cluster-phd-students-at-the-imprs-is-boot-camp-1/"
          content=""
          id="2"
        />
        <talk-card 
          title="A generative model for SST anomalies in the tropical Pacific" 
          institute="EGU General Assembly 2021" 
          location="Vienna, Austria"
          date="Apr. 2021"
          link="https://doi.org/10.5194/egusphere-egu21-12362"
          content=""
          id="1"
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
