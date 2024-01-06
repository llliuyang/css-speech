<template>
  <section id="wrapper">
    <h1>GUIDE</h1>
    <div class="content">
      <router-link 
      class="card"
      :style="{ backgroundImage: getLink(1) }"></router-link>
      <!-- <a
        class="card"
        v-for="(item, index) in List"
        :key="item.title"
        :href="href(item.link)"
        :style="{ backgroundImage: getLink(index + 1) }">
        <p class="title">{{ item.title }}</p>
      </a> -->
    </div>
  </section>
</template>

<script setup>
const getLink = (i) => `url("//picsum.photos/300?random=${i}")`
</script>

<style lang="scss">
:deep(#app) {
  height: 100vh;
  background-color: #2e2e2e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;

  &::after {
    content: 'copyright © 2023. powered by B站@变质的洋流. All Rights Reserved.';
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    color: #fff;
  }
}
</style>
<style scoped lang="scss">
#wrapper {
  width: 88vw;
  height: 88vh;
  background-color: #f2f2f2;
  border-radius: 20px;
  box-shadow: 0 0 10px 120px #888;
  padding-bottom: 20px;
  overflow: hidden;

  & h1 {
    text-align: center;
    width: 88vw;
    height: 100px;
    margin: 0 auto;
    line-height: 100px;
    font-size: 40px;
    font-family: Audiowide, serif;
    letter-spacing: 2px;
    color: #ff1058;
    position: fixed;
    top: 6%;
    left: 6%;
    text-shadow: -1px -1px #fff, 1px 1px #555;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-image: radial-gradient(transparent 1px, #f2f2f2 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(6px);
    z-index: 9999;
  }

  & .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 20px;
    padding: 120px 40px 60px;
    overflow: auto;

    &::after {
      content: '';
      flex: 1;
    }

    .card {
      --s: 1.1;
      display: block;
      height: 300px;
      min-height: 200px;
      width: 300px;
      min-width: 200px;
      position: relative;
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 14px;
      transition: all 1s linear;
      clip-path: inset(0);
      overflow: hidden;

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        /* border-radius: inherit; */
      }

      &:first-of-type .title::after {
        content: 'NEW!';
        color: deeppink;
        margin-left: 16px;
        font-size: 16px;
        font-style: italic;
      }

      .title {
        --h: 40px;
        width: 100%;
        height: var(--h);
        line-height: var(--h);
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.4);
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
        font-family: Audiowide, serif;
        font-size: 18px;
        z-index: 10;
        transition: 0.4s 0s linear;
        border-bottom-left-radius: inherit;
        /* mix-blend-mode: difference; */
        text-transform: uppercase;
      }

      &:hover {
        clip-path: inset(calc((1 - 1 / var(--s)) * 50%));
        scale: var(--s);

        .title {
          --h: 50px;
          bottom: 4.5%;
          transition: 0.4s 0.5s linear;
        }
      }
    }
  }
}
</style>
