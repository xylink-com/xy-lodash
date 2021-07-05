---
order: 2
title: urlParam
group:
  title: 组件
  order: 9
---

# urlParam

urlParam 是一个获取 url 参数得工具，目前支持获取单个参数和获取全部参数

## 例子

```ts
import { urlParam } from '@xylink/toolkit';

const paramA = urlParam.getUrlParam('a');
```

## API

### 方法

#### 1. getUrlParam(name,search)

获取 url search 中参数为 name 的值；其中 search 为选填，默认是 window.location.search

```ts
urlParam.getUrlParam(name: string, search?: string):string | undefined
```

#### 2. getAllUrlParams(search)

获取 url search 中的全部参数，返回一个对象；其中 search 为选填，默认是 window.location.search

```ts
urlParam.getUrlParam(search?: string)
```
