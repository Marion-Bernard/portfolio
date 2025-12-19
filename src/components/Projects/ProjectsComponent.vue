<script setup>
import ProjectsCard from './ProjectsCard.vue'
import projectsData from '@/assets/datas/project.json'
</script>


<template>
  <div class="container text-center text-white my-3">
    <h1 class="accent-2">{{ $t('projects.label') }}</h1>
    <div class="skill-list mt-4 g-4 d-flex flex-row flex-wrap align-items-stretch">
      <ProjectsCard
        v-for="project in projectsData"
        :key="project.name"
        :date="project.date"
        :name="project.name"
        :description="project.description"
        :tech="project.tech"
        :image="project.image"
        :url="project.url"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsComponent',
  components: {
    ProjectsCard,
  },
  data() {
    return {
      projects: projectsData,
    }
  },
}
</script>

<style scoped></style>