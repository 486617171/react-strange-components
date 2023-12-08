import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import { generateClassName } from '../utils';
import './index.less';

type Props = {
  /**
   * @description 文本
   * @default undefined
   */
  children?: string;
  /**
   * @description 最多展示多少行
   * @default 2
   */
  maxRow?: number;
  /**
   * @description enable：是否启用展开收起功能；expand：自定义展开文本、事件；retract：自定义收起文本、事件；可以通过className、style修改展开按钮样式（建议不要修改文字大小）
   */
  actions?: {
    enable: boolean;
    className?: string;
    style?: CSSProperties;
    expand?: {
      text?: string;
      event?: () => void;
    };
    retract?: {
      text?: string;
      event?: () => void;
    };
  };
  /**
   * @description 自定义行高。由于行高涉及计算所以通过属性传入，字体颜色、大小可通过外层容器设置
   * * @default 1.5
   */
  lineHeight?: number;
};

// 这是一个demo
export default (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { children, maxRow, actions, lineHeight }: Props = {
    maxRow: 2,
    actions: {
      enable: true,
    },
    lineHeight: 1.5,
    ...props,
  };

  const getClassName = generateClassName('text-folding');

  const ID = useMemo(() => {
    // 存在唯一性不足的可能
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }, []);

  useLayoutEffect(() => {
    if (ref.current) {
      const element = ref.current;
      element.style.setProperty(
        '--height',
        `calc(100% - ${lineHeight - 0.05}em)`,
      );
    }
  }, [lineHeight]);

  return (
    <div className={getClassName('wrapper')}>
      <input
        id={ID}
        className={getClassName('controller')}
        type="checkbox"
        onChange={(e) => {
          const checked = e.target.checked;
          if (checked) {
            actions.expand?.event?.();
          } else {
            actions.retract?.event?.();
          }
        }}
      />
      <div
        ref={ref}
        className={getClassName('content')}
        style={{
          lineHeight,
          maxHeight: `${maxRow * lineHeight}em`,
        }}
      >
        <label
          className={`${getClassName('action')} ${actions.className || ''}`}
          style={actions.style}
          htmlFor={ID}
          data-expand={actions.expand?.text || '展开'}
          data-retract={actions.retract?.text || '收起'}
          onClick={(e) => {
            if (!actions.enable) {
              e.preventDefault();
              actions.expand?.event?.();
            }
          }}
        ></label>
        {children}
      </div>
    </div>
  );
};

// 编写组件后需要在 src/index.ts 中导出组件
