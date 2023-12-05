import { ref } from 'vue'

export function useApi() {
  async function get() {
    return 1
  }

  async function set() {
    return 1
  }

  return {
    set,
    get
  }
}
