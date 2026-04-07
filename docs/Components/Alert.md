---
title: Alert | My Components
description: Alert 组件文档
---

# Alert 提示

用于页面中展示简洁的状态信息。

## 基础用法

不同的 `type` 对应不同的语义风格。

<preview path="../demo/Alert/Basic.vue" title="基础用法" description="通过 type 区分不同语义的提示"></preview>

## 深色主题

通过 `effect="dark"` 切换为深色风格，也可以结合 `icon` 和 `center` 使用。

<preview path="../demo/Alert/Dark.vue" title="深色主题" description="深色提示、图标和居中布局"></preview>

## 自定义内容

默认插槽会直接替代 `title`。如果需要从外部关闭提示，可以通过组件实例暴露的 `close()` 方法控制。

<preview path="../demo/Alert/ManualClose.vue" title="自定义内容" description="使用默认插槽和实例方法关闭提示"></preview>

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title` | 提示文本，未传入默认插槽时显示 | `string` | `-` |
| `type` | 提示类型 | `"primary" \| "success" \| "warning" \| "danger" \| "info"` | `-` |
| `effect` | 主题风格 | `"light" \| "dark"` | `"light"` |
| `closable` | 是否应用可关闭样式 | `boolean` | `false` |
| `center` | 内容是否居中显示 | `boolean` | `false` |
| `icon` | 左侧图标名称 | `string` | `-` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 自定义提示内容，优先级高于 `title` |

## Exposes

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `close` | 关闭当前提示 | `() => void` |
