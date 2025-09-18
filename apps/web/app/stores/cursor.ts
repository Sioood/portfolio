export const useCursorStore = defineStore('cursor', () => {
  type CursorType = 'typewriter'

  const type = ref<CursorType>('typewriter')
  const visible = ref(false)
  const text = ref('')

  return {
    type,
    visible,
    text,
  }
})
