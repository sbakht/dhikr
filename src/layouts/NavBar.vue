<template>
  <q-toolbar>
    <q-btn flat dense round icon="menu" aria-label="Menu" />

    <q-toolbar-title shrink>
      HalalCompetitions
    </q-toolbar-title>

    <q-tabs class="gt-xs" no-caps>
      <q-route-tab name="tab1" label="Home" to="/" />
      <q-route-tab name="tab2" label="About" to="about" />
      <q-route-tab name="tab3" label="Results" to="result" />
    </q-tabs>

    <q-space />

    <q-tabs class="gt-xs" shrink no-caps>
      <q-route-tab v-if="!user" name="tab4" label="Login" to="/login" />
      <q-route-tab class="gt-sm" v-if="!user" name="tab5" label="Register" to="register" />
      <q-route-tab v-else name="tab5" label="Log out" to="logout" />
    </q-tabs>
  </q-toolbar>
</template>

<script setup lang="ts">
import useAuthUser from 'src/composables/useAuthUser';
import { ref, computed } from 'vue'

const { user } = useAuthUser();
</script>
