import { FC } from 'react';

import { Box } from '@material-ui/core';
import { Chart, ArgumentAxis, ValueAxis, LineSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import { confidence as chartData } from './fakeData';
import { useStyles } from './LineChart.styles';

const LineChart: FC = () => {
  const { chart, container, root, item } = useStyles();

  const format = () => (tick) => tick;

  const Item = (props) => <Legend.Item className={item} {...props} />;
  const Root = (props) => <Legend.Root className={root} {...props} />;
  const Label = ({ text, ...props }) => <ValueAxis.Label {...props} text={`${text}т₽`} />;

  return (
    <Box className={container}>
      <Chart data={chartData} className={chart}>
        <ArgumentAxis tickFormat={format} />
        <ValueAxis labelComponent={Label} />
        <LineSeries name="Расходы" valueField="income" argumentField="month" />
        <LineSeries name="Доходы" valueField="expenses" argumentField="month" />
        <Legend position="bottom" rootComponent={Root} itemComponent={Item} />
        <Title.Text text="доходы и расходы" />
        <Animation />
      </Chart>
    </Box>
  );
};

export { LineChart };
