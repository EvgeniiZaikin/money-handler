import React from 'react';
import { shallow } from 'enzyme';

import { AppLayout } from 'components/AppLayout/AppLayout';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
  Provider: ({ children }) => children,
}));
import * as reactRedux from 'react-redux';

const generateComponent = () =>
  shallow(
    <AppLayout>
      <h1>Test!</h1>
    </AppLayout>
  );

describe('AppLayout component', () => {
  describe('Render AppLayout when user is not auth', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

    beforeEach(() => {
      useSelectorMock.mockClear();
    });

    it('AppLayout component has 2 Spacer components', () => {
      useSelectorMock.mockReturnValue(false);
      const component = generateComponent();
      expect(component.find('Spacer')).toHaveLength(2);
    });

    it('AppLayout component has not Header component', () => {
      useSelectorMock.mockReturnValue(false);
      const component = generateComponent();
      expect(component.find('Header')).toHaveLength(0);
    });

    it('AppLayout component has not Footer component', () => {
      useSelectorMock.mockReturnValue(false);
      const component = generateComponent();
      expect(component.find('Footer')).toHaveLength(0);
    });
  });

  describe('Render AppLayout when user is auth', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

    beforeEach(() => {
      useSelectorMock.mockClear();
    });

    it('AppLayout component has not Spacer components', () => {
      useSelectorMock.mockReturnValue(true);
      const component = generateComponent();
      expect(component.find('Spacer')).toHaveLength(0);
    });

    it('AppLayout component has Header component', () => {
      useSelectorMock.mockReturnValue(true);
      const component = generateComponent();
      expect(component.find('Header')).toHaveLength(1);
    });

    it('AppLayout component has Footer component', () => {
      useSelectorMock.mockReturnValue(true);
      const component = generateComponent();
      expect(component.find('Footer')).toHaveLength(1);
    });
  });
});
