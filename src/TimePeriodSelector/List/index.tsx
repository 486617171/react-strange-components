import React, { useMemo } from 'react';
import { TimePeriodSelectorProps } from '..';
import Item from '../Item';
import './index.css';
import { range } from 'lodash';

type Props = {
  selectedColor?: TimePeriodSelectorProps['selectedColor'];
};

const List = ({ selectedColor }: Props) => {
  const { data, timeTips, weeks } = useMemo<{
    data: number[];
    timeTips: string[];
    weeks: string[];
  }>(() => {
    return {
      data: range(0, 168),
      timeTips: ['00', '03', '06', '09', '12', '15', '18', '21'],
      weeks: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    };
  }, []);

  return (
    <div className="time-period-selector-wrapper">
      <div className="time-period-selector-wrapper-left">
        {weeks.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div className="time-period-selector-wrapper-right">
        <div className="time-period-selector-wrapper-tips">
          {timeTips.map((item) => (
            <div key={item}>{item}:00</div>
          ))}
        </div>
        <div className="time-period-selector-wrapper-list">
          {data.map((i) => (
            <Item key={i} value={i} selectedColor={selectedColor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
