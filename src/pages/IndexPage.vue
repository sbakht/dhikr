<template>
  <q-page padding>
    <div v-if="user">
      Hi {{ name }}!

      <q-linear-progress stripe size="10px" :value="progress" />

      <template v-for="obj in trackers" :key="obj.id">
        <Spinner v-model="obj.value.value" :max="obj.max.value" :label="obj.label" />
      </template>

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

const trackers = [
  {
    id: 1,
    label: 'SubhanAllah',
    value: ref(30),
    max: ref(100)
  },
  {
    id: 2,
    label: 'Allahu Akbar',
    value: ref(70),
    max: ref(100)
  }
]

const progress = computed(() => {
  const curr = trackers.map(({ value, max }) => Math.min(value.value, max.value)).reduce((a, b) => a + b, 0)

  const max = trackers.map(({ max }) => max.value).reduce((a, b) => a + b, 0)
  return curr / max
})

const name = computed(() => user.value?.user_metadata.name)
</script>
