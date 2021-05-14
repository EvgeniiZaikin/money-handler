import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { yellow, orange, common } from '@material-ui/core/colors';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        margin: '0 auto',
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      anxiety: {
        backgroundColor: yellow[500],
        color: common.black,
      },
      attention: {
        backgroundColor: orange[500],
        color: common.white,
      },
      bad: {
        backgroundColor: common.black,
        color: common.white,
      },
      counter: {
        marginLeft: '10px',
      },
    }),
  { name: 'StatisticCard' }
);

export { useStyles };
