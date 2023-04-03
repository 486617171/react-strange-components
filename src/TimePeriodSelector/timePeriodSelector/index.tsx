import type { FC } from 'react';
// @ts-ignore
import TimePeriod from './TimePeriodSelector/index';
import styles from './index.less';
import React from 'react';

interface PageProps {
  value?: number[] | string;
  onChange?: (par: any) => void;
}

const TimePeriodSelector: FC<PageProps> = ({ value, onChange }) => {
  const selectTimeChange = (values: any) => {
    if (onChange) {
      const data: any[] = [];
      values.forEach((item: any) => {
        const start_minute = item[0].column * 60;
        const end_minute = (item[item.length - 1].column + 1) * 60;
        if (item[0].row === 6) {
          item[0].row = -1;
        }

        for (let i = 0; i < data.length; i++) {
          if (start_minute === data[i].start_minute && end_minute === data[i].end_minute) {
            data[i].days.push(item[0].row + 1);
            data[i].days = data[i].days.sort();
            return;
          }
        }

        data.push({
          start_minute,
          end_minute,
          days: [item[0].row + 1],
        });
      });

      onChange(data);
    }
  };

  const initDefault = (values: any) => {
    if (values) {
      const newData: any[] = [];

      values?.forEach(({ start_minute, end_minute, days }: any) => {
        days.forEach((day: number) => {
          let myDay: number = day;
          if (day === 0) {
            myDay = 7;
          }
          for (let i = start_minute / 60; i < end_minute / 60; i++) {
            newData.push(i + (myDay - 1) * 24);
          }
        });
      });

      return newData;
    }
    return null;
  };

  return (
    <div className={styles.container}>
      {value ? (
        <TimePeriod
          onSelectionFinish={selectTimeChange}
          defaultSelected={value === '混用值' ? [] : initDefault(value)}
        />
      ) : null}
    </div>
  );
};

export default TimePeriodSelector;
