/// <reference types="vitest/config" />
// 上面这个配置是最新的配置方法

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    vueJsx(),
  ],
  test:{
        globals:true,
        // 在js中模拟DOM树
        environment:"jsdom"
  },
  resolve:{
    alias:{
        "@":fileURLToPath(new URL('./src',import.meta.url)),
    }
  }
})
