import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin';

export default defineConfig({
    title: "组件库",
    description: "这是我的一个组件库项目",
    vite:{
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('../../src', import.meta.url))
            },
        },
    },

    themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
        {
            text: 'Examples',
            items: [
                { text: 'Markdown Examples', link: '/markdown-examples' },
                { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        },
        {
            text: 'Basic',
            items: [
                { text: 'Button', link: '/Components/Button' },
                { text: 'Input', link: '/Components/Input' },
            ]
        }
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
    },
    markdown: {
        config(md) {
            md.use(containerPreview);
            md.use(componentPreview);
        },
    }
})
