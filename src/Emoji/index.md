---
title: 表情选择器
order: 2
group:
  title: 组件
demo:
  cols: 2
---

# 表情选择器

高阶组件；赋予输入框表情选择的能力

## 何时使用

当你需要输入表情时使用，内置 win 10、苹果、Facebook、谷歌、推特表情

## 代码演示

```tsx
/**
 * title: 常规用法
 */
import React, { useState } from 'react';
import { Emoji } from 'react-strange-components';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Emoji value={value} onChange={(e) => setValue(e.target.value)}>
      <input></input>
    </Emoji>
  );
};
```

```tsx
/**
 * title: 不同的表情类型
 */
import React, { useState } from 'react';
import { Emoji } from 'react-strange-components';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Emoji set="apple" value={value} onChange={(e) => setValue(e.target.value)}>
      <input></input>
    </Emoji>
  );
};
```

```tsx
/**
 * title: textarea兼容
 */
import React, { useState } from 'react';
import { Emoji } from 'react-strange-components';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Emoji value={value} onChange={(e) => setValue(e.target.value)}>
      <textarea></textarea>
    </Emoji>
  );
};
```

<!-- 自动生成API表格 -->

<API id="Demo"></API>
