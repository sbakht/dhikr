import { watchOnce, useAsyncState } from '@vueuse/core'
import useAuthUser from './useAuthUser'
import useSupabase from './useSupabase'
import { ref, computed } from 'vue'

const COUNT_ID = {
  1: 'count',
  2: 'subhanallah'
}

const tableName = id => COUNT_ID[id]

export function getCount(id) {
  const { user } = useAuthUser()
  const { supabase } = useSupabase()

  const { state, isReady, isLoading } = useAsyncState(
    supabase
      .from(tableName(id))
      .select('count')
      .eq('userid', user.value.id)
      .gte('created_at', '2023-10-24')
  )

  return {
    state, isReady, isLoading
  }
}

export function addCount(id, count) {
  // TODO save locally first, add later if no internet/api call falls
  const { user } = useAuthUser()
  const { supabase } = useSupabase()

  const data = {
    count,
    userid: user.value.id,
    created_at: new Date()
  }

  const { state, isReady, isLoading } = useAsyncState(
    supabase
      .from(tableName(id))
      .insert(data)
  )

  return {
    state, isReady, isLoading
  }
}

export function useCount({ tableId }) {
  const { state, isLoading } = getCount(tableId)

  const count = ref(0)

  const apiCount = computed(() => {
    const data = state.value?.data || []
    return data.reduce((accum, item) => accum + item.count, 0)
  })

  watchOnce(apiCount, (val) => {
    count.value = val
  })

  function increment() {
    count.value++
    addCount(tableId, 1)
  }

  return {
    isLoading,
    count,
    increment
  }
}
