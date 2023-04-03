import React from 'react';
import TimePeriodSelector from './timePeriodSelector/index';

type DemoProps = {
  /**
   * @description 需要展示的文字
   * @default undefined
   */
  title: string;
};

// 这是一个demo
export default ({ title }: DemoProps) => {
  return (
    <TimePeriodSelector
      value={[]}
      onChange={(val) => {
        console.log(val);
      }}
    />
  );
};
