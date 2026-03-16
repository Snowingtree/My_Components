---
title: Select | V-Element
description: Select 组件的文档

---

## 选择器

当选项过多时，使用下拉菜单展示并选择内容。

#### 基础用法

适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值。

<preview path="../demo/Select/Basic.vue" title="基础选择器" description="Select 基础选择器"></preview>

#### 清空图标

使用`clearable`属性,则可以将选择器清空

<preview path="../demo/Select/Clearable.vue" title="基础选择器" description="Select 清空图标"></preview>

#### 自定义模板

使用VNode，支持用户直接输入HTML标签内容

<preview path="../demo/Select/RenderVnode.vue" title="基础选择器" description="Select 自定义模板"></preview>

#### 可筛选选项

支持自定义的筛选和默认的筛选方式

<preview path="../demo/Select/Filter.vue" title="基础选择器" description="Select 可筛选选项"></preview>

#### 支持远程联想

支持远程联想的方法,输入关键词，从服务器中查找数据，关键需要设置三个参数：`filterable`,`remote`,`customfilterremote`,前两者是变量，开始过滤和远程联想，第三个参数是函数，返回一个`Promise`类型,函数的类型为`(value:string)=>Promise<SelectOption[]>`。

<preview path="../demo/Select/Remote.vue" title="基础选择器" description="Select 可筛选选项"></preview>

