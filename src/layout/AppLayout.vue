<template>
  <section class="bg">
    <p class="copyright">
      copyright © 2023~2024. powered by B站@变质的洋流. All Rights Reserved.
    </p>
    <section id="wrapper">
      <h1>GUIDE</h1>
      <div class="content">
        <router-link
          class="card"
          v-for="(route, index) in List"
          :style="{ backgroundImage: getImgUrl(index) }"
          :to="resolvePath(route.path)">
          <p class="title">{{ route.meta?.title }}</p>
        </router-link>
      </div>
    </section>
    <div
      id="cursor-dot"
      ref="dot"></div>
    <div
      id="cursor-circle"
      ref="circle"></div>
  </section>
</template>

<script setup lang="ts">
import { asyncRoutes } from '@/router'
import { RouteRecordRaw } from 'vue-router'

const dot = ref<HTMLElement | null>(null)
const circle = ref<HTMLElement | null>(null)
const BasePath = ref('')

const List = computed(() => {
  let Res: RouteRecordRaw[] = []
  asyncRoutes.forEach((item) => {
    if (item.children) {
      BasePath.value = item.path
      Res.push(...item.children.filter((child) => !child.meta?.hidden))
    } else {
      !item.meta?.hidden && Res.push(item)
    }
  })
  return Res
})

const resolvePath = (p: string) => {
  return {
    path: `${BasePath.value}/${p}`
  }
}
const getImgUrl = (i: number) => `url("//picsum.photos/300?random=${i}")`

const dotX = ref<number>(0)
const dotY = ref<number>(0)
const circleX = ref<number>(0)
const circleY = ref<number>(0)

document.addEventListener('mousemove', (e: MouseEvent) => {
  dotX.value = e.clientX
  dotY.value = e.clientY

  if (dot.value && circle.value) {
    dot.value.style.top = `${dotY.value}px`
    dot.value.style.left = `${dotX.value}px`
    dot.value.style.opacity = circle.value.style.opacity = '1'
  }
})

const circleAnimation = (): void => {
  const parts = 6
  circleX.value += (dotX.value - circleX.value) / parts
  circleY.value += (dotY.value - circleY.value) / parts
  if (circle.value) {
    circle.value.style.top = `${circleY.value}px`
    circle.value.style.left = `${circleX.value}px`
  }
  requestAnimationFrame(circleAnimation)
}
requestAnimationFrame(circleAnimation)
</script>

<style scoped lang="scss">
@mixin dotStyle($width, $color, $alpha1, $alpha2) {
  #cursor-circle {
    width: $width;
    height: $width;
    background-color: rgba($color, $alpha1);
  }
  #cursor-dot {
    background-color: rgba($color, $alpha2);
  }
}

.bg {
  width: 100vw;
  height: 100vh;
  background: #888;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: none;

  &:has(#wrapper:hover) {
    @include dotStyle($width: 64px, $color: #000, $alpha1: 0.25, $alpha2: 0.6);
  }

  &:has(#wrapper .content .card:hover) {
    @include dotStyle($width: 80px, $color: #fff, $alpha1: 0.3, $alpha2: 0.8);
  }
}

#cursor-dot {
  width: 10px;
  height: 10px;
  background-color: rgba(#fff, 0.6);
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: background-color 0.3s linear, opacity 1s linear;
  pointer-events: none;
  z-index: 9999;
}

#cursor-circle {
  width: 50px;
  height: 50px;
  background-color: rgba(#fff, 0.25);
  border-radius: 50%;
  box-sizing: border-box;
  position: absolute;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: background-color 0.3s linear, border 0.3s linear, width 0.2s linear,
    height 0.2s linear, opacity 0.7s 0.3s linear;
  pointer-events: none;
  z-index: 9998;
  backdrop-filter: blur(3px);
}
.copyright {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  color: #aaa;
  user-select: none;
}

#wrapper {
  width: 88vw;
  height: 88vh;
  background-color: #f2f2f2;
  border-radius: 20px;
  // box-shadow: 0 0 10px 120px #888;
  padding-bottom: 20px;
  overflow: hidden;
  user-select: none;

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
    z-index: 9990;
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
      background-size: 100% 100%;
      background-position: center center;
      background-repeat: no-repeat;
      border-radius: 14px;
      transition: background-size 1s linear;
      overflow: hidden;
      cursor: none;

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.35);
      }

      &:first-of-type .title::after {
        content: 'NEW!';
        color: deeppink;
        margin-left: 16px;
        font-size: 16px;
        font-style: italic;
      }

      .title {
        --h: 50px;
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
        background-size: 120% 120%;

        .title {
          --h: 60px;
          transition: 0.4s 0.5s linear;
        }
      }
    }
  }
}
</style>
