<template>
  <q-page padding>
    <div v-if="user">
      Hi {{ name }}!

      <q-linear-progress stripe size="10px" :value="progress" />

      <div class="row">
        <template v-for="obj in trackers" :key="obj.id">
          <q-card class="col-6 col-md-3 flex justify-center" style="" flat>
            <q-card-section class="">
              <Spinner v-model="obj.value.value" :max="obj.max.value" :label="obj.label" />
            </q-card-section>
          </q-card>
        </template>
      </div>

      <q-dialog v-model="showUpdateGoals" persistent>
        <SelectGoals :data="goals" @save="updateGoals" />
      </q-dialog>

      <q-btn @click="showUpdateGoals = true" color="secondary">Update Goals</q-btn>

    </div>
    <div v-else>
      <q-btn to="/login" color="accent">Login</q-btn>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref, unref } from 'vue'
import useAuthUser from '../composables/useAuthUser'
import Spinner from 'src/components/Spinner.vue'
import SelectGoals from 'src/components/SelectGoals.vue'
const { user } = useAuthUser()

const showUpdateGoals = ref(false)

const trackers = [
  {
    id: 1,
    label: 'SubhanAllah',
    value: ref(30),
    max: ref(100)
  },
  {
    id: 2,
    label: 'Alhamdulillah',
    value: ref(30),
    max: ref(100)
  },
  {
    id: 3,
    label: 'La ilaaha il-Allah ',
    value: ref(30),
    max: ref(100)
  },
  {
    id: 4,
    label: 'Allahu Akbar',
    value: ref(70),
    max: ref(100)
  },
  {
    id: 5,
    label: 'SubhanAllahi wa bihamdihi',
    value: ref(30),
    max: ref(100)
  },
  {
    id: 6,
    label: 'La hawla wala quwata illah bilah',
    value: ref(30),
    max: ref(100)
  },
  {
    id: 7,
    label: "Salat 'ala an- Nabi",
    value: ref(30),
    max: ref(100)
  }
]

const goals = computed(() => {
  return trackers.map(({ id, label, max }) => {
    return {
      id,
      label,
      currGoal: unref(max),
      newGoalMax: unref(max) + unref(max) * 0.5
    }
  })
})

function updateGoals(data) {
  for (let i = 0; i < data.length; i++) {
    const id = data[i].id
    const max = data[i].max
    trackers.find((obj) => obj.id === id).max.value = max
  }
}

const progress = computed(() => {
  const curr = trackers.map(({ value, max }) => Math.min(value.value, max.value)).reduce((a, b) => a + b, 0)

  const max = trackers.map(({ max }) => max.value).reduce((a, b) => a + b, 0)
  return curr / max
})

const name = computed(() => user.value?.user_metadata.name)
</script>
