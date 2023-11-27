<template>
  <q-toolbar>
    <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleDrawer" />

    <q-toolbar-title shrink>
      HalalCompetitions
    </q-toolbar-title>

    <q-tabs class="gt-xs" no-caps>
      <q-route-tab v-for="link in links" :key="link.label" :name="link.label" :label="link.label" :to="link.link" />
    </q-tabs>

    <q-space />

    <q-tabs class="gt-xs" shrink no-caps>
      <q-route-tab v-for="link in userLinks" :key="link.label" :name="link.label" :label="link.label" :to="link.link" />
    </q-tabs>
  </q-toolbar>
</template>

<script setup lang="ts">
import useAuthUser from 'src/composables/useAuthUser';
import useNavLinks from 'src/composables/useNavLinks';
import { ref, computed } from 'vue'

const { user } = useAuthUser();

const { links, userLinks } = useNavLinks();

const emits = defineEmits(['toggle-drawer']);

function toggleDrawer() {
  emits('toggle-drawer');
}
</script>
