<template>
  <section id="wrapper">
    <h1>GUIDE</h1>
    <div class="content">
      <router-link
        class="card"
        v-for="(route, index) in List"
        :style="{ backgroundImage: getLink(index) }"
        :to="{ path: route.path }">
        <p class="title">{{ route.meta?.title }}</p>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { asyncRoutes } from '@/router'
import { RouteRecordRaw } from 'vue-router'

const List = computed(() => {
  return asyncRoutes.filter((item: RouteRecordRaw) => !item.meta?.hidden)
})
const getLink = (i: number) => `url("//picsum.photos/300?random=${i}")`
</script>

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
