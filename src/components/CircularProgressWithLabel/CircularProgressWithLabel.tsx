import { FC } from 'react';

import { Box, CircularProgress, Typography } from '@material-ui/core';

import { ICircularProgressWithLabelProps } from './types';
import { useStyles } from './CircularProgressWithLabel.styles';

const CircularProgressWithLabel: FC<ICircularProgressWithLabelProps> = (props) => {
  const { block, container, explanation, percent, progress } = useStyles();
  const { value, label } = props;

  return (
    <Box className={block}>
      <Box className={container}>
        <CircularProgress className={progress} variant="determinate" {...props} value={value} />
        <Box className={percent}>
          <Typography variant="caption" component="div" color="textPrimary">{`${value}%`}</Typography>
        </Box>
      </Box>
      <Typography className={explanation} variant="caption" component="div" color="textPrimary">
        {label}
      </Typography>
    </Box>
  );
};

export { CircularProgressWithLabel };
