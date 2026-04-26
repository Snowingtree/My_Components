---
title: SKU | My Components
description: SKU docs.
---

# SKU &#x89c4;&#x683c;&#x9009;&#x62e9;

&#x7528;&#x4E8E;&#x6839;&#x636E;&#x5408;&#x6CD5;&#x89C4;&#x683C;&#x7EC4;&#x5408;&#x8054;&#x52A8;&#x63A7;&#x5236;&#x9009;&#x9879;&#x53EF;&#x9009;&#x72B6;&#x6001;&#xFF0C;&#x9002;&#x5408;&#x5546;&#x54C1;&#x8BE6;&#x60C5;&#x9875;&#x4E2D;&#x7684;&#x989C;&#x8272;&#x3001;&#x5957;&#x9910;&#x3001;&#x5BB9;&#x91CF;&#x3001;&#x5C3A;&#x7801;&#x7B49; SKU &#x9009;&#x62E9;&#x573A;&#x666F;&#x3002;

## &#x57FA;&#x7840;&#x7528;&#x6CD5;

&#x901A;&#x8FC7; `specList` &#x63D0;&#x4F9B;&#x89C4;&#x683C;&#x7EC4;&#xFF0C;&#x901A;&#x8FC7; `specCombinationList` &#x63D0;&#x4F9B;&#x6240;&#x6709;&#x5408;&#x6CD5;&#x7EC4;&#x5408;&#x3002;&#x70B9;&#x51FB;&#x67D0;&#x4E2A;&#x9009;&#x9879;&#x540E;&#xFF0C;&#x7EC4;&#x4EF6;&#x4F1A;&#x81EA;&#x52A8;&#x7981;&#x7528;&#x5F53;&#x524D;&#x6761;&#x4EF6;&#x4E0B;&#x4E0D;&#x53EF;&#x8FBE;&#x7684;&#x89C4;&#x683C;&#x503C;&#x3002;

<preview path="../demo/SKU/Basic.vue" title="&#x57FA;&#x7840;&#x7528;&#x6CD5;" description="&#x6839;&#x636E;&#x5408;&#x6CD5;&#x7EC4;&#x5408;&#x81EA;&#x52A8;&#x8054;&#x52A8;&#x53EF;&#x9009;&#x4E0E;&#x7981;&#x7528;&#x72B6;&#x6001;"></preview>

## &#x53CC;&#x89C4;&#x683C;&#x573A;&#x666F;

&#x89C4;&#x683C;&#x7EC4;&#x6570;&#x91CF;&#x4E0D;&#x53D7;&#x9650;&#x5236;&#xFF0C;&#x4E24;&#x4E2A;&#x89C4;&#x683C;&#x7EC4;&#x7684;&#x7B80;&#x5355;&#x573A;&#x666F;&#x4E5F;&#x53EF;&#x4EE5;&#x76F4;&#x63A5;&#x4F7F;&#x7528;&#x3002;

<preview path="../demo/SKU/Simple.vue" title="&#x53CC;&#x89C4;&#x683C;&#x573A;&#x666F;" description="&#x9002;&#x5408;&#x5C3A;&#x7801;&#x4E0E;&#x9762;&#x6599;&#x7B49;&#x8F83;&#x8F7B;&#x91CF;&#x7684;&#x89C4;&#x683C;&#x8054;&#x52A8;"></preview>

## &#x57FA;&#x7840;&#x6570;&#x636E;&#x7ED3;&#x6784;

```ts
type SpecItem = {
  id: string
  title: string
  list: string[]
}

type SpecCombinationItem = {
  id: string
  specs: string[]
}
```

## Props

| &#x5C5E;&#x6027; | &#x8BF4;&#x660E; | &#x7C7B;&#x578B; | &#x9ED8;&#x8BA4;&#x503C; |
| --- | --- | --- | --- |
| `specList` | &#x89C4;&#x683C;&#x7EC4;&#x5217;&#x8868;&#xFF0C;&#x6BCF;&#x4E00;&#x9879;&#x5305;&#x542B;&#x6807;&#x9898;&#x548C;&#x53EF;&#x9009;&#x503C;&#x5217;&#x8868; | `SpecItem[]` | `[]` |
| `specCombinationList` | &#x6240;&#x6709;&#x5408;&#x6CD5;&#x7684;&#x89C4;&#x683C;&#x7EC4;&#x5408;&#xFF0C;&#x7EC4;&#x4EF6;&#x4F1A;&#x636E;&#x6B64;&#x8BA1;&#x7B97;&#x54EA;&#x4E9B;&#x9009;&#x9879;&#x53EF;&#x9009; | `SpecCombinationItem[]` | `[]` |

## Events

&#x5F53;&#x524D;&#x7248;&#x672C;&#x672A;&#x63D0;&#x4F9B;&#x7EC4;&#x4EF6;&#x4E8B;&#x4EF6;&#x8F93;&#x51FA;&#x3002;

## &#x6837;&#x5F0F;&#x53D8;&#x91CF;

&#x53EF;&#x4EE5;&#x901A;&#x8FC7;&#x4EE5;&#x4E0B; CSS &#x53D8;&#x91CF;&#x8986;&#x76D6; SKU &#x7EC4;&#x4EF6;&#x7684;&#x89C6;&#x89C9;&#x6837;&#x5F0F;&#xFF1A;

| &#x53D8;&#x91CF;&#x540D; | &#x8BF4;&#x660E; |
| --- | --- |
| `--wm-sku-bg-color` | &#x7EC4;&#x4EF6;&#x5BB9;&#x5668;&#x80CC;&#x666F;&#x8272; |
| `--wm-sku-border-color` | &#x7EC4;&#x4EF6;&#x5BB9;&#x5668;&#x8FB9;&#x6846;&#x8272; |
| `--wm-sku-title-color` | &#x89C4;&#x683C;&#x6807;&#x9898;&#x6587;&#x5B57;&#x989C;&#x8272; |
| `--wm-sku-item-bg-color` | &#x666E;&#x901A;&#x9009;&#x9879;&#x80CC;&#x666F;&#x8272; |
| `--wm-sku-item-border-color` | &#x666E;&#x901A;&#x9009;&#x9879;&#x8FB9;&#x6846;&#x8272; |
| `--wm-sku-item-hover-bg-color` | &#x60AC;&#x505C;&#x9009;&#x9879;&#x80CC;&#x666F;&#x8272; |
| `--wm-sku-item-hover-border-color` | &#x60AC;&#x505C;&#x9009;&#x9879;&#x8FB9;&#x6846;&#x8272; |
| `--wm-sku-item-hover-color` | &#x60AC;&#x505C;&#x9009;&#x9879;&#x6587;&#x5B57;&#x989C;&#x8272; |
| `--wm-sku-item-active-bg-color` | &#x9009;&#x4E2D;&#x9009;&#x9879;&#x80CC;&#x666F;&#x8272; |
| `--wm-sku-item-active-border-color` | &#x9009;&#x4E2D;&#x9009;&#x9879;&#x8FB9;&#x6846;&#x8272; |
| `--wm-sku-item-active-color` | &#x9009;&#x4E2D;&#x9009;&#x9879;&#x6587;&#x5B57;&#x989C;&#x8272; |
| `--wm-sku-item-disabled-bg-color` | &#x7981;&#x7528;&#x9009;&#x9879;&#x80CC;&#x666F;&#x8272; |
| `--wm-sku-item-disabled-border-color` | &#x7981;&#x7528;&#x9009;&#x9879;&#x8FB9;&#x6846;&#x8272; |
| `--wm-sku-item-disabled-color` | &#x7981;&#x7528;&#x9009;&#x9879;&#x6587;&#x5B57;&#x989C;&#x8272; |

## &#x6CE8;&#x610F;

- &#x70B9;&#x51FB;&#x5DF2;&#x9009;&#x4E2D;&#x7684;&#x9009;&#x9879;&#x4F1A;&#x53D6;&#x6D88;&#x8BE5;&#x89C4;&#x683C;&#x7EC4;&#x5F53;&#x524D;&#x9009;&#x62E9;&#x3002;
- &#x4E0D;&#x5408;&#x6CD5;&#x7684;&#x7EC4;&#x5408;&#x4F1A;&#x5B9E;&#x65F6;&#x7F6E;&#x7070;&#xFF0C;&#x5E76;&#x963B;&#x6B62;&#x70B9;&#x51FB;&#x3002;
- &#x7EC4;&#x4EF6;&#x5185;&#x90E8;&#x4F1A;&#x81EA;&#x884C;&#x7EF4;&#x62A4;&#x9009;&#x4E2D;&#x72B6;&#x6001;&#xFF0C;&#x5F53;&#x524D;&#x7248;&#x672C;&#x6CA1;&#x6709;&#x901A;&#x8FC7; `v-model`&#x3001;&#x4E8B;&#x4EF6;&#x6216; `expose` &#x5BF9;&#x5916;&#x540C;&#x6B65;&#x9009;&#x4E2D;&#x7ED3;&#x679C;&#x3002;

&#x5982;&#x679C;&#x4E1A;&#x52A1;&#x4FA7;&#x9700;&#x8981;&#x62FF;&#x5230;&#x6700;&#x7EC8;&#x9009;&#x4E2D;&#x7684; SKU &#x7ED3;&#x679C;&#xFF0C;&#x5EFA;&#x8BAE;&#x540E;&#x7EED;&#x4E3A;&#x7EC4;&#x4EF6;&#x8865;&#x5145; `change` &#x4E8B;&#x4EF6;&#x6216; `v-model` &#x80FD;&#x529B;&#x3002;
