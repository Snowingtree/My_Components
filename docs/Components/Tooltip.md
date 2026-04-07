---
title: Tooltip | My Components
description: Tooltip 组件文档
---

# Tooltip 文字提示

用于在悬停、点击或手动触发时展示补充说明信息。

## 基础用法

通过 `content` 指定提示内容，并使用 `placement` 控制展示方向。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="支持不同 placement 的悬浮提示"></preview>

## 点击触发和自定义内容

设置 `trigger="click"` 可以改为点击触发，同时使用 `content` 插槽渲染更复杂的内容。

<preview path="../demo/Tooltip/Click.vue" title="点击触发" description="使用 content 插槽渲染自定义内容"></preview>

## 手动触发

设置 `manual` 后，组件不再自动响应 hover 或 click，可以通过实例方法控制显示状态。

<preview path="../demo/Tooltip/Manual.vue" title="手动触发" description="通过实例方法控制 Tooltip 显隐"></preview>

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `content` | 文本内容 | `string` | `-` |
| `trigger` | 触发方式 | `"click" \| "hover"` | `"hover"` |
| `placement` | 弹层位置 | `Placement` | `"bottom"` |
| `manual` | 是否改为手动触发 | `boolean` | `false` |
| `popOptions` | 透传给 Popper 的配置 | `Partial<Options>` | `-` |
| `transition` | 过渡动画名称 | `string` | `"fade"` |
| `openDelay` | 打开延迟，单位毫秒 | `number` | `0` |
| `closeDelay` | 关闭延迟，单位毫秒 | `number` | `0` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `visible-change` | 显示状态变化时触发 | `boolean` |
| `clickOutSize` | 点击组件外部区域时触发 | `boolean` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 触发区域内容 |
| `content` | 自定义弹层内容 |

## Exposes

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `show` | 显示 Tooltip | `() => void` |
| `hidden` | 隐藏 Tooltip | `() => void` |
