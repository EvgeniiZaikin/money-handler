import { FC } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'next/router';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AddIcon from '@material-ui/icons/Add';
import TimelineIcon from '@material-ui/icons/Timeline';

import { getSelectedFooterIndex } from 'store/reducers/footer/selectors';
import { IFooterProps } from './types';
import { useStyles } from './Footer.styles';

const Footer: FC<IFooterProps> = ({ router }) => {
  const { footer } = useStyles();
  const selectedItem = useSelector(getSelectedFooterIndex);

  return (
    <BottomNavigation value={selectedItem} showLabels className={footer}>
      <BottomNavigationAction label="контроль" icon={<AddIcon />} onClick={() => router.push('/control')} />
      <BottomNavigationAction label="статистика" icon={<EqualizerIcon />} onClick={() => router.push('/statistic')} />
      <BottomNavigationAction label="динамика" icon={<TimelineIcon />} onClick={() => router.push('/dynamic')} />
    </BottomNavigation>
  );
};

export default withRouter(Footer);
