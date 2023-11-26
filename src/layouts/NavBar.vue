<template>
  <q-toolbar>
    <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

    <q-toolbar-title shrink>
      HalalCompetitions
    </q-toolbar-title>

    <q-tabs no-caps>
      <q-route-tab name="tab1" label="Home" to="/" />
      <q-route-tab name="tab2" label="About" to="about" />
      <q-route-tab name="tab3" label="Results" to="result" />
    </q-tabs>

    <q-space />

    <q-tabs shrink no-caps>
      <q-route-tab name="tab4" label="Login" to="/login" />
      <q-route-tab name="tab5" label="Register" to="register" />
    </q-tabs>
  </q-toolbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>
