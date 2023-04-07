import React, { LegacyRef } from 'react';
import { createSelectable } from 'react-selectable-fast';
import { TimePeriodSelectorProps } from '..';
import './index.css';

type Props = {
  value: number;
  selected: boolean;
  selectedColor?: TimePeriodSelectorProps['selectedColor']; // 自定义选中颜色
  isSelected?: boolean;
  selectableRef?: LegacyRef<HTMLDivElement>;
};

const Item = (props: Props) => {
  const { selectableRef, selected, selectedColor } = props;
  return (
    <div
      className={'time-period-selector-wrapper-list-item'}
      style={selected ? { background: selectedColor || '#03a9f4' } : undefined}
      ref={selectableRef}
    />
  );
};

export default createSelectable(Item);
