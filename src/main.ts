import { createApp } from 'vue'
// import App from './App.vue'
import App from "./App.vue"

import "@/styles/index.css"

// 引入Icon库
import { library } from '@fortawesome/fontawesome-svg-core'    //用来管理引入的图标
import { fas } from '@fortawesome/free-solid-svg-icons'    //引入的图标名称

library.add(fas);

createApp(App).mount('#app')