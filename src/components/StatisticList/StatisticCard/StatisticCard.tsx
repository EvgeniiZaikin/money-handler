import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import plural from 'plural-ru';
import uniqid from 'uniqid';

import {
  Avatar,
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getIncome } from 'store/reducers/header/selectors';

import { useStyles } from './StatisticCard.styles';
import { IStatisticCardProps } from './types';

const StatisticCard: FC<IStatisticCardProps> = ({ title, sum, image, expenses }) => {
  const { root, media, expand, expandOpen, anxiety, attention, bad, counter, expenseSum, actions } = useStyles();
  const [expanded, setExpanded] = useState(false);
  const income = useSelector(getIncome);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const percent = ((sum / income) * 100).toFixed(2);
  const classes = clsx({
    [anxiety]: +percent > 20,
    [attention]: +percent > 50,
    [bad]: +percent > 80,
  });

  return (
    <Card className={root}>
      <CardHeader
        avatar={<Avatar className={classes}>{title[0]}</Avatar>}
        title={title}
        subheader={`${sum}₽ / ${percent}% от дохода`}
      />
      <CardMedia className={media} image={image} title={title} />
      <CardActions disableSpacing className={actions}>
        <Typography variant="caption" className={counter}>
          {expenses.length} {plural(expenses.length, 'операция', 'операции', 'операций')}
        </Typography>
        {expenses.length ? (
          <IconButton
            className={clsx(expand, {
              [expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        ) : null}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {expenses.map((expense) => (
            <Typography key={uniqid()} component="div" align="right">
              <Typography variant="caption">
                {expense.date.toLocaleString('ru', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                :
              </Typography>
              <Typography className={expenseSum}>{expense.sum}₽</Typography>
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export { StatisticCard };
