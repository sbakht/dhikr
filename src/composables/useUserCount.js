import { useAsyncState } from '@vueuse/core'
import useAuthUser from './useAuthUser'
import useSupabase from './useSupabase'
import { ref } from 'vue'

export function getCount() {

  const { user } = useAuthUser()
  const { supabase } = useSupabase()

  console.log(user);
  const { state, isReady, isLoading } = useAsyncState(
    supabase
      .from('count')
      .select('count')
    // .eq('userid', user.value.id)
  )

  return {
    state, isReady, isLoading
  }
}
