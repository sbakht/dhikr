<template>
  <div v-if="user">
    <div>Hello {{ user.user_metadata.name }}</div>

    <template v-for="counter in table" :key="counter.id">
      <div v-if="counter.isLoading == true">loading</div>
      <div v-else>
        <button @click="counter.increment">
          <div>{{ counter.label }}</div>
          {{ counter.count }}
        </button>
      </div>
    </template>
  </div>
</template>

<script setup>

import useAuthUser from '../composables/useAuthUser'
import { useCount } from '../composables/useUserCount'
import { options } from '../config'
const { user } = useAuthUser()

const table = options.map(option => ({ ...option, ...useCount({ tableId: option.id }) }))

</script>
