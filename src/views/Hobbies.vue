<template>
  <div class="projects">
    <div v-for="project in projects" :key="project.id" class="project-item">
      <div class="project-images">
        <img :src="project.figure1" alt="First figure for project" v-if="project.figure1"/>
        <img :src="project.figure2" alt="Second figure for project" v-if="project.figure2"/>
      </div>
      <div class="project-content">
        <h5>{{ project.title }}</h5>
         <h6> <a :href="project.link" target="_blank" rel="noopener noreferrer">{{project.link}}</a> </h6>
        <p v-html="project.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  data() {
    return {
      projects: [
        {
          id: 1,
          figure2: require('@/assets/images/projects/kims_tuebingen.jpeg'),
          title: 'KI macht Schule',
          link: "https://ki-macht-schule.de/",
          description: `
            KI macht Schule is an organization dedicated to educating students about AI concepts, tools, and ethics.
            I voluntarily teach classes on AI in schools around Tübingen. It's great to see students' fascination 
            when introduced to topics like stable diffusion and their engagement in discussions about implications
            on society and intellectual property.
          `
        },
        // ... add more projects as needed
      ]
    };
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
.projects {
  display: flex;
  flex-direction: column;
  text-align: left;
}

a {
  text-decoration: none;
  color: var(--text-navbar);
}

.project-item {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0; /* thin gray border */
  border-radius: 4px; /* rounded corners */
  padding: 15px; /* padding inside the box */
  transition: box-shadow 0.3s; /* transition for a hover effect */
}

.project-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* subtle shadow on hover */
}

.project-images {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
}

.project-content {
  flex: 2;
}

img {
  max-width: 100%;
  max-height: 150px; /* You can adjust this as per your design */
}
</style>
