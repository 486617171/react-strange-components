import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { SelectableGroup } from 'react-selectable-fast';
import List from './List';
import './index.css';
import { SelectableGroupValue } from './index.type';
import { isArray, isInteger, isNumber, uniq } from 'lodash';
import { useDeepCompareEffect } from 'ahooks';
import cs from 'classnames';

export type TimePeriodSelectorProps = {
  /**
   * @description 选中项
   * @default undefined
   */
  value?: number[];
  /**
   * @description 当选中项变化时
   * @default undefined
   */
  onChange?: (val: number[]) => void;
  /**
   * @description 选中项的颜色
   * @default #03a9f4
   */
  selectedColor?: string;
  /**
   * @description 自定义样式
   * @default undefined
   */
  style?: React.CSSProperties;
  /**
   * @description 外层容器类名
   * @default undefined
   */
  className?: string;
};

// 这是一个demo
export default (props: TimePeriodSelectorProps) => {
  const { value, onChange, className, style, selectedColor } = props;

  const [selected, setSelected] = useState<SelectableGroupValue>([]);

  const onSelectionFinish = (selectedItem: React.Component<{ value: number }>[]) => {
    const values = selectedItem.map((item) => item.props.value);
    if (onChange) {
      onChange(values);
    }
    if (!value) {
      setSelected(values);
    }
  };

  useDeepCompareEffect(() => {
    if (value) {
      if (!isArray(value)) {
        throw new Error('value不是一个数组');
      }
      // 检测数组每一项是否是整数并且小于168
      if (!value.every((i) => isNumber(i) && isInteger(i) && i < 168)) {
        throw new Error('value包含无效值');
      }
      setSelected(uniq(value));
    }
  }, [value]);

  return (
    // @ts-ignore
    <SelectableGroup
      style={style}
      className={cs('time-period-selector', className)}
      enableDeselect
      onSelectionFinish={onSelectionFinish}
    >
      <List value={selected} selectedColor={selectedColor} />
    </SelectableGroup>
  );
};
