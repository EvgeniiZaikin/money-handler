import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import clsx from 'clsx';

import { Box } from '@material-ui/core';

import { getStatisticData } from 'store/reducers/statistic';
import { getIsShowingProgress, getStatisticList } from 'store/reducers/statistic/selectors';

import { StatisticCard } from './StatisticCard';
import { CircularProgressWithLabel } from './CircularProgressWithLabel';
import { useStyles } from './StatisticList.styles';

const StatisticList: FC = () => {
  const { container, lastWrapper, wrapper } = useStyles();
  const dispatch = useDispatch();

  const showProgress = useSelector(getIsShowingProgress);
  const list = useSelector(getStatisticList);

  useEffect(() => {
    dispatch(getStatisticData());
  }, [dispatch]);

  return (
    <Box className={container}>
      {showProgress ? (
        <CircularProgressWithLabel />
      ) : (
        <>
          {list.map((item, index) => {
            const classes = clsx(wrapper, { [lastWrapper]: index === list.length - 1 });

            return (
              <Box className={classes} key={uniqid()} marginBottom="2rem">
                <StatisticCard title={item.label} sum={item.sum} image={item.image} expenses={item.expenses} />
              </Box>
            );
          })}
        </>
      )}
    </Box>
  );
};

export { StatisticList };
