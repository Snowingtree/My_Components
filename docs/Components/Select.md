---
title: Select | My Components
description: Select 组件文档
---

# Select 选择器

当候选项较多时，使用下拉菜单在有限空间内完成单选。

## 基础用法

通过 `options` 提供选项数据，使用 `v-model` 维护当前值。

<preview path="../demo/Select/Basic.vue" title="基础用法" description="最常见的下拉选择场景"></preview>

## 可清空

设置 `clearable` 后，悬停且已选中时会显示清空图标。

<preview path="../demo/Select/Clearable.vue" title="可清空" description="支持一键清除当前选择"></preview>

## 自定义选项内容

通过 `renderLabel` 返回 `VNode`，可以自定义下拉项的展示结构。

<preview path="../demo/Select/RenderVnode.vue" title="自定义选项内容" description="使用 VNode 自定义选项显示内容"></preview>

## 本地筛选

设置 `filterable` 后可输入关键字筛选，也可以通过 `customfilter` 覆盖默认过滤逻辑。

<preview path="../demo/Select/Filter.vue" title="本地筛选" description="支持默认筛选和自定义筛选函数"></preview>

## 远程搜索

当 `filterable` 与 `remote` 同时开启时，可以通过 `customfilterremote` 返回远程搜索结果。

<preview path="../demo/Select/Remote.vue" title="远程搜索" description="输入关键字后异步加载选项"></preview>

## SelectOption

```ts
type SelectOption = {
  label: string
  value: string | number
  disabled?: boolean
}
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前选中值 | `string \| number` | `-` |
| `options` | 选项数组 | `SelectOption[]` | `[]` |
| `clearable` | 是否支持清空 | `boolean` | `false` |
| `renderLabel` | 自定义选项内容渲染函数 | `(option: SelectOption) => VNode` | `-` |
| `filterable` | 是否开启筛选 | `boolean` | `false` |
| `customfilter` | 自定义本地筛选函数 | `(value: string) => SelectOption[]` | `-` |
| `remote` | 是否开启远程搜索 | `boolean` | `false` |
| `customfilterremote` | 远程搜索函数 | `(value: string) => Promise<SelectOption[]>` | `-` |
| `placeholder` | 占位文本 | `string` | `-` |
| `disabled` | 是否禁用 | `boolean` | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `change` | 选中项变化时触发 | `string` |
| `update:modelValue` | 选中项变化时触发 | `string` |
| `visible-change` | 下拉菜单显示状态变化时触发 | `boolean` |
| `clear` | 清空当前值时触发 | `-` |

## 交互特性

组件当前支持以下键盘操作：

| 按键 | 说明 |
| --- | --- |
| `Enter` | 打开下拉菜单，或确认当前高亮项 |
| `Escape` | 关闭下拉菜单 |
| `ArrowUp` | 向上切换高亮项 |
| `ArrowDown` | 向下切换高亮项 |

## 注意

当前实现有一个需要特别注意的行为：初始化选中项时，是按 `option.value` 匹配 `modelValue`；但用户重新选择后，`change` 和 `update:modelValue` 实际抛出的是选中项的 `label`，不是 `value`。如果业务侧依赖 `value`，需要自行做一层映射。
