<template>
  <q-card class="flex justify-center" style="max-width: 150px;" flat>
    <q-card-section class="q-pa-none">
      <div class="text-center">{{ label }}</div>
      <q-btn class="q-mt-md" @click="count = count + step" flat :ripple="false" :disable="count >= max">
        <q-circular-progress :value="count" :max="max" size="5rem" color="blue-8" track-color="blue-2"
          show-value></q-circular-progress>
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import useAuthUser from '../composables/useAuthUser'
const { user } = useAuthUser()

const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  step: {
    type: Number,
    default: 1
  },
  max: {
    type: Number,
    default: 100
  }
})

const emit = defineEmits(['update:modelValue'])

const count = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    console.log(value)
    emit('update:modelValue', value)
  }
})

const value = ref(30)
</script>
