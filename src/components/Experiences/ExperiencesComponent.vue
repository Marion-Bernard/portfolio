<script>
import datas from '@/assets/datas/data.json'
import ExperiencesCard from './WorkingExperiencesCard.vue'
import StudiesCard from './StudiesCard.vue'

export default {
  name: 'ExperiencesComponent',
  data() {
    return {
      workingExperience: datas.workingExperience, // Chargement des données du JSON
      filteredExperiences: datas.workingExperience,
      activeButton: 'all',
      studies : datas.study
    }
  },
  components: {
    ExperiencesCard,
    StudiesCard
  },
  methods: {
    filterCards(type) {
      if (type === 'all') {
        this.filteredExperiences = this.workingExperience
      } else {
        this.filteredExperiences = this.workingExperience.filter((card) => card.type === type)
      }
      this.activeButton = type
    },
  },
}
</script>

<template>
  <div class="container text-center my-3">
    <h1 class="mb-2 accent-2">{{ $t('experience.label') }}</h1>
    <div class="selection-container mt-4">
      <button
        :class="{ active: activeButton === 'work' }"
        class="btn btn-small mx-3"
        @click="filterCards('work')"
      >
        {{ $t('main.work') }}
      </button>
      <button
        :class="{ active: activeButton === 'internship' }"
        class="btn btn-small  mx-3"
        @click="filterCards('internship')"
      >
        {{ $t('main.internship') }}
      </button>
      <button
        :class="{ active: activeButton === 'voluntering' }"
        class="btn btn-small  mx-3"
        @click="filterCards('voluntering')"
      >
        {{ $t('main.voluntering') }}
      </button>
      <button
        :class="{ active: activeButton === 'all' }"
        class="btn btn-small  mx-3"
        @click="filterCards('all')"
      >
        {{ $t('main.all') }}
      </button>
    </div>

    <div class="experience-list text-left row mt-4 g-2 d-flex align-items-stretch">
      <ExperiencesCard
        v-for="experience in filteredExperiences"
        :key="experience.id"
        :company="experience.company"
        :link="experience.link"
        :positionFr="experience.positionFr"
        :positionEn="experience.positionEn"
        :startDate="experience.startDate"
        :endDate="experience.endDate"
        :type="experience.type"
        :icon="experience.icon"
        :descriptionFr="experience.descriptionFr"
        :descriptionEn="experience.descriptionEn"
        :image="experience.image"
      />
    </div>
  </div>

  <div class="container study-container text-center mb-3">
    <h1 class="mb-2 accent-2">{{ $t('study.label') }}</h1>

    <div class="study-list text-left row mt-4 g-2 d-flex align-items-stretch">
      <StudiesCard
        v-for="study in studies"
        :key="study.id"
        :institution="study.institution"
        :programFr="study.programFr"
        :programEn="study.programEn"
        :date="study.date"
        :descriptionFr="study.descriptionFr"
        :descriptionEn="study.descriptionEn"
        :image="study.image"
      />
    </div>
  </div>
</template>

<style scoped>
.study-container {margin-top : 40px;}
.selection-container > button { color:white; background-color: var(--custom-bg-dark); border: none;}
.selection-container > button.active { color:var(--custom-accent-1)}

@media screen and (max-width: 796px) { .selection-container {  display: none; }}

</style>
