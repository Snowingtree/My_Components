---
title: Switch | My Components
description: Switch 组件文档
---

# Switch 开关

用于在两种互斥状态之间快速切换，适合表示开启/关闭、启用/停用等状态。

## 基础用法

最常见的用法是将 `v-model` 绑定到一个布尔值。

<preview path="../demo/Switch/Basic.vue" title="基础用法" description="最常见的布尔开关场景"></preview>

## 禁用状态

设置 `disabled` 后，组件不会响应点击或键盘切换。

<preview path="../demo/Switch/Disabled.vue" title="禁用状态" description="禁用后的开关保持只读"></preview>

## 不同尺寸

通过 `size` 切换不同视觉尺寸，支持 `large` 和 `small`。

<preview path="../demo/Switch/Size.vue" title="不同尺寸" description="支持不同尺寸的开关展示"></preview>

## 自定义值类型

除了布尔值，还可以通过 `activeValue` 和 `inactiveValue` 映射到字符串或数字。

<preview path="../demo/Switch/CustomValue.vue" title="自定义值类型" description="支持 boolean、string、number 三种值类型"></preview>

## 文本描述

通过 `activeText` 和 `inactiveText` 展示当前状态对应的提示文字。

<preview path="../demo/Switch/Text.vue" title="文本描述" description="在开关内部展示状态文本"></preview>

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前绑定值 | `boolean \| number \| string` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `activeText` | 打开状态文本 | `string` | `-` |
| `inactiveText` | 关闭状态文本 | `string` | `-` |
| `activeValue` | 打开状态对应的值 | `boolean \| number \| string` | `true` |
| `inactiveValue` | 关闭状态对应的值 | `boolean \| number \| string` | `false` |
| `name` | 原生 `input` 的 `name` 属性 | `string` | `-` |
| `id` | 组件 `id` | `string` | `-` |
| `size` | 开关尺寸 | `"small" \| "large"` | `-` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `change` | 状态切换时触发 | `boolean \| number \| string` |
| `update:modelValue` | 状态切换时触发 | `boolean \| number \| string` |

## 样式变量

可以通过以下 CSS 变量覆盖开关主题颜色：

| 变量名 | 说明 |
| --- | --- |
| `--wm-switch-on-color` | 打开状态背景色 |
| `--wm-switch-off-color` | 关闭状态背景色 |
| `--wm-switch-on-border-color` | 打开状态边框色 |
| `--wm-switch-off-border-color` | 关闭状态边框色 |

## 注意

组件内部同时支持点击和 `Enter` 键切换状态。
