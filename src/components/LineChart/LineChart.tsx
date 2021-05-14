import { FC } from 'react';

import { Box, Typography } from '@material-ui/core';
import { Chart, ArgumentAxis, ValueAxis, LineSeries, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation, Palette } from '@devexpress/dx-react-chart';
import { schemeSet2 } from 'd3-scale-chromatic';

import { confidence as chartData } from './fakeData';
import { useStyles } from './LineChart.styles';

const LineChart: FC = () => {
  const { container, root, item, title } = useStyles();

  const format = () => (tick) => tick;

  const Item = (props) => <Legend.Item className={item} {...props} />;
  const Root = (props) => <Legend.Root className={root} {...props} />;

  return (
    <Box className={container}>
      <Typography className={title}>доходы и расходы по месяцам</Typography>
      <Chart data={chartData}>
        <ArgumentAxis tickFormat={format} />
        <ValueAxis labelComponent={(props) => <ValueAxis.Label {...props} text={`${props.text}т₽`} />} />
        <Palette scheme={schemeSet2} />
        <LineSeries name="Доходы" valueField="income" argumentField="month" />
        <LineSeries name="Расходы" valueField="expenses" argumentField="month" />
        <Legend position="bottom" rootComponent={Root} itemComponent={Item} />
        <Animation />
      </Chart>
    </Box>
  );
};

export { LineChart };
