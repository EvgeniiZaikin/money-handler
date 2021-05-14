import { FC } from 'react';

import { Typography } from '@material-ui/core';
import { Chart, Legend, PieSeries } from '@devexpress/dx-react-chart-material-ui';
import { Animation, Palette } from '@devexpress/dx-react-chart';
import { schemeSet2 } from 'd3-scale-chromatic';

import { useStyles } from './PieChart.styles';

const fakeData = [
  { country: 'Доходы', area: 12 },
  { country: 'Расходы', area: 7 },
];

const PieChart: FC = () => {
  const { item, label, root, title } = useStyles();

  const Root = (props) => <Legend.Root className={root} {...props} />;
  const Item = (props) => <Legend.Item className={item} {...props} />;

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
      <Chart data={fakeData} height={415}>
        <Palette scheme={schemeSet2} />
        <PieSeries valueField="area" argumentField="country" />
        <Legend position="bottom" rootComponent={Root} itemComponent={Item} />
        <Animation />
      </Chart>
    </>
  );
};

export { PieChart };
