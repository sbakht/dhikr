<template>
  <q-tabs dense no-caps>
    <q-route-tab v-for="link in footerLinks" :key="link.label" :name="link.label" :label="link.label" :icon="link.icon"
      :to="link.link" />
  </q-tabs>
</template>

<script setup lang="ts">
import useNavLinks from 'src/composables/useNavLinks'

const { footerLinks } = useNavLinks()
</script>
