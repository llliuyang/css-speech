import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// 自动导入
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:[
      {
        find:'@',
        replacement: path.resolve(__dirname, "src")
      }
    ]
  },
  plugins: [
    vue(),
    AutoImport({
      imports:['vue','vue-router'],
      eslintrc: { enabled: false }, // 改成true生成一次后禁用即可
      dts: "src/auto-import.d.ts" // 生成的全局变量放到此目录下
    })
  ]
  
})
