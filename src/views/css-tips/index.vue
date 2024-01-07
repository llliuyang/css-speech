<template>
    <div class="slides">
      <section>
        <section>
          <h1 class="fragment fade-up">CSS篇</h1>
          <h1>开发中的小TIPS</h1>
        </section>
      </section>

      <section>
        <section data-auto-animate>
          # 改变placeholder的样式
          <input
            type="text"
            placeholder="请输入文本..." />
        </section>
        <section data-auto-animate>
          # 改变placeholder的样式
          <input
            class="placeholder"
            type="text"
            placeholder="请输入文本..." />
        </section>

        <section>
          # 核心代码
          <pre><code data-line-numbers="2">
							input::placeholder {
							color: red;
							font-size: 20px;
							font-style: italic;
							letter-spacing: 4px;
							}

						</code></pre>
        </section>
      </section>

      <section>
        <section data-auto-animate>
          # 改变光标的颜色
          <input
            type="text"
            placeholder="默认光标是黑色的🚨" />
        </section>

        <section data-auto-animate>
          # 改变光标的颜色
          <input
            class="color"
            type="text"
            placeholder="更改后光标和文本都是红色🔴" />
        </section>

        <section data-auto-animate>
          # 改变光标的颜色
          <input
            class="caret"
            type="text"
            placeholder="更改后光标是红色，文本不改变颜色💕" />
        </section>

        <section>
          # 核心代码
          <pre><code data-line-numbers="3">
							input {
							caret-color: darkcyan;
							}

						</code></pre>
        </section>
      </section>

      <section>
        <section>
          # 选中兄弟元素

          <div class="select main">
            <div class="codebox">
              <pre><code>
									<div class="ball">🐥</div>
									<div class="ball">🐥</div>
									<div class="ball">🐥</div>
									<div class="ball">🐥</div>
									<div class="ball">🐥</div>
								</code>
							</pre>
            </div>
            <div class="viewbox">
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
            </div>
          </div>
        </section>

        <section>
          <div class="select release">
            实现效果
            <div class="viewbox">
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
            </div>
          </div>
        </section>

        <section>
          # 过往实现方式

          <p class="fragment fade-up">Node.previousSibling</p>
          <p class="fragment fade-up">Node.nextSibling</p>
          <p class="fragment fade-up">jQuery.prev()</p>
          <p class="fragment fade-up">jQuery.next()</p>
          <p class="fragment fade-up">......</p>
        </section>

        <section data-visibility="uncounted">
          <h4>用纯CSS能不能实现呢？</h4>
          <h1 class="fragment fade-in r-fit-text">当然可以。</h1>
        </section>

        <section data-auto-animate>
          # 选中下一个

          <div class="select next">
            <div class="viewbox">
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
            </div>
            <div class="codebox fragment fade-in">
              <pre><code data-line-numbers="2" data-noescape>
									.ball:hover + .ball {
									transform: scale(1.3);
									}

								</code>
							</pre>
            </div>
          </div>
        </section>

        <section data-auto-animate>
          # 选中上一个

          <div class="select prev">
            <div class="viewbox">
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
              <div class="ball">🐥</div>
            </div>
            <div class="codebox fragment fade-in">
              <pre><code data-line-numbers="2" data-noescape>
									.ball:has(+ .ball:hover) {
									transform: scale(1.3);
									}

								</code>
							</pre>
            </div>
          </div>
        </section>

        <section>
          其它案例

          <div class="menu">
            <label for="menu">
              <p>展/收</p>
              <input
                id="menu"
                type="checkbox"
                hidden
                checked />
            </label>
            <hr />
            <ul>
              <li>VUE <span>这是描述</span></li>
              <li>REACT <span>这是描述</span></li>
              <li>NODE <span>这是描述</span></li>
              <li>BUN <span>这是描述</span></li>
              <li>TARO <span>这是描述</span></li>
            </ul>
          </div>
        </section>

        <section>
          <h1>总结</h1>
          <ul>
            <li>使用 + 选择器，选中紧邻的下一个元素</li>
            <li>使用 :has 伪类，可以匹配条件进行选择</li>
          </ul>
        </section>
      </section>

      <section data-visibility="uncounted">
        <h1>感谢聆听，再会！</h1>
      </section>
    </div>
</template>

<style scoped lang="scss">

div.menu {
  width: 120px;
  max-width: 300px;
  margin: 60px 33%;
  background-color: darkcyan;
  transition: 0.2s linear;
  padding: 20px;

  label {
    width: 100%;
    height: 60px;
    cursor: pointer;

    p {
      line-height: 60px;
      text-align: left;
      font-size: 24px;
      margin: 0;
    }
  }

  hr {
    margin: 6px 0;
  }

  ul {
    width: 100%;
    margin: 0;

    li {
      list-style: none;
      font-size: 20px;
      cursor: pointer;
      margin: 6px 0;

      span {
        display: none;
        font-size: 12px;
        color: #ccc;
      }
    }
  }

  &:has(input[type='checkbox']:checked) {
    width: 260px;

    ul li span {
      display: inline-block;
    }
  }
}

div.select {
  display: flex;
  flex-flow: column wrap;
  margin-top: 60px;

  .codebox {
    text-align: center;
  }

  .viewbox {
    display: flex;
    margin: 20px auto;
    align-items: center;

    .ball {
      width: 60px;
      height: 60px;
      background: #009688;
      border-radius: 50%;
      margin: 0 14px;
      cursor: pointer;
      transform-origin: center bottom;
      transition: all 0.2s linear;

      &:hover {
        background: #00796b;
        transform: scale(1.6);
      }
    }
  }

  &.next {
    .viewbox {
      .ball:hover + .ball {
        transform: scale(1.3);
      }
    }
  }

  &.prev {
    .viewbox {
      .ball:has(+ .ball:hover) {
        transform: scale(1.3);
      }
    }
  }

  &.release {
    .viewbox {
      margin-top: 120px;

      .ball:hover + .ball,
      .ball:has(+ .ball:hover) {
        transform: scale(1.3);
      }
    }
  }
}
</style>
