import React, { useMemo } from 'react';
import { TimePeriodSelectorProps } from '..';
import { SelectableGroupValue } from '../index.type';
import Item from '../Item';
import './index.css';

type Props = {
  value: SelectableGroupValue;
  selectedColor?: TimePeriodSelectorProps['selectedColor'];
};

const List = ({ value, selectedColor }: Props) => {
  const { data, timeTips, weeks } = useMemo<{
    data: number[];
    timeTips: string[];
    weeks: string[];
  }>(() => {
    return {
      data: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
        94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
        113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
        131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
        149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166,
        167,
      ],
      timeTips: ['00', '03', '06', '09', '12', '15', '18', '21'],
      weeks: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    };
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          {weeks.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <div className="right">
          <div className="timeTips">
            {timeTips.map((item) => (
              <div key={item}>{item}:00</div>
            ))}
          </div>
          <div className="list">
            {data.map((i) => (
              <Item key={i} value={i} selected={value.includes(i)} selectedColor={selectedColor} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className={styles.footer}>
        <div className={styles.tip}>每天</div>
        <div className={styles.selectAllCol}>
          {[
            168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
            185, 186, 187, 188, 189, 190, 191,
          ].map((i) => (
            <Item key={i} value={i} selected={true} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default List;
