<template>
  <q-page class="column" padding>
    <q-list>
      <q-item v-for="item in data" :key="item.id" tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section top>
          <q-item-label :style="item.large ? 'font-size: 1.2rem' : ''">
            {{ item.title }}
          </q-item-label>
          <q-item-label caption>{{ item.count }}x</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row-wrap q-gutter-xs text-right" style="max-width:120px">
            <q-avatar class="" v-for="i in item.count" color="grey-4" size="xs" />
          </div>
        </q-item-section>
      </q-item>

    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref, unref, watch } from 'vue'
import useAuthUser from '../composables/useAuthUser'
import Spinner from 'src/components/Spinner.vue'
import SelectGoals from 'src/components/SelectGoals.vue'
import { useCountStorage } from 'src/composables/useCountStorage'
const { user } = useAuthUser()

const check1 = ref(false)

const data = [
  {
    id: 1,
    title: 'Surah al-Ikhlas',
    count: 3
  },
  {
    id: 2,
    title: 'Surah al-Falaq',
    count: 3
  },
  {
    id: 3,
    title: 'Surah al-Nas',
    count: 3
  },
  {
    id: 4,
    title: 'رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَظِينِ | وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ',
    large: true,
    count: 3
  }
]

</script>
