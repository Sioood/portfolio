const transitioning = reactive({
  status: false,
  from: '',
  to: '',
  lastLifeCycle: '',
})

const usePageTransition = () => {
  let pageTransitionWatcherCallback = () => {
    return
  }

  watch(transitioning, () => {
    pageTransitionWatcherCallback()

    pageTransitionWatcherCallback = () => {
      return
    }
  })

  const setPageTransitionWatcherCallback = (callback: any) => {
    pageTransitionWatcherCallback = callback
  }

  return {
    transitioning,
    setPageTransitionWatcherCallback,
  }
}
export { usePageTransition }
