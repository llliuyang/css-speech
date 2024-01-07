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
<style scoped lang="scss">
.reveal {
  width: 100vw;
  height: 100vh;
  background-color: #2e2e2e;
}
</style>

<style lang="scss">
.reveal{
  input[type='text'] {
    display: block;
    width: 60%;
    height: 60px;
    margin: auto;
    margin-top: 30px;
    box-sizing: border-box;
    border: none;
    text-indent: 2em;
    font-size: 18px;
  }

  input:focus {
    border: none;
    outline: none;
  }

  input[class='placeholder']::placeholder {
    color: red;
    font-size: 20px;
    font-style: italic;
    letter-spacing: 4px;
  }

  input[class='color'] {
    color: red;
  }

  input[class='caret'] {
    caret-color: red;
  }

  .fragment.fade-up {
    color: #009688;
  }
}
</style>
