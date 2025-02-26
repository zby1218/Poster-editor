import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { testComponents } from './editor'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const testData = testComponents
  function increment() {
    count.value++
  }

  return {testData, count, doubleCount, increment }
})
 