import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import clsx from 'clsx';

import { AppBar, Box, CircularProgress, IconButton, Toolbar, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';

import { logout } from 'store/reducers/auth';
import { getSum } from 'store/reducers/header';
import { getActualExpensesSum, getIncome, getIsSalary, getLoadingStatus } from 'store/reducers/header/selectors';
import { showEditDialog } from 'store/reducers/incomes';

import { useStyles } from './Header.styles';

const Header: FC = () => {
  const { header, info, progress, progressContainer, anxiety, attention, bad } = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSum());
  }, [dispatch]);

  const expensesSum: number = useSelector(getActualExpensesSum);
  const income: number = useSelector(getIncome);
  const isLoading: boolean = useSelector(getLoadingStatus);
  const isSalary: boolean = useSelector(getIsSalary);

  const handleExit = () => {
    dispatch(logout());
    Router.push('/');
  };

  const handleAddIncome = () => {
    dispatch(showEditDialog());
  };

  const procent: number = (expensesSum / income) * 100;
  const value: string = `${procent.toFixed(2)}%${isSalary ? ' (?)' : ''}`;
  const classes = clsx({
    [anxiety]: procent > 50,
    [attention]: procent > 80,
    [bad]: procent > 100,
  });

  return (
    <AppBar position="static" className={header}>
      <Toolbar>
        {isLoading ? (
          <Box className={progressContainer}>
            <CircularProgress size={24} color="secondary" className={progress} />
          </Box>
        ) : (
          <Box className={info}>
            <Typography variant="h6" className={classes}>
              {value}
            </Typography>
          </Box>
        )}
        <IconButton onClick={handleExit} color="inherit">
          <ExitToAppIcon />
        </IconButton>
        <IconButton onClick={handleAddIncome} color="inherit">
          <AddIcon />
        </IconButton>
        <IconButton onClick={() => {}} color="inherit">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
