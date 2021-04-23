import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AddIcon from '@material-ui/icons/Add';

import { getIsAuth } from 'store/reducers/user/selectors';

import { useStyles } from './Footer.styles';

const Footer: FC = () => {
  const [value, setValue] = useState(0);
  const { footer } = useStyles();

  const userIsAuth: boolean = useSelector(getIsAuth);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={footer}
    >
      <BottomNavigationAction label="демо" icon={<PersonIcon />} disabled={userIsAuth} />
      <BottomNavigationAction label="контроль" icon={<AddIcon />} disabled={!userIsAuth} />
      <BottomNavigationAction label="статистика" icon={<EqualizerIcon />} disabled={!userIsAuth} />
    </BottomNavigation>
  );
};

export { Footer };
