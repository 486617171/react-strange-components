import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Demo from './index';

describe('<Demo />', () => {
  it('render Demo with dumi', () => {
    const msg = 'dumi';

    render(<Demo title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
