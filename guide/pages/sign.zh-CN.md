<!-- ---
order: 2
nav:
  title: 文档3
  order: 2
--- -->

# Store

store 是一个获取sdk签名的工具函数。

## 例子

```ts
const obj = {
  method: string,
  url: string,
  token: string,
  body: string,
};

const signature = sign(obj);
```

## API

### 方法

#### 1. sign(obj)

获取sdk签名
