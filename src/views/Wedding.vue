<template>
  <div id="app">
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

    <div class="map-container">
      <iframe  
        :src="mapUrl"
        width="600" 
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
import img1 from '@/assets/images/wedding/save_date.jpg'

export default {
  data() {
    return {
      title: 'Hochzeit Ronja & Jakob',
      date: '',
      image1: img1,
      schedule: [
        { time: '13:30', activity: 'Standesamtliche Trauung im Rathaus in Tübingen' },
        { time: 'Ab 15:00', activity: 'Feier im Freistil in Tübingen' },
        // Add more events as needed
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10571.218644826758!2d9.061115!3d48.5178092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799fab9f6b6598b%3A0xf4fa6086a181b992!2sFreistil%20Taproom!5e0!3m2!1sen!2sde!4v1694983104196!5m2!1sen!2sde"
    };
  },
};
</script>


<style scoped lang="scss">
.home {
  text-align: left;
}
.title-class {
  margin-bottom: 50px
}
.equal-size-image {
  max-width: 768px;
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
  margin-bottom: 100px;  /* Adjust the value as needed */
}

table th, table td {
  text-align: left;
}

table th:first-child, table td:first-child {
  width: 150px;  /* Set to desired width */
  text-align: center;
}

.map-container {
  margin-top: 20px;  /* Add space above the map */
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
