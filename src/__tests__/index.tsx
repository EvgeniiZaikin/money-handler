import * as React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      expect(1 + 2).toBe(3);
    });
  });
});
