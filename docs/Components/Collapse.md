---
title: Collapse | My Components
description: Collapse 组件文档
---

# Collapse 折叠面板

在有限空间中组织多块内容，按需展开查看细节。

## 基础用法

`Collapse` 通过 `v-model` 维护当前展开项，默认支持同时展开多个面板。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="默认支持多个面板同时展开"></preview>

## 手风琴模式

设置 `accordion` 后，同一时间只会展开一个面板。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴模式" description="一次只展开一个面板"></preview>

## 自定义标题和禁用项

`CollapseItem` 支持 `title` 插槽，也支持通过 `disabled` 禁用交互。

<preview path="../demo/Collapse/CustomTitle.vue" title="自定义标题" description="支持 title 插槽和禁用状态"></preview>

## Collapse Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前展开项集合 | `(string \| number)[]` | `[]` |
| `accordion` | 是否启用手风琴模式 | `boolean` | `false` |

## Collapse Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 展开项变化时触发 | `(string \| number)[]` |
| `change` | 展开项变化时触发 | `(string \| number)[]` |

## CollapseItem Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 当前面板的唯一标识 | `string \| number` | `-` |
| `title` | 面板标题 | `string` | `-` |
| `disabled` | 是否禁用当前面板 | `boolean` | `false` |

## CollapseItem Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 面板内容 |
| `title` | 自定义面板标题 |

## 注意

即使在 `accordion` 模式下，`v-model` 仍然使用数组作为值，这一点需要和普通模式保持一致。
