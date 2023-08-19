<template>
  <div class="home">
    <p>
      I am a Ph.D. student in the 
      <a href="https://machineclimate.de/">Machince Learning for Climate Science Group</a>
      at the 
      <a href="https://uni-tuebingen.de/en/research/core-research/cluster-of-excellence-machine-learning/home/">University of Tübingen</a>
      where I work on understanding and improving El Nino Southern Oscillations forecasts.

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
      I obtained my Masters degree in theoretical Physics at the 
    </p>
    <p>
      Before that I obtained my Bachelor degree in Physics at the University of Konstanz.

    </p>
    <h4>Interests</h4>
    <p> I am a generally curious person and interested in a wide variety of topics.
        In my PhD I am particularly interested in
    </p>
    <ul>
      <li>Subseasonal-to-seasonal weather prediction</li>
      <li>El Nino Southern Oscillation diversity</li>
      <li>Neural Networks for spatio-temporal data</li>
      <li>Stochastic methods (SDE, Hidden Markov models, Variational Autoencoders)</li>
      <li>Bayesian inverse models and parameter inference</li>
      <li>Climate networks</li>
    </ul>
    <p>Other non-work related interests include</p>
    <ul>
      <li>Weather forecasts,</li>
      <li>Climate Change impacts,</li>
      <li>Outdoors and wildlife.</li>
      <li>Volleyball, Cycling and Climbing.</li>
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
