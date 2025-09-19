import { Pane } from 'tweakpane'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('Tweakpane', Pane as typeof Pane)
})
