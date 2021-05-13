import { FC } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AddIcon from '@material-ui/icons/Add';
import TimelineIcon from '@material-ui/icons/Timeline';

import { getSelectedFooterIndex } from 'store/reducers/footer/selectors';
import { useStyles } from './Footer.styles';

const Footer: FC = () => {
  const { footer } = useStyles();
  const selectedItem = useSelector(getSelectedFooterIndex);

  return (
    <BottomNavigation value={selectedItem} showLabels className={footer}>
      <BottomNavigationAction label="контроль" icon={<AddIcon />} onClick={() => Router.push('/control')} />
      <BottomNavigationAction label="статистика" icon={<EqualizerIcon />} onClick={() => Router.push('/statistic')} />
      <BottomNavigationAction label="динамика" icon={<TimelineIcon />} onClick={() => Router.push('/dynamic')} />
    </BottomNavigation>
  );
};

export { Footer };
