<template>
  <q-page class="row items-center justify-evenly">
    <div v-if="user">
      Hi {{ name }}!
    </div>
    <div v-else>
      <q-btn to="/login" color="accent">Login</q-btn>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useAuthUser from '../composables/useAuthUser'
const { user } = useAuthUser()

const name = computed(() => user.value?.user_metadata.name)
</script>
