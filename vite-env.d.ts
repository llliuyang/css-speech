declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'reveal.js'
declare module 'reveal.js/plugin/markdown/markdown.js'
declare module 'reveal.js/plugin/highlight/highlight.js'