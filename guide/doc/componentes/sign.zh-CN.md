---
order: 2
title: Sign
group:
  title: 组件
  order: 7
---

# Sign

小鱼 API 会对每个访问请求进行企业身份、签名验证，sign 是一个获取 sdk 签名的工具函数。

## 例子

```ts
const obj = {
  method: string, //请求方法
  url: string, //请求URI
  token: string, //token
  body: string, //请求实体
};

const signature = sign(obj);
```

## API

### 方法

#### 1. sign(obj)

获取 sdk 签名
