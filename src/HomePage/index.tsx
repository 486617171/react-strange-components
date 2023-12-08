import React from 'react';
import styles from './index.less';

type Props = {};

const HomePage = ({}: Props) => {
  return (
    <div className={styles.container}>
      <h1>React中不常用的组件</h1>
      <div>
        <ul>
          <li>时间周期选择器</li>
          <li>表情选择器</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
