---
title: 时间周期选择器
order: 1
group:
  title: 组件
---

# 时间周期选择器

可视化时间选择，在容器内按住鼠标左键拖动进行选择

## 何时使用

- 选择某天的某个小时

## 代码演示

```tsx
/**
 * title: 基础用法
 */
import React from 'react';
import { TimePeriodSelector } from 'react-strange-components';

export default () => {
  return (
    <TimePeriodSelector
      style={{ width: 500, margin: '0 auto' }}
      onChange={(val) => {
        console.log(val);
      }}
    />
  );
};
```

```tsx
/**
 * title: 受控状态
 */
import React, { useState } from 'react';
import { TimePeriodSelector } from 'react-strange-components';

export default () => {
  const [value, setValue] = useState<number[]>([0, 1]);

  return (
    <TimePeriodSelector
      style={{ width: 500, margin: '0 auto' }}
      value={value}
      onChange={(val) => {
        setValue(val);
      }}
    />
  );
};
```

```tsx
/**
 * title: 受控状态
 * description: 自定义选中颜色
 */
import React, { useState } from 'react';
import { TimePeriodSelector } from 'react-strange-components';

export default () => {
  const [value, setValue] = useState<number[]>([0, 1]);

  return (
    <TimePeriodSelector
      style={{ width: 500, margin: '0 auto' }}
      value={value}
      onChange={(val) => {
        setValue(val);
      }}
      selectedColor="yellow"
    />
  );
};
```

<!-- 自动生成API表格 -->

<API id="TimePeriodSelector"></API>

## 注意

- value 的取值范围是[0,167]
- 0 --> 周一 00：00
