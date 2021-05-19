import React from 'react';
import { shallow } from 'enzyme';

import { Spacer } from 'components/AppLayout/Spacer';

describe('Spacer component', () => {
  it('Right render Spacer component', function () {
    const component = shallow(<Spacer />);
    expect(component).toBeTruthy();
  });
});
