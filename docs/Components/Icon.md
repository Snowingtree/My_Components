---
title: Icon | My Components
description: Icon 组件文档
---

# Icon 图标

基于 Font Awesome 封装，适合在按钮、输入框和状态提示中复用统一图标能力。

## 基础用法

通过 `icon` 指定图标名称，也可以继续传递 Font Awesome 原生的尺寸等属性。

<preview path="../demo/Icon/Basic.vue" title="基础用法" description="传入 icon 名称快速渲染图标"></preview>

## 语义颜色和自定义颜色

组件支持库内置的语义类型，同时也支持直接通过 `color` 覆盖颜色。

<preview path="../demo/Icon/Theme.vue" title="颜色和状态" description="支持 type、color 以及 spin 等原生能力"></preview>

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `icon` | Font Awesome 图标名称或图标定义 | `FontAwesomeIconProps["icon"]` | `-` |
| `type` | 语义色类型 | `"primary" \| "success" \| "warning" \| "danger" \| "info"` | `-` |
| `color` | 自定义颜色，优先级高于语义色类名 | `string` | `-` |

## 继承能力

除上表外，`Icon` 还支持 `FontAwesomeIcon` 的常用原生属性，例如 `size`、`spin`、`pulse`、`beat` 等。
