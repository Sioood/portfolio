import type { Pane } from 'tweakpane'

declare module '#app' {
  interface NuxtApp {
    $Tweakpane: typeof Pane
  }
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $Tweakpane: typeof Pane
  }
}
