import { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Fab, Grid } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import { setTypeEditMoneyDialog, showEditMoneyDialog } from 'store/reducers/money';

import { useStyles } from './MoneyFabs.styles';

const MoneyFabs: FC = () => {
  const { container, income } = useStyles();

  const dispatch = useDispatch();

  const handleAddMoneyControl = (event: MouseEvent<HTMLElement>) => {
    dispatch(setTypeEditMoneyDialog(event.currentTarget.dataset.fab));
    dispatch(showEditMoneyDialog());
  };

  return (
    <Box className={container}>
      <Box textAlign="center" marginBottom="2rem">
        <Grid container>
          <Grid item xs={4}>
            <Fab data-fab="home" color="primary" onClick={handleAddMoneyControl}>
              <HomeIcon />
            </Fab>
          </Grid>
          <Grid item xs={4}>
            <Fab data-fab="food" color="primary" onClick={handleAddMoneyControl}>
              <RestaurantIcon />
            </Fab>
          </Grid>
          <Grid item xs={4}>
            <Fab data-fab="wife" color="primary" onClick={handleAddMoneyControl}>
              <FavoriteIcon />
            </Fab>
          </Grid>
        </Grid>
      </Box>
      <Box textAlign="center" marginBottom="2rem">
        <Grid container>
          <Grid item xs={4}>
            <Fab data-fab="medicine" color="primary" onClick={handleAddMoneyControl}>
              <EnhancedEncryptionIcon />
            </Fab>
          </Grid>
          <Grid item xs={4}>
            <Fab data-fab="salary" className={income} color="primary" onClick={handleAddMoneyControl}>
              <AttachMoneyIcon />
            </Fab>
          </Grid>
          <Grid item xs={4}>
            <Fab data-fab="child" color="primary" onClick={handleAddMoneyControl}>
              <EmojiEmotionsIcon />
            </Fab>
          </Grid>
        </Grid>
      </Box>
      <Box textAlign="center" marginBottom="2rem">
        <Grid container>
          <Grid item xs={4}>
            <Fab data-fab="car" color="primary" onClick={handleAddMoneyControl}>
              <DirectionsCarIcon />
            </Fab>
          </Grid>
          <Grid item xs={4}>
            <Fab data-fab="pleasure" color="primary" onClick={handleAddMoneyControl}>
              <SportsEsportsIcon />
            </Fab>
          </Grid>
          <Grid item xs={4}>
            <Fab data-fab="other" color="primary" onClick={handleAddMoneyControl}>
              ...
            </Fab>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export { MoneyFabs };
