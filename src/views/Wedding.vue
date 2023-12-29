<template>
  <div id="app">
    <router-link class="back-home" to="/">Home</router-link>
    <h1 class="title-class"> {{ title }}</h1>
    <p class="date-class">{{ date }}</p>
    <img :src="image1" alt="Wedding Image 1" class="equal-size-image" />

    <div class="table-container">
      <table>
        <h3> Ablauf </h3>
        <h5>
        <thead>
          <tr>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event, index) in schedule" :key="index">
            <td>{{ event.time }}</td>
            <td>{{ event.activity }}</td>
          </tr>
        </tbody>
        </h5>
      </table>
    </div>

    <h3>Weitere Informationen:</h3> 
    <p class="other-container" v-html="others"></p>

    <h3>Location:</h3> 
    <div class="map-container">
      <iframe  
        :src="mapUrl"
        width=100% 
        height="450"
        frameborder="0"
        style="border:0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </div>


  </div>
</template>

<script>
import img1 from '@/assets/images/wedding/save_date.png'

export default {
  data() {
    return {
      title: 'Hochzeit Ronja & Jakob',
      date: '',
      image1: img1,
      schedule: [
        { time: '13:30', activity: 'Standesamtliche Trauung im Rathaus in Tübingen (Am Markt 1)' },
        { time: '14:00', activity: 'Sektempfang vor dem Rathaus'},
        { time: 'Ab 15:30', activity: 'Feier im Freistil in Tübingen' },
        // Add more events as needed
      ],
      others: `<b>Trauzeugen</b> <br>
                Bezüglich des Programms und anderen Überraschungen wendet euch bitte an: <br> 
                Moritz Frankerl <a href="mailto:moritz.frankerl@proton.me">(moritz.frankerl@proton.me) </a> <br> 
                Hannah Weissinger <a href="mailto:hannah.weissinger@gmail.com">(hannah.weissinger@gmail.com) </a> <br> <br> 
                
                <b>Geschenke</b> <br>
                Wir freuen uns über finanzielle Unterstützung oder Spenden an: 
                <a href="www.givinggreen.earth">www.givinggreen.earth</a> 
                oder <a href="www.climateemergencyfund.or">www.climateemergencyfund.or</a> <br> <br>

                <b>Anreise</b> <br>
                Sowohl, das Freistil als auch das Rathaus sind in laufnähe vom Bahnhof. <br>
                Falls ihr mit dem Auto anreist, könnt ihr im <a href="https://www.google.com/maps?ll=48.518055,9.061029&z=18&t=m&hl=en&gl=DE&mapclient=embed&cid=4585157566754435213">Neckar-Parkhaus</a>
                direkt neben dem Freistil parken und von dort aus zu Fuß zum Standesamt kommen. <br> <br>

                <b>Dresscode</b> <br>
                Kommt, wie ihr seid – nur ein bisschen schicker. 
                `,
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10571.218644826758!2d9.061115!3d48.5178092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799fab9f6b6598b%3A0xf4fa6086a181b992!2sFreistil%20Taproom!5e0!3m2!1sen!2sde!4v1694983104196!5m2!1sen!2sde"
    };
  },
};

/** 
Wer es nach der durchtanzten Nacht nicht weit haben möchte, 
kann im <a href="https://all.accor.com/hotel/9841/index.de.shtml">Ibis Hotel</a> 
um die Ecke oder in der <a href="https://www.jugendherberge.de/jugendherbergen/tuebingen/">JuHe</a> 
übernachten. <br> <br>
**/
</script>


<style scoped lang="scss">
.home {
  text-align: left;
}
.title-class {
  margin-top: 50px;
  margin-bottom: 50px
}
.equal-size-image {
  max-width: 768px;
  width: 100%;
  margin: auto;
  overflow: auto;
  padding: 20px 10px;
}

h1 {
  text-align: center
}

/* Center the table */
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;  /* Adjust the value as needed */
  margin-bottom: 50px;  /* Adjust the value as needed */
}

table th, table td {
  text-align: left;
}

table th:first-child, table td:first-child {
  width: 150px;  /* Set to desired width */
  text-align: center;
}

.other-container {
  width: 100%;
  height: auto;
  margin-top: 20px;  /* Add space above the map */
  margin-bottom: 50px;  /* Adjust the value as needed */
}

.map-container {
  width: 100%;
  height: auto;
  margin-top: 20px;  /* Add space above the map */
  margin-bottom: 50px;  /* Adjust the value as needed */
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
