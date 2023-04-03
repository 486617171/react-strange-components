/* eslint-disable @typescript-eslint/no-invalid-this */
import React, { Component } from 'react';
import Item from '../Item/Item';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: '',
    };
  }

  generateDay = () => {
    const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    return days.map((day) => {
      return (
        <div key={day} className="time-period-selector-day">
          {day}
        </div>
      );
    });
  };

  setTips = (tips) => {
    this.setState({
      tips,
    });
  };

  render() {
    return (
      <>
        <div className="time-period-selector-day-wrapper">{this.generateDay()}</div>
        <div className="time-period-selector-wrapper">
          {this.props.items.map((item, i) => (
            <Item key={i} title={item.title} value={item} isSelected={item.isSelected} />
          ))}
        </div>
        {/* <div className="time-period-selector-button-wrapper">
          <span className="time-period-selector-tips">{this.props.tips}</span>
          <DeselectAll className="time-period-selector-button">
            <button>Clear</button>
          </DeselectAll>
        </div> */}
      </>
    );
  }
}
