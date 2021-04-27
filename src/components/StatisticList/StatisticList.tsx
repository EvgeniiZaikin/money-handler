import { FC } from 'react';

import { Box } from '@material-ui/core';

import { StatisticCard } from './StatisticCard';

import { useStyles } from './StatisticList.styles';

const StatisticList: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box marginBottom="2rem">
        <StatisticCard />
      </Box>
      <Box marginBottom="2rem">
        <StatisticCard />
      </Box>
      <StatisticCard />
    </Box>
  );
};

export { StatisticList };
