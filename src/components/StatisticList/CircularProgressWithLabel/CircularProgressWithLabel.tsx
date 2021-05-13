import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Box, CircularProgress, CircularProgressProps, Typography } from '@material-ui/core';

import { getExplanation, getLoadingProgress } from 'store/reducers/statistic/selectors';

import { useStyles } from './CircularProgressWithLabel.styles';

const CircularProgressWithLabel: FC<CircularProgressProps> = (props) => {
  const { container, explanation, percent, progress } = useStyles();
  const value: number = useSelector(getLoadingProgress);
  const label: string = useSelector(getExplanation);

  return (
    <>
      <Box className={container}>
        <CircularProgress className={progress} variant="determinate" {...props} value={value} />
        <Box className={percent}>
          <Typography variant="caption" component="div" color="textPrimary">{`${value}%`}</Typography>
        </Box>
      </Box>
      <Typography className={explanation} variant="caption" component="div" color="textPrimary">
        {label}
      </Typography>
    </>
  );
};

export { CircularProgressWithLabel };
