---
title: Dropdown | My Components
description: Dropdown 组件文档
---

# Dropdown 下拉菜单

适用于承载一组操作项，常和按钮、文字链或图标按钮一起使用。

## 基础用法

通过 `menu` 传入菜单项数组，监听 `select` 获取用户选择结果。

<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="点击触发下拉菜单并监听选择结果"></preview>

## 自定义菜单项内容

菜单项的 `label` 同时支持字符串和 `VNode`，适合组合图标和文本。

<preview path="../demo/Dropdown/CustomContent.vue" title="自定义菜单项" description="使用 VNode 渲染更复杂的菜单内容"></preview>

## 手动触发

设置 `manual` 后，内部不再自动绑定 hover 或 click 事件，可以通过实例方法手动控制显示和隐藏。

<preview path="../demo/Dropdown/Manual.vue" title="手动触发" description="通过 show 和 hidden 控制下拉菜单"></preview>

## Menu 数据结构

```ts
type MenuOption = {
  label: string | VNode
  key: string | number
  disabled?: boolean
  divided?: boolean
}
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `menu` | 菜单数据源 | `MenuOption[]` | `[]` |
| `hideAfterClick` | 点击菜单项后是否自动关闭 | `boolean` | `true` |
| `trigger` | 触发方式，继承自 Tooltip | `"click" \| "hover"` | `"hover"` |
| `placement` | 菜单弹出位置，继承自 Tooltip | `Placement` | `"bottom"` |
| `manual` | 是否手动触发 | `boolean` | `false` |
| `openDelay` | 打开延迟，单位毫秒 | `number` | `0` |
| `closeDelay` | 关闭延迟，单位毫秒 | `number` | `0` |
| `popOptions` | 透传给 Popper 的配置 | `Partial<Options>` | `-` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `visible-change` | 菜单显示状态变化时触发 | `boolean` |
| `select` | 选择菜单项时触发 | `MenuOption` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `default` | 触发下拉菜单的内容 |

## Exposes

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `show` | 显示下拉菜单 | `() => void` |
| `hidden` | 隐藏下拉菜单 | `() => void` |
