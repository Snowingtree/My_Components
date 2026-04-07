---
title: Input | My Components
description: Input 组件文档
---

# Input 输入框

用于通过键盘输入文本内容，支持单行、多行、密码和复合输入等常见场景。

## 基础用法

最基础的文本输入通过 `v-model` 绑定当前值。

<preview path="../demo/Input/Basic.vue" title="基础用法" description="最常用的单行文本输入"></preview>

## 禁用状态

设置 `disabled` 后，输入框会进入不可编辑状态。

<preview path="../demo/Input/Disable.vue" title="禁用状态" description="禁用后的输入框不能获得编辑能力"></preview>

## 不同尺寸

通过 `size` 切换输入框尺寸，支持默认、`large` 和 `small`。

<preview path="../demo/Input/Size.vue" title="不同尺寸" description="支持 large 和 small 两种尺寸扩展"></preview>

## 复合输入框

通过 `prepend`、`append`、`prefix`、`suffix` 四个插槽组合更复杂的输入结构。

<preview path="../demo/Input/Combo.vue" title="复合输入框" description="支持前置、后置、前缀和后缀插槽"></preview>

## 多行文本

设置 `type="textarea"` 后，组件会渲染为原生 `textarea`。

<preview path="../demo/Input/Textarea.vue" title="Textarea" description="适合输入多行文本内容"></preview>

## 密码框

设置 `show-password` 后，可以切换密码的显示和隐藏状态。

<preview path="../demo/Input/Password.vue" title="密码框" description="支持显示和隐藏密码内容"></preview>

## 可清空

设置 `clearable` 后，聚焦且有值时会显示清空图标。

<preview path="../demo/Input/Clear.vue" title="可清空" description="点击清空图标会触发 clear 事件"></preview>

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modelValue` | 当前输入值 | `string` | `-` |
| `type` | 输入框类型 | `"text" \| "textarea" \| "password"` | `"text"` |
| `size` | 输入框尺寸 | `"large" \| "small"` | `-` |
| `clearable` | 是否显示清空按钮 | `boolean` | `false` |
| `showPassword` | 是否显示密码切换按钮 | `boolean` | `false` |
| `disabled` | 是否禁用 | `boolean` | `false` |
| `placeholder` | 占位文本 | `string` | `-` |
| `readonly` | 是否只读 | `boolean` | `false` |
| `autocomplete` | 原生自动补全属性 | `string` | `"off"` |
| `form` | 关联的表单 `id` | `string` | `-` |
| `autofocus` | 是否自动获取焦点 | `boolean` | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| `update:modelValue` | 输入值变化时触发 | `string` |
| `input` | 原生输入时触发 | `string` |
| `change` | 输入值变化并触发原生 change 时触发 | `string` |
| `focus` | 获得焦点时触发 | `FocusEvent` |
| `blur` | 失去焦点时触发 | `FocusEvent` |
| `clear` | 点击清空图标时触发 | `-` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| `prepend` | 输入框前置内容 |
| `append` | 输入框后置内容 |
| `prefix` | 输入框内部前缀内容 |
| `suffix` | 输入框内部后缀内容 |

## Exposes

| 名称 | 说明 | 类型 |
| --- | --- | --- |
| `ref` | 原生 `input` 或 `textarea` 元素引用 | `HTMLInputElement \| HTMLTextAreaElement` |

## 注意

组件会把未显式声明的原生属性透传给内部的 `input` 或 `textarea`，例如 `maxlength`、`name`、`rows` 等。
