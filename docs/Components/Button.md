---
title: Button | My Components
description: Button 组件文档
---

# Button 按钮

常用的操作触发组件，适合承载提交、跳转、确认等交互。

## 基础用法

按钮支持不同语义类型，默认内容通过插槽传入。

<preview path="../demo/Button/ButtonBasic.vue" title="基础用法" description="最常用的按钮类型和加载态"></preview>

## 样式变体

通过 `plain`、`round` 和 `circle` 组合不同的外观样式。

<preview path="../demo/Button/ButtonStyle.vue" title="样式变体" description="支持朴素按钮、圆角按钮和圆形按钮"></preview>

## 尺寸和状态

支持 `large`、默认、`small` 三种尺寸。设置 `disabled` 或 `loading` 后，按钮都会进入不可点击状态。

<preview path="../demo/Button/ButtonState.vue" title="尺寸和状态" description="支持不同尺寸、禁用态和加载态"></preview>

## 图标按钮

通过 `icon` 直接指定左侧图标，也可以和 `circle` 一起使用。

<preview path="../demo/Button/ButtonIcon.vue" title="图标按钮" description="支持图标、文字和圆形图标按钮"></preview>

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 按钮类型 | `"primary" \| "success" \| "warning" \| "danger" \| "info"` | `-` |
| `size` | 按钮尺寸 | `"large" \| "small"` | `-` |
| `plain` | 是否使用朴素风格 | `boolean` | `false` |
| `round` | 是否使用圆角风格 | `boolean` | `false` |
| `circle` | 是否使用圆形按钮 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `nativeType` | 原生 `button` 的 `type` 属性 | `"button" \| "submit" \| "reset"` | `"button"` |
| `autofocus` | 是否自动获取焦点 | `boolean` | `false` |
| `icon` | 按钮图标名称 | `string` | `-` |
| `loading` | 是否显示加载状态 | `boolean` | `false` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 按钮内容 |

## Exposes

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `ref` | 原生 `button` 元素引用 | `HTMLButtonElement` |
