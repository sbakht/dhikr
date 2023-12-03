<template>
  <q-card v-bind="cardProps" flat>
    <q-card-section class="column q-pa-none">
      <div class="text-center">{{ label }}</div>
      <q-btn class="q-mt-md" @click="count = count + step" flat :ripple="false" :disable="disabled">
        <q-circular-progress class="self-center" :value="count" :max="max" size="5rem" v-bind="spinnerProps"
          color="blue-8" track-color="blue-2" show-value>{{ count }}</q-circular-progress>
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import useAuthUser from '../composables/useAuthUser'
const { user } = useAuthUser()

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '5rem'
  },
  cardProps: {
    type: Object,
    default: () => ({})
  },
  spinnerProps: {
    type: Object,
    default: () => ({})
  },
  step: {
    type: Number,
    default: 1
  },
  max: {
    type: Number,
    default: 100
  },
  disableOnComplete: {
    type: Boolean,
    default: false
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

const disabled = computed(() => {
  return props.modelValue >= props.max && props.disableOnComplete
})

const value = ref(30)
</script>
