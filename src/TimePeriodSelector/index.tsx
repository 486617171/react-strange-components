import React, { useRef, useState } from 'react';
import { SelectableGroup } from 'react-selectable-fast';
import List from './List';
import './index.css';
import { SelectableGroupValue } from './index.type';
import {
  isArray,
  isInteger,
  isNumber,
  range,
  rangeRight,
  union,
  uniq,
  xor,
} from 'lodash';
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

export default (props: TimePeriodSelectorProps) => {
  const { value, onChange, className, style, selectedColor } = props;

  const [selected, setSelected] = useState<SelectableGroupValue>([]);
  const [selectCol, setSelectCol] = useState<SelectableGroupValue>([]);

  const ref = useRef<any>();

  const valueChange = (val: number[]) => {
    setSelected(val);
    if (onChange) {
      onChange(val);
    }
  };

  const computeValueToCol = (val: number[]) => {
    const row: number[] = range(0, 7);
    const col: number[] = range(0, 24);
    const selectCols: number[] = [];
    col.forEach((i) => {
      const arr: number[] = [];
      row.forEach((j) => {
        arr.push(i + j * 24);
      });
      if (arr.every((c) => val.includes(c))) {
        selectCols.push(i + 168);
      }
    });
    setSelectCol(selectCols);
  };

  const onSelectionFinish = (
    selectedItem: React.Component<{ value: number }>[],
  ) => {
    const values = selectedItem.map((item) => item.props.value);
    valueChange(values);
    computeValueToCol(values);
  };

  const onSelectColChange = (col: number) => {
    const weeks: number[] = range(1, 8);
    const values: number[] = weeks.map((i) => col - i * 24);

    let newValues: number[] = [];

    if (selectCol.includes(col)) {
      // 删除
      newValues = xor(selected, values);
    } else {
      // 新增
      newValues = union(selected, values);
    }
    valueChange(newValues);
    controlSelectedValues(newValues);
    setSelectCol(xor(selectCol, [col]));
  };

  const controlSelectedValues = (indexs: number[]) => {
    try {
      const items: any[] = Array.from(ref.current?.registry);
      const newValues: any[] = [];
      items.forEach((item, index) => {
        if (indexs.includes(index)) {
          if (!item.state.isSelected) {
            item.setState({ isSelected: true });
          }
          newValues.push(item);
        } else {
          if (item.state.isSelected) {
            item.setState({ isSelected: false });
          }
        }
      });
      ref.current.selectedItems = new Set(newValues);
    } catch (error) {
      console.log(error);
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
      const uniqValue = uniq(value);
      setSelected(uniqValue);
      controlSelectedValues(uniqValue);
      computeValueToCol(uniqValue);
    }
  }, [value]);

  return (
    <div className={cs('time-period-selector', className)} style={style}>
      {/* @ts-ignore */}
      <SelectableGroup
        ref={ref}
        className="time-period-selector-main"
        enableDeselect
        onSelectionFinish={onSelectionFinish}
      >
        <List selectedColor={selectedColor} />
      </SelectableGroup>
      <div className="time-period-selector-footer">
        <div className="time-period-selector-footer-tip">每天</div>
        <div className="time-period-selector-footer-list">
          {range(168, 192).map((i) => (
            <div
              className="time-period-selector-footer-list-item"
              style={
                selectCol.includes(i)
                  ? { background: selectedColor || '#03a9f4' }
                  : undefined
              }
              key={i}
              onClick={() => {
                onSelectColChange(i);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
