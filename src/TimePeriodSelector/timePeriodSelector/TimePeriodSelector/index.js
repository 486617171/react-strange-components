/* eslint-disable @typescript-eslint/no-invalid-this */
import { cloneDeep } from 'lodash';
import React, { PureComponent } from 'react';
import { SelectableGroup } from 'react-selectable-fast';
import List from '../List/List';
import { uniq } from 'lodash';
require('./index.css');

function prefixNum(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

export default class TimePeriodSelector extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tolerance: true,
      globalMouse: true,
      items: [],
      groupedData: [],
      tips: `Drag the mouse to select time period`,
      timeObj: {},
      selectAll: [],
    };
    this.startIndex = null;
    this.endIndex = null;
  }

  arrange = (source) => {
    let t;
    let ta;
    let r = [];

    for (let j = 0; j < source.length; j++) {
      let v = source[j];
      if (v != null) {
        if (t === v.column) {
          ta.push(v);
          t++;
          continue;
        }
        ta = [v];
        t = v.column + 1;
        r.push(ta);
      }
    }
    return r;
  };

  handleSelecting = () => {
    // console.log(e)
  };
  handleSelectionClear = () => {};
  handleSelectionFinish = (selectedItems) => {
    // 获取选中items;
    const arr = selectedItems.map((item) => {
      // delete item.props.value.isSelected;
      return item.props.value;
    });

    // 排序
    arr.sort((a, b) => {
      return a.index - b.index;
    });

    // 分组
    const groupedData = this.arrange(arr);
    let tips;
    if (groupedData.length > 0) {
      tips = `Selected time period`;
    } else {
      tips = 'Drag the mouse to select time period';
    }

    let arr2 = [];
    let row = -2;
    for (let i = 0; i < 8 * 24; i++) {
      let data = {};

      // 生成小时框显示
      if (i < 24) {
        if (i < 10) {
          data.title = `0${i}:00`;
        } else {
          data.title = `${i}:00`;
        }
      }

      // aaa代表星期几， 从0开始， 0-星期一
      if (i % 24 === 0) {
        row++;
      }
      data.row = row;

      // 时间点 0-24
      data.column = i % 24;

      // 下标
      data.index = i;

      // 设置默认选中
      if (selectedItems.filter((j) => i === j.props.value.index).length > 0) {
        data.isSelected = true;
      }

      arr2.push(data);
    }

    this.setState(
      {
        items: arr2,
        groupedData,
        tips,
      },
      () => {
        this.renderSelectAll();
        this.generrateTimeObject();
      },
    );
  };

  // 给父组件传参，抹平index差异
  emit2ParentComponentObj = () => {};

  // 生成时间对象
  generrateTimeObject = () => {
    if (this.props.onSelectionFinish) {
      this.props.onSelectionFinish.call(this, cloneDeep(this.state.groupedData));
    }
  };

  // 生成每个时间段展示
  generateTime = (source) => {
    return source.map((item) => {
      return `${prefixNum(item[0].column)}:00 ~ ${prefixNum(
        item[item.length - 1].column,
      )}:00;\xa0\xa0`;
    });
  };

  generateItems = () => {
    let arr = [];
    let row = -2;
    let selectedItems = [];
    for (let i = 0; i < 8 * 24; i++) {
      let data = {};

      // 生成小时框显示
      if (i < 24) {
        if (i < 10) {
          data.title = `0${i}:00`;
        } else {
          data.title = `${i}:00`;
        }
      }

      // aaa代表星期几， 从0开始， 0-星期一
      if (i % 24 === 0) {
        row++;
      }
      data.row = row;

      // 时间点 0-24
      data.column = i % 24;

      // 下标
      data.index = i;

      // 设置默认选中
      if (this.props.defaultSelected && this.props.defaultSelected.includes(i - 24)) {
        data.isSelected = true;
        selectedItems.push({ props: { value: data } });
      }

      arr.push(data);
    }

    this.setState(
      {
        items: arr,
      },
      () => {
        this.renderSelectAll();
      },
    );
    // this.handleSelectionFinish(selectedItems);
  };

  componentDidMount() {
    this.generateItems();
  }

  renderSelectAll() {
    const { items } = this.state;
    const arr = [],
      selectAll = [];
    items.forEach((item) => {
      if (item.isSelected) {
        arr.push(item.column);
      }
    });
    // 计算全选按钮默认状态
    for (let i = 0; i < 24; i++) {
      if (arr.filter((j) => j === i).length === 7) {
        selectAll.push(i);
      }
    }
    this.setState({
      selectAll,
    });
  }

  selectAllBtn = (index) => {
    const { items, selectAll } = this.state;
    const newSelectAll = cloneDeep(selectAll);
    let newItems = [];
    if (selectAll.indexOf(index) === -1) {
      newSelectAll.push(index);
      newItems = items.map((i) => {
        if (i.row === -1) return i;
        if (newSelectAll.indexOf(i.column) !== -1) {
          return { ...i, isSelected: true };
        } else {
          return i;
        }
      });
    } else {
      newSelectAll.splice(newSelectAll.indexOf(index), 1);
      newItems = items.map((i) => {
        if (i.row === -1) return i;
        if (i.column === index) {
          delete i.isSelected;
          return i;
        } else {
          return i;
        }
      });
    }
    this.setState(
      {
        items: null,
      },
      () => {
        this.setState(
          {
            items: newItems,
            selectAll: newSelectAll,
          },
          () => {
            // 通过ref拿到组件中选择的元素
            this.handleSelectionFinish(Array.from(this.dom.selectedItems));
          },
        );
      },
    );
  };

  // 拖选测试
  dragSelect({ type }, index) {
    if (type === 'mousedown') {
      this.startIndex = index;
    } else {
      this.endIndex = index;
    }
    if (this.startIndex && this.endIndex) {
      const { selectAll } = this.state;
      const indexArr = [];
      if (selectAll.indexOf(this.startIndex) !== -1) {
        for (let i = this.startIndex; i <= this.endIndex; i++) {
          console.log(i);
        }
      } else {
        for (let i = this.startIndex; i <= this.endIndex; i++) {
          indexArr.push(i);
        }
        console.log(uniq([...indexArr, ...this.state.selectAll]));
        this.setState(
          {
            selectAll: uniq([...indexArr, ...this.state.selectAll]),
          },
          () => {
            this.selectAllBtn(99);
          },
        );
      }

      this.startIndex = null;
      this.endIndex = null;
    }
  }

  render() {
    return (
      this.state?.items?.length > 0 && (
        <div>
          {/* <div className="time-period-selector-title-wrapper">
          <span className="time-period-selector-title">00:00-12:00</span>
          <span className="time-period-selector-title">12:00-24:00</span>
        </div> */}
          <SelectableGroup
            ref={(c) => (this.dom = c)}
            enableDeselect
            tolerance={this.state.tolerance}
            globalMouse={this.state.isGlobal}
            allowClickWithoutSelected={true}
            duringSelection={this.handleSelecting}
            onSelectionClear={this.handleSelectionClear}
            onSelectionFinish={this.handleSelectionFinish}
            ignoreList={['.not-selectable']}
          >
            <List items={this.state.items} ref={this.listHook} tips={this.state.tips} />
          </SelectableGroup>
          <div className="selectItemAllBox">
            <div className="selectItemAllText">每天</div>
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
            ].map((i) => (
              <div
                onClick={() => {
                  this.selectAllBtn(i);
                }}
                className={[
                  'selectItemAllBtn',
                  this.state.selectAll.indexOf(i) !== -1 ? 'selectItemAllBtnActive' : null,
                ].join(' ')}
                key={i}
              />
            ))}
          </div>
          <div className="timeSelectIndicator">
            <span />
            选中项
          </div>
        </div>
      )
    );
  }
}
