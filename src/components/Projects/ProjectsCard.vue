<template>
  <div class="project-card mx-3 my-4 ">
    <div class="rounded image-container p-2" @click="openProject(url)">
      <img :src="image" :alt="name" class="project-logo" />
    </div>
    <div class="content-container text-white text-left px-3 pb-2">
      <p class="text-center accent">{{ name }} -  {{date }} </p>
      <p class="text-sm mb-2">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    name: String,
    date: Number,
    description: String,
    tech: Array,
    image: String,
    url: String,
  },
  methods: {
    openProject(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
  .project-card { display: grid;  grid-template-rows: auto 1fr;  /*height: 100%;*/  min-width: 115px;}
  .project-logo {  width: 100%;  max-height: 250px;  width: auto;  object-fit: contain;}
  .image-container {  width: 100%;  overflow: hidden;}
  .image-container:hover {cursor : pointer}
  .content-container {  display: flex;  flex-direction: column;  flex-grow: 1;}
  .text-left {  text-align: left;}
  p {  margin-bottom: 5px;}
</style>
