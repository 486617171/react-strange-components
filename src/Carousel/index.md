---
title: 轮播图
order: 1
group:
  title: 组件
---

## 轮播图

该组件为自定义的轮播图

### 何时使用

多张图片需要展示，且需要图片介绍

### 代码演示

```tsx
import React from 'react';
import { Demo } from 'react-strange-components';
import Carousel from './Carousel';

const imgList = [
  {
    id: 1,
    src: 'https://img2.baidu.com/it/u=2988589017,2923917558&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
    desc: '这是第一张图',
    title: '女孩',
  },
  {
    id: 2,
    src: 'https://img0.baidu.com/it/u=3545961216,3880048105&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500',
    desc: '这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图',
    title: '动漫功夫女孩',
  },
  {
    id: 3,
    src: 'https://img0.baidu.com/it/u=2507528457,963649566&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    desc: '这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图',
    title: '动漫功夫女孩',
  },
  {
    id: 4,
    src: 'https://img0.baidu.com/it/u=3058488254,3490048902&fm=253&fmt=auto&app=138&f=JPEG?w=703&h=500',
    desc: '这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图',
    title: '动漫功夫女孩',
  },
  {
    id: 5,
    src: 'https://img1.baidu.com/it/u=4039131250,4051797107&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
    desc: '这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图',
    title: '动漫功夫女孩',
  },
  {
    id: 6,
    src: 'https://img0.baidu.com/it/u=4008937591,3914402121&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=707',
    desc: '这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图这是第二张图',
    title: '动漫功夫女孩',
  },
];

export default () => <Carousel imgList={imgList} />;
```

<!-- 自动生成API表格 -->

<API id="Demo"></API>
