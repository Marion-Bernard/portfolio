<script>
import datas from '@/assets/datas/data.json'
import StudiesCard from './StudiesCard.vue'

export default {
  name: 'StudiesComponent',
  data() {
    return {
      studies: datas.study, // Chargement des données du JSON
    }
  },
  components: {
    StudiesCard,
  },
}
</script>

<template>
  <div class="container text-center text-white my-3">
    <h1 class="mb-2">{{ $t('study.label') }}</h1>

    <div class="study-list text-left row mt-4 g-4 d-flex align-items-stretch">
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

<style scoped></style>
