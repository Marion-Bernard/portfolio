<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
    <div class="experience-card rounded mx-2">
      <a class="image-container rounded p-2" :href="link" target="_blank">
        <img :src="image" :alt="company" class="company-logo" />
      </a>
      <div class="content-container text-white pt-2 px-1">
        <p class="text-small">
          {{ startDate }} -
          <span v-if="endDate === 'today'">{{ $t('experience.today') }}</span>
          <span v-else>{{ endDate }}</span>
        </p>
        <p class="accent title-6 text-center">
          {{ $i18n.locale === 'fr' ? positionFr : positionEn }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkingExperiencesCard',
  props: {
    company: String,
    link: String,
    positionFr: String,
    positionEn: String,
    startDate: String,
    endDate: String,
    type: String,
    icon: String,
    descriptionFr: String,
    descriptionEn: String,
    image: String,
  }
}

</script>

<style scoped>
  .experience-card {display: grid; grid-template-rows: auto 1fr; height: 100%;}
  .company-logo { width: 100%; max-width: 200px; height: auto; object-fit: contain;}
  .image-container { width: 100%; overflow: hidden; background-color: #fff;}
  .content-container { display: flex; flex-direction: column; flex-grow: 1;}
</style>
