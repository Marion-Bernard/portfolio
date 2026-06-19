<script setup>
import ProjectsCard from './ProjectsCard.vue'
import projectsData from '@/assets/datas/project.json'
</script>


<template>
  <div class="container text-center text-white my-3">
    <h1 class="accent-2">{{ $t('projects.label') }}</h1>
    <div class="projects-grid">
      <ProjectsCard
        v-for="project in projectsData"
        :key="project.name"
        :date="project.date"
        :name="project.name"
        :descriptionFr="project.descriptionFr"
        :descriptionEn="project.descriptionEn"
        :linkLabel="project.linkLabel"
        :linkUrl="project.linkUrl"
        :tech="project.tech"
        :image="project.image"
        :url="project.url"
      />
    </div>
  </div>
</template>

<style scoped>
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
  }
</style>