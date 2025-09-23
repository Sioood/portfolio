export function useMyPreviewMode() {
  return usePreviewMode({
    shouldEnable: () => {
      const route = useRoute()

      if (!import.meta.server) {
        const previewLocalStorage = localStorage.getItem('preview')
        return previewLocalStorage === 'true' || !!route.query.preview
      }

      return !!route.query.preview
    },
  })
}
