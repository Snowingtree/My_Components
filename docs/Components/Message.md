---
title: Message | My Components
description: Message 组件文档
---

# Message 消息提示

用于页面顶部短暂展示操作反馈。这个组件更适合通过函数方式调用。

## 基础用法

使用 `createMessage` 快速创建不同类型的消息提示。

<preview path="../demo/Message/Basic.vue" title="基础用法" description="通过 createMessage 创建消息提示"></preview>

## 高级用法

支持常驻消息、关闭按钮、VNode 内容，以及一键关闭全部实例。

<preview path="../demo/Message/Advanced.vue" title="高级用法" description="支持 showClose、duration 和 closeAllInstance"></preview>

## 推荐调用方式

```ts
import { createMessage, closeAllInstance } from 'snowingress-my-components'

createMessage({
  type: 'success',
  message: '保存成功',
  duration: 3000,
})

closeAllInstance()
```

## createMessage 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `message` | 消息内容，支持字符串或 `VNode` | `string \| VNode` | `-` |
| `type` | 消息类型 | `"success" \| "warning" \| "danger" \| "info"` | `"info"` |
| `duration` | 自动关闭延迟，单位毫秒，`0` 表示不自动关闭 | `number` | `3000` |
| `showClose` | 是否显示关闭按钮 | `boolean` | `false` |
| `offset` | 消息之间的垂直间距 | `number` | `20` |

## 方法

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `createMessage` | 创建一条新的消息提示 | `(options) => MessageInfo` |
| `closeAllInstance` | 关闭当前所有消息实例 | `() => void` |

## 注意

虽然 `Message` 组件本身也被导出，但它内部依赖 `id`、`destroy` 等运行时参数。实际业务中更推荐直接使用 `createMessage`。
