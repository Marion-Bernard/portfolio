<template>
  <nav class="navbar navbar-expand-lg px-5">
    <div class="container-fluid">
      <RouterLink class="navbar-brand text-white" to="/">Marion BERNARD</RouterLink>
      <RouterLink class="link-white" to="/">{{ $t('presentation.label') }}</RouterLink>
      <RouterLink class="link-white" to="/Experience">{{ $t('experience.label') }}</RouterLink>
      <RouterLink class="link-white" to="/Projects" >{{ $t('projects.label') }}</RouterLink>
      <RouterLink class="link-white" to="/Skills">{{ $t('skill.label') }}</RouterLink>
      <RouterLink class="link-white" to="/Contact" >{{ $t('contact') }}</RouterLink>
      <div class="d-flex">
        <button class="btn" @click="changeLanguage('en')">
          <img src="/icons/english-flag.png" alt="English" width="30" />
        </button>
        <button class="btn ms-2" @click="changeLanguage('fr')">
          <img src="/icons/french-flag.png" alt="French" width="30" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComponent',
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language
    },
  },
}
</script>

<style scoped>
.router-link-active:not(.navbar-brand) {
  color: var(--custom-accent-1);
  font-weight: 700;
}
</style>
