<template>
  <div v-if="user">
    <div>Hello {{ user.user_metadata.name }}</div>
    <div v-if="isLoading">loading</div>
    <div v-else-if="total >= 0">
    {{ total }}
    </div>
  </div>
</template>

<script setup>
import { computed} from 'vue';
import useAuthUser from '../composables/useAuthUser'
import { getCount } from '../composables/useUserCount'
const { user } = useAuthUser()

const {state, isLoading} = getCount()

const total = computed(() => {
  const data = state.value?.data || []
  return data.reduce((accum, item) => accum + item.count, 0)
})
</script>
