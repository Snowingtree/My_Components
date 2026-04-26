---
layout: home

hero:
  name: "My Components"
  text: "\u0056\u0075\u0065\u0020\u0033\u0020\u7EC4\u4EF6\u5E93"
  tagline: "\u57FA\u4E8E\u0020\u0056\u0075\u0065\u0020\u0033\u0020\u548C\u0020\u0056\u0069\u0074\u0065\u0020\u6784\u5EFA\uFF0C\u5F53\u524D\u63D0\u4F9B\u57FA\u7840\u7EC4\u4EF6\u3001\u6570\u636E\u5F55\u5165\u3001\u53CD\u9988\u63D0\u793A\u4E0E\u6D6E\u5C42\u4EA4\u4E92\u76F8\u5173\u80FD\u529B\u3002"
  actions:
    - theme: brand
      text: "\u67E5\u770B\u7EC4\u4EF6"
      link: /Components/Button
    - theme: alt
      text: "\u8868\u5355\u7EC4\u4EF6"
      link: /Components/Input

features:
  - title: "\u57FA\u7840\u80FD\u529B"
    details: "\u63D0\u4F9B\u0020\u0042\u0075\u0074\u0074\u006F\u006E\u3001\u0049\u0063\u006F\u006E\u3001\u0049\u006E\u0070\u0075\u0074\u3001\u0053\u0077\u0069\u0074\u0063\u0068\u0020\u7B49\u5E38\u7528\u57FA\u7840\u7EC4\u4EF6\uFF0C\u9002\u5408\u4F5C\u4E3A\u9875\u9762\u4EA4\u4E92\u7684\u57FA\u7840\u642D\u5EFA\u5757\u3002"
  - title: "\u6570\u636E\u5F55\u5165"
    details: "\u63D0\u4F9B\u0020\u0053\u0065\u006C\u0065\u0063\u0074\u3001\u0053\u004B\u0055\u3001\u0043\u006F\u006C\u006C\u0061\u0070\u0073\u0065\u0020\u7B49\u7EC4\u4EF6\uFF0C\u8986\u76D6\u5E38\u89C1\u7684\u9009\u62E9\u3001\u89C4\u683C\u8054\u52A8\u4E0E\u5185\u5BB9\u7EC4\u7EC7\u573A\u666F\u3002"
  - title: "\u53CD\u9988\u4E0E\u6D6E\u5C42"
    details: "\u63D0\u4F9B\u0020\u0041\u006C\u0065\u0072\u0074\u3001\u004D\u0065\u0073\u0073\u0061\u0067\u0065\u3001\u0054\u006F\u006F\u006C\u0074\u0069\u0070\u3001\u0044\u0072\u006F\u0070\u0064\u006F\u0077\u006E\u0020\u7B49\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u72B6\u6001\u53CD\u9988\u3001\u63D0\u793A\u8BF4\u660E\u548C\u83DC\u5355\u5F39\u5C42\u3002"
---

## &#x5F53;&#x524D;&#x7EC4;&#x4EF6;

&#x5F53;&#x524D;&#x7EC4;&#x4EF6;&#x5E93;&#x5DF2;&#x63D0;&#x4F9B;&#x4EE5;&#x4E0B;&#x80FD;&#x529B;&#xFF1A;

- &#x57FA;&#x7840;&#x7EC4;&#x4EF6;&#xFF1A;`Button`&#x3001;`Icon`&#x3001;`Input`&#x3001;`Switch`
- &#x6570;&#x636E;&#x7EC4;&#x4EF6;&#xFF1A;`Select`&#x3001;`SKU`&#x3001;`Collapse`
- &#x53CD;&#x9988;&#x7EC4;&#x4EF6;&#xFF1A;`Alert`&#x3001;`Message`
- &#x6D6E;&#x5C42;&#x7EC4;&#x4EF6;&#xFF1A;`Tooltip`&#x3001;`Dropdown`

## &#x5B89;&#x88C5;

```bash
npm install snowingress-my-components
```

## &#x5FEB;&#x901F;&#x5F00;&#x59CB;

```ts
import { createApp } from 'vue'
import App from './App.vue'
import MyComponents from 'snowingress-my-components'
import 'snowingress-my-components/style.css'

createApp(App).use(MyComponents).mount('#app')
```

## &#x6309;&#x9700;&#x5F15;&#x5165;

```ts
import { Button, Input, Select, SKU, createMessage } from 'snowingress-my-components'
```
