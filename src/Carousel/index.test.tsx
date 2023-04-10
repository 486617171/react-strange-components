import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Demo from './index';

describe('<Demo />', () => {
  it('render Demo with dumi', () => {
    const msg = 'dumi';
    const des = 'description';
    render(<Demo title={msg} des={des} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
