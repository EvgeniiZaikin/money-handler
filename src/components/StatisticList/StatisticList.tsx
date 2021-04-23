import { FC } from 'react';

import { Box } from '@material-ui/core';

import { StatisticCard } from './StatisticCard';

import { useStyles } from './StatisticList.styles';

const StatisticList: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
    </Box>
  );
};

export { StatisticList };
