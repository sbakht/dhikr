<template>
  <div v-if="user">
    <div>Hello {{ user.user_metadata.name }}</div>

    <div v-if="isLoading">loading</div>
    <div v-else>
    <button @click="increment">
    {{ count }}
    </button>
    </div>

    <div v-if="isLoading2">loading</div>
    <div v-else>
    <button @click="increment2">
    {{ count2 }}
    </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { watchOnce } from '@vueuse/core'

import useAuthUser from '../composables/useAuthUser'
import { useCount } from '../composables/useUserCount'
const { user } = useAuthUser()

const { count, increment, isLoading } = useCount({ tableId: 1 })
const { count: count2, increment: increment2, isLoading: isLoading2 } = useCount({ tableId: 2 })

</script>
