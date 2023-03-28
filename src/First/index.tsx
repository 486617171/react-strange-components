import React from 'react';

type DemoProps = {
  /**
   * @description 需要展示的文字
   * @default undefined
   */
  title: string;
};

// 这是一个demo
export default ({ title }: DemoProps) => {
  return <h1>{title}</h1>;
};
