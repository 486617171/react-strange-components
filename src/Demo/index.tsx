import React from 'react';

type DemoProps = {
  /**
   * @description 需要展示的文字
   * @default undefined
   */
  title: string;
};

// 这是一个demo
export default ({ title }: DemoProps) => <h1>{title}</h1>;

// 编写组件后需要在 src/index.ts 中导出组件
