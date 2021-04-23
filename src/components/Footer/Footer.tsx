import { FC, useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import { useStyles } from './Footer.styles';

const Footer: FC = () => {
  const [value, setValue] = useState(0);
  const { footer, item } = useStyles();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={footer}
    >
      <BottomNavigationAction className={item} label="демо" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

export { Footer };
