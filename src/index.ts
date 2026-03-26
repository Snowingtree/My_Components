import type { App } from 'vue'

import './styles/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Alert from './components/Alert/Alert.vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Dropdown from './components/Dropdown/Dropdown.vue'
import Icon from './components/Icon/Icon.vue'
import Input from './components/Input/Input.vue'
import Message from './components/Message/Message.vue'
import Select from './components/Select/Select.vue'
import Switch from './components/Switch/Switch.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'

import { createMessage, closeAllInstance } from './components/Message/method'

library.add(fas)

const components = [
  Alert,
  Button,
  Collapse,
  CollapseItem,
  Dropdown,
  Icon,
  Input,
  Message,
  Select,
  Switch,
  Tooltip,
]

export {
  Alert,
  Button,
  Collapse,
  CollapseItem,
  Dropdown,
  Icon,
  Input,
  Message,
  Select,
  Switch,
  Tooltip,
  createMessage,
  closeAllInstance,
}

export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name!, component)
    })
  },
}
