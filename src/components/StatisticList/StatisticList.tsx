import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import { getStatisticData } from 'store/reducers/statistic';
import { getIsShowingProgress } from 'store/reducers/statistic/selectors';

import { StatisticCard } from './StatisticCard';
import { CircularProgressWithLabel } from './CircularProgressWithLabel';
import { useStyles } from './StatisticList.styles';

const StatisticList: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const showProgress: boolean = useSelector(getIsShowingProgress);

  useEffect(() => {
    dispatch(getStatisticData());
  }, [dispatch]);

  return (
    <Box className={classes.container}>
      {showProgress ? (
        <CircularProgressWithLabel />
      ) : (
        <>
          <Box marginBottom="2rem">
            <StatisticCard />
          </Box>
          <Box marginBottom="2rem">
            <StatisticCard />
          </Box>
          <StatisticCard />
        </>
      )}
    </Box>
  );
};

export { StatisticList };
