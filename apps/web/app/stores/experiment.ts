export interface Experiment {
  id: number
  preview: string
}

export const useExperimentStore = defineStore('experiment', () => {
  const experiments = ref<Experiment[]>([])

  return {
    experiments,
  }
})
