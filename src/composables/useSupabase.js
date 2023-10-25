import { createClient } from '@supabase/supabase-js'
import useAuthUser from './useAuthUser'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

supabase.auth.onAuthStateChange((event, session) => {
  // the "event" is a string indicating what trigger the state change (ie. SIGN_IN, SIGN_OUT, etc)
  // the session contains info about the current session most importanly the user data
  const { user } = useAuthUser()

  // if the user exists in the session we're logged in
  // and we can set our user reactive ref
  user.value = session?.user || null
})

// expose supabase client
export default function useSupabase() {
  return { supabase }
}
