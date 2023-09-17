<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ date }}</p>
    <img :src="image1" alt="Wedding Image 1" />
    <img :src="image2" alt="Wedding Image 2" />
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in schedule" :key="index">
          <td>{{ event.time }}</td>
          <td>{{ event.activity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import img1 from '@/assets/images/hobby/freistil.jpeg'

export default {
  data() {
    return {
      title: 'Hochzeit Ronja & Jakob',
      date: '18. Mai 2024',
      image1: img1,
      image2: 'path/to/image2.jpg',
      schedule: [
        { time: '13:30', activity: 'Standesamtliche Trauung' },
        { time: '14:00', activity: 'Sektempfang' },
        { time: '16:30', activity: 'Kaffe und Kuchen' },
        { time: '19:00', activity: 'Abendessen' },
        { time: '20:30', activity: 'Dancen' },
        // Add more events as needed
      ],
    };
  },
};
</script>


<style scoped lang="scss">
.home {
  text-align: left;
}

/* Center the table */
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
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
