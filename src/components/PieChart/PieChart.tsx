import { FC } from 'react';

import { Typography } from '@material-ui/core';
import { Chart, Legend, PieSeries } from '@devexpress/dx-react-chart-material-ui';
import { Animation, Palette } from '@devexpress/dx-react-chart';
import { schemeSet2 } from 'd3-scale-chromatic';

import { IPieChartProps } from './types';
import { useStyles } from './PieChart.styles';

const PieChart: FC<IPieChartProps> = ({ data }) => {
  const { item, label, root, title } = useStyles();

  const Root = (props: Legend.RootProps) => <Legend.Root className={root} {...props} />;
  const Item = (props: Legend.ItemProps) => <Legend.Item className={item} {...props} />;

  return (
    <>
      <Typography className={title}>
        соотношение
        <br />
        доходов и расходов
        <br />в 2021 году
      </Typography>
      <Typography className={label} paragraph variant="caption">
        расходы составляют 23,5% от доходов
      </Typography>
      <Chart data={data} height={415}>
        <Palette scheme={schemeSet2} />
        <PieSeries valueField="area" argumentField="country" />
        <Legend position="bottom" rootComponent={Root} itemComponent={Item} />
        <Animation />
      </Chart>
    </>
  );
};

export { PieChart };
