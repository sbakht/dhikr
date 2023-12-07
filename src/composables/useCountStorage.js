import { computed, ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { date } from 'quasar'

const defaultVal = []

function today() {
  const timeStamp = Date.now()
  return date.formatDate(timeStamp, 'MM-DD-YYYY')
}

const DISABLED = false

export function useCountStorage(id, { disabled = false, init = 0 } = {}) {
  const key = `dhikr-${id}`

  const iStorageEnabled = !(DISABLED || disabled)

  const data = iStorageEnabled ? useStorage(key, defaultVal) : useStorage(key, defaultVal, sessionStorage)

  const count = computed({
    get() {
      const todayData = data.value.find(({ date }) => date === today())
      if (!todayData) {
        return init
      }
      return todayData.count
    },
    set(count) {
      const todayData = data.value.find(({ date }) => date === today())
      if (!todayData) {
        if (iStorageEnabled) {
          console.log('adding new data to storage in setter', { date: today(), count })
        }
        data.value.push({ date: today(), count })
        return
      }
      // if (iStorageEnabled) {
      console.log('todayData', todayData)
      // }
      data.value = data.value.map(
        (item) => (item.date === today() ? { ...item, count } : item)
      )
    }
  })

  return count
}
