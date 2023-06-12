import Picker from '@emoji-mart/react';
import cs from 'classnames';
import React, { CSSProperties, useRef, useState } from 'react';
import Icon from './icon';
import './index.less';

type Props = {
  /**
   * @description 文本框值
   * @default undefined
   */
  value?: string;
  /**
   * @description 选择表情事件
   * @default undefined
   */
  onChange?: (event: any) => void;
  /**
   * @description 子元素，应该是一个可输入的元素例如input
   * @default undefined
   */
  children: React.ReactElement;
  /**
   * @description 表情类型
   * @default native
   */
  set?: 'native' | 'apple' | 'facebook' | 'google' | 'twitter';
  /**
   * @description 触发表情的icon
   * @default Icon
   */
  icon?: React.ReactElement;
  /**
   * @description 表情icon的类名
   * @default undefined
   */
  iconClassName?: string;
  /**
   * @description 表情icon的样式
   * @default undefined
   */
  iconStyle?: CSSProperties;
};

function Emoji(props: Props) {
  const {
    set = 'native',
    children,
    iconClassName,
    iconStyle,
    value,
    onChange,
    icon,
  } = props;

  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<any>();

  const onEmojiSelect = (emojiObj: { native: string }) => {
    try {
      if (ref.current && onChange) {
        const emoji = emojiObj?.native || '';
        const element = ref.current;
        const start = element.selectionStart || 0;
        onChange({
          target: {
            value: value
              ? value.slice(0, start) + emoji + value.slice(start)
              : emoji,
          },
        });

        // 设置光标位置
        setTimeout(() => {
          element.setSelectionRange(start + emoji.length, start + emoji.length);
          ref.current?.focus();
        }, 100);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const newChildren = React.cloneElement(children, {
    ref: ref,
    value: value,
    onChange: onChange,
  });

  return (
    <div className={'react-strange-emoji-wrapper'}>
      {newChildren}
      <div className={'react-strange-emoji-wrapper-modal'}>
        <span
          style={iconStyle}
          className={cs('react-strange-emoji-wrapper-icon', iconClassName)}
          onMouseEnter={() => setShow(true)}
        >
          {icon || <Icon />}
        </span>
        {show && (
          <div
            className={'react-strange-emoji-wrapper-popup'}
            onMouseLeave={() => setShow(false)}
          >
            <Picker
              noCountryFlags
              locale="zh"
              data={require(`@emoji-mart/data/sets/14/${set}.json`)}
              onEmojiSelect={onEmojiSelect}
              set={set}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Emoji;
