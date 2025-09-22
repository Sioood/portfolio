export interface Work {
  // page component name
  slug: string
  id: number
  title: string
  // Main description, displayed on the right of the page
  description?: string
  date: string
  preview?: { src: string; alt: string }
  caption?: string
  tags?: string[]
  technos?: string[]
  leftImage?: { src: string; alt: string }
  // Max 2 for readability
  centerImages?: { src: string; alt: string }[]
  images?: { src: string; alt: string; caption?: string }[]
}

export const useWorkStore = defineStore('work', () => {
  // const { t } = useI18n()

  const works = ref<Work[]>([])

  const getWork = (slugOrId: string | number) => works.value.find((work) => work.slug === slugOrId || work.id === Number(slugOrId))

  return {
    works,
    getWork,
  }
})
