---
order: 2
title: FullScreen
group:
  title: 组件
  order: 4
---

# FullScreen

此库是封装浏览器全屏 Api，用于将元素全屏显示，支持多个元素全屏切换，支持回调事件；

此库来源于 WebRTC SDK 项目，已经在线上项目中实际应用，具备很强的稳定性和兼容性；

## 例子

```ts
import { fscreen } from '@xylink/toolkit';

useEffect(() => {
  // 初始化元素，并监听全屏状态change事件
  // fullScreenRef: 需要全屏元素Dom节点
  fscreen.init(fullScreenRef, (e: { isFullScreen: boolean }) => {
    // 更新全屏/非全屏状态
  });

  // 元素全屏
  fscreen.request(fullScreenRef);

  return () => {
    // 退出全屏
    fscreen.exit(fullScreenRef);
    // 清理事件/元素
    fscreen.clear(fullScreenRef);
  };
}, []);
```

## API

### 方法

#### 初始化全屏元素和事件

初始化全屏元素和监听 change 事件，支持初始化多个元素；

```ts
fscreen.init(ele: HTMLElement, (e: { isFullScreen: boolean }) => {});
```

#### 请求全屏

将 ele 元素全屏显示

```ts
fscreen.request(ele: HTMLElement): any;
```

#### 退出全屏

```ts
fscreen.exit(ele: HTMLElement): void;
```

#### 清理全屏元素和事件

```ts
fscreen.clear(ele: HTMLElement): void;
```

#### 清理所有监听事件

```ts
fscreen.clearAll(): void;
```
