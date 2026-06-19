<template>
  <div class="project-card mx-3 my-4">
    <div class="rounded image-container p-2" @click="openProject(url)">
      <img :src="image" :alt="name" class="project-logo" />
    </div>

    <div class="content-container text-white text-left px-3 pb-2">
      <p class="text-center accent">
        {{ name }} - {{ date }}
      </p>

      <p class="text-sm mb-2">
        {{ $i18n.locale === 'fr' ? descriptionFr : descriptionEn }}

        <span v-if="linkLabel">
          <a :href="linkUrl" target="_blank" rel="noopener noreferrer">
            {{ linkLabel }}
          </a>
        </span>
      </p>

      <div class="tech-container" v-if="tech && tech.length">
        <div v-for="t in tech" :key="t" class="tech-item">
          <img v-if="skillsMap[t]" :src="skillsMap[t].logo" :alt="t" class="tech-icon" :title="t" />
          <span v-else class="tech-fallback"> {{ t }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import skillsData from "@/assets/datas/skill.json";

  const skillsMap = Object.fromEntries(
    skillsData.map(s => [s.title, s])
  );

export default {
  name: "ProjectCard",

  props: {
    name: String,
    date: Number,
    descriptionFr: String,
    descriptionEn: String,
    linkLabel: String,
    linkUrl: String,
    tech: Array,
    image: String,
    url: String,
  },

  computed: {
    skillsMap() {
      return skillsMap;
    }
  },

  methods: {
    openProject(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
  .project-card { width: 100%;}

  .image-container {
    width: 100%;
    height: 250px;
    background: white;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .project-logo { width: 100%; height: 100%; object-fit: contain;}

  .image-container:hover { cursor: pointer;}

  .content-container { display: flex; flex-direction: column; flex-grow: 1;}

  .tech-container { display: flex; gap: 6px; margin-top: 10px; flex-wrap: wrap;}

  .tech-icon { width: 22px; height: 22px; object-fit: contain;}

  p {  margin-bottom: 5px;}

  a {  color: white;}
</style>