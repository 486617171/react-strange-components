---
title: 文字展开收起
order: 3
group:
  title: 组件
---

# 文字展开收起

用于文字过多时的展示

## 何时使用

当文字过多时，需要用户手动去展开查看详情，或者通过点击跳转详情页面

## 代码演示

```tsx
/**
 * title: 常规用法（超出最大行数）
 */
import React from 'react';
import { TextFolding } from 'react-strange-components';

export default () => {
  return (
    <TextFolding>
      很多人都说他们不在意别人怎么看她，但大部分都是自欺欺人。一般而言，他们之所以能我行我素，是因为他们自以为没人懂得他们天马行空的想法。最极端的情况也不过是他们得到了几位密友的支持，才敢于冒天下之大不韪。他怀揣着罗密欧的激情，却被上天赐予托比·贝尔契爵士的身材；他生性善良、慷慨，却不停地落人笑柄；他打心眼里热爱美的事物，笔下却只能创作出庸俗之作；他感情细腻，举止却十分粗俗；他处理人事物富于谋略，却把自己的事搞得糟糕透顶。大自然在创造他时，将这么多相互排斥的特质杂糅于一身，让他独自面对这个冷酷的令他困惑的世界，这个玩笑未免开得太过残忍
    </TextFolding>
  );
};
```

```tsx
/**
 * title: 常规用法（自定义最大行数）
 */
import React from 'react';
import { TextFolding } from 'react-strange-components';

export default () => {
  return (
    <TextFolding maxRow={3}>
      很多人都说他们不在意别人怎么看她，但大部分都是自欺欺人。一般而言，他们之所以能我行我素，是因为他们自以为没人懂得他们天马行空的想法。最极端的情况也不过是他们得到了几位密友的支持，才敢于冒天下之大不韪。他怀揣着罗密欧的激情，却被上天赐予托比·贝尔契爵士的身材；他生性善良、慷慨，却不停地落人笑柄；他打心眼里热爱美的事物，笔下却只能创作出庸俗之作；他感情细腻，举止却十分粗俗；他处理人事物富于谋略，却把自己的事搞得糟糕透顶。大自然在创造他时，将这么多相互排斥的特质杂糅于一身，让他独自面对这个冷酷的令他困惑的世界，这个玩笑未免开得太过残忍
    </TextFolding>
  );
};
```

```tsx
/**
 * title: 常规用法（未超出）
 */
import React from 'react';
import { TextFolding } from 'react-strange-components';

export default () => {
  return (
    <TextFolding maxRow={10}>
      很多人都说他们不在意别人怎么看她，但大部分都是自欺欺人。一般而言，他们之所以能我行我素，是因为他们自以为没人懂得他们天马行空的想法。
    </TextFolding>
  );
};
```

```tsx
/**
 * title: 自定义展开收起文本，自定义事件
 */
import React from 'react';
import { TextFolding } from 'react-strange-components';

export default () => {
  return (
    <TextFolding
      actions={{
        enable: true,
        style: { color: 'red' },
        expand: {
          text: '打开',
          event: () => {
            console.log('点击了打开');
          },
        },
        retract: {
          text: '关闭',
          event: () => {
            console.log('点击了关闭');
          },
        },
      }}
    >
      很多人都说他们不在意别人怎么看她，但大部分都是自欺欺人。一般而言，他们之所以能我行我素，是因为他们自以为没人懂得他们天马行空的想法。最极端的情况也不过是他们得到了几位密友的支持，才敢于冒天下之大不韪。他怀揣着罗密欧的激情，却被上天赐予托比·贝尔契爵士的身材；他生性善良、慷慨，却不停地落人笑柄；他打心眼里热爱美的事物，笔下却只能创作出庸俗之作；他感情细腻，举止却十分粗俗；他处理人事物富于谋略，却把自己的事搞得糟糕透顶。大自然在创造他时，将这么多相互排斥的特质杂糅于一身，让他独自面对这个冷酷的令他困惑的世界，这个玩笑未免开得太过残忍
    </TextFolding>
  );
};
```

```tsx
/**
 * title: 关闭展开收起功能，给予点击事件
 */
import React from 'react';
import { TextFolding } from 'react-strange-components';

export default () => {
  return (
    <TextFolding
      actions={{
        enable: false,
        expand: {
          text: '【阅读更多】',
          event: () => {
            console.log('点击了【阅读更多】');
          },
        },
      }}
    >
      很多人都说他们不在意别人怎么看她，但大部分都是自欺欺人。一般而言，他们之所以能我行我素，是因为他们自以为没人懂得他们天马行空的想法。最极端的情况也不过是他们得到了几位密友的支持，才敢于冒天下之大不韪。他怀揣着罗密欧的激情，却被上天赐予托比·贝尔契爵士的身材；他生性善良、慷慨，却不停地落人笑柄；他打心眼里热爱美的事物，笔下却只能创作出庸俗之作；他感情细腻，举止却十分粗俗；他处理人事物富于谋略，却把自己的事搞得糟糕透顶。大自然在创造他时，将这么多相互排斥的特质杂糅于一身，让他独自面对这个冷酷的令他困惑的世界，这个玩笑未免开得太过残忍
    </TextFolding>
  );
};
```

<!-- 自动生成API表格 -->

<API id="TextFolding"></API>
