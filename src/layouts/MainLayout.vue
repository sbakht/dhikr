<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <NavBar @toggleDrawer="toggleDrawer" />
    </q-header>

    <HamburgerMenu v-model="showDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './NavBar.vue'
import HamburgerMenu from './HamburgerMenu.vue'

const showDrawer = ref(false)

function toggleDrawer() {
  showDrawer.value = !showDrawer.value
}
</script>
