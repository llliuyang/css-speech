<template>
  <div
    class="slides"
    id="border-block">
    <section>
      <section>
        <h1 class="fragment fade-up">border prop.</h1>
        <h1>你需要知道的border属性</h1>
      </section>
    </section>

    <section>
      <h1>border-block</h1>

      <section data-transition="fade-out">
        <article>
          <p>用于在样式表中的某处同时设置逻辑块向边框的各属性值。</p>
          <p>
            border-block 可用于设置 border-block-width、border-block-style 和
            border-block-color 中至少一个属性的值，且一次性设置块首和块末。
          </p>
          <p>
            此属性所对应的实体边框取决于元素的书写模式、行内方向和文本朝向。根据
            writing-mode、direction 和 text-orientation 所定义的值，此属性对应于
            border-top 和 border-bottom，或者 border-right 和 border-left 属性。
          </p>
        </article>
      </section>

      <section
        data-auto-animate
        data-transition="fade-in fade-out">
        <h2
          class="r-fit-text"
          style="font-family: Audiowide, serif">
          语法 <br />
          border-block: width style color
        </h2>
      </section>

      <section
        data-auto-animate
        data-transition="fade-in fade-out">
        <article>
          <p>
            风烟俱净，天山共色。从流飘荡，任意东西。自富阳至桐庐一百许里，奇山异水，天下独绝。
          </p>
          <p>水皆缥碧，千丈见底。游鱼细石，直视无碍。急湍甚箭，猛浪若奔。</p>
          <p>
            夹岸高山，皆生寒树，负势竞上，互相轩邈，争高直指，千百成峰。泉水激石，泠泠作响；好鸟相鸣，嘤嘤成韵。蝉则千转不穷，猿则百叫无绝。鸢飞戾天者，望峰息心；经纶世务者，窥谷忘反。横柯上蔽，在昼犹昏；疏条交映，有时见日。
          </p>
        </article>
        <div class="radio-group-control radio-group-normal">
          <label for="all">
            <input
              type="radio"
              name="border"
              id="all" />
            <p>ALL</p>
          </label>
          <label for="top">
            <input
              type="radio"
              name="border"
              id="top" />
            <p>TOP</p>
          </label>
          <label for="bottom">
            <input
              type="radio"
              name="border"
              id="bottom" />
            <p>BOTTOM</p>
          </label>
          <label for="left">
            <input
              type="radio"
              name="border"
              id="left" />
            <p>LEFT</p>
          </label>
          <label for="right">
            <input
              type="radio"
              name="border"
              id="right" />
            <p>RIGHT</p>
          </label>
        </div>
      </section>

      <section data-auto-animate>
        <article>
          <p>
            风烟俱净，天山共色。从流飘荡，任意东西。自富阳至桐庐一百许里，奇山异水，天下独绝。
          </p>
          <p>水皆缥碧，千丈见底。游鱼细石，直视无碍。急湍甚箭，猛浪若奔。</p>
          <p>
            夹岸高山，皆生寒树，负势竞上，互相轩邈，争高直指，千百成峰。泉水激石，泠泠作响；好鸟相鸣，嘤嘤成韵。蝉则千转不穷，猿则百叫无绝。鸢飞戾天者，望峰息心；经纶世务者，窥谷忘反。横柯上蔽，在昼犹昏；疏条交映，有时见日。
          </p>
        </article>
        <div class="radio-group-control radio-group-block">
          <label for="block">
            <input
              type="radio"
              name="block"
              id="block" />
            <p>BLOCK</p>
          </label>
          <label for="inline">
            <input
              type="radio"
              name="block"
              id="inline" />
            <p>INLINE</p>
          </label>
          <label
            for="verticalrl-tb"
            class="group-2">
            <input
              type="radio"
              name="verticalmode"
              id="vertical-tb"
              checked />
            <p>horizontal-tb</p>
          </label>
          <label for="verticallr">
            <input
              type="radio"
              name="verticalmode"
              id="verticallr" />
            <p>verticle-lr</p>
          </label>
          <label for="verticalrl">
            <input
              type="radio"
              name="verticalmode"
              id="verticalrl" />
            <p>verticle-rl</p>
          </label>
        </div>
      </section>

      <section data-auto-animate>
        <article>
          <p>
            风烟俱净，天山共色。从流飘荡，任意东西。自富阳至桐庐一百许里，奇山异水，天下独绝。
          </p>
          <p>水皆缥碧，千丈见底。游鱼细石，直视无碍。急湍甚箭，猛浪若奔。</p>
          <p>
            夹岸高山，皆生寒树，负势竞上，互相轩邈，争高直指，千百成峰。泉水激石，泠泠作响；好鸟相鸣，嘤嘤成韵。蝉则千转不穷，猿则百叫无绝。鸢飞戾天者，望峰息心；经纶世务者，窥谷忘反。横柯上蔽，在昼犹昏；疏条交映，有时见日。
          </p>
        </article>
        <div class="radio-group-control radio-group-startend">
          <label for="start-b">
            <input
              type="radio"
              name="startend"
              id="start-b" />
            <p>BLOCK-START</p>
          </label>
          <label for="end-b">
            <input
              type="radio"
              name="startend"
              id="end-b" />
            <p>BLOCK-END</p>
          </label>
          <label for="start-l">
            <input
              type="radio"
              name="startend"
              id="start-l" />
            <p>INLINE-START</p>
          </label>
          <label for="end-l">
            <input
              type="radio"
              name="startend"
              id="end-l" />
            <p>INLINE-END</p>
          </label>

          <label
            for="hori-se"
            class="group-2">
            <input
              type="radio"
              name="isVertical"
              id="hori-se"
              checked />
            <p>horizontal-tb</p>
          </label>
          <label for="vertival-se-lr">
            <input
              type="radio"
              name="isVertical"
              id="vertical-se-lr" />
            <p>vertical-lr</p>
          </label>
          <label for="vertival-se-rl">
            <input
              type="radio"
              name="isVertical"
              id="vertical-se-rl" />
            <p>vertical-rl</p>
          </label>
        </div>
      </section>
    </section>

    <section data-visibility="uncounted">
      <h1>感谢聆听，再会！</h1>
    </section>
  </div>
</template>
<style scoped lang="scss">
h1,
h2 {
  font-size: 100px;
  font-family: Audiowide, sans-serif;
}

article {
  height: clamp(300px, 420px, 540px);
  margin: 120px auto 0;
  padding: 10px 6%;
  font-size: 24px;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  color: #ffd55ccc;
  border: 10px solid #2e2e2e;
  transition: 0.4s linear;
  overflow: hidden;

  p {
    /* flex: 1 0 100%; */
    text-align: left;
    text-indent: 2em;
    line-height: 1.6;
    font-family: serif;
    margin: 10px 0;
  }

  &:has(+ .radio-group-normal label:nth-child(1) input:checked) {
    border-color: #02bf8a;
  }

  &:has(+ .radio-group-normal label:nth-child(2) input:checked) {
    border-top-color: #02bf8a;
  }

  &:has(+ .radio-group-normal label:nth-child(3) input:checked) {
    border-bottom-color: #02bf8a;
  }

  &:has(+ .radio-group-normal label:nth-child(4) input:checked) {
    border-left-color: #02bf8a;
  }

  &:has(+ .radio-group-normal label:nth-child(5) input:checked) {
    border-right-color: #02bf8a;
  }

  /* ------2-------- */

  &:has(+ .radio-group-block label:nth-child(1) input:checked) {
    border-block-color: #02bf8a;
  }

  &:has(+ .radio-group-block label:nth-child(2) input:checked) {
    border-inline-color: #02bf8a;
  }

  &:has(+ .radio-group-block label:nth-child(3) input:checked) {
    writing-mode: horizontal-tb;
  }

  &:has(+ .radio-group-block label:nth-child(4) input:checked) {
    writing-mode: vertical-lr;
  }

  &:has(+ .radio-group-block label:nth-child(5) input:checked) {
    writing-mode: vertical-rl;
  }

  /* ------3-------- */
  &:has(+ .radio-group-startend label:nth-child(1) input:checked) {
    border-block-start-color: #02bf8a;
  }

  &:has(+ .radio-group-startend label:nth-child(2) input:checked) {
    border-block-end-color: #02bf8a;
  }

  &:has(+ .radio-group-startend label:nth-child(3) input:checked) {
    border-inline-start-color: #02bf8a;
  }

  &:has(+ .radio-group-startend label:nth-child(4) input:checked) {
    border-inline-end-color: #02bf8a;
  }

  &:has(+ .radio-group-startend label:nth-child(5) input:checked) {
    writing-mode: horizontal-tb;
  }

  &:has(+ .radio-group-startend label:nth-child(6) input:checked) {
    writing-mode: vertical-lr;
  }

  &:has(+ .radio-group-startend label:nth-child(7) input:checked) {
    writing-mode: vertical-rl;
  }
}

.radio-group-control {
  width: 1060px !important;
  padding: 0;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  transform: translateX(-50px);

  label {
    font-family: Audiowide, sans-serif;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    cursor: pointer;
    position: relative;

    p {
      font-size: 18px;
      margin: auto;
      line-height: 3;
    }

    input[type='radio'] {
      width: 20px;
      height: 20px;
      border: none;
    }

    &:has(input[name='verticalmode']) {
      width: 160px;

      &.group-2 {
        padding-left: 20px;
        margin-left: 20px;

        &::before {
          content: '';
          width: 100%;
          height: 40%;
          position: absolute;
          left: 0;
          top: 20%;
          border-left: 2px solid #02bf8a80;
        }
      }
    }
  }

  &.radio-group-startend label {
    width: 240px;

    &:has(input[name='isVertical']) {
      width: 210px;
      &.group-2 {
        width: 240px;
        padding-left: 20px;
        margin-left: 20px;

        &::before {
          content: '';
          width: 100%;
          height: 40%;
          position: absolute;
          left: 0;
          top: 20%;
          border-left: 2px solid #02bf8a80;
        }
      }
    }
  }
}

@keyframes addBorder {
  0% {
    border-color: #2e2e2e;
  }

  100% {
    border-color: #02bf8a;
  }
}
</style>
