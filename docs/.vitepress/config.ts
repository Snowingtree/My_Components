import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

export default defineConfig({
  title: 'My Components',
  base: '/components/',
  description: 'Vue 3 \u7EC4\u4EF6\u5E93\u6587\u6863',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  themeConfig: {
    nav: [
      { text: '\u9996\u9875', link: '/' },
      { text: '\u7EC4\u4EF6', link: '/Components/Button' },
    ],
    sidebar: [
      {
        text: 'Basic',
        items: [
          { text: 'Button', link: '/Components/Button' },
          { text: 'Icon', link: '/Components/Icon' },
          { text: 'Input', link: '/Components/Input' },
          { text: 'Switch', link: '/Components/Switch' },
        ],
      },
      {
        text: 'Data',
        items: [
          { text: 'Select', link: '/Components/Select' },
          { text: 'Collapse', link: '/Components/Collapse' },
        ],
      },
      {
        text: 'Feedback',
        items: [
          { text: 'Alert', link: '/Components/Alert' },
          { text: 'Message', link: '/Components/Message' },
        ],
      },
      {
        text: 'Overlay',
        items: [
          { text: 'Tooltip', link: '/Components/Tooltip' },
          { text: 'Dropdown', link: '/Components/Dropdown' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Snowingtree/My_Components' },
    ],
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
})
