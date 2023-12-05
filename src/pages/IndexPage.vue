<template>
  <q-page class="column" padding>
    <template v-if="user">

      <div class="col-shrink">
        <q-linear-progress class="col" stripe size="10px" :value="progress" />
      </div>

      <template v-if="$q.screen.lt.sm">
        <div class="col-shrink full-width">
          <q-tabs v-model="activeTab" outside-arrows inline-label>
            <q-tab v-for="obj in tracking" :key="obj.id" :label="obj.label"
              v-bind="obj.value.value >= obj.max.value ? { icon: 'check' } : {}" :name="obj.id">
            </q-tab>
          </q-tabs>
        </div>

        <div class="col column flex-center">
          <q-tab-panels class="row" v-model="activeTab" animated>
            <q-tab-panel class="overflow-hidden" v-for="obj in tracking" :key="obj.id" :name="obj.id">
              <Spinner v-model="obj.value.value" :max="obj.max.value"
                :spinner-props="{ size: '25rem', color: 'secondary', thickness: .04, class: '' }" />
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </template>

      <template v-else>
        <div class="row">
          <template v-for="obj in trackers" :key="obj.id">
            <q-card class="col-6 col-md-3 flex justify-center" style="" flat>
              <q-card-section class="">
                <Spinner v-model="obj.value.value" :max="obj.max.value" :label="obj.label" />
              </q-card-section>
            </q-card>
          </template>
        </div>
      </template>

      <q-dialog v-model="showUpdateGoals" persistent>
        <SelectGoals :data="goals" @save="updateGoals" />
      </q-dialog>

      <!-- <q-btn @click="showUpdateGoals = true" color="secondary">Update Goals</q-btn> -->
    </template>
    <div v-else>
      <q-btn to="/login" color="accent">Login</q-btn>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref, unref, watch } from 'vue'
import useAuthUser from '../composables/useAuthUser'
import Spinner from 'src/components/Spinner.vue'
import SelectGoals from 'src/components/SelectGoals.vue'
import { useCountStorage } from 'src/composables/useCountStorage'
const { user } = useAuthUser()

const showUpdateGoals = ref(false)
const activeTab = ref()

const testComputed = useCountStorage(2)

const trackers = [
  {
    id: 1,
    label: 'SubhanAllah',
    value: ref(0),
    max: ref(0)
  },
  {
    id: 2,
    label: 'Alhamdulillah',
    value: useCountStorage(2),
    max: ref(100)
  },
  {
    id: 3,
    label: 'La ilaaha il-Allah ',
    value: useCountStorage(3, { disabled: true, init: 90 }),
    max: ref(100)
  },
  {
    id: 4,
    label: 'Allahu Akbar',
    value: useCountStorage(4, { disabled: true, init: 70 }),
    max: ref(100)
  },
  {
    id: 5,
    label: 'SubhanAllahi wa bihamdihi',
    value: useCountStorage(5, { disabled: true, init: 30 }),
    max: ref(100)
  },
  {
    id: 6,
    label: 'La hawla wala quwata illah bilah',
    value: useCountStorage(6, { disabled: true, init: 30 }),
    max: ref(100)
  },
  {
    id: 7,
    label: "Salat 'ala an- Nabi",
    value: useCountStorage(7, { disabled: true, init: 30 }),
    max: ref(100)
  }
]

const tracking = computed(() => {
  return trackers.filter(({ max }) => max.value > 0)
})

activeTab.value = tracking.value[0].id

const goals = computed(() => {
  return trackers.map(({ id, label, max }) => {
    return {
      id,
      label,
      currGoal: unref(max),
      newGoalMax: unref(max) + unref(max) * 0.5 || 33
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
  const curr = trackers
    .map(({ value, max }) => Math.min(value.value, max.value))
    .reduce((a, b) => a + b, 0)

  const max = trackers.map(({ max }) => max.value).reduce((a, b) => a + b, 0)
  return curr / max
})

const name = computed(() => user.value?.user_metadata.name)
</script>
