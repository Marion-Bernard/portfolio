<script setup>
import {RouterView } from 'vue-router'
import NavBarComponent from './components/Partials/NavbarComponent.vue'
import FooterComponent from './components/Partials/FooterComponent.vue'
</script>

<template>
  <NavBarComponent />
  <RouterView />
  <FooterComponent />
</template>
