<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
    <div class="study-card rounded mx-2">
      <div class="image-container rounded p-2">
        <img :src="image" :alt="institution" class="school-logo" />
      </div>
      <div class="content-container text-white text-center px-1 pt-2">
        <p class="text-small">{{ date }}</p>
        <p class="accent title-6 mb-0">
          {{ institution }}
        </p>
        <p>
          {{ $i18n.locale === 'fr' ? programFr : programEn }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudiesCard',
  props: {
    institution: String,
    programFr: String,
    programEn: String,
    date: String,
    image: String,
  },
}
</script>

<style scoped>
  .study-card { display: grid; grid-template-rows: auto 1fr; height: 100%;}
  .school-logo { width: 100%; max-width: 75px; height: auto; object-fit: contain;}
  .image-container { width: 100%; overflow: hidden; background-color: #fff;}
  .content-container { display: flex; flex-direction: column; flex-grow: 1;}
</style>
