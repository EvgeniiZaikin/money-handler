import { FC, useState } from 'react';
import clsx from 'clsx';

import {
  Avatar,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useStyles } from './StatisticCard.styles';

const StatisticCard: FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>R</Avatar>}
        title="Расходы: коммунальные платежи"
        subheader="34,000 ₽ / 18% от  дохода"
      />
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
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
