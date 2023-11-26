<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <NavBar />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './NavBar.vue'

</script>
