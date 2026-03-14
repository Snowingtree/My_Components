// 默认的主题
import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'

// 引入Icon库
import { library } from '@fortawesome/fontawesome-svg-core'    //用来管理引入的图标
import { fas } from '@fortawesome/free-solid-svg-icons'    //引入的图标名称

import {
  ElementPlusContainer,
} from '@vitepress-demo-preview/component';

import '@vitepress-demo-preview/component/dist/style.css';
import '../../../src/styles/index.css'
import './custom.css'

library.add(fas);
export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer);
  },
};