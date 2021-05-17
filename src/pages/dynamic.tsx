import { useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import { connect, useDispatch, useSelector } from 'react-redux';

import { LineChart } from 'components/LineChart';
import { PieChart } from 'components/PieChart';
import { setSelectedItemIndex } from 'store/reducers/footer';
import { isBrowser } from 'utils/functions';
import { TReducersState } from 'utils/types';
import { getDynamicData } from 'store/reducers/dynamic';
import { CircularProgressWithLabel } from 'components/CircularProgressWithLabel';
import {
  getIsLoading,
  getProgressValue,
  getExplanation,
  getPieChartData,
  getExpensesPercent,
  getLineChartData,
} from 'store/reducers/dynamic/selectors';

const DynamicPage: NextPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const progressValue = useSelector(getProgressValue);
  const explanation = useSelector(getExplanation);
  const pieChartData = useSelector(getPieChartData);
  const expensesPercent = useSelector(getExpensesPercent);
  const lineChartData = useSelector(getLineChartData);

  useEffect(() => {
    dispatch(getDynamicData());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Money Handler - динамика</title>
      </Head>
      {isLoading ? (
        <CircularProgressWithLabel value={progressValue} label={explanation} />
      ) : (
        <>
          <PieChart data={pieChartData} expensesPercent={expensesPercent} />
          <LineChart data={lineChartData} />
        </>
      )}
    </>
  );
};

DynamicPage.getInitialProps = async ({ res, store }: NextPageContext<TReducersState>) => {
  if (!isBrowser() && !store.getState().auth.userIsAuth && res) {
    res.writeHead(302, { Location: '/' });
    res.end();
  }

  store.dispatch(setSelectedItemIndex(2));

  return {};
};

export default connect()(DynamicPage);
