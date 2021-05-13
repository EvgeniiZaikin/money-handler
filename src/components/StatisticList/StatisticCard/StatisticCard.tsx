import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getIncome } from 'store/reducers/header/selectors';

import { useStyles } from './StatisticCard.styles';
import { IStatisticCardProps } from './types';

const StatisticCard: FC<IStatisticCardProps> = ({ title, sum, image }) => {
  const { root, media, expand, expandOpen, anxiety, attention, bad } = useStyles();
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
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph align="right">
            **.**.**** : *** ₽
          </Typography>
          <Typography paragraph align="right">
            **.**.**** : *** ₽
          </Typography>
          <Typography paragraph align="right">
            **.**.**** : *** ₽
          </Typography>
          <Typography paragraph align="right">
            **.**.**** : *** ₽
          </Typography>
          <Typography paragraph align="right">
            **.**.**** : *** ₽
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export { StatisticCard };
