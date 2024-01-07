<template>
  <div class="reveal">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import Reveal from 'reveal.js'
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'
onMounted(() => {
  Reveal.initialize({
    plugins: [RevealMarkdown, RevealHighlight]
  })
})
</script>
<style scoped lang='scss'>
.reveal {
  width: 100vw;
  height: 100vh;
  background-color: #2e2e2e;
}
</style>