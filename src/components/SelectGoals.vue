<template>
  <!-- <q-dialog v-model="confirm" persistent> -->
  <q-card>
    <q-card-section class="">
      <p class="text-h5">Daily goal</p>
      <p>Be realistic. Set a goal that you can easily reach every day! Consistency is key.</p>
      <p class="text-grey-7">Drag on the circle to change.</p>

      <div class="row">
        <template v-for="obj in dataRefs" :key="obj.id">
          <q-card class="col-6" flat>
            <q-card-section class="column">
              <div class="text-center">{{ obj.label }}</div>
              <q-knob class="self-center q-mt-md" v-model="obj.currGoal.value" :min="obj.newGoalMin"
                :max="obj.newGoalMax.value" size="5rem" color="blue-8" track-color="blue-2" show-value></q-knob>
            </q-card-section>
          </q-card>
        </template>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Cancel" color="primary" v-close-popup />
      <q-btn label="Save" color="primary" @click="save" v-close-popup />
    </q-card-actions>
  </q-card>
  <!-- </q-dialog> -->
</template>

<script setup lang="ts">
import { unref, computed, ref } from 'vue'

interface Props {
  data: {
    id: number,
    label: string
    currGoal: number
    newGoalMax: number
  }[]
}
const props = defineProps<Props>()

const emit = defineEmits(['save'])

const dataRefs = computed(() => {
  return props.data.map(obj => {
    return {
      ...obj,
      newGoalMin: 0,
      currGoal: ref(obj.currGoal),
      newGoalMax: ref(obj.newGoalMax)
    }
  })
})

function save() {
  const results = dataRefs.value.map(obj => {
    return {
      ...obj,
      max: unref(obj.currGoal),
      newGoalMax: unref(obj.newGoalMax)
    }
  })
  emit('save', results)
}

</script>
