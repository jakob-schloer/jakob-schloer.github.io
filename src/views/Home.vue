<template>
  <div class="home">
    <p>
      I am a Scientist for Data-Driven Modelling at the
      <a href="https://www.ecmwf.int/">European Centre for Medium-Range Weather Forecasts (ECMWF)</a>
      where I work on machine learning for weather and climate forecasting.
      My particular interests are in longer time scales from sub-seasonal to decadal predictions of the climate system.
    </p>
    <p>
      Before joining ECMWF, I was a PhD student in the
      <a href="https://machineclimate.de/">Machine Learning for Climate Science Group</a>
      at the University of Tübingen, where I worked on predicting the El Niño Southern Oscillation,
      its diversity and its remote impacts.
    </p>
    <h4>Education</h4>
    <p>
      I obtained my Bachelor in Physics at the University of Konstanz which 
      was followed by a Masters in Physics at the 
      <a href="https://www.uni-regensburg.de/physik/fakultaet/startseite/index.html">University of Regensburg.</a>
      During my studies I spent five months at the 
      <a hfref="https://www.weizmann.ac.il/pages/">Weizmann Institute of Science</a> 
      in Israel and half a year at 
      <a hfref="https://www.bosch-ai.com/">Bosch Research in Renningen.</a> 
      Since September 2020, I’m pursuing my PhD 
      at the University of Tübingen where I’m part of the 
      International Max-Planck Research School for Intelligent Systems. 
      <!-- TODO: Add research stay at NOAA-->
    </p>

    <h4>Interests</h4>
    <p> I am a generally curious person and interested in a variety of topics.
        In my work I am particularly interested in
    </p>
    <ul>
      <li>Data-driven weather and climate models,</li>
      <li>Sub-seasonal and seasonal forecasting</li>
      <li>Probabilistic machine learning models</li>
      <li>Predictability</li>
    </ul>
    <p>Other non-work related interests include:</p>
    <ul>
      <li>Camping, outdoors and wildlife,</li>
      <li>Mountaineering, Climbing, Volleyball, and Cycling.</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home {
  text-align: left;
}
h1 {
  text-align: center
}
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
a.hover {
  color: var(--text-highlight);
}
</style>
