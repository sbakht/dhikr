<template>
  <q-page class="row items-center justify-evenly">
    <user-profile v-if="user" />
    <sign-in v-else />
  </q-page>
</template>

<script setup lang="ts">
import SignIn from 'components/SignIn.vue'
import useAuthUser from '../composables/useAuthUser'
import UserProfile from 'src/components/UserProfile.vue'

const { user } = useAuthUser()

</script>
