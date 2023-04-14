import React, { LegacyRef } from 'react';
import { createSelectable } from 'react-selectable-fast';
import { TimePeriodSelectorProps } from '..';
import './index.css';

type Props = {
  value: number;
  selectedColor?: TimePeriodSelectorProps['selectedColor']; // 自定义选中颜色
  isSelected?: boolean;
  selectableRef?: LegacyRef<HTMLDivElement>;
};

const Item = (props: Props) => {
  const { selectableRef, selectedColor, isSelected } = props;

  return (
    <div
      className={'time-period-selector-wrapper-list-item'}
      style={
        isSelected ? { background: selectedColor || '#03a9f4' } : undefined
      }
      ref={selectableRef}
    />
  );
};

export default createSelectable(Item);
