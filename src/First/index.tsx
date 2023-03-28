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
  const a = 1;
  console.log(b);
  const fun =()=> <>222</>;
  return <h1>{title}</h1>;
};
