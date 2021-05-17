import { CircularProgressProps } from '@material-ui/core';

export interface ICircularProgressWithLabelProps extends CircularProgressProps {
  value: number;
  label: string;
}
