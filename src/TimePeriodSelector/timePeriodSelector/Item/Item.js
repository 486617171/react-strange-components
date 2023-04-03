import React from 'react';
import { createSelectable } from 'react-selectable-fast';
import cs from 'classnames';

function Item(props) {
  const { selectableRef, isSelected, isSelecting } = props;

  return (
    <div
      className={cs('time-period-selector-item', {
        selected: isSelected,
        selecting: isSelecting,
        'not-selectable': props.title,
      })}
      ref={selectableRef}
    >
      {props.title}
    </div>
  );
}

export default createSelectable(Item);
