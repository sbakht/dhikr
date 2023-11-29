<template>
  <q-page padding>
    <div v-if="user">
      Hi {{ name }}!

      <q-linear-progress stripe size="10px" :value="progress" />

      <Spinner v-model="value" :max="100" label="SubhanAllah" />
      <Spinner v-model="obj.curr.value" :max="obj.max" label="Allahu Akbar" />

    </div>
    <div v-else>
      <q-btn to="/login" color="accent">Login</q-btn>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import useAuthUser from '../composables/useAuthUser'
import Spinner from 'src/components/Spinner.vue'
const { user } = useAuthUser()

const value = ref(30)
const value2 = ref(70)
const obj = {
  curr: ref(70),
  max: 100
}

const progress = computed(() => {
  const curr = obj.curr.value + value.value
  const max = obj.max + 100

  return curr / max
})

const name = computed(() => user.value?.user_metadata.name)
</script>
