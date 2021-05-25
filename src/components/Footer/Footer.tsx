import { FC } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TimelineIcon from '@material-ui/icons/Timeline';

import { getSelectedFooterIndex } from 'store/reducers/footer/selectors';
import { PAGES, ROUTES } from 'constants/pages';

import { useStyles } from './Footer.styles';

const Footer: FC = () => {
  const { footer } = useStyles();
  const selectedItem = useSelector(getSelectedFooterIndex);

  return (
    <BottomNavigation value={selectedItem} showLabels className={footer}>
      <BottomNavigationAction
        label={PAGES.EXPENSES}
        icon={<AddShoppingCartIcon />}
        onClick={() => Router.push(ROUTES.EXPENSES)}
      />
      <BottomNavigationAction
        label={PAGES.STATISTIC}
        icon={<EqualizerIcon />}
        onClick={() => Router.push(ROUTES.STATISTIC)}
      />
      <BottomNavigationAction
        label={PAGES.DYNAMIC}
        icon={<TimelineIcon />}
        onClick={() => Router.push(ROUTES.DYNAMIC)}
      />
    </BottomNavigation>
  );
};

export { Footer };
