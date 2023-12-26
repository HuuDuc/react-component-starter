import * as React from 'react';
import { render } from '@testing-library/react';

import { MyCounter } from '../src';

describe('Common render', () => {
  test('renders without crashing', () => {
    render(<MyCounter />);
  });
});
